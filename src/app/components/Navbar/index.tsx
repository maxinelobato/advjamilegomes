import Image from 'next/image'

export default function Navbar () {
  return (
    <>
      <header>
        <nav className='items-center -mt-none mx-auto sm:px-4 sm:-mt-20 sm:justify-center sm:mx-auto sm:space-x-4'>
          <div className='pb-12'>
            <ul className='flex gap-x-10 gap-y-6 flex-wrap items-center justify-start md:gap-x-12'>
              <li>
                <a href='/'>
                  <Image
                    src='/jamile-logopreta.png'
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
      </header>
    </>
  )
}
