"use client";

import Image from "next/image";
import jamile from "/public/assets/bgjamile1.webp";
import jamilelogo from "../../../../../public/assets/jamilelogo2.svg";
import ButtonHero from "../Buttons/buttonhero";
import GoogleReviews from "../GoogleReviews";

export default function Hero() {
  return (
    <>
      <div className="relative flex flex-col-reverse py-10 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-brandRose-200 transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <Image
            className="object-contain rounded-lg w-full h-full md:object-cover md:object-[center_top] md:rounded-none md:h-full lg:h-full"
            src={jamile}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="Image BG"
            loading="eager"
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="pt-4 lg:py-36 lg:max-w-lg lg:pr-5">
            <Image
              src={jamilelogo}
              width={150}
              height={50}
              alt="Logo Jamile"
              loading="lazy"
            />
            <h1 className="pt-8 py-2 mb-5 uppercase font-sans font-medium text-2xl tracking-wide text-brandSecondary sm:text-4xl sm:leading-none">
              Precisa de <span className="font-black font-sans text-transparent bg-clip-text bg-brandSecondary">
              visto
              </span> para regulamentar sua ida {""}
              <span className="font-black font-sans text-transparent bg-clip-text bg-brandSecondary">
                para Portugal?
              </span>
            </h1>
            <p className="pr-5 mb-4 text-base text-brandRed-900 md:text-lg">
              Tudo o que você precisa saber para tirar seu Visto Português.
            </p>
            <div className="py-2 gap-x-3 space-y-3 flex items-center">
              <ButtonHero />
            </div>
            <div className="py-2 gap-x-3 space-y-3 flex items-center">
              <GoogleReviews />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
