import Image from "next/image";
import LogoLM from "/public/assets/lb.org-branca.svg";

export default function Footer() {
  return (
    <footer className="bg-brandAccent/20">
      <div className="mx-auto px-4 pt-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="row-gap-6 mb-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="sm:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <Image
                alt="Logo"
                width={100}
                height={100}
                loading="lazy"
                src="/assets/jamilelogo2.svg"
                className="sm:mx-auto"
              />
            </a>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-brandSecondary">
                Advocacia e Consultoria Jurídica em Cidadania e Nacionalidade
                Portuguesa
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-brandSecondary">
              Contatos
            </p>
            <div className="flex">
              <p className="mr-1 text-brandSecondary">WhatsApp:</p>
              <p
                aria-label="WhatsApp"
                className="text-brandSecondary transition-colors duration-300 hover:text-brandSecondary/70"
              >
                +351 933 965 256
              </p>
            </div>
            <div className="flex">
              <p className="mr-1 text-brandSecondary">Email:</p>
              <p
                aria-label="Email"
                className="break-all text-brandSecondary transition-colors duration-300 hover:text-brandSecondary/70"
              >
                documentos@advogadajamilegomes.com
              </p>
            </div>
            <div className="flex">
              <p className="mr-1 text-brandSecondary">OA Portugal:</p>
              <p
                aria-label="Email"
                className="text-brandSecondary transition-colors duration-300 hover:text-brandSecondary/70"
              >
                67974L
              </p>
            </div>
            <div className="flex">
              <p className="mr-1 text-brandSecondary">OAB/ES:</p>
              <p
                aria-label="Email"
                className="text-brandSecondary transition-colors duration-300 hover:text-brandSecondary/70"
              >
                35.947/ES
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between border-t border-brandSecondary pt-5 pb-10 lg:flex-row">
          <p className="text-sm text-brandSecondary/60">
            Jamile Gomes Advocacia © 2023 - Todos os Direitos Reservados
          </p>
          <ul className="mb-3 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-5 lg:mb-0">
            <li className="text-xs text-brandSecondary/60">Desenvolvido por</li>
            <li className="text-brandSecondary/60">
              <Image
                alt="Logo"
                width={100}
                height={100}
                loading="lazy"
                src={LogoLM}
                className="w-10 sm:mx-auto"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-brandSecondary/75">
        <div className="mx-auto max-w-5xl p-4 py-10">
          <p className="text-center text-sm text-white">
            Este site não faz parte do Google nem do Facebook ou do Facebook
            Inc. Além disso, não oferecemos nenhum tipo de serviço oficial do
            governo, NÃO praticamos fraude, não somos uma empresa que vende
            criptoativos ou qualquer outro serviço.
          </p>
          <p className="text-center text-sm text-white">
            Essa empresa trabalha exclusivamente com serviços jurídicos.
          </p>
        </div>
      </div>
    </footer>
  );
}
