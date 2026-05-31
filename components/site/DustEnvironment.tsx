"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  z: number;
  r: number;
  vx: number;
  vy: number;
  alpha: number;
  phase: number;
  twinkle: number;
};

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function distanceToSegment(
  px: number,
  py: number,
  ax: number,
  ay: number,
  bx: number,
  by: number,
) {
  const dx = bx - ax;
  const dy = by - ay;
  const lengthSq = dx * dx + dy * dy || 1;
  const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / lengthSq));
  const cx = ax + t * dx;
  const cy = ay + t * dy;
  const distX = px - cx;
  const distY = py - cy;

  return {
    distance: Math.sqrt(distX * distX + distY * distY),
    progress: t,
  };
}

export function DustEnvironment() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const rawCtx = canvas.getContext("2d", { alpha: false });

    if (!rawCtx) {
      return;
    }

    const activeCanvas = canvas;
    const activeCtx = rawCtx;
    const grainCanvas = document.createElement("canvas");
    const grainSize = 180;
    grainCanvas.width = grainSize;
    grainCanvas.height = grainSize;
    const grainCtx = grainCanvas.getContext("2d");

    let width = 0;
    let height = 0;
    let dpr = 1;
    let animationFrame = 0;
    let frame = 0;
    let particles: Particle[] = [];

    function createParticle(): Particle {
      const z = Math.random();
      const stillness = Math.random() < 0.18;
      const size = randomBetween(0.22, 0.82) + z * randomBetween(0.25, 1.15);
      const speed = stillness ? 0.025 : randomBetween(0.045, 0.18) * (0.45 + z);

      return {
        x: randomBetween(-width * 0.08, width * 1.08),
        y: randomBetween(-height * 0.1, height * 1.1),
        z,
        r: size,
        vx: randomBetween(-0.08, 0.16) * speed,
        vy: -speed,
        alpha: randomBetween(0.025, 0.15) * (0.42 + z),
        phase: Math.random() * Math.PI * 2,
        twinkle: randomBetween(0.16, 0.72),
      };
    }

    function resetParticles() {
      const baseCount = width < 640 ? 150 : width < 1100 ? 220 : 310;
      const areaFactor = Math.min(1.12, Math.max(0.7, (width * height) / 1_300_000));
      const count = Math.floor(baseCount * areaFactor);
      particles = Array.from({ length: count }, createParticle);
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      activeCanvas.width = Math.floor(width * dpr);
      activeCanvas.height = Math.floor(height * dpr);
      activeCanvas.style.width = `${width}px`;
      activeCanvas.style.height = `${height}px`;
      activeCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      resetParticles();
    }

    function refreshGrain() {
      if (!grainCtx) {
        return;
      }

      const imageData = grainCtx.createImageData(grainSize, grainSize);
      const data = imageData.data;

      for (let index = 0; index < data.length; index += 4) {
        const value = Math.random() * 255;
        const alpha = Math.random() < 0.5 ? randomBetween(4, 13) : 0;
        data[index] = value;
        data[index + 1] = value;
        data[index + 2] = value;
        data[index + 3] = alpha;
      }

      grainCtx.putImageData(imageData, 0, 0);
    }

    function drawBackground(time: number) {
      activeCtx.globalCompositeOperation = "source-over";
      activeCtx.fillStyle = "#050607";
      activeCtx.fillRect(0, 0, width, height);

      const pulse = Math.sin(time * 0.00033);
      const drift = Math.sin(time * 0.00024);
      const centerX = width * (0.5 + drift * 0.035);
      const centerY = height * (0.5 + Math.cos(time * 0.00016) * 0.012);
      const sourceX = width * (0.33 + Math.sin(time * 0.00014) * 0.025);
      const sourceY = -height * 0.08;
      const beamWidth = width * (0.38 + pulse * 0.02);

      activeCtx.save();
      activeCtx.globalCompositeOperation = "lighter";
      activeCtx.globalAlpha = 0.18 + pulse * 0.04;
      activeCtx.beginPath();
      activeCtx.moveTo(sourceX - width * 0.05, sourceY);
      activeCtx.lineTo(sourceX + width * 0.28, sourceY);
      activeCtx.lineTo(centerX + beamWidth * 0.66, height * 1.08);
      activeCtx.lineTo(centerX - beamWidth * 0.58, height * 1.08);
      activeCtx.closePath();
      const shaft = activeCtx.createLinearGradient(sourceX, sourceY, centerX, height * 0.72);
      shaft.addColorStop(0, "rgba(222,232,238,0.06)");
      shaft.addColorStop(0.36, "rgba(129,164,196,0.09)");
      shaft.addColorStop(0.74, "rgba(75,109,142,0.045)");
      shaft.addColorStop(1, "rgba(75,109,142,0)");
      activeCtx.fillStyle = shaft;
      activeCtx.filter = "blur(42px)";
      activeCtx.fill();
      activeCtx.restore();

      activeCtx.save();
      activeCtx.globalCompositeOperation = "screen";
      activeCtx.globalAlpha = 0.42 + pulse * 0.06;
      activeCtx.translate(centerX, centerY);
      activeCtx.scale(1.85 + pulse * 0.04, 0.86 + pulse * 0.02);
      const core = activeCtx.createRadialGradient(0, 0, 0, 0, 0, Math.min(width, height) * 0.33);
      core.addColorStop(0, "rgba(224,234,240,0.11)");
      core.addColorStop(0.3, "rgba(112,153,190,0.12)");
      core.addColorStop(0.66, "rgba(79,120,168,0.05)");
      core.addColorStop(1, "rgba(79,120,168,0)");
      activeCtx.fillStyle = core;
      activeCtx.filter = "blur(48px)";
      activeCtx.beginPath();
      activeCtx.arc(0, 0, Math.min(width, height) * 0.38, 0, Math.PI * 2);
      activeCtx.fill();
      activeCtx.restore();

      return {
        centerX,
        centerY,
        sourceX,
        sourceY,
        beamWidth,
      };
    }

    function drawParticles(time: number, light: ReturnType<typeof drawBackground>) {
      activeCtx.save();
      activeCtx.globalCompositeOperation = "screen";

      for (const particle of particles) {
        const depthSpeed = 0.35 + particle.z * 1.45;
        particle.x += particle.vx * depthSpeed + Math.sin(time * 0.00045 + particle.phase) * 0.018;
        particle.y += particle.vy * depthSpeed + Math.cos(time * 0.00032 + particle.phase) * 0.012;

        if (particle.y < -24 || particle.x < -40 || particle.x > width + 40) {
          particle.x = randomBetween(-width * 0.08, width * 1.08);
          particle.y = height + randomBetween(12, height * 0.25);
        }

        const beam = distanceToSegment(
          particle.x,
          particle.y,
          light.sourceX,
          light.sourceY,
          light.centerX,
          height * 0.92,
        );
        const localBeamWidth = light.beamWidth * (0.24 + beam.progress * 0.78);
        const shaftInfluence = Math.exp(-Math.pow(beam.distance / localBeamWidth, 2.2));
        const dx = (particle.x - light.centerX) / (width * 0.34);
        const dy = (particle.y - light.centerY) / (height * 0.26);
        const coreInfluence = Math.exp(-(dx * dx + dy * dy));
        const lightInfluence = Math.min(1, shaftInfluence * 0.75 + coreInfluence * 0.9);
        const flicker = 0.72 + Math.sin(time * 0.001 * particle.twinkle + particle.phase) * 0.28;
        const alpha = particle.alpha * (0.18 + lightInfluence * 1.05) * flicker;

        if (alpha < 0.012) {
          continue;
        }

        const radius = particle.r * (0.48 + particle.z * 1.05);
        const blur = particle.z > 0.76 ? particle.z * 1.1 : particle.z > 0.5 ? 0.35 : 0;

        activeCtx.filter = blur ? `blur(${blur}px)` : "none";
        activeCtx.beginPath();
        activeCtx.fillStyle = `rgba(232, 226, 208, ${Math.min(alpha, 0.34)})`;
        activeCtx.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
        activeCtx.fill();
      }

      activeCtx.filter = "none";
      activeCtx.restore();
    }

    function drawVignette() {
      activeCtx.save();
      activeCtx.globalCompositeOperation = "source-over";
      const vignette = activeCtx.createRadialGradient(
        width * 0.5,
        height * 0.5,
        Math.min(width, height) * 0.18,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.72,
      );
      vignette.addColorStop(0, "rgba(0,0,0,0)");
      vignette.addColorStop(0.56, "rgba(0,0,0,0.18)");
      vignette.addColorStop(1, "rgba(0,0,0,0.74)");
      activeCtx.fillStyle = vignette;
      activeCtx.fillRect(0, 0, width, height);
      activeCtx.fillStyle = "rgba(0,0,0,0.1)";
      activeCtx.fillRect(0, 0, width, height);
      activeCtx.restore();
    }

    function drawGrain() {
      if (!grainCtx) {
        return;
      }

      if (frame % 5 === 0) {
        refreshGrain();
      }

      activeCtx.save();
      activeCtx.globalCompositeOperation = "overlay";
      activeCtx.globalAlpha = 0.045;
      const offset = (frame % grainSize) * -1;

      for (let x = offset; x < width; x += grainSize) {
        for (let y = offset; y < height; y += grainSize) {
          activeCtx.drawImage(grainCanvas, x, y);
        }
      }

      activeCtx.restore();
    }

    function render(time: number) {
      frame += 1;
      const light = drawBackground(time);
      drawParticles(time, light);
      drawVignette();
      drawGrain();
      animationFrame = window.requestAnimationFrame(render);
    }

    resize();
    refreshGrain();
    animationFrame = window.requestAnimationFrame(render);
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 z-0 h-full w-full"
    />
  );
}
