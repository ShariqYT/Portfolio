import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

export const metadata = {
  metadataBase: new URL("https://shariqdevportfolio.netlify.app"),
  title: "Mohammad Shariq | Portfolio",
  description: "Portfolio of Shariq, a full stack developer",
  openGraph: {
    title: "Mohammad Shariq | Portfolio",
    description: "Portfolio of Shariq, a full stack developer",
    url: "https://shariqdevportfolio.netlify.app", // Replace with your actual domain
    siteName: "Mohammad Shariq Portfolio",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Mohammad Shariq Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Shariq | Portfolio",
    description: "Portfolio of Shariq, a full stack developer",
    image: `${process.env.NEXT_PUBLIC_URL}/opengraph-image.png`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="google-site-verification" content="jEAJb--5CmKi8Vki01te7J0SAjEz6dO-trepN8mHnto" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Mohammad Shariq" />
        <meta name="keywords" content="portfolio, full stack developer, Shariq, web developer, software engineer, programming, development" />
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="dark:bg-dark bg-light min-h-screen overflow-x-hidden">
        <Toaster position="bottom-center" reverseOrder={true} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
