import AboutJamile from "../components/AboutJamile";
import Advantages from "../components/Advantages";
import { ButtonFloatWttp } from "../components/Buttons";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import { Hero } from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import HowWeHelp from "../components/HowWeHelp";
import { SocialProve } from "../components/SocialProve";

export default function Home() {
  return (
    <>
      <Hero />
      <HowWeHelp />
      <SocialProve />
      <Advantages />
      <HowItWorks />
      <AboutJamile />
      <Faq />
      <ButtonFloatWttp />
      <Footer />
    </>
  );
}
