"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

import Image from "next/image";
import client1 from "/public/assets/client1.jpeg";
import client2 from "/public/assets/client2.jpeg";
import client3 from "/public/assets/client3.jpeg";
import client4 from "/public/assets/client4.jpeg";
import client5 from "/public/assets/client5.jpeg";

export default function GoogleBusiness() {
  return (
    <>
      <section className="bg-brandRose-200">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-screen-xl">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-sans font-semibold text-4xl tracking-tight text-brandRed-900 sm:text-5xl sm:leading-none">
                O que os clientes falam sobre a{" "}
                <span className="font-extrabold">Dra. Jamile Gomes?</span>
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

          <div className="mx-auto max-w-2xl px-4 pt-8 sm:px-6">
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
                <blockquote className="items-center justify-center p-10 sm:p-8 lg:p-12">
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
                <blockquote className="items-center justify-center p-10 sm:p-8 lg:p-12">
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
                <blockquote className="items-center justify-center p-10 sm:p-8 lg:p-12">
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
                <blockquote className="items-center justify-center p-10 sm:p-8 lg:p-12">
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
                <blockquote className="items-center justify-center p-10 sm:p-8 lg:p-12">
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
        </div>
      </section>
    </>
  );
}
