import {
  ArrowCircleUpRight,
  Briefcase,
  BuildingOffice,
  Certificate,
  CreditCard,
  DesktopTower,
  Laptop,
  PiggyBank,
  ReadCvLogo,
  Student,
  UsersFour,
} from "@phosphor-icons/react/dist/ssr";
import {
  ButtonServices,
  ButtonServicesFlex,
  ButtonServicesText,
} from "../Buttons/ButtonCta";
import Link from "next/link";

export default function HowWeHelp() {
  const features = [
    {
      icon: <Laptop weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "Visto para Nômade Digital",
      desc: "Visto para Nômade Digital",
    },
    {
      icon: <ReadCvLogo weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "Visto de Procura de Trabalho",
      desc: "Visto de Procura de Trabalho",
    },
    {
      icon: <CreditCard weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "Golden Visa",
      desc: "Golden Visa",
    },
    {
      icon: <Student weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "Visto D5 Estudo Europeu",
      desc: "Visto D5 Estudo Europeu",
    },
    {
      icon: <PiggyBank weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "Visto D7 Aposentados e Titulares de Rendimentos",
      desc: "Visto D7 Aposentados e Titulares de Rendimentos",
    },
    {
      icon: <Certificate weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "Visto D3 Trabalho Altamente Qualificado",
      desc: "Visto D3 Trabalho Altamente Qualificado",
    },
    {
      icon: <UsersFour weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "Visto D6 Reagrupamento Familiar",
      desc: "Visto D6 Reagrupamento Familiar",
    },
    {
      icon: (
        <DesktopTower weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />
      ),
      title: "Tech Visa",
      desc: "Tech Visa",
    },
    {
      icon: (
        <BuildingOffice weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />
      ),
      title: "Startup Visa",
      desc: "Startup Visa",
    },
    {
      icon: <Student weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "Visto D4 Estudo",
      desc: "Visto D4 Estudo",
    },
    {
      icon: <Briefcase weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "Visto D2 Empreendedor",
      desc: "Visto D2 Empreendedor",
    },
    {
      icon: <ReadCvLogo weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "Visto D1 de Trabalho",
      desc: "Visto D1 de Trabalho",
    },
  ];

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8">
        <div className="mx-auto text-center">
          <div className="mx-auto max-w-4xl space-y-5 px-4 py-8 text-center">
            <h1 className="text-3xl font-medium uppercase tracking-wide text-brandSecondary sm:text-4xl sm:leading-none">
              Especialidades Jurídicas em {""}
              <span className="bg-brandPrimary bg-clip-text font-black text-transparent">
                Vistos para Portugal
              </span>
            </h1>
            <p className="font-medium text-brandPrimary">
              Oferecemos suporte completo em processos de autorização de
              residência e vistos
            </p>
          </div>
        </div>
        <div className="relative mx-auto pt-4 sm:pt-2">
          <ul className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="shadow-l-lg group space-y-3 rounded-lg p-4 shadow-brandSecondary/20 hover:scale-100 hover:border-l-4 hover:border-brandAccent hover:bg-gradient-to-l hover:from-brandAccent/40 hover:to-transparent hover:shadow-brandAccent hover:transition-shadow"
              >
                <Link
                  passHref
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=351933965256&text=Olá%20Dra.%20Jamile,%20vim%20pelo%20site%20e%20preciso%20de%20ajuda%20com%20o%20meu%20Visto.%20Podemos%20conversar%3F%20"
                >
                  <div className="flex items-center justify-center">
                    <div className="pb-1 text-brandSecondary group-hover:text-brandAccent">
                      {item.icon}
                    </div>
                  </div>
                  <h1 className="text-center text-lg font-bold text-brandSecondary group-hover:text-brandAccent">
                    {item.title}
                  </h1>
                  <p className="text-center text-sm text-brandSecondary group-hover:text-brandAccent">
                    {item.desc}
                  </p>
                  <ButtonServices>
                    <ButtonServicesText>saiba mais</ButtonServicesText>
                    <ButtonServicesFlex>
                      <ArrowCircleUpRight
                        className="h-5 w-5 sm:h-5 sm:w-5"
                        weight="fill"
                      />
                    </ButtonServicesFlex>
                  </ButtonServices>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
