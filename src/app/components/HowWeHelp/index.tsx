import ButtonCard from '../ButtonCard'

export default function HowWeHelp () {
  const features = [
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          fill='currentColor'
          viewBox='0 0 256 256'
        >
          <path d='M224,48V168a8,8,0,0,1-2.76,6c-15.28,13.23-29.89,18-43.82,18-18.91,0-36.57-8.74-53-16.85C97.87,162,74.79,150.61,48,171.77V216a8,8,0,0,1-16,0V48a8,8,0,0,1,2.77-6h0c36-31.18,68.31-15.21,96.79-1.12C159,54.46,182.79,66.2,210.76,42A8,8,0,0,1,224,48Z'></path>
        </svg>
      ),
      title: 'Descendente de Português',
      desc: 'Se você sabe ou desconfia que é descendente de Português, nós podemos iremos te auxiliar a como solicitar a sua nacionalidade Portuguesa.'
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          fill='currentColor'
          viewBox='0 0 256 256'
        >
          <path d='M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z'></path>
        </svg>
      ),
      title: 'Tempo de Residência em Portugal',
      desc: 'Se está legal em Portugal há 5 anos ou mais, então você já tem direito a pedir a nacionalidade portuguesa.'
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          fill='currentColor'
          viewBox='0 0 256 256'
        >
          <path d='M134.16,24.1a4,4,0,0,0-3.56,1.81C120.3,41.48,120,55.79,120,56a8,8,0,0,0,9.68,7.79A8.24,8.24,0,0,0,136,55.68,8,8,0,0,1,144.8,48a8.14,8.14,0,0,1,7.2,8.23,24,24,0,0,1-48-.27c0-.63.09-10.78,5.44-24a4,4,0,0,0-4.59-5.39A104.16,104.16,0,0,0,24.07,131.66C26,186.72,71.23,231,126.32,231.9a104,104,0,0,0,7.84-207.8ZM80,127.91a12,12,0,1,1,12,12A12,12,0,0,1,80,127.91Zm80.27,54.77a61,61,0,0,1-64.54,0,8,8,0,0,1,8.54-13.54,45,45,0,0,0,47.46,0,8,8,0,0,1,8.54,13.54ZM164,139.91a12,12,0,1,1,12-12A12,12,0,0,1,164,139.91Z'></path>
        </svg>
      ),
      title: 'Filhos com Nacionalidade por Tempo de Residência',
      desc: 'Será concedido a nacionalidade portuguesa ao filho menor de 18 anos de quem adquiriu a nacionalidade por tempo de residência em Portugal'
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          fill='currentColor'
          viewBox='0 0 256 256'
        >
          <path d='M220.8,169.6A8,8,0,0,0,216,168h-8V64a32,32,0,0,0-32-32H40A32,32,0,0,0,8,64C8,77.61,18.05,85.54,19.2,86.4h0A7.89,7.89,0,0,0,24,88a8,8,0,0,0,4.87-14.33h0C28.83,73.62,24,69.74,24,64a16,16,0,0,1,32,0V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32C232,178.39,222,170.46,220.8,169.6ZM104,96h64a8,8,0,0,1,0,16H104a8,8,0,0,1,0-16Zm-8,40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H104A8,8,0,0,1,96,136Zm104,72H107.71A31.82,31.82,0,0,0,112,192a26.92,26.92,0,0,0-1.21-8h102a12.58,12.58,0,0,1,3.23,8A16,16,0,0,1,200,208Z'></path>
        </svg>
      ),
      title: 'Casamento/União de Facto com Português(a)',
      desc: 'Pode pedir a nacionalidade aquele que é casado ou vive em união de facto com um(a) português(a) há pelo menos 3 anos'
    }
  ]

  return (
    <>
      <div className='bg-gradient-to-r from-white to-orange-100 to-90%'>
        <div className='max-w-screen-xl mx-auto mb-6 px-4 py-8 md:px-8'>
          <div className='mx-auto text-center'>
            <div className='space-y-5 max-w-4xl mx-auto text-center px-4 py-8'>
              <h1 className='py-4 mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                Saiba quais documentos são necessários para a sua <br />{' '}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500'>
                  Nacionalidade ou Cidadania
                </span>
              </h1>
            </div>
          </div>
          <div className='relative mt-6'>
            <ul className='grid gap-8 sm:grid-cols-1 lg:grid-cols-4'>
              {features.map((item, idx) => (
                <li
                  key={idx}
                  className='bg-red-950 backdrop-blur-lg space-y-3 p-4 border rounded-lg drop-shadow-lg hover:transition-all'
                >
                  <div className='flex items-center justify-center'>
                    <div className='text-red-300 pb-3'>{item.icon}</div>
                  </div>
                  <h1 className='p-4 text-center text-lg text-gray-300 font-semibold'>
                    {item.title}
                  </h1>
                  <p className='text-center text-gray-300'>{item.desc}</p>
                  <ButtonCard />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
