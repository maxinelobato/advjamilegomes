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
      desc: "Estrangeiro que trabalha remotamente e com rendimentos de no mínimo 4 salários mínimos portugueses mensais",
    },
    {
      icon: <ReadCvLogo weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "Visto de Procura de Trabalho",
      desc: "Qualquer estrangeiro que tenha interesse de ir a Portugal para procurar trabalho",
    },
    {
      icon: <CreditCard weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "Golden Visa",
      desc: "A diferença deste visto para os demais é o tempo de permanência, que nesse caso são 7 dias ao ano",
    },
    {
      icon: <Student weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "Visto D5 Estudo Europeu",
      desc: "Para todos os cidadãos estrangeiros que queiram morar e estudar em Portugal",
    },
    {
      icon: <PiggyBank weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "Visto D7 Aposentados e Titulares de Rendimentos",
      desc: "Para aposentados e pessoas com rendimentos no Brasil comprovados por um período de no mínimo 1 ano em Portugal",
    },
    {
      icon: <Certificate weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "Visto D3 Trabalho Altamente Qualificado",
      desc: "É destinado a profissionais estrangeiros que especifique a profissão para ser concedido",
    },
    {
      icon: <UsersFour weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "Visto D6 Reagrupamento Familiar",
      desc: "Para familiares de um portador de visto, ou seja, que tenha autorização de residência ou cidadão portugês também morem legalmente",
    },
    {
      icon: (
        <DesktopTower weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />
      ),
      title: "Tech Visa",
      desc: "Para profissionais altamente qualificados de tecnologia da informação, engenheiro de software, programação, etc. Cadastrados também no Programa Tech Visa",
    },
    {
      icon: (
        <BuildingOffice weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />
      ),
      title: "Startup Visa",
      desc: "Além de incentivar o empreendedorismo em Portugal, para quem já possui empresa há pelo menos 4 anos no Brasil e quer internacionalizar suas atividades",
    },
    {
      icon: <Student weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "Visto D4 Estudo",
      desc: "Para entrangeiros com matrícula ou carta de aceitação de instituição de ensino em Portugal que querem ampliar horizontes e melhorar seu currículo. ",
    },
    {
      icon: <Briefcase weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "Visto D2 Empreendedor",
      desc: "Para estrangeiros que pretendem realizar uma atividade de investimento como empreendedor em Portugal",
    },
    {
      icon: <ReadCvLogo weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "Visto D1 de Trabalho",
      desc: "Estrangeiros com um contrato de trabalho de pelo menos 12 meses em qualquer empresa sediada em Portugal",
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
                className="group space-y-3 rounded-lg p-4 shadow-brandSecondary/20 shadow-l-lg hover:scale-100 hover:border-l-4 hover:border-brandAccent hover:bg-gradient-to-l hover:from-brandAccent/40 hover:to-transparent hover:shadow-brandAccent hover:transition-shadow"
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
