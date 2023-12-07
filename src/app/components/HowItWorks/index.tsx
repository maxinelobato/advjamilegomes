import ButtonHero from "../ButtonHero";

export default function HowItWorks() {
  return (
    <>
      <section className="bg-gradient-to-br from-brandRose-200 to-brandRose-700">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
          <div className="backdrop-blur-sm bg-brandRed-900 p-8 rounded-lg shadow-lg sm:p-16">
            <div className="flex flex-col lg:flex-row">
              <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                <h1 className="uppercase font-sans font-medium text-3xl tracking-wide text-brandRose-200 sm:text-4xl sm:leading-none">
                  Exigências necessárias da {""}
                  <span className="font-black font-sans text-transparent bg-clip-text bg-brandRose-200">
                    conservatória para sua cidadania
                  </span>
                </h1>
              </div>
              <div className="lg:w-1/2">
                <p className="text-right mb-4 text-sm text-brandRose-200">
                  Você receberá orientação quanto aos documentos necessários,
                  após o envio destes, nós analisaremos se estão de acordo com
                  as exigências da Conservatória, se estiverem de acordo,
                  preencheremos o formulário e realizaremos o protocolo do seu
                  pedido de nacionalidade, bem como o acompanhamento do processo
                  até o final.
                </p>
                <div className="pt-4 flex justify-end">
                  <ButtonHero />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
