import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brandAccent/20">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-3">
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
                className="transition-colors duration-300 text-brandSecondary hover:text-brandSecondary/70"
              >
                +351 933 965 256
              </p>
            </div>
            <div className="flex">
              <p className="mr-1 text-brandSecondary">Email:</p>
              <p
                aria-label="Email"
                className="break-all transition-colors duration-300 text-brandSecondary hover:text-brandSecondary/70"
              >
                atendimento@advogadajamilegomes.com
              </p>
            </div>
            <div className="flex">
              <p className="mr-1 text-brandSecondary">OA Portugal:</p>
              <p
                aria-label="Email"
                className="transition-colors duration-300 text-brandSecondary hover:text-brandSecondary/70"
              >
                67974L
              </p>
            </div>
            <div className="flex">
              <p className="mr-1 text-brandSecondary">OAB/ES:</p>
              <p
                aria-label="Email"
                className="transition-colors duration-300 text-brandSecondary hover:text-brandSecondary/70"
              >
                35.947/ES
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-brandSecondary lg:flex-row">
          <p className="text-sm text-brandSecondary/60">
            Jamile Gomes Advocacia © 2023 - Todos os Direitos Reservados
          </p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li className="text-brandSecondary/60 text-xs">Desenvolvido por</li>
            <li className="text-brandSecondary/60">
              <Image
                alt="Logo"
                width={100}
                height={100}
                loading="lazy"
                src="/assets/signaturemidia-preta.png"
                className="w-10 sm:mx-auto"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-brandSecondary/75">
        <div className="py-10 max-w-5xl mx-auto p-4">
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
