import {
  Files,
  MagnifyingGlass,
  PresentationChart,
  TrendUp,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import {
  ButtonHome,
  ButtonHomeFlex,
  ButtonHomeText,
} from "../Buttons/ButtonCta";

export function Process() {
  const features = [
    {
      icon: <MagnifyingGlass size={32} className="h-6 w-6" weight="fill" />,
      title: "reunião virtual inicial",
    },
    {
      icon: <Files size={32} className="h-6 w-6" weight="fill" />,
      title: "preparação da documentação",
    },
    {
      icon: <TrendUp size={32} className="h-6 w-6" weight="fill" />,
      title: "envio e acompanhamento do processo",
    },
    {
      icon: <PresentationChart size={32} className="h-6 w-6" weight="fill" />,
      title: "orientação para imigração",
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl space-y-5 px-8 py-10">
        <h1 className="text-3xl font-medium uppercase tracking-wide text-brandSecondary sm:text-4xl sm:leading-none">
          como funciona o processo {""}
          <span className="bg-brandPrimary bg-clip-text font-black text-transparent">
            para tirar o visto
          </span>
        </h1>
        <p className="font-medium text-brandPrimary">
          Trabalharei lado a lado com você em todas as etapas para garantir uma
          transição tranquila e sem complicações
        </p>
        <div className="mt-2">
          <span className="inline-block h-1 w-40 rounded-full bg-brandPrimary"></span>
          <span className="ml-1 inline-block h-1 w-3 rounded-full bg-brandPrimary"></span>
          <span className="ml-1 inline-block h-1 w-1 rounded-full bg-brandPrimary"></span>
        </div>

        <div className="mx-auto mt-8 flex max-w-fit items-center xl:mt-8">
          <div className="mt-8 grid w-full grid-cols-2 gap-8 md:grid-cols-4 xl:mt-12 xl:gap-6">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="rounded-lg border-l-4 border-l-brandSecondary p-4 shadow-brandSecondary/20 shadow-*-md sm:p-6"
              >
                <div className="text-center md:-mx-4 md:flex md:items-center">
                  <span className="inline-block rounded-lg bg-brandPrimary p-3 text-white">
                    {item.icon}
                  </span>
                  <div className="text-center md:mx-3">
                    <h1 className="text-xs font-bold capitalize text-brandSecondary sm:text-sm">
                      {item.title}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-fit px-4 pt-4 text-center sm:pt-12">
          <ButtonHome href="https://api.whatsapp.com/send?phone=351933965256&text=Olá%20Dra.%20Jamile,%20vim%20pelo%20site%20e%20preciso%20de%20ajuda%20com%20o%20meu%20Visto.%20Podemos%20conversar%3F%20">
            <ButtonHomeText>agende sua consulta agora</ButtonHomeText>
            <ButtonHomeFlex>
              <WhatsappLogo className="h-5 w-5 sm:h-6 sm:w-6" weight="fill" />
            </ButtonHomeFlex>
          </ButtonHome>
        </div>
      </div>
    </section>
  );
}
