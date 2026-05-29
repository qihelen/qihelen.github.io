import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Helen Qi",
  description:
    "Helen Qi is a Yale University student studying Ethics, Politics, and Economics with interests across law, research, music, art, and photography.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
