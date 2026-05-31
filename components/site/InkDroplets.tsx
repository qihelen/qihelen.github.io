import type { CSSProperties } from "react";

type InkDroplet = {
  blur: number;
  delay: number;
  driftX: number;
  driftY: number;
  duration: number;
  kind: "speck" | "dot" | "bloom" | "trail" | "wash" | "pool" | "drop" | "ring";
  left: number;
  opacity: number;
  rotate: number;
  size: number;
  stretch: number;
  top: number;
};

const droplets: InkDroplet[] = [
  { kind: "pool", left: 14, top: 55, size: 178, opacity: 0.54, blur: 2.8, duration: 26, delay: -6, driftX: 30, driftY: 20, rotate: -12, stretch: 1.18 },
  { kind: "pool", left: 78, top: 51, size: 190, opacity: 0.56, blur: 3, duration: 27, delay: -18, driftX: -34, driftY: 22, rotate: 10, stretch: 1.08 },
  { kind: "wash", left: 22, top: 50, size: 248, opacity: 0.38, blur: 3.8, duration: 30, delay: -8, driftX: 38, driftY: 16, rotate: -8, stretch: 1.28 },
  { kind: "wash", left: 50, top: 49, size: 186, opacity: 0.22, blur: 2.4, duration: 30, delay: -22, driftX: -26, driftY: 34, rotate: 6, stretch: 1.14 },
  { kind: "wash", left: 67, top: 56, size: 228, opacity: 0.3, blur: 2.1, duration: 27, delay: -14, driftX: 34, driftY: -22, rotate: 16, stretch: 1.22 },
  { kind: "bloom", left: 7, top: 14, size: 138, opacity: 0.28, blur: 2.4, duration: 27, delay: -11, driftX: 28, driftY: 34, rotate: 18, stretch: 1.1 },
  { kind: "bloom", left: 91, top: 17, size: 154, opacity: 0.29, blur: 2.5, duration: 26, delay: -20, driftX: -34, driftY: 36, rotate: -16, stretch: 1.18 },
  { kind: "wash", left: 9, top: 88, size: 180, opacity: 0.24, blur: 2.4, duration: 29, delay: -5, driftX: 48, driftY: -40, rotate: 11, stretch: 1.28 },
  { kind: "wash", left: 88, top: 88, size: 186, opacity: 0.25, blur: 2.5, duration: 31, delay: -16, driftX: -52, driftY: -38, rotate: -13, stretch: 1.2 },
  { kind: "speck", left: 6, top: 18, size: 4, opacity: 0.44, blur: 0.1, duration: 12, delay: -4, driftX: 42, driftY: 28, rotate: 18, stretch: 1 },
  { kind: "drop", left: 11, top: 38, size: 12, opacity: 0.58, blur: 0.18, duration: 15, delay: -10, driftX: 24, driftY: 54, rotate: -10, stretch: 1.48 },
  { kind: "bloom", left: 16, top: 72, size: 82, opacity: 0.36, blur: 1.5, duration: 22, delay: -18, driftX: -28, driftY: 40, rotate: 7, stretch: 1.08 },
  { kind: "trail", left: 19, top: 54, size: 48, opacity: 0.3, blur: 0.7, duration: 21, delay: -7, driftX: 72, driftY: 18, rotate: -4, stretch: 1 },
  { kind: "speck", left: 23, top: 24, size: 5, opacity: 0.42, blur: 0.12, duration: 13, delay: -11, driftX: -30, driftY: 52, rotate: 14, stretch: 1 },
  { kind: "drop", left: 27, top: 47, size: 10, opacity: 0.56, blur: 0.14, duration: 14, delay: -2, driftX: 42, driftY: 44, rotate: 6, stretch: 1.42 },
  { kind: "bloom", left: 31, top: 82, size: 74, opacity: 0.32, blur: 1.4, duration: 24, delay: -19, driftX: 32, driftY: -32, rotate: -18, stretch: 1.16 },
  { kind: "speck", left: 35, top: 34, size: 4, opacity: 0.46, blur: 0.1, duration: 12, delay: -9, driftX: -34, driftY: 40, rotate: 11, stretch: 1 },
  { kind: "dot", left: 39, top: 63, size: 13, opacity: 0.44, blur: 0.28, duration: 16, delay: -13, driftX: 36, driftY: 58, rotate: -5, stretch: 1.08 },
  { kind: "trail", left: 43, top: 29, size: 46, opacity: 0.28, blur: 0.6, duration: 24, delay: -18, driftX: -68, driftY: 24, rotate: 3, stretch: 1 },
  { kind: "speck", left: 47, top: 14, size: 3, opacity: 0.38, blur: 0.08, duration: 14, delay: -8, driftX: 28, driftY: 58, rotate: -6, stretch: 1 },
  { kind: "bloom", left: 50, top: 76, size: 96, opacity: 0.3, blur: 1.6, duration: 25, delay: -20, driftX: 38, driftY: -28, rotate: 12, stretch: 1.1 },
  { kind: "drop", left: 54, top: 45, size: 12, opacity: 0.58, blur: 0.16, duration: 15, delay: -5, driftX: -46, driftY: 42, rotate: -12, stretch: 1.36 },
  { kind: "speck", left: 58, top: 27, size: 5, opacity: 0.42, blur: 0.12, duration: 13, delay: -12, driftX: 20, driftY: 50, rotate: 9, stretch: 1 },
  { kind: "trail", left: 61, top: 58, size: 52, opacity: 0.28, blur: 0.7, duration: 23, delay: -17, driftX: -74, driftY: 34, rotate: -8, stretch: 1 },
  { kind: "drop", left: 65, top: 73, size: 11, opacity: 0.5, blur: 0.15, duration: 15, delay: -14, driftX: 34, driftY: -26, rotate: 15, stretch: 1.38 },
  { kind: "bloom", left: 69, top: 20, size: 74, opacity: 0.28, blur: 1.3, duration: 22, delay: -8, driftX: -28, driftY: 50, rotate: 16, stretch: 1.14 },
  { kind: "speck", left: 73, top: 41, size: 4, opacity: 0.46, blur: 0.1, duration: 12, delay: -10, driftX: 32, driftY: 34, rotate: -14, stretch: 1 },
  { kind: "dot", left: 77, top: 61, size: 14, opacity: 0.46, blur: 0.28, duration: 17, delay: -3, driftX: -36, driftY: 48, rotate: 8, stretch: 1.06 },
  { kind: "speck", left: 81, top: 15, size: 3, opacity: 0.42, blur: 0.08, duration: 14, delay: -12, driftX: -28, driftY: 48, rotate: 7, stretch: 1 },
  { kind: "trail", left: 84, top: 49, size: 50, opacity: 0.28, blur: 0.65, duration: 22, delay: -11, driftX: 68, driftY: 26, rotate: 6, stretch: 1 },
  { kind: "bloom", left: 88, top: 78, size: 82, opacity: 0.34, blur: 1.5, duration: 23, delay: -16, driftX: -42, driftY: -32, rotate: -10, stretch: 1.12 },
  { kind: "drop", left: 92, top: 33, size: 11, opacity: 0.56, blur: 0.16, duration: 15, delay: -6, driftX: -42, driftY: 42, rotate: 10, stretch: 1.46 },
  { kind: "speck", left: 96, top: 66, size: 5, opacity: 0.42, blur: 0.12, duration: 13, delay: -9, driftX: -32, driftY: 26, rotate: -8, stretch: 1 },
  { kind: "speck", left: 9, top: 86, size: 3, opacity: 0.38, blur: 0.08, duration: 14, delay: -7, driftX: 38, driftY: -34, rotate: 15, stretch: 1 },
  { kind: "drop", left: 31, top: 12, size: 9, opacity: 0.48, blur: 0.12, duration: 16, delay: -13, driftX: 28, driftY: 64, rotate: -4, stretch: 1.48 },
  { kind: "bloom", left: 42, top: 88, size: 70, opacity: 0.28, blur: 1.4, duration: 25, delay: -18, driftX: 54, driftY: -42, rotate: 18, stretch: 1.1 },
  { kind: "drop", left: 57, top: 88, size: 9, opacity: 0.5, blur: 0.12, duration: 15, delay: -11, driftX: -36, driftY: -36, rotate: 7, stretch: 1.4 },
  { kind: "speck", left: 71, top: 88, size: 4, opacity: 0.38, blur: 0.08, duration: 16, delay: -14, driftX: 24, driftY: -42, rotate: -9, stretch: 1 },
  { kind: "bloom", left: 94, top: 12, size: 66, opacity: 0.28, blur: 1.3, duration: 22, delay: -17, driftX: -50, driftY: 62, rotate: -14, stretch: 1.18 },
  { kind: "drop", left: 22, top: 55, size: 24, opacity: 0.68, blur: 0.32, duration: 18, delay: -15, driftX: 28, driftY: 36, rotate: 4, stretch: 1.3 },
  { kind: "dot", left: 46, top: 54, size: 20, opacity: 0.56, blur: 0.3, duration: 17, delay: -9, driftX: -26, driftY: 42, rotate: -9, stretch: 1.06 },
  { kind: "drop", left: 66, top: 50, size: 26, opacity: 0.64, blur: 0.34, duration: 19, delay: -17, driftX: 24, driftY: 40, rotate: 13, stretch: 1.28 },
  { kind: "trail", left: 73, top: 56, size: 58, opacity: 0.34, blur: 0.8, duration: 24, delay: -16, driftX: -66, driftY: 18, rotate: -6, stretch: 1 },
];

export function InkDroplets() {
  return (
    <div aria-hidden="true" className="hero-ink-field">
      {droplets.map((droplet, index) => (
        <span
          className={`hero-ink-particle hero-ink-particle-${droplet.kind}`}
          key={`${droplet.left}-${droplet.top}-${index}`}
          style={
            {
              "--ink-blur": `${droplet.blur}px`,
              "--ink-delay": `${droplet.delay}s`,
              "--ink-drift-x": `${droplet.driftX}px`,
              "--ink-drift-y": `${droplet.driftY}px`,
              "--ink-duration": `${droplet.duration}s`,
              "--ink-left": `${droplet.left}%`,
              "--ink-opacity": droplet.opacity,
              "--ink-rotate": `${droplet.rotate}deg`,
              "--ink-size": `${droplet.size}px`,
              "--ink-stretch": droplet.stretch,
              "--ink-top": `${droplet.top}%`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
