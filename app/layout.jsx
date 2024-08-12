import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://gidicivilconstruction.com"),
  keywords: [
    "gidi",
    "gidi civil construction",
    "construction company",
    "gidi company",
    "Nigeria construction company",
    "Toyosi Osaseyi",
    "gidi group",
    "gidi real estate",
    "investment",
  ],
  description:
    "At GIDI CIVIL CONSTRUCTION, we help you achieve your aspirations with professionalism, honesty, and fairness. We meet client needs with high-quality construction services, creating value through innovation, foresight, and integrity.",
  title: "Gidi Civil Construction",
  openGraph: {
    title: "Gidi Civil Construction",
    description:
      "At GIDI CIVIL CONSTRUCTION, we help you achieve your aspirations with professionalism, honesty, and fairness. We meet client needs with high-quality construction services, creating value through innovation, foresight, and integrity.",
    type: "website",
    url: "https://gidicivilconstruction.com",
    siteName: "Gidi Civil Construction Limited",
    images: [
      {
        url: "https://gidicivilconstruction.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gidi Civil Construction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@GidiConstruction",
    creator: "@ToyosiOsaseyi",
    title: "Gidi Civil Construction",
    description:
      "At GIDI CIVIL CONSTRUCTION, we help you achieve your aspirations with professionalism, honesty, and fairness. We meet client needs with high-quality construction services, creating value through innovation, foresight, and integrity.",
    images: [
      {
        url: "https://gidicivilconstruction.com/twitter-image.jpg",
        alt: "Gidi Civil Construction",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5WM54THC');
            `,
          }}
        />
      </head>

      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5WM54THC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
