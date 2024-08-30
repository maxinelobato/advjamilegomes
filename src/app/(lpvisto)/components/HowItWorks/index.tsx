import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import {
  ButtonHome,
  ButtonHomeFlex,
  ButtonHomeText,
} from "../Buttons/ButtonCta";

export function HowItWorks() {
  return (
    <>
      <div className="mx-auto px-4 py-16 sm:max-w-6xl md:max-w-6xl md:px-24 lg:max-w-6xl lg:px-8 lg:py-10">
        <div className="rounded-lg bg-gradient-to-l from-transparent to-brandAccent/30 p-8 shadow-brandAccent/20 backdrop-blur-sm shadow-r-md sm:p-16">
          <div className="flex flex-col lg:flex-row">
            <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
              <h1 className="text-3xl font-medium uppercase tracking-wide text-brandSecondary sm:text-4xl sm:leading-none">
                Pronto para Iniciar {""}
                <span className="bg-brandRose-200 bg-clip-text font-black text-brandSecondary">
                  sua Jornada em Portugal?
                </span>
              </h1>
            </div>
            <div className="lg:w-1/2">
              <p className="mb-4 text-right text-lg text-brandSecondary">
                Estou pronta para ajudar você e sua família a se estabelecerem
                em Portugal com segurança e tranquilidade
              </p>
              <div className="flex justify-end pt-4">
                <div className="max-w-fit">
                  <ButtonHome href="https://api.whatsapp.com/send?phone=351933965256&text=Olá%20Dra.%20Jamile,%20vim%20pelo%20site%20e%20preciso%20de%20ajuda%20com%20o%20meu%20Visto.%20Podemos%20conversar%3F%20">
                    <ButtonHomeText>agende sua consulta agora</ButtonHomeText>
                    <ButtonHomeFlex>
                      <WhatsappLogo
                        className="h-5 w-5 sm:h-6 sm:w-6"
                        weight="fill"
                      />
                    </ButtonHomeFlex>
                  </ButtonHome>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
