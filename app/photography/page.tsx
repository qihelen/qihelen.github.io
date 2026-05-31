import type { Metadata } from "next";
import { PhotographyPage } from "@/components/site/ContentPages";

export const metadata: Metadata = {
  title: "Photography | Helen Qi",
  description: "Selected photography by Helen Qi.",
};

export default function Photography() {
  return <PhotographyPage />;
}
