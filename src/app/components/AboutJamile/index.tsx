import Image from 'next/image'
export default function AboutJamile () {
  return (
    <>
      <div className='bg-gradient-to-tr from-brandRose-200 to-brandRose-700'>
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
          <div className='grid gap-5 row-gap-8 lg:grid-cols-2'>
            <div className='flex flex-col justify-center'>
              <div className='max-w-xl mb-6'>
                <h1 className='py-4 mb-5 font-sans text-3xl font-bold tracking-tight text-brandRed-900 sm:text-4xl sm:leading-none'>
                  Sobre a Dra.{' '}
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-brandRed-900 to-brandOrange-900'>
                    Jamile Gomes
                  </span>
                </h1>
              </div>
              <div className='grid gap-5 row-gap-8 sm:grid-cols-2'>
                <div className='bg-brandRed-900 border-l-8 border-brandOrange-900 rounded-lg'>
                  <div className='h-full p-5'>
                    <h6 className='text-brandRose-200 mb-2 font-semibold leading-5'>
                      Formada na Faculdade Pitágoras em 2020
                    </h6>
                    <p className='text-sm text-brandRose-700'>
                      Inscrição na Ordem dos Advogados do Brasil e na Ordem dos
                      Advogados de Portugal
                    </p>
                  </div>
                </div>
                <div className='bg-brandRed-900 border-l-8 border-brandOrange-900 rounded-lg'>
                  <div className='h-full p-5'>
                    <h6 className='text-brandRose-200 mb-2 font-semibold leading-5'>
                      Especilidade
                    </h6>
                    <p className='text-sm text-brandRose-700'>
                      Atuo no Direito Imigratório
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-1'>
              <Image
                className='object-contain w-auto h-auto rounded-lg shadow-lg sm:h-auto'
                width={600}
                height={600}
                loading='lazy'
                src='/aboutjamile.jpg'
                alt='About Jamile'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
