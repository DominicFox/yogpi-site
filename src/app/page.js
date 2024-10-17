import { inter } from "../fonts/fontUtility";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import FullScreenImage from "@/components/FullScreenImage";
import Header from "@/components/Header";
import HeroSubpage from "@/components/Subpage/HeroSubpage";

// In this file, inter is imported into only this file so is scoped to the Home page.
// Mono is defined in the layout.js file so can be used site-wide.

export default function Home() {
  return (
    <div>
      <p className="font-mono">Local font geist mono in layout.js</p>
      <p className={`${inter.className}`}>
        Google font inter from fontUtility.js
      </p>
      <FullScreenImage />
      <CallToAction title="Title" text="text" buttonText="button text" />
    </div>
  );
}
