import Image from 'next/image'

export default function Footer () {
  const contactFooter = [
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          fill='currentColor'
          viewBox='0 0 256 256'
        >
          <path d='M232,128c0,.51,0,1,0,1.52-.34,14.26-5.63,30.48-28,30.48-23.14,0-28-17.4-28-32V88a8,8,0,0,0-8.53-8A8.17,8.17,0,0,0,160,88.27v4a48,48,0,1,0,6.73,64.05,40.19,40.19,0,0,0,3.38,5C175.48,168,185.71,176,204,176a54.81,54.81,0,0,0,9.22-.75,4,4,0,0,1,4.09,6A104.05,104.05,0,0,1,125.91,232C71.13,230.9,26.2,186.86,24.08,132.11A104,104,0,1,1,232,128ZM96,128a32,32,0,1,0,32-32A32,32,0,0,0,96,128Z'></path>
        </svg>
      ),
      contact: 'atendimento@advogadajamilegomes.com'
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          fill='currentColor'
          viewBox='0 0 256 256'
        >
          <path d='M152.58,145.23l23,11.48A24,24,0,0,1,152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155ZM232,128A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-40,24a8,8,0,0,0-4.42-7.16l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88A40,40,0,0,0,192,152Z'></path>
        </svg>
      ),
      contact: '+351 933-965-256'
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          fill='currentColor'
          viewBox='0 0 256 256'
        >
          <path d='M52.69,99.31a16,16,0,0,1,0-22.63l64-64a16,16,0,0,1,22.63,22.63l-64,64a16,16,0,0,1-22.63,0Zm190.63,17.37a16,16,0,0,0-22.63,0l-64,64a16,16,0,0,0,0,22.62h0a16,16,0,0,0,22.63,0l64-64A16,16,0,0,0,243.32,116.68ZM205.66,98.34l-48-48a8,8,0,0,0-11.31,0l-56,56a8,8,0,0,0,0,11.31L103,130.34,28.69,204.69a16,16,0,0,0,22.62,22.62L125.66,153l12.69,12.69a8,8,0,0,0,11.31,0l56-56A8,8,0,0,0,205.66,98.34Z'></path>
        </svg>
      ),
      contact: 'OA (Portugal) - 67974L / OAB - 35.947/ES'
    }
  ]

  return (
    <footer className='footer footer-center p-10 bg-brandRed-900 text-primary-content'>
      <div className='max-w-fit p-4 mx-auto rounded-lg shadow-lg bg-brandRose-700/30 backdrop-blur-sm'>
        <div>
          <Image
            alt='Logo'
            width={200}
            height={200}
            loading='lazy'
            src='/jamile-logobranca.png'
            className='sm:mx-auto'
          />
          <p className='p-4 text-white text-sm'>
            Jamile Gomes <br />
            Advocacia e Consultoria Jurídica em Cidadania e Nacionalidade
            Portuguesa
          </p>
          <ul className='mt-6 flex flex-col gap-x-10 gap-y-6 items-center'>
            {contactFooter.map((item, idx) => (
              <li key={idx} className='flex items-center gap-x-3'>
                <div className='flex-none text-white'>{item.icon}</div>
                <p>{item.contact}</p>
              </li>
            ))}
          </ul>
          <div className='p-4 max-w-fit mx-auto'>
            <div className='text-white text-sm'>
              Jamile Gomes Advocacia © 2023 - Todos os Direitos Reservados
            </div>
          </div>
        </div>
      </div>
      <ul className='flex flex-col sm:flex-row items-center gap-4 pt-2 sm:text-sm sm:mt-0'>
        <li className='text-stone-400'>Desenvolvido por</li>
        <li className='text-stone-200'>
          <Image
            alt='Logo'
            width={100}
            height={100}
            loading='lazy'
            src='/signaturemidia-branca.png'
            className='w-14 sm:mx-auto'
          />
        </li>
      </ul>
    </footer>
  )
}
