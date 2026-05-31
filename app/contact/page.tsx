import type { Metadata } from "next";
import { ContactPage } from "@/components/site/ContentPages";

export const metadata: Metadata = {
  title: "Contact | Helen Qi",
  description:
    "Contact Helen Qi for research, professional inquiries, and creative collaboration.",
};

export default function Contact() {
  return <ContactPage />;
}
