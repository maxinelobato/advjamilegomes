import Image from 'next/image'

export default function Footer () {
  return (
    <div className='bg-gradient-to-r from-black/30'>
      <footer className='mt-24 border-t'>
        <div className='max-w-screen-xl mx-auto px-4 text-white md:px-8'>
          <div className='pt-12 space-y-6 text-center max-w-screen-xl mx-auto sm:max-w-lg sm:mx-auto sm:text-center'>
            <Image
              alt='Logo'
              width={100}
              height={100}
              loading='lazy'
              src='/acorreialawbranca.svg'
              className='w-24 mx-auto sm:mx-auto'
            />
            <p className='text-stone-200 font-medium'>
              Advocacia Especializada em Contratos
            </p>
            <div className='p-4 max-w-fit mx-auto rounded-xl shadow-lg bg-black/30 backdrop-blur-sm'>
              <p className='text-stone-200 font-medium'>Nossos Contatos:</p>
              <div className='items-center gap-x-3 space-y-3 sm:flex sm:justify-center sm:space-y-0'>
                <p className='flex items-center justify-center gap-x-2 py-2 px-4 text-stone-200 font-medium md:inline-flex'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    fill='currentColor'
                    viewBox='0 0 256 256'
                  >
                    <path d='M152.58,145.23l23,11.48A24,24,0,0,1,152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155ZM232,128A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-40,24a8,8,0,0,0-4.42-7.16l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88A40,40,0,0,0,192,152Z'></path>
                  </svg>
                  (11) 91354-1327
                </p>
                <p className='flex items-center justify-center gap-x-2 py-2 px-4 text-stone-200 font-medium md:inline-flex'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    fill='currentColor'
                    viewBox='0 0 256 256'
                  >
                    <path d='M232,128c0,.51,0,1,0,1.52-.34,14.26-5.63,30.48-28,30.48-23.14,0-28-17.4-28-32V88a8,8,0,0,0-8.53-8A8.17,8.17,0,0,0,160,88.27v4a48,48,0,1,0,6.73,64.05,40.19,40.19,0,0,0,3.38,5C175.48,168,185.71,176,204,176a54.81,54.81,0,0,0,9.22-.75,4,4,0,0,1,4.09,6A104.05,104.05,0,0,1,125.91,232C71.13,230.9,26.2,186.86,24.08,132.11A104,104,0,1,1,232,128ZM96,128a32,32,0,1,0,32-32A32,32,0,0,0,96,128Z'></path>
                  </svg>
                  anderson@acorreialaw.com
                </p>
              </div>
            </div>
            <div className='p-4 max-w-fit mx-auto rounded-xl shadow-lg bg-black/30 backdrop-blur-sm'>
              <div className='text-white text-sm'>OAB/SP - 371.054</div>
            </div>
          </div>
          <div className='text-stone-200 mt-10 py-10 border-t-2 items-center justify-between sm:flex'>
            <p className='text-center'>
              © 2023 Acorreialaw Advogados. Todos os Direitos Reservados.
            </p>
            <ul className='flex flex-col sm:flex-row items-center gap-4 mt-6 sm:text-sm sm:mt-0'>
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
          </div>
        </div>
      </footer>
    </div>
  )
}
