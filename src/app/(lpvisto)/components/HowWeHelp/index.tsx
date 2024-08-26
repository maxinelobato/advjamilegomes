import { Checks, IdentificationCard } from "@phosphor-icons/react/dist/ssr";

export default function HowWeHelp() {
  const features = [
    {
      icon: <Checks weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "Visto para Nômade Digital",
      desc: "Visto para Nômade Digital",
    },
    {
      icon: <Checks weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "Visto de Procura de Trabalho",
      desc: "Visto de Procura de Trabalho",
    },
    {
      icon: (
        <IdentificationCard
          weight="fill"
          className="h-20 w-20 sm:h-24 sm:w-24"
        />
      ),
      title: "Golden Visa",
      desc: "Golden Visa",
    },
    {
      icon: <Checks weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "Visto D5 Estudo Europeu",
      desc: "Visto D5 Estudo Europeu",
    },
    {
      icon: <Checks weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "Visto D7 Aposentados e Titulares de Rendimentos",
      desc: "Visto D7 Aposentados e Titulares de Rendimentos",
    },
    {
      icon: <Checks weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "Visto D3 Trabalho Altamente Qualificado",
      desc: "Visto D3 Trabalho Altamente Qualificado",
    },
    {
      icon: <Checks weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "Visto D6 Reagrupamento Familiar",
      desc: "Visto D6 Reagrupamento Familiar",
    },
    {
      icon: (
        <IdentificationCard
          weight="fill"
          className="h-20 w-20 sm:h-24 sm:w-24"
        />
      ),
      title: "Tech Visa",
      desc: "Tech Visa",
    },
    {
      icon: (
        <IdentificationCard
          weight="fill"
          className="h-20 w-20 sm:h-24 sm:w-24"
        />
      ),
      title: "Startup Visa",
      desc: "Startup Visa",
    },
    {
      icon: <Checks weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "Visto D4 Estudo",
      desc: "Visto D4 Estudo",
    },
    {
      icon: <Checks weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "Visto D2 Empreendedor",
      desc: "Visto D2 Empreendedor",
    },
    {
      icon: <Checks weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "Visto D1 de Trabalho",
      desc: "Visto D1 de Trabalho",
    },
  ];

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8">
        <div className="mx-auto text-center">
          <div className="mx-auto max-w-4xl space-y-5 px-4 py-8 text-center">
            <h1 className="font-sans text-3xl font-medium uppercase tracking-wide text-brandSecondary sm:text-4xl sm:leading-none">
              Veja como podemos {""}
              <span className="bg-brandSecondary bg-clip-text font-sans font-black text-transparent">
                ajudar você
              </span>
            </h1>
          </div>
        </div>
        <div className="relative mx-auto pt-4 sm:pt-2">
          <ul className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="space-y-3 rounded-lg p-4 shadow-inner shadow-black/40 hover:transition-all"
              >
                <div className="flex items-center justify-center">
                  <div className="pb-1 text-brandSecondary">{item.icon}</div>
                </div>
                <h1 className="text-center text-lg font-bold text-brandSecondary">
                  {item.title}
                </h1>
                <p className="text-center text-sm text-brandSecondary">
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
