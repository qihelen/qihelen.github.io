import type { Metadata } from "next";
import { ResearchPage } from "@/components/site/ContentPages";

export const metadata: Metadata = {
  title: "Experience & Research | Helen Qi",
  description:
    "Professional and research experience by Helen Qi.",
};

export default function Research() {
  return <ResearchPage />;
}
