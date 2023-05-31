import ButtonHero from '../ButtonHero'

export default function HowItWorks () {
  return (
    <>
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='bg-red-200 p-8 rounded-lg shadow-2xl sm:p-16'>
          <div className='flex flex-col lg:flex-row'>
            <div className='mb-6 lg:mb-0 lg:w-1/2 lg:pr-5'>
              <h1 className='py-4 mb-5 font-sans text-3xl font-bold tracking-tight text-red-600 sm:text-4xl sm:leading-none'>
                Entenda como irá funcionar o serviço de {''}
                <span className='text-red-950 bg-clip-text'>
                  Cidania ou Nacionalidade
                </span>
              </h1>
            </div>
            <div className='lg:w-1/2'>
              <p className='mb-4 text-base text-gray-700'>
                Você receberá orientação quanto aos documentos necessários, após
                o envio destes, nós analisaremos se estão de acordo com as
                exigências da Conservatória, se estiverem de acordo,
                preencheremos o formulário e realizaremos o protocolo do seu
                pedido de nacionalidade, bem como o acompanhamento do processo
                até o final.
              </p>
              <ButtonHero />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
