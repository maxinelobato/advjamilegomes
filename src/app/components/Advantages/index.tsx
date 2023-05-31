import Image from 'next/image'

export default function Advantages () {
  const features = [
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='44'
          height='44'
          fill='currentColor'
          viewBox='0 0 256 256'
        >
          <path d='M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z'></path>
        </svg>
      ),
      title: 'Segurança jurídica em eventual contratempo'
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='44'
          height='44'
          fill='currentColor'
          viewBox='0 0 256 256'
        >
          <path d='M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z'></path>
        </svg>
      ),
      title:
        'Diminui riscos de inadimplência (quando uma das partes não cumpre o contrato)'
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='44'
          height='44'
          fill='currentColor'
          viewBox='0 0 256 256'
        >
          <path d='M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z'></path>
        </svg>
      ),
      title: 'Proteção em caso de desistência da contratação'
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='44'
          height='44'
          fill='currentColor'
          viewBox='0 0 256 256'
        >
          <path d='M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z'></path>
        </svg>
      ),
      title: 'Não gera dúvidas sobre o que é contratado'
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='44'
          height='44'
          fill='currentColor'
          viewBox='0 0 256 256'
        >
          <path d='M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z'></path>
        </svg>
      ),
      title:
        'Transparência - Ambas as partes sabem e entendem quais são as suas responsabilidades'
    }
  ]

  return (
    <>
      <section className='relative max-w-screen-xl mx-auto py-4 px-4 md:px-8'>
        <div className='absolute top-0 left-0 w-full h-full bg-white opacity-40'></div>
        <div className='relative z-10 gap-5 items-center lg:flex'>
          <div className='flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left'>
            <div className='space-y-5 max-w-4xl mx-auto text-left px-4 py-8'>
              <h1 className='text-stone-950 font-semibold'>
                Atuamos em todo o Brasil
              </h1>
              <h2 className='text-4xl text-stone-700 font-extrabold md:text-5xl'>
                Nós elaboramos o seu contrato com o objetivo de ajudá-lo a{' '}
                <span className='text-stone-950 underline underline-offset-4 decoration-stone-700'>
                  evitar problemas futuros
                </span>
              </h2>
              <div className='pt-8 max-w-lg lg:max-w-none'>
                <ul className='space-y-4'>
                  {features.map((item, idx) => (
                    <li key={idx} className='flex gap-x-4'>
                      <div className='flex-none w-12 h-8 text-stone-950 rounded-lg flex justify-center items-center'>
                        {item.icon}
                      </div>
                      <div>
                        <h1 className='text-lg text-gray-800 font-semibold'>
                          {item.title}
                        </h1>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className='flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto'>
            <Image
              src='/img/contratosmagick.webp'
              width={600}
              height={600}
              loading='lazy'
              alt='Image Right'
            />
          </div>
        </div>
      </section>
    </>
  )
}
