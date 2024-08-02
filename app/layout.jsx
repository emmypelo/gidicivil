import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: ['/favicon.ico'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut:['/apple-touch-icon.png']
  },
  manifest:'/site.webmanifest',
  metadataBase: new URL("https://gidicivilconstruction.com"),
  keywords: [
    "gidi",
    "gidi civil construction",
    "construction company",
    "gidi company",
    "Nigeria construction company",
    "toyosi osaseyi",
    "gidi group",
    "gidi real estate",
    "investment",
  ],
  title: {
    default: "Gidi civil construction",
    template: "%s | Gidi Civil construction",
  },
  openGraph: {
    description: "A place to achieve your construction and project dreams.",
  },
  url: "https://gidicivilconstruction.com",
  siteName: "Gidi Civil construction limited",
  type: "website",
  images: [
   
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="icon" href="./favicon.svg" type="image/png" />
      </head> */}
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
