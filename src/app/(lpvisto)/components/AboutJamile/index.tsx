import Image from "next/image";
import jamile from "../../../../../public/assets/mobile-jam.webp";

export default function AboutJamile() {
  return (
    <>
      {/* <div className="mx-auto px-4 py-16 sm:max-w-6xl md:max-w-6xl md:px-24 lg:max-w-6xl lg:px-8 lg:py-20">
        <div className="row-gap-8 grid gap-5 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="mb-6 max-w-xl">
              <h1 className="font-sans text-3xl font-medium uppercase tracking-wide text-brandSecondary sm:text-4xl sm:leading-none">
                Sobre a {""}
                <span className="bg-brandSecondary bg-clip-text font-sans font-black text-transparent">
                  Dra. Jamile Gomes
                </span>
              </h1>
            </div>
            <div className="row-gap-8 grid gap-5 sm:grid-cols-1">
              <div className="rounded-lg border-l-8 border-brandSecondary bg-brandAccent/20">
                <div className="h-full p-5">
                  <ul className="steps steps-vertical">
                    <li data-content="✓" className="step-primary step">
                      <h1 className="font-semibold leading-5 text-brandSecondary">
                        Formada na Faculdade Pitágoras em 2020
                      </h1>
                    </li>
                    <li
                      data-content="✓"
                      className="step-primary step break-all text-brandSecondary"
                    >
                      Inscrição na OAB do Brasil e na OA de Portugal
                    </li>
                    <li data-content="✓" className="step-primary step">
                      <h1 className="font-semibold leading-5 text-brandSecondary">
                        Especialidade
                      </h1>
                    </li>
                    <li
                      data-content="✓"
                      className="step-primary step text-brandSecondary"
                    >
                      Direito Imigratório
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 justify-end">
            <Image
              className="h-auto w-auto rounded-lg object-contain shadow-lg shadow-black/50 sm:h-[600px]"
              src={jamile}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="About Jamile"
            />
          </div>
        </div>
      </div> */}
      <section className="mx-auto px-4 py-16 sm:max-w-6xl md:max-w-6xl md:px-24 lg:max-w-6xl lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xl font-black text-brandSecondary">Advogada</p>
          <h1 className="mt-2 text-3xl font-medium uppercase tracking-wide text-brandSecondary sm:text-4xl sm:leading-none">
            Especialista em Direito {""}
            <span className="bg-brandSecondary bg-clip-text font-black text-transparent">
              Imigratório
            </span>
          </h1>

          <main className="relative z-20 mt-8 w-full md:flex md:items-center xl:mt-12">
            <div className="absolute -z-10 w-full rounded-lg bg-gradient-to-r from-brandAccent/5 to-brandAccent/60 shadow-brandAccent/20 shadow-*-md md:h-96"></div>
            <div className="mx-auto w-full rounded-lg bg-brandAccent/60 p-6 md:flex md:items-center md:justify-center md:bg-transparent md:p-0 lg:px-12">
              <Image
                width={500}
                height={500}
                className="h-[32rem] w-auto rounded-2xl object-cover shadow-md md:mx-6 md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem]"
                src={jamile}
                alt="client photo"
              />

              <div className="mt-2 md:mx-6">
                <div>
                  <p className="text-xl font-semibold tracking-tight text-brandSecondary">
                    Dra. Jamile Gomes
                  </p>
                  <p className="text-brandSecondary">
                    Marketing Manager at Stech
                  </p>
                </div>

                <p className="mt-4 text-lg leading-relaxed text-brandSecondary md:text-xl">
                  {" "}
                  “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempore quibusdam ducimus libero ad tempora doloribus expedita
                  laborum saepe voluptas perferendis delectus assumenda”.
                </p>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
