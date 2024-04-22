import type { Metadata } from "next";
import { inter } from "@/config/fonts";
import "./globals.css";



export const metadata: Metadata = {
  title: "Mi-Catalogo | consultas y compras",
  description: "catálogo virtual de productos",
};  

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
