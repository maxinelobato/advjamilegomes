import Image from "next/image";
import jamile from "../../../../../public/assets/jamile.jpeg";

export function AboutJamile() {
  return (
    <>
      <section className="mx-auto px-4 py-16 sm:max-w-6xl md:max-w-6xl md:px-24 lg:max-w-6xl lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xl font-black text-brandSecondary">Advogada</p>
          <h1 className="mt-2 text-3xl font-medium uppercase tracking-wide text-brandSecondary sm:text-4xl sm:leading-none">
            Especialista em {""}
            <span className="bg-brandSecondary bg-clip-text font-black text-transparent">
              Vistos, Cidadania e Nacionalidade
            </span>
          </h1>

          <main className="relative z-20 mt-8 w-full md:flex md:items-center xl:mt-12">
            <div className="from-90% to-10% absolute -z-10 w-full rounded-lg bg-gradient-to-l from-transparent to-brandAccent/30 shadow-brandAccent/20 shadow-r-md md:h-96"></div>
            <div className="mx-auto w-full rounded-lg bg-gradient-to-r from-transparent to-brandAccent/30 p-6 shadow-brandAccent/20 shadow-r-md sm:bg-transparent sm:from-transparent sm:to-transparent sm:shadow-none md:flex md:items-center md:justify-center md:bg-transparent md:p-0 lg:px-12">
              <Image
                width={500}
                height={500}
                className="h-auto w-auto rounded-lg object-fill shadow-r-md sm:rounded-lg sm:object-cover md:mx-6 md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem]"
                src={jamile}
                alt="client photo"
              />

              <div className="p-2 py-8 md:mx-6">
                <div>
                  <p className="text-xl font-semibold tracking-tight text-brandSecondary">
                    Dra. Jamile Gomes
                  </p>
                  <p className="text-brandSecondary">
                    OA/PT: 67974L | OAB/ES: 35.947
                  </p>
                </div>

                <p className="mt-4 text-lg leading-relaxed text-brandSecondary md:text-xl">
                  {" "}
                  Formada na Faculdade Pitágoras em 2020 Inscrição na OAB do
                  Brasil e na OA de Portugal
                </p>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
