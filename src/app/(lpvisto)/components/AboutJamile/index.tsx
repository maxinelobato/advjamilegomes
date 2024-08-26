import Image from "next/image";
import jamile from "/public/assets/bgjamile1.webp";

export default function AboutJamile() {
  return (
    <>
      <div className="mx-auto px-4 py-16 sm:max-w-6xl md:max-w-6xl md:px-24 lg:max-w-6xl lg:px-8 lg:py-20">
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
      </div>
    </>
  );
}
