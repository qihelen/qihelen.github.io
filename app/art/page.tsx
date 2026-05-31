import type { Metadata } from "next";
import { ArtPage } from "@/components/site/ContentPages";

export const metadata: Metadata = {
  title: "Art | Helen Qi",
  description: "Selected visual art, sketches, studies, and finished work by Helen Qi.",
};

export default function Art() {
  return <ArtPage />;
}
