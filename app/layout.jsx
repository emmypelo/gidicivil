import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";

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
    "At GIDI CIVIL CONSTRUCTION, achieving your aspirations is within reach when you work with us.Maintaining the utmost level of professionalism, honesty, and fairness in our interactions with clients, employees, and professional associates allows us to consistently meet our clients needs through the provision of high-quality construction services. We strive to create value for our clients through innovation foresight, and integrity.",
  title: {
    default: "Gidi civil construction",
    template: "%s | Gidi Civil construction",
  },
  openGraph: {
    description:
      "At GIDI CIVIL CONSTRUCTION, achieving your aspirations is within reach when you work with us.Maintaining the utmost level of professionalism, honesty, and fairness in our interactions with clients, employees, and professional associates allows us to consistently meet our clients needs through the provision of high-quality construction services. We strive to create value for our clients through innovation foresight, and integrity.",
  },
  url: "https://gidicivilconstruction.com",
  siteName: "Gidi Civil construction limited",
  type: "website",
  images: [],
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
        <NavBar />
        {children}
      </body>
    </html>
  );
}
