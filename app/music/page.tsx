import type { Metadata } from "next";
import { MusicPage } from "@/components/site/ContentPages";

export const metadata: Metadata = {
  title: "Music | Helen Qi",
  description:
    "Music, viola performance, and Yale Symphony Orchestra work by Helen Qi.",
};

export default function Music() {
  return <MusicPage />;
}
