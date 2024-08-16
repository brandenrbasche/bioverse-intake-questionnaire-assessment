import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Providers} from "@/app/providers";
import {User} from "@/app/User";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bioverse Questionnaire",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + ' p-5'}>
        <Providers>
            <User />
            {children}
        </Providers>
      </body>
    </html>
  );
}
