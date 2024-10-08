

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MyApp from './myApp/page';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ethan Official Web",
  description: "This is my official website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;

}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyApp />
        {children}
      </body>
    </html>
  );
}
