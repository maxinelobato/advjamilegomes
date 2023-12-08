"use client";

import ButtonHero from "../ButtonHero";
import GoogleReviews from "../GoogleReviews";
import Navbar from "../Navbar";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

export default function HeroVideo() {
  return (
    <section className="bg-gradient-to-b from-brandRed-900 to-brandRose-200">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:pt-24 lg:px-8">
        <div className="mx-auto max-w-fit">
          <div className="-pt-10 gap-x-3 space-y-2 sm:items-center">
            <Navbar />
          </div>
        </div>
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="uppercase font-sans font-medium text-3xl tracking-wide text-brandRose-200 sm:text-4xl sm:leading-none">
            Precisa regulamentar sua cidadania {""}
            <span className="font-black font-sans text-transparent bg-clip-text bg-brandRose-200">
              ou nacionalidade portuguesa?
            </span>
          </h1>
          <p className="hidden font-bold text-base text-brandRose-200 md:block md:mt-4 md:text-lg">
            Veja o vídeo e saiba o que é necessário
          </p>
        </div>

        <div className="max-w-2xl mx-auto pt-8">
          <div className="relative h-64 sm:h-80 lg:h-full">
            <LiteYouTubeEmbed
              id="JkLLb8Vs3zk"
              adNetwork={false}
              cookie={true}
              rel="preload"
              title="POR QUE TER UMA ADVOGADA NO PROCESSO DE NACIONALIDADE PORTUGUESA?"
            />
            <div className="pt-8 pb-2 gap-x-3 space-y-3 flex justify-center items-center">
              <ButtonHero />
            </div>
            <div className="flex justify-center items-center">
              <GoogleReviews />
            </div>
          </div>

          {/* <div className="scroll-pt-36 sm:pt-16">
            <div className="pt-2 pb-2 gap-x-3 space-y-3 flex justify-center sm:justify-end sm:items-center">
              <ButtonHero />
            </div>
            <div className="flex justify-center sm:justify-end sm:items-center">
              <GoogleReviews />
            </div>
          </div> */}
        </div>
      </div>
    </section>
    // <section className="overflow-hidden bg-brandRose-200 sm:grid sm:grid-cols-2">
    //   <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    //     <div className="mx-auto max-w-xl text-center sm:text-left">
    //       <div className="gap-x-3 space-y-2 py-0 sm:py-8 sm:items-center">
    //         <Navbar />
    //       </div>
    // <h1 className="text-3xl font-bold font-sans tracking-tight text-brandRed-900 sm:text-4xl sm:leading-none">
    //   Precisa regulamentar sua cidadania {""}
    //   <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-brandRed-900 to-brandOrange-900">
    //     ou nacionalidade portuguesa?
    //   </span>
    // </h1>
    // <p className="hidden text-base text-brandRed-900 md:block md:mt-4 md:text-lg">
    //   Saiba o que é necessário para regulamentar sua cidadania
    // </p>

    // <div className="pt-6 pb-2 gap-x-3 space-y-3 sm:items-center">
    //   <ButtonHero />
    // </div>
    // <div className="flex justify-center sm:justify-start sm:items-center">
    //   <GoogleReviews />
    // </div>
    //     </div>
    //   </div>
    //   <div className="relative overflow-hidden order-last sm:order-last p-4 sm:p-8">
    //     {/* <iframe
    //       className="aspect-video overflow-hidden rounded-2xl shadow-2xl w-full object-cover sm:h-full"
    //       src="https://www.youtube.com/embed/JkLLb8Vs3zk?rel=0&autoplay=1"
    //       title="POR QUE TER UMA ADVOGADA NO PROCESSO DE NACIONALIDADE PORTUGUESA?"
    //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //       loading="eager"
    //       allowFullScreen
    //     ></iframe> */}
    // <LiteYouTubeEmbed
    //   id="JkLLb8Vs3zk"
    //   adNetwork={false}
    //   rel="preload"
    //   title="POR QUE TER UMA ADVOGADA NO PROCESSO DE NACIONALIDADE PORTUGUESA?"
    // />
    //   </div>
    // </section>
  );
}
