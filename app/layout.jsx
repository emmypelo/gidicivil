import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gidi civil construction",
  description: "",
};

export default function RootLayout(

 
  { children }

) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <NavBar/>
        {children}</body>
    </html>
  );
}
