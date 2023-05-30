import Image from 'next/image'

export default function Navbar () {
  return (
    <>
      <header>
        <div className='mx-auto px-4 md:px-4'>
          <div className='max-w-7xl mx-auto text-center'>
            <nav className='items-center pt-5 mx-auto sm:px-4 sm:justify-center sm:mx-auto sm:space-x-4'>
              <div className='mt-6 mb-12'>
                <ul className='flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-12'>
                  <li>
                    <a href='/'>
                      <Image
                        src='/jamile-logobranca.png'
                        width={220}
                        height={50}
                        alt='Float UI logo'
                        priority
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}
