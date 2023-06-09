export default function ButtonFloat () {
  return (
    <>
    <div className='z-[100] group fixed bottom-4 right-4 p-2 flex items-end justify-end w-24 h-24 hover:-translate-x-0 hover:duration-300 hover:scale-110 hover:transition-all'>
        <div className='drop-shadow-lg text-white shadow-xl flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-green-600 to-green-800 z-50 absolute  '>
          <a
            href='https://api.whatsapp.com/send?phone=351933965256&text=Ol%C3%A1%2C%20Dra.%20Jamile!%20Vim%20pelo%20site%20e%20Preciso%20de%20Ajuda%20com%20a%20minha%20Cidania/Nacionalidade.%20Podemos%20conversar%3F%20'
            style={{ textDecoration: 'none' }}
            target='_blank'
            aria-label="Clique no Botão"
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              fill='#d9d9d9'
              viewBox='0 0 256 256'
              className='w-6 h-6'
            >
              <path d='M152.58,145.23l23,11.48A24,24,0,0,1,152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155ZM232,128A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-40,24a8,8,0,0,0-4.42-7.16l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88A40,40,0,0,0,192,152Z'></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  )
}
