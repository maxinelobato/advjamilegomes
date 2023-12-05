import Image from "next/image";
import jamile from "/public/assets/bgjamile1.webp";

export default function AboutJamile() {
  return (
    <>
      <div className="bg-gradient-to-tr from-brandRose-200 to-brandRose-700">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h1 className="py-4 mb-5 font-sans text-3xl font-bold tracking-tight text-brandRed-900 sm:text-4xl sm:leading-none">
                  Sobre a Dra.{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandRed-900 to-brandOrange-900">
                    Jamile Gomes
                  </span>
                </h1>
              </div>
              <div className="grid gap-5 row-gap-8 sm:grid-cols-1">
                <div className="bg-brandRed-900 border-l-8 border-brandOrange-900 rounded-lg">
                  <div className="h-full p-5">
                    <ul className="steps steps-vertical">
                      <li data-content="✓" className="step step-primary">
                        <h1 className="text-brandRose-200 font-semibold leading-5">
                          Formada na Faculdade Pitágoras em 2020
                        </h1>
                      </li>
                      <li
                        data-content="✓"
                        className="step step-primary text-brandRose-700 break-all"
                      >
                        Inscrição na OAB do Brasil e na OA de Portugal
                      </li>
                      <li data-content="✓" className="step step-primary">
                        <h1 className="text-brandRose-200 font-semibold leading-5">
                          Especialidade
                        </h1>
                      </li>
                      <li
                        data-content="✓"
                        className="step step-primary text-brandRose-700"
                      >
                        Direito Imigratório
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1">
              <Image
                className="object-contain w-auto h-auto rounded-lg shadow-lg sm:h-auto"
                src={jamile}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="About Jamile"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
