import {
  ArrowCircleUpRight,
  Briefcase,
  BuildingOffice,
  Certificate,
  CreditCard,
  Crosshair,
  DesktopTower,
  Laptop,
  PiggyBank,
  ReadCvLogo,
  Student,
  Swap,
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
      icon: <ReadCvLogo weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "V.D1 de Trabalho",
      desc: "Estrangeiros com promessa formal de trabalho ou um contrato de trabalho de pelo menos 12 meses em qualquer empresa sediada em Portugal",
    },
    {
      icon: <ReadCvLogo weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "Visto de Procura de Trabalho",
      desc: "Qualquer estrangeiro que tenha interesse de ir a Portugal para procurar trabalho",
    },
    {
      icon: <UsersFour weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "Visto Acompanhamento Familiar",
      desc: "Para familiares de requerente de visto de residência - esse visto é pedido em simultâneo com um dos outros visto de residência disponíveis, com exceção do visto de procura de trabalho",
    },
    {
      icon: <UsersFour weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "V.D6 Reagrupamento",
      desc: "Para familiar de residente legal em Portugal",
    },
    {
      icon: <Laptop weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "Visto Nômade/Remoto",
      desc: "Estrangeiro que trabalha remotamente e com rendimentos de no mínimo 4 salários mínimos portugueses mensais",
    },
    {
      icon: <PiggyBank weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "V.D7 Rendas Próprias",
      desc: "Para aposentados ou pessoas que percebem rendimentos mensais correspondente a pelo menos 1 salário mínimo português",
    },
    {
      icon: <Briefcase weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "V.D2 Empreendedor/Startup Visa",
      desc: "Para investidor ou empreendedor em Portugal que tenha um empreendimento economicamente relevante para Portugal",
    },
    {
      icon: (
        <DesktopTower weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />
      ),
      title: "Tech Visa",
      desc: "Para profissionais altamente qualificados de tecnologia da informação, engenheiro de software, programação, etc. Cadastrados também no Programa Tech Visa",
    },
    {
      icon: <Student weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "V.D4 Estudo",
      desc: "Para estrangeiros com matrícula ou carta de aceitação de instituição de ensino em Portugal que querem ampliar horizontes e melhorar seu currículo. ",
    },
    {
      icon: <Certificate weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "V.D3 Altamente Qualificado",
      desc: "Destina-se aos estrangeiros que irão exercer atividade altamente qualificada como cargos diretivos de grandes corporações ou atividades culturais por um período superior a 9 meses com remuneração mensal de no mínimo 1.5x ao salário mínimo bruto português",
    },
    {
      icon: <Crosshair weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "V.D4 Investigação",
      desc: "Para quem vai realizar atividade de investigação ou estudo em Portugal",
    },
    {
      icon: <Swap weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "V.D4 Intercâmbio",
      desc: "Para quem vai realizar atividade de investigação ou estudo em Portugal",
    },
    {
      icon: <Student weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "V.D4 Estágio",
      desc: "Para estudante aceito num estágio em instituição portuguesa",
    },
    {
      icon: <Student weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "V.D4 Voluntariado",
      desc: "Para pessoa que for convidada por entidade portuguesa para atividade voluntária",
    },
    {
      icon: <Student weight="fill" className="h-20 w-20 sm:h-24 sm:w-24" />,
      title: "V.D3 Docente ou Cultural",
      desc: "Para pessoa que tenha contrato de trabalho com empresa portuguesa ou promessa de contrato com valor de 1.5x ao salário mínimo bruto português mensal",
    },
  ];

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-8 md:px-8">
        <div className="mx-auto text-center">
          <div className="mx-auto max-w-4xl space-y-5 px-4 py-8 text-center">
            <h1 className="text-3xl font-medium uppercase tracking-wide text-brandSecondary sm:text-4xl sm:leading-none">
              Especialidades Jurídicas em {""}
              <span className="bg-brandPrimary bg-clip-text font-black text-transparent">
                Vistos para Portugal
              </span>
            </h1>
            <p className="font-medium text-brandPrimary">
              Ofereço suporte completo em processos de autorização de residência
              e vistos
            </p>
          </div>
        </div>
        <div className="relative mx-auto pt-4 sm:pt-2">
          <ul className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="group space-y-3 rounded-lg p-4 shadow-brandSecondary/20 shadow-l-lg hover:scale-100 hover:border-l-4 hover:border-brandAccent hover:bg-gradient-to-r hover:from-brandAccent/40 hover:to-transparent hover:shadow-brandAccent hover:transition-shadow"
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
      </section>
    </>
  );
}
