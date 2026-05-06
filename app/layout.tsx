import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jinesh Rathod — Portfolio",
  description: "AI · Machine Learning · FPGA Acceleration · Research",
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
