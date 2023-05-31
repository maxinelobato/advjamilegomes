'use client'

import { Disclosure } from '@headlessui/react'
import ChevronUpIcon from '../icons/chevronupicon'

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
      <div className='max-w-screen-xl mx-auto mb-6 px-4 py-8 md:px-8'>
        <div className='mx-auto text-center'>
          <div className='space-y-5 max-w-4xl mx-auto text-center px-4 py-8'>
            <h1 className='py-4 mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
              FAQ -{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500'>
                Dúvidas Frequentes
              </span>
            </h1>
          </div>
        </div>
        <div className='w-full px-4'>
          <div className='mx-auto w-full max-w-5xl rounded-2xl bg-white p-2'>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className='flex w-full justify-between rounded-lg bg-red-100 px-4 py-4 text-left text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75'>
                    <span className='font-semibold'>{faq.title1}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-red-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-stone-950'>
                    {faq.subtitle1}
                  </Disclosure.Panel>
                  <Disclosure as='div' className='mt-2'>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full justify-between rounded-lg bg-red-100 px-4 py-4 text-left text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75'>
                          <span className='font-semibold'>{faq.title2}</span>
                          <ChevronUpIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-red-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-stone-950'>
                          {faq.subtitle2}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as='div' className='mt-2'>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full justify-between rounded-lg bg-red-100 px-4 py-4 text-left text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75'>
                          <span className='font-semibold'>{faq.title3}</span>
                          <ChevronUpIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-red-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-stone-950'>
                          {faq.subtitle3}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as='div' className='mt-2'>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full justify-between rounded-lg bg-red-100 px-4 py-4 text-left text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75'>
                          <span className='font-semibold'>{faq.title4}</span>
                          <ChevronUpIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-red-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-stone-950'>
                          {faq.subtitle4}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </>
  )
}
