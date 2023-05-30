import Image from 'next/image'
import Footer from '../Footer'
export default function AboutJamile () {
  return (
    <>
      <div className='bg-gradient-to-t from-stone-950 to-white to-70%'>
        <section className='py-6'>
          <div className='max-w-screen-xl mx-auto px-4 gap-x-12 items-center justify-between lg:flex md:px-4'>
            <div className='mt-6 gap-12 sm:mt-0 md:flex lg:block'>
              <div className='space-y-5 max-w-2xl mx-auto text-center px-4 py-4 sm:text-left'>
                <h1 className='text-stone-950 font-semibold'>
                  Sobre a Acorreialaw
                </h1>
                <h2 className='text-4xl text-stone-700 font-extrabold md:text-5xl'>
                  Dr. Anderson Bispo Correia é especialista em{' '}
                  <span className='text-stone-950 underline underline-offset-4 decoration-stone-700'>
                    {' '}
                    Direito Contratual
                  </span>
                </h2>
                <p className='pb-8 drop-shadow-lg text-lg text-gray-800 font-semibold mx-auto mt-6 sm:break-after-all'>
                  Adquirindo experiência ao longo dos mais de 10 anos seja em
                  escritórios de advocacia seja em empresas de pequeno ou de
                  grande porte com objetivo de atender seus clientes de forma
                  puramente transparente, trazendo uma advocacia moderna e menos
                  burocrática, utilizando não apenas palavras menos complexas
                  nos instrumentos jurídicos mas um atendimento
                  flexível e humanizado.
                </p>
              </div>
            </div>
            <div className='lg:block lg:max-w-lg'>
              <Image
                src='/img/anderson2.jpg'
                width={400}
                height={300}
                loading='lazy'
                className='rounded-xl shadow-xl drop-shadow-xl'
                alt='About Anderson'
              />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}
