import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { SITE, buildMetadata, organizationJsonLd } from "@/lib/seo";

const baloo2 = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-baloo2",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata = {
  ...buildMetadata({
    title: SITE.name,
    description: SITE.description,
    path: "/",
  }),
  metadataBase: new URL(SITE.url),
  icons: {
    icon: [
      { url: "/nursery-school/favicon.ico", sizes: "48x48" },
      { url: "/nursery-school/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/nursery-school/apple-touch-icon.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: SITE.name,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const themeColor = "#7B3FE4";

export default function RootLayout({ children }) {
  const jsonLd = organizationJsonLd();

  return (
    <html lang="en" className={`h-full antialiased ${baloo2.variable} ${nunito.variable}`}>
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:bg-purple focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:font-display focus:font-semibold focus:text-sm"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main id="main-content" className="flex-1 pb-[72px] md:pb-0">{children}</main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
