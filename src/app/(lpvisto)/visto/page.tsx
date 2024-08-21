import AboutJamile from "../components/AboutJamile";
import Advantages from "../components/Advantages";
import ButtonFloat from "../components/Buttons/buttonfloat";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import GoogleBusiness from "../components/GoogleBusiness";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import HowWeHelp from "../components/HowWeHelp";

export default function Home() {
  return (
    <>
      <Hero />
      <HowWeHelp />
        <Advantages />
        <HowItWorks />
        <AboutJamile />
        <GoogleBusiness />
        <Faq />
        <ButtonFloat />
        <Footer />
    </>
  );
}
