import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SocratesIA",
  description: "SocratesIA is a platform for AI-powered learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full">
      <body
        className={`h-full w-full bg-secondary text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
