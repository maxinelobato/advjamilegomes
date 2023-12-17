"use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "./swiper.css";

// import "swiper/css";
// import "swiper/css/navigation";

// import { Navigation, Autoplay } from "swiper/modules";

// import Image from "next/image";
// import client1 from "/public/assets/client1.jpeg";
// import client2 from "/public/assets/client2.jpeg";
// import client3 from "/public/assets/client3.jpeg";
// import client4 from "/public/assets/client4.jpeg";
// import client5 from "/public/assets/client5.jpeg";
// import Script from "next/script";

import { ElfsightWidget } from "react-elfsight-widget";

export default function GoogleBusiness() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-screen-xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="uppercase font-sans font-medium text-3xl tracking-wide text-brandSecondary sm:text-4xl sm:leading-none">
              O que os clientes falam {""}
              <span className="font-black font-sans text-transparent bg-clip-text bg-brandSecondary">
                sobre a Dra. Jamile Gomes
              </span>
            </h1>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
          {/* <Script
            strategy="afterInteractive"
            src="https://static.elfsight.com/platform/platform.js"
            data-use-service-core
            defer
          ></Script>
          <div
            className="elfsight-app-3f69b63e-055a-45cd-8844-18ae4b4c401d"
            data-elfsight-app-lazy
          ></div> */}
          <ElfsightWidget widgetId="3f69b63e-055a-45cd-8844-18ae4b4c401d" />
        </div>
      </div>
      {/* <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-screen-xl">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="uppercase font-sans font-medium text-3xl tracking-wide text-brandSecondary sm:text-4xl sm:leading-none">
                  O que os clientes falam {""}
                  <span className="font-black font-sans text-transparent bg-clip-text bg-brandSecondary">
                    sobre a Dra. Jamile Gomes
                  </span>
                </h1>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 xl:justify-center">
              <Image
                src="/assets/google.png"
                alt="Imagem"
                width={300}
                height={300}
                rel="preload"
                className="w-28 h-28 drop-shadow-lg"
              />
            </div>
          </div>

          <div className="mx-auto max-w-4xl px-4 pt-8 sm:px-6">
            <Swiper
              navigation={true}
              autoplay={{
                delay: 2200,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <blockquote className="items-center justify-center sm:p-8 lg:p-12">
                  <Image
                    src={client1}
                    alt="Imagem"
                    rel="preload"
                    className="cursor-pointer rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </blockquote>
              </SwiperSlide>

              <SwiperSlide>
                <blockquote className="items-center justify-center sm:p-8 lg:p-12">
                  <Image
                    src={client2}
                    alt="Imagem"
                    rel="preload"
                    className="cursor-pointer rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </blockquote>
              </SwiperSlide>

              <SwiperSlide>
                <blockquote className="items-center justify-center sm:p-8 lg:p-12">
                  <Image
                    src={client3}
                    alt="Imagem"
                    rel="preload"
                    className="cursor-pointer rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </blockquote>
              </SwiperSlide>

              <SwiperSlide>
                <blockquote className="items-center justify-center sm:p-8 lg:p-12">
                  <Image
                    src={client4}
                    alt="Imagem"
                    rel="preload"
                    className="cursor-pointer rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </blockquote>
              </SwiperSlide>

              <SwiperSlide>
                <blockquote className="items-center justify-center sm:p-8 lg:p-12">
                  <Image
                    src={client5}
                    alt="Imagem"
                    rel="preload"
                    className="cursor-pointer rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </blockquote>
              </SwiperSlide>
            </Swiper>
          </div>
        </div> */}
    </>
  );
}
