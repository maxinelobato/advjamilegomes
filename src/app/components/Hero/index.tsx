'use client'

import ButtonHero from '../ButtonHero'
import Navbar from '../Navbar'
export default function Hero () {
  // const features = [
  //   {
  //     name: 'Confiança',
  //     icon: (
  //       <svg
  //         xmlns='http://www.w3.org/2000/svg'
  //         width='40'
  //         height='40'
  //         fill='currentColor'
  //         viewBox='0 0 256 256'
  //       >
  //         <path d='M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-52.2,6.84-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z'></path>
  //       </svg>
  //     )
  //   },
  //   {
  //     name: 'Experiência',
  //     icon: (
  //       <svg
  //         xmlns='http://www.w3.org/2000/svg'
  //         width='40'
  //         height='40'
  //         fill='currentColor'
  //         viewBox='0 0 256 256'
  //       >
  //         <path d='M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z'></path>
  //       </svg>
  //     )
  //   },
  //   {
  //     name: '+ de 4000 contratos feitos',
  //     icon: (
  //       <svg
  //         xmlns='http://www.w3.org/2000/svg'
  //         width='40'
  //         height='40'
  //         fill='currentColor'
  //         viewBox='0 0 256 256'
  //       >
  //         <path d='M213.66,66.34l-40-40A8,8,0,0,0,168,24H88A16,16,0,0,0,72,40V56H56A16,16,0,0,0,40,72V216a16,16,0,0,0,16,16H168a16,16,0,0,0,16-16V200h16a16,16,0,0,0,16-16V72A8,8,0,0,0,213.66,66.34ZM136,192H88a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm0-32H88a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm64,24H184V104a8,8,0,0,0-2.34-5.66l-40-40A8,8,0,0,0,136,56H88V40h76.69L200,75.31Z'></path>
  //       </svg>
  //     )
  //   }
  // ]

  return (
    <>
      <div className="hero bg-no-repeat bg-fixed bg-cover bg-[url('/bgmobilemagick.webp')] sm:bg-[url('/bgmagick.webp')] loading">
        <div className='hero-overlay bg-gradient-to-tr from-black'>
          <Navbar />
          <section>
            <div className='max-w-screen-xl mx-auto px-4 py-4 gap-12 text-gray-600 md:px-8'>
              <div className='space-y-5 max-w-4xl mx-auto text-left'>
                <h1 className='py-4 text-4xl text-white font-extrabold mx-auto md:text-5xl'>
                Precisando de uma Advogada em Portugal para pedir a sua <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-red-500'>
                   Nacionalidade ou Cidadania?
                  </span>
                </h1>
                <p className='text-white max-w-2xl text-left'>
                  Tudo o que você precisa saber para tirar a sua Cidadania. Conheça os seus direitos!
                </p>
                <div className='py-4 gap-x-3 space-y-3 sm:flex sm:space-y-0'>
                  <ButtonHero />
                </div>
              </div>
              {/* <div className='flex flex-wrap py-8 items-center justify-center gap-6 xl:justify-center'>
                {features.map((item, idx) => (
                  <div
                    key={idx}
                    className='flex text-stone-800 items-center gap-x-2 text-sm'
                  >
                    {item.icon}
                    {item.name}
                  </div>
                ))}
              </div> */}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
