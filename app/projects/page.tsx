import type { Metadata } from "next";
import { ProjectsPage } from "@/components/site/ProjectsPage";

export const metadata: Metadata = {
  title: "Projects & Writing | Helen Qi",
  description:
    "Technical projects, legal research, academic essays, and selected writing by Helen Qi.",
};

export default function Projects() {
  return <ProjectsPage />;
}
