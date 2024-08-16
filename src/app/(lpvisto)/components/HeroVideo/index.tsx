"use client";

import GoogleReviews from "../GoogleReviews";
import HowWeHelp from "../HowWeHelp";
import Advantages from "../Advantages";
import HowItWorks from "../HowItWorks";
import ButtonHero from "../Buttons/buttonhero";
import ButtonFloat from "../Buttons/buttonfloat";
import Image from "next/image";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "./youtubelite.css";
import AboutJamile from "../AboutJamile";
import GoogleBusiness from "../GoogleBusiness";
import Faq from "../Faq";
import Footer from "../Footer";
import LogoJam from '../../../../../public/assets/jamilelogo1.svg'

export default function HeroVideo() {
  return (
    <section className="bg-gradient-to-b from-brandBase1-100 to-brandBase2-200">
      <div className="overflow-hidden mx-auto max-w-7xl sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 mt-4 sm:mb-16 lg:py-12">
          <div className="text-center sm:text-left">
            <div className="mx-auto sm:mx-0 max-w-fit sm:max-w-lg -pt-0 pb-8 sm:-pt-16">
              <Image
               src={LogoJam}
                width={150}
                height={50}
                alt="Logo Jamile"
                loading="lazy"
              />
            </div>
            <h1 className="uppercase font-sans font-medium text-2xl tracking-wide text-brandSecondary sm:text-4xl sm:leading-none">
              Precisa de <span className="font-black font-sans text-transparent bg-clip-text bg-brandSecondary">
              visto
              </span> para regulamentar sua ida {""}
              <span className="font-black font-sans text-transparent bg-clip-text bg-brandSecondary">
                para Portugal?
              </span>
            </h1>
            <p className="mb-5 hidden font-bold text-base text-brandSecondary md:block md:mt-4 md:text-lg">
              Veja o vídeo e saiba o que é necessário
            </p>
            <div className="mt-4 md:mt-8">
              <ButtonHero />
            </div>
          </div>
          <div className="max-w-md text-center sm:text-left">
            <GoogleReviews />
          </div>
        </div>
        <div className="h-auto w-full object-cover pt-0 p-4 items-center sm:pt-0">
          <LiteYouTubeEmbed
            noCookie={true}
            id="JkLLb8Vs3zk"
            playlist={false}
            params="autoplay=1&rel=0"
            rel="preload"
            title="POR QUE TER UMA ADVOGADA NO PROCESSO DE NACIONALIDADE PORTUGUESA?"
          />
        </div>
      </div>
      <HowWeHelp />
      <Advantages />
      <HowItWorks />
      <AboutJamile />
      <GoogleBusiness />
      <Faq />
      <ButtonFloat />
      <Footer />
    </section>
  );
}
