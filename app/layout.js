import { Outfit, Montserrat } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Portfolio - Dilshan",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" scroll-smooth">
      <body
        className={`${montserrat.className} ${outfit.className} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
