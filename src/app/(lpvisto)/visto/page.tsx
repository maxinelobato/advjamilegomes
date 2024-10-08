import { AboutJamile } from "../components/AboutJamile";
import { ButtonFloatWttp } from "../components/Buttons";
import Faq from "../components/Faq";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import HowWeHelp from "../components/HowWeHelp";
import { Process } from "../components/Process";
import { SocialProve } from "../components/SocialProve";

export default function Home() {
  return (
    <>
      <Hero />
      <HowWeHelp />
      <SocialProve />
      <Process />
      <AboutJamile />
      <Faq />
      <HowItWorks />
      <ButtonFloatWttp />
      <Footer />
    </>
  );
}
