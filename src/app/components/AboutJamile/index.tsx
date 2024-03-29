import Image from "next/image";
import jamile from "/public/assets/bgjamile1.webp";

export default function AboutJamile() {
  return (
    <>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
              <h1 className="uppercase font-sans font-medium text-3xl tracking-wide text-brandSecondary sm:text-4xl sm:leading-none">
                  Sobre a {""}
                  <span className="font-black font-sans text-transparent bg-clip-text bg-brandSecondary">
                    Dra. Jamile Gomes
                  </span>
                </h1>
              </div>
              <div className="grid gap-5 row-gap-8 sm:grid-cols-1">
                <div className="bg-brandAccent/20 border-l-8 border-brandSecondary rounded-lg">
                  <div className="h-full p-5">
                    <ul className="steps steps-vertical">
                      <li data-content="✓" className="step step-primary">
                        <h1 className="text-brandSecondary font-semibold leading-5">
                          Formada na Faculdade Pitágoras em 2020
                        </h1>
                      </li>
                      <li
                        data-content="✓"
                        className="step step-primary text-brandSecondary break-all"
                      >
                        Inscrição na OAB do Brasil e na OA de Portugal
                      </li>
                      <li data-content="✓" className="step step-primary">
                        <h1 className="text-brandSecondary font-semibold leading-5">
                          Especialidade
                        </h1>
                      </li>
                      <li
                        data-content="✓"
                        className="step step-primary text-brandSecondary"
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
                className="object-contain w-auto h-auto rounded-lg shadow-lg shadow-black/50 sm:h-[600px]"
                src={jamile}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="About Jamile"
              />
            </div>
          </div>
        </div>
    </>
  );
}
