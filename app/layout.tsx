import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jinesh Rathod — Portfolio",
  description: "AI / Machine Learning Engineer and Researcher. Deep learning, computer vision, FPGA acceleration, generative AI, and RAG systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
