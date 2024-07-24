import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav/page";
import Footer from "@/components/footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BOPTII FITS",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        {children}</body>
        <Footer/>
    </html>
  );
}
