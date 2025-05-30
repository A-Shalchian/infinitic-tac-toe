import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from "@/context/AppProviders";
import { Footer } from "@/homeSections/footer";
import { Header } from "@/homeSections/Header";

export const metadata: Metadata = {
  title: "Infinite Tic-Tac-toe",
  description: "Play Tic-Tac-Toe forever",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <Header />

        <AppProviders>{children}</AppProviders>

        <Footer />
      </body>
    </html>
  );
}
