
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IRONCORE | Train Different",
  description:
    "Discover workout plans, fitness routines, and gym membership options with IRONCORE.",
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
