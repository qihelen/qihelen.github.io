import type { Metadata } from "next";
import { AboutPage } from "@/components/site/ContentPages";

export const metadata: Metadata = {
  title: "About | Helen Qi",
  description:
    "About Helen Qi, a Yale University student studying Ethics, Politics, and Economics.",
};

export default function About() {
  return <AboutPage />;
}
