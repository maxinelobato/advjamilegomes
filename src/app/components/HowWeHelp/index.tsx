import ServicesStats from './servicestats'

export default function HowWeHelp () {
  const features = [
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 256 256'
          className='w-24 h-24'
        >
          <path d='M224,48V168a8,8,0,0,1-2.76,6c-15.28,13.23-29.89,18-43.82,18-18.91,0-36.57-8.74-53-16.85C97.87,162,74.79,150.61,48,171.77V216a8,8,0,0,1-16,0V48a8,8,0,0,1,2.77-6h0c36-31.18,68.31-15.21,96.79-1.12C159,54.46,182.79,66.2,210.76,42A8,8,0,0,1,224,48Z'></path>
        </svg>
      ),
      title: 'Descendente de Português',
      desc: 'Se você sabe ou desconfia que é descendente de Português, nós podemos solicitar a sua nacionalidade Portuguesa'
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 256 256'
          className='w-24 h-24'
        >
          <path d='M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z'></path>
        </svg>
      ),
      title: 'Tempo de Residência em Portugal',
      desc: 'Se está legal em Portugal há 5 anos ou mais, então você já tem direito a pedir a nacionalidade portuguesa'
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 256 256'
          className='w-24 h-24'
        >
          <path d='M134.16,24.1a4,4,0,0,0-3.56,1.81C120.3,41.48,120,55.79,120,56a8,8,0,0,0,9.68,7.79A8.24,8.24,0,0,0,136,55.68,8,8,0,0,1,144.8,48a8.14,8.14,0,0,1,7.2,8.23,24,24,0,0,1-48-.27c0-.63.09-10.78,5.44-24a4,4,0,0,0-4.59-5.39A104.16,104.16,0,0,0,24.07,131.66C26,186.72,71.23,231,126.32,231.9a104,104,0,0,0,7.84-207.8ZM80,127.91a12,12,0,1,1,12,12A12,12,0,0,1,80,127.91Zm80.27,54.77a61,61,0,0,1-64.54,0,8,8,0,0,1,8.54-13.54,45,45,0,0,0,47.46,0,8,8,0,0,1,8.54,13.54ZM164,139.91a12,12,0,1,1,12-12A12,12,0,0,1,164,139.91Z'></path>
        </svg>
      ),
      title: 'Transmitir a nacionalidade adquirida para o(a) filho(a)',
      desc: 'Será concedido a nacionalidade portuguesa ao filho menor de 18 anos de quem adquiriu a nacionalidade por tempo de residência em Portugal'
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 256 256'
          className='w-24 h-24'
        >
          <path d='M220.8,169.6A8,8,0,0,0,216,168h-8V64a32,32,0,0,0-32-32H40A32,32,0,0,0,8,64C8,77.61,18.05,85.54,19.2,86.4h0A7.89,7.89,0,0,0,24,88a8,8,0,0,0,4.87-14.33h0C28.83,73.62,24,69.74,24,64a16,16,0,0,1,32,0V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32C232,178.39,222,170.46,220.8,169.6ZM104,96h64a8,8,0,0,1,0,16H104a8,8,0,0,1,0-16Zm-8,40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H104A8,8,0,0,1,96,136Zm104,72H107.71A31.82,31.82,0,0,0,112,192a26.92,26.92,0,0,0-1.21-8h102a12.58,12.58,0,0,1,3.23,8A16,16,0,0,1,200,208Z'></path>
        </svg>
      ),
      title: 'Casamento/União de Facto com Português(a)',
      desc: 'Pode pedir a nacionalidade aquele que é casado ou vive em união de facto com um(a) português(a)'
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 256 256'
          className='w-24 h-24'
        >
          <path d='M248,160a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16H56.45a73.54,73.54,0,0,1-.45-8,72,72,0,0,1,144,0,73.54,73.54,0,0,1-.45,8H240A8,8,0,0,1,248,160Zm-40,32H48a8,8,0,0,0,0,16H208a8,8,0,0,0,0-16ZM80.84,59.58a8,8,0,0,0,14.32-7.16l-8-16a8,8,0,0,0-14.32,7.16ZM20.42,103.16l16,8a8,8,0,1,0,7.16-14.31l-16-8a8,8,0,1,0-7.16,14.31ZM216,112a8,8,0,0,0,3.57-.84l16-8a8,8,0,1,0-7.16-14.31l-16,8A8,8,0,0,0,216,112ZM164.42,63.16a8,8,0,0,0,10.74-3.58l8-16a8,8,0,0,0-14.32-7.16l-8,16A8,8,0,0,0,164.42,63.16Z'></path>
        </svg>
      ),
      title: 'Nascimento',
      desc: 'Se você reside em Portugal e o seu filho nasceu em terras portuguesas, ele pode ter direito a nacionalidade portuguesa'
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 256 256'
          className='w-24 h-24'
        >
          <path d='M164.47,195.63a8,8,0,0,1-6.7,12.37H10.23a8,8,0,0,1-6.7-12.37,95.83,95.83,0,0,1,47.22-37.71,60,60,0,1,1,66.5,0A95.83,95.83,0,0,1,164.47,195.63Zm87.91-.15a95.87,95.87,0,0,0-47.13-37.56A60,60,0,0,0,144.7,54.59a4,4,0,0,0-1.33,6A75.83,75.83,0,0,1,147,150.53a4,4,0,0,0,1.07,5.53,112.32,112.32,0,0,1,29.85,30.83,23.92,23.92,0,0,1,3.65,16.47,4,4,0,0,0,3.95,4.64h60.3a8,8,0,0,0,7.73-5.93A8.22,8.22,0,0,0,252.38,195.48Z'></path>
        </svg>
      ),
      title: 'Pai ou mãe de criança que nasceu em Portugal',
      desc: 'Se o seu filho adquiriu nacionalidade portuguesa por nascimento, você pode ter direito à nacionalidade portuguesa'
    }
  ]

  return (
    <>
      <section className='bg-gradient-to-br from-brandRose-200 to-brandRose-700'>
        <div className='max-w-screen-xl mx-auto px-4 py-8 md:px-8'>
          <div className='mx-auto text-center'>
            <div className='space-y-5 max-w-4xl mx-auto text-center px-4 py-8'>
              <h1 className='py-4 mb-5 font-sans text-3xl font-bold tracking-tight text-brandRed-900 sm:text-4xl sm:leading-none'>
                Saiba quais documentos são necessários para a sua{' '}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-brandRed-900 to-brandOrange-900'>
                  Nacionalidade ou Cidadania
                </span>
              </h1>
            </div>
          </div>
          <div className='mx-auto relative pt-4 sm:pt-2'>
            <ul className='grid gap-8 sm:grid-cols-1 lg:grid-cols-3'>
              {features.map((item, idx) => (
                <li
                  key={idx}
                  className='bg-brandRed-900 space-y-3 p-4 rounded-lg drop-shadow-lg hover:transition-all'
                >
                  <div className='flex items-center justify-center'>
                    <div className='text-brandOrange-900 pb-1'>{item.icon}</div>
                  </div>
                  <h1 className='text-center text-lg font-bold text-brandRose-200 '>
                    {item.title}
                  </h1>
                  <p className='text-center text-sm text-brandRose-200'>{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className='mx-auto text-center'>
            <div className='space-y-5 max-w-4xl mx-auto text-center px-4 py-8'>
              <h1 className='py-4 mb-5 font-sans text-3xl font-bold tracking-tight text-brandRed-900 sm:text-4xl sm:leading-none'>
                Veja todos os serviços que{' '}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-brandRed-900 to-brandOrange-900'>
                  podemos lhe auxiliar
                </span>
              </h1>
            </div>
          </div>
          <ServicesStats /> */}
        </div>
      </section>
    </>
  )
}
