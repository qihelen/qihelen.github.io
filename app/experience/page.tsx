import type { Metadata } from "next";
import { ExperiencePage } from "@/components/site/ContentPages";

export const metadata: Metadata = {
  title: "Experience | Helen Qi",
  description:
    "Legal research, quantitative analysis, strategic advising, and institutional decision-making experience by Helen Qi.",
};

export default function Experience() {
  return <ExperiencePage />;
}
