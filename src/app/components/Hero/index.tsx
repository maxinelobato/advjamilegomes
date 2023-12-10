"use client";

import Image from "next/image";
import ButtonHero from "../Buttons";
import Navbar from "../Navbar";
import GoogleReviews from "../GoogleReviews";
import jamile from "/public/assets/bgjamile1.webp";

export default function Hero() {
  return (
    <>
      <div className="bg-brandRose-200 relative flex flex-col-reverse py-10 lg:pt-0 lg:flex-col lg:pb-0">
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
          <div className="mb-10 lg:my-40 lg:max-w-lg lg:pr-5">
            <Navbar />
            <h1 className="py-4 mb-5 font-sans text-3xl font-bold tracking-tight text-brandRed-900 sm:text-4xl sm:leading-none">
              Precisando de uma Advogada em Portugal para pedir a sua
              <br className="hidden md:block" />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandRed-900 to-brandOrange-900">
                Nacionalidade ou Cidadania?
              </span>
            </h1>
            <p className="pr-5 mb-5 text-base text-brandRed-900 md:text-lg">
              Tudo o que você precisa saber para tirar a sua Cidadania. Conheça
              os seus direitos!
            </p>
            <div className="py-4 gap-x-3 space-y-3 flex items-center">
              <ButtonHero />
            </div>
            <div className="py-4 gap-x-3 space-y-3 flex items-center">
              <GoogleReviews />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
