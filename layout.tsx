import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Keys From Above",
  description: "Neo-classical piano, cinematic soundscapes, and guided meditations by Keys From Above.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
