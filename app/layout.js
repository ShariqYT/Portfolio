import "./globals.css";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { Toaster } from "react-hot-toast";


export const metadata = {
  title: "Mohammad Shariq | Portfolio",
  description: "Portfolio of Shariq, a full stack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/public/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="dark:bg-dark bg-light min-h-screen overflow-x-hidden">
        <Toaster
          position="bottom-center"
          reverseOrder={true}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
