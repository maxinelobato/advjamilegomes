export default function Faq () {
  const faq = {
    title1: 'Preciso ir pessoalmente para Portugal para pedir a nacionalidade?',
    subtitle1: 'Não, nós protocolamos o pedido para você na Conservatória.',
    title2: 'Meu bisavô é Português, tenho direito a nacionalidade?',
    subtitle2:
      'A nacionalidade alcança somente até os netos, mas caso seu pai ou mãe ainda estejam vivos, você pode solicitar a nacionalidade para essa pessoa, para que após possa solicitar para você, pois então se tornará filho de português, entre em contato para saber mais.',
    title3:
      'Minha família não tem informações sobre o meu parente português, o que fazer?',
    subtitle3:
      'O processo de nacionalidade é mais rápido quando temos todas as informações, mas a falta de informação não impede que você localize o seu parente português. Nós também prestamos serviços de buscas, desejando contratar, basta entrar em contato pelo WhatsApp.',
    title4:
      'Faltam alguns meses para completar os 5 anos de residência, já posso solicitar a nacionalidade?',
    subtitle4:
      'Não, a nacionalidade só deve ser solicitada após os 5 anos completos, pois este é o principal requisito para garantir a sua nacionalidade portuguesa. Caso protocole o pedido antes, esta poderá ser negada e você precisará iniciar todo o processo novamente, bem como pagar pela taxa do novo pedido. O processo até o momento do aceite ou recusa do pedido demora alguns meses, portanto recomendamos que aguarde o tempo ideal e não arrisque o seu tempo e dinheiro.'
  }

  return (
    <>
      <div className='bg-gradient-to-tr from-brandRose-200 to-brandRose-700'>
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
          <div className='max-w-xl sm:mx-auto lg:max-w-2xl'>
            <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
              <div className='mx-auto text-center'>
                <div className='space-y-5 max-w-4xl mx-auto text-center px-4 py-2'>
                  <h1 className='py-4 mb-5 font-sans text-3xl font-bold tracking-tight text-brandRed-900 sm:text-4xl sm:leading-none'>
                    FAQ -{' '}
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-brandRed-900 to-brandOrange-900'>
                      Dúvidas Frequentes
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className='max-w-screen-xl sm:mx-auto'>
            <div className='grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2'>
              <div className='space-y-8'>
                <div>
                  <p className='mb-4 font-bold text-brandRed-900'>{faq.title1}</p>
                  <p className='px-4 pt-2 pb-2 text-sm text-brandRed-900'>
                    {faq.subtitle1}
                  </p>
                </div>
                <div>
                  <p className='mb-4 font-bold text-brandRed-900'>{faq.title2}</p>
                  <p className='px-4 pt-2 pb-2 text-sm text-brandRed-900'>
                    {faq.subtitle2}
                  </p>
                </div>
              </div>
              <div className='space-y-8'>
                <div>
                  <p className='mb-4 font-bold text-brandRed-900'>{faq.title3}</p>
                  <p className='px-4 pt-2 pb-2 text-sm text-brandRed-900'>
                    {faq.subtitle3}
                  </p>
                </div>
                <div>
                  <p className='mb-4 font-bold text-brandRed-900'>{faq.title4}</p>
                  <p className='px-4 pt-2 pb-2 text-sm text-brandRed-900'>
                    {faq.subtitle4}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
