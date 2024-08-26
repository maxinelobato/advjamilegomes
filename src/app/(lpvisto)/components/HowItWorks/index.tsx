export default function HowItWorks() {
  return (
    <>
      <div className="mx-auto px-4 py-16 sm:max-w-6xl md:max-w-6xl md:px-24 lg:max-w-6xl lg:px-8 lg:py-10">
        <div className="rounded-lg bg-gradient-to-r from-brandSecondary to-brandAccent p-8 shadow-lg backdrop-blur-sm sm:p-16">
          <div className="flex flex-col lg:flex-row">
            <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
              <h1 className="font-sans text-3xl font-medium uppercase tracking-wide text-brandRose-200 sm:text-4xl sm:leading-none">
                Exigências necessárias da {""}
                <span className="bg-brandRose-200 bg-clip-text font-sans font-black text-transparent">
                  conservatória para sua cidadania
                </span>
              </h1>
            </div>
            <div className="lg:w-1/2">
              <p className="mb-4 text-right text-sm text-brandRose-200">
                Você receberá orientação quanto aos documentos necessários, após
                o envio destes, nós analisaremos se estão de acordo com as
                exigências da Conservatória, se estiverem de acordo,
                preencheremos o formulário e realizaremos o protocolo do seu
                pedido de nacionalidade, bem como o acompanhamento do processo
                até o final.
              </p>
              <div className="flex justify-end pt-4">
                {/* <ButtonHowItWorks /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
