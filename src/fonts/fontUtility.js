import { Inter, Roboto, Montserrat } from "next/font/google";
import localFont from "next/font/local";

// These are variable fonts
export const inter = Inter({
  subsets: ["latin"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
});

// This is non-variable font
export const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

// These are local fonts, saved in same folder as this file
export const geistSans = localFont({
  src: "./GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const geistMono = localFont({
  src: "./GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
