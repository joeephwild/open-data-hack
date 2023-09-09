import { Navbar, Session, Sidebar } from "@/components/dashboard-components";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <div className="flex items-start gap-5">
          <Sidebar />
          <div className="w-[70%] h-screen overflow-y-scroll scrollbar-hide">{children}</div>
          <Session />
        </div>
      </body>
    </html>
  );
}
