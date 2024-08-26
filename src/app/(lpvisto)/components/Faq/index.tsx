"use client";

export default function Faq() {
  const faqList = [
    {
      title:
        "Preciso ir pessoalmente para Portugal para pedir a nacionalidade?",
      subtitle: "Não, nós protocolamos o pedido para você na Conservatória.",
    },
    {
      title: "Meu bisavô é Português, tenho direito a nacionalidade?",
      subtitle:
        "A nacionalidade alcança somente até os netos, mas caso seu pai ou mãe ainda estejam vivos, você pode solicitar a nacionalidade para essa pessoa, para que após possa solicitar para você, pois então se tornará filho de português, entre em contato para saber mais.",
    },
    {
      title:
        "Minha família não tem informações sobre o meu parente português, o que fazer?",
      subtitle:
        "O processo de nacionalidade é mais rápido quando temos todas as informações, mas a falta de informação não impede que você localize o seu parente português. Nós também prestamos serviços de buscas, desejando contratar, basta entrar em contato pelo WhatsApp.",
    },
    {
      title:
        "Faltam alguns meses para completar os 5 anos de residência, já posso solicitar a nacionalidade?",
      subtitle:
        "Não, a nacionalidade só deve ser solicitada após os 5 anos completos, pois este é o principal requisito para garantir a sua nacionalidade portuguesa. Caso protocole o pedido antes, esta poderá ser negada e você precisará iniciar todo o processo novamente, bem como pagar pela taxa do novo pedido. O processo até o momento do aceite ou recusa do pedido demora alguns meses, portanto recomendamos que aguarde o tempo ideal e não arrisque o seu tempo e dinheiro.",
    },
  ];

  return (
    <>
      <div className="mx-auto px-4 pb-8 sm:max-w-6xl md:max-w-6xl md:px-24 lg:max-w-6xl lg:px-8 lg:pb-16">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
            <div className="mx-auto text-center">
              <div className="mx-auto max-w-4xl space-y-5 px-4 py-2 text-center">
                <h1 className="font-sans text-3xl font-medium uppercase tracking-wide text-brandSecondary sm:text-4xl sm:leading-none">
                  FAQ - {""}
                  <span className="bg-brandSecondary bg-clip-text font-sans font-black text-transparent">
                    Dúvidas Frequentes
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-1">
          <div className="mt-1 space-y-2">
            {faqList.map((item, idx) => (
              <div
                key={idx}
                tabIndex={0}
                className="collapse-arrow collapse rounded-lg bg-brandSecondary"
              >
                <input type="checkbox" className="peer" aria-label="checkbox" />
                <div className="collapse-title font-sans font-bold text-brandBase1-100">
                  {item.title}
                </div>
                <div className="collapse-content font-sans text-sm font-semibold text-brandBase2-200">
                  <p>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
