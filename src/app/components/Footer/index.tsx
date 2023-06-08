import Image from 'next/image'

export default function Footer () {
  return (
    <div className='bg-brandRed-900'>
      <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div className='grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-3'>
          <div className='sm:col-span-2'>
            <a
              href='/'
              aria-label='Go home'
              title='Company'
              className='inline-flex items-center'
            >
              <Image
                alt='Logo'
                width={100}
                height={100}
                loading='lazy'
                src='/jamile-logobranca.png'
                className='sm:mx-auto'
              />
            </a>
            <div className='mt-6 lg:max-w-sm'>
              <p className='text-sm text-brandRose-200'>
                Advocacia e Consultoria Jurídica em Cidadania e Nacionalidade
                Portuguesa
              </p>
            </div>
          </div>
          <div className='space-y-2 text-sm'>
            <p className='text-base font-bold tracking-wide text-brandRose-200'>
              Contatos
            </p>
            <div className='flex'>
              <p className='mr-1 text-brandRose-200'>WhatsApp:</p>
              <p
                aria-label='WhatsApp'
                className='transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800'
              >
                +351 933 965 256
              </p>
            </div>
            <div className='flex'>
              <p className='mr-1 text-brandRose-200'>Email:</p>
              <p
                aria-label='Email'
                className='break-all transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800'
              >
                atendimento@advogadajamilegomes.com
              </p>
            </div>
            <div className='flex'>
              <p className='mr-1 text-brandRose-200'>OA Portugal:</p>
              <p
                aria-label='Email'
                className='transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800'
              >
                67974L
              </p>
            </div>
            <div className='flex'>
              <p className='mr-1 text-brandRose-200'>OAB/ES:</p>
              <p
                aria-label='Email'
                className='transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800'
              >
                35.947/ES
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row'>
          <p className='text-sm text-stone-400'>
            Jamile Gomes Advocacia © 2023 - Todos os Direitos Reservados
          </p>
          <ul className='flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row'>
            <li className='text-stone-400 text-xs'>Desenvolvido por</li>
            <li className='text-stone-200'>
              <Image
                alt='Logo'
                width={100}
                height={100}
                loading='lazy'
                src='/signaturemidia-branca.png'
                className='w-10 sm:mx-auto'
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
