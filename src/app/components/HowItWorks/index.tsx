export default function HowItWorks () {
  return (
    <>
      <div className='bg-gradient-to-br from-brandRose-200 to-brandRose-700'>
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10'>
          <div className='backdrop-blur-sm bg-white/30 p-8 rounded-lg shadow-lg sm:p-16'>
            <div className='flex flex-col lg:flex-row'>
              <div className='mb-6 lg:mb-0 lg:w-1/2 lg:pr-5'>
                <h1 className='py-4 mb-5 font-sans text-3xl font-bold tracking-tight text-brandRed-900 sm:text-4xl sm:leading-none'>
                  Entenda como irá funcionar o serviço de {''}
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-brandRed-900 to-brandOrange-900'>
                    Cidania ou Nacionalidade
                  </span>
                </h1>
              </div>
              <div className='lg:w-1/2'>
                <p className='text-right mb-4 text-base text-brandRed-900'>
                  Você receberá orientação quanto aos documentos necessários,
                  após o envio destes, nós analisaremos se estão de acordo com
                  as exigências da Conservatória, se estiverem de acordo,
                  preencheremos o formulário e realizaremos o protocolo do seu
                  pedido de nacionalidade, bem como o acompanhamento do processo
                  até o final.
                </p>
                <div className='pt-4 flex justify-end'>
                  <a
                    href='https://api.whatsapp.com/send?phone=351933965256&text=Ol%C3%A1%2C%20Dra.%20Jamile!%20Vim%20pelo%20site%20e%20Preciso%20de%20Ajuda%20com%20a%20minha%20Cidania/Nacionalidade.%20Podemos%20conversar%3F%20'
                    target='_blank'
                    id='click-buttonhero'
                  >
                    <button className='flex items-center gap-2 px-5 py-3 text-white font-bold duration-150 bg-brandRed-900 rounded-full hover:-translate-x-0 hover:duration-300 hover:scale-110 hover:transition-all'>
                      Eu posso ajudar
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        fill='#d9d9d9'
                        viewBox='0 0 256 256'
                      >
                        <path d='M152.58,145.23l23,11.48A24,24,0,0,1,152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155ZM232,128A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-40,24a8,8,0,0,0-4.42-7.16l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88A40,40,0,0,0,192,152Z'></path>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
