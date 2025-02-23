// src/app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PLOBET",
  description: "Váš spoľahlivý partner pre betónové výrobky od roku 1995",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-16"></div>
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
