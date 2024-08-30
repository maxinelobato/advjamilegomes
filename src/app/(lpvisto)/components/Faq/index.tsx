"use client";

import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import {
  ButtonHome,
  ButtonHomeFlex,
  ButtonHomeText,
} from "../Buttons/ButtonCta";

export default function Faq() {
  const faqList = [
    {
      title: "Qual é o prazo para obter o visto?",
      subtitle: "...",
    },
    {
      title: "Quais são os requisitos para o Golden Visa?",
      subtitle: "...",
    },
    {
      title: "Como funciona o processo de nacionalidade portuguesa?",
      subtitle: "...",
    },
  ];

  return (
    <>
      <div className="mx-auto px-4 pb-8 sm:max-w-6xl md:max-w-6xl md:px-24 lg:max-w-6xl lg:px-8 lg:pb-16">
        <div className="max-w-xl sm:mx-auto lg:max-w-4xl">
          <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-4xl">
            <div className="mx-auto text-center">
              <div className="mx-auto max-w-4xl space-y-5 px-4 py-2 text-center">
                <h1 className="text-3xl font-medium uppercase tracking-wide text-brandSecondary sm:text-4xl sm:leading-none">
                  FAQ de {""}
                  <span className="bg-brandSecondary bg-clip-text font-black text-transparent">
                    Perguntas Frequentes
                  </span>
                </h1>
                <p className="font-medium text-brandPrimary">
                  Respostas para as dúvidas mais comuns sobre os processos de
                  vistos e cidadania em Portugal
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-1">
          <div className="mt-1 space-y-3">
            {faqList.map((item, idx) => (
              <div
                key={idx}
                tabIndex={0}
                className="collapse-arrow collapse rounded-lg border-l-4 border-l-brandSecondary shadow-brandSecondary/20 shadow-r-md"
              >
                <input type="checkbox" className="peer" aria-label="checkbox" />
                <div className="collapse-title font-sans font-bold text-brandSecondary">
                  {item.title}
                </div>
                <div className="collapse-content font-sans text-sm font-semibold text-brandSecondary/90">
                  <p>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-fit px-4 pt-4 text-center sm:pt-12">
          <ButtonHome href="https://api.whatsapp.com/send?phone=351933965256&text=Olá%20Dra.%20Jamile,%20vim%20pelo%20site%20e%20preciso%20de%20ajuda%20com%20o%20meu%20Visto.%20Podemos%20conversar%3F%20">
            <ButtonHomeText>Ainda Tem Dúvidas? Entre em Contato</ButtonHomeText>
            <ButtonHomeFlex>
              <WhatsappLogo className="h-5 w-5 sm:h-6 sm:w-6" weight="fill" />
            </ButtonHomeFlex>
          </ButtonHome>
        </div>
      </div>
    </>
  );
}
