import Image from 'next/image'

export default function Footer () {
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
          <div className='p-4'>
            <div className='text-white text-sm'>OAB/SP - 371.054</div>
          </div>
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
