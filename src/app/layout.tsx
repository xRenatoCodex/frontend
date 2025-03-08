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
    <html lang="en">
      <body
        className={``}
      >
        {children}
      </body>
    </html>
  );
}
