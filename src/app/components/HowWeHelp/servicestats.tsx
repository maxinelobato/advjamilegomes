import ButtonHero from '../ButtonHero'

export default function ServicesStats () {
  const features = [
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          fill='currentColor'
          viewBox='0 0 256 256'
        >
          <path d='M243.33,90.91,114.92,219.31a16,16,0,0,1-22.63,0l-71.62-72a16,16,0,0,1,0-22.61l24-24a16,16,0,0,1,22.57-.06l36.64,35.27.11.11h0l92.73-91.37a16,16,0,0,1,22.58,0l24,23.56A16,16,0,0,1,243.33,90.91Z'></path>
        </svg>
      ),
      title: 'Assessoria jurídica no pedido de visto'
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          fill='currentColor'
          viewBox='0 0 256 256'
        >
          <path d='M243.33,90.91,114.92,219.31a16,16,0,0,1-22.63,0l-71.62-72a16,16,0,0,1,0-22.61l24-24a16,16,0,0,1,22.57-.06l36.64,35.27.11.11h0l92.73-91.37a16,16,0,0,1,22.58,0l24,23.56A16,16,0,0,1,243.33,90.91Z'></path>
        </svg>
      ),
      title: 'Planejamento imigratório'
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          fill='currentColor'
          viewBox='0 0 256 256'
        >
          <path d='M243.33,90.91,114.92,219.31a16,16,0,0,1-22.63,0l-71.62-72a16,16,0,0,1,0-22.61l24-24a16,16,0,0,1,22.57-.06l36.64,35.27.11.11h0l92.73-91.37a16,16,0,0,1,22.58,0l24,23.56A16,16,0,0,1,243.33,90.91Z'></path>
        </svg>
      ),
      title: 'Consulta jurídica'
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          fill='currentColor'
          viewBox='0 0 256 256'
        >
          <path d='M243.33,90.91,114.92,219.31a16,16,0,0,1-22.63,0l-71.62-72a16,16,0,0,1,0-22.61l24-24a16,16,0,0,1,22.57-.06l36.64,35.27.11.11h0l92.73-91.37a16,16,0,0,1,22.58,0l24,23.56A16,16,0,0,1,243.33,90.91Z'></path>
        </svg>
      ),
      title: 'Transcrição de casamento'
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          fill='currentColor'
          viewBox='0 0 256 256'
        >
          <path d='M243.33,90.91,114.92,219.31a16,16,0,0,1-22.63,0l-71.62-72a16,16,0,0,1,0-22.61l24-24a16,16,0,0,1,22.57-.06l36.64,35.27.11.11h0l92.73-91.37a16,16,0,0,1,22.58,0l24,23.56A16,16,0,0,1,243.33,90.91Z'></path>
        </svg>
      ),
      title: 'Reagrupamento familiar'
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          fill='currentColor'
          viewBox='0 0 256 256'
        >
          <path d='M243.33,90.91,114.92,219.31a16,16,0,0,1-22.63,0l-71.62-72a16,16,0,0,1,0-22.61l24-24a16,16,0,0,1,22.57-.06l36.64,35.27.11.11h0l92.73-91.37a16,16,0,0,1,22.58,0l24,23.56A16,16,0,0,1,243.33,90.91Z'></path>
        </svg>
      ),
      title: 'Estatuto de igualdade + Cartão Cidadão'
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          fill='currentColor'
          viewBox='0 0 256 256'
        >
          <path d='M243.33,90.91,114.92,219.31a16,16,0,0,1-22.63,0l-71.62-72a16,16,0,0,1,0-22.61l24-24a16,16,0,0,1,22.57-.06l36.64,35.27.11.11h0l92.73-91.37a16,16,0,0,1,22.58,0l24,23.56A16,16,0,0,1,243.33,90.91Z'></path>
        </svg>
      ),
      title: 'Manifestação de interesse e outras formas de regularização'
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          fill='currentColor'
          viewBox='0 0 256 256'
        >
          <path d='M243.33,90.91,114.92,219.31a16,16,0,0,1-22.63,0l-71.62-72a16,16,0,0,1,0-22.61l24-24a16,16,0,0,1,22.57-.06l36.64,35.27.11.11h0l92.73-91.37a16,16,0,0,1,22.58,0l24,23.56A16,16,0,0,1,243.33,90.91Z'></path>
        </svg>
      ),
      title: 'Inscrição na Ordem dos Advogados'
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          fill='currentColor'
          viewBox='0 0 256 256'
        >
          <path d='M243.33,90.91,114.92,219.31a16,16,0,0,1-22.63,0l-71.62-72a16,16,0,0,1,0-22.61l24-24a16,16,0,0,1,22.57-.06l36.64,35.27.11.11h0l92.73-91.37a16,16,0,0,1,22.58,0l24,23.56A16,16,0,0,1,243.33,90.91Z'></path>
        </svg>
      ),
      title: 'NIF, NISS e outros documentos'
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          fill='currentColor'
          viewBox='0 0 256 256'
        >
          <path d='M243.33,90.91,114.92,219.31a16,16,0,0,1-22.63,0l-71.62-72a16,16,0,0,1,0-22.61l24-24a16,16,0,0,1,22.57-.06l36.64,35.27.11.11h0l92.73-91.37a16,16,0,0,1,22.58,0l24,23.56A16,16,0,0,1,243.33,90.91Z'></path>
        </svg>
      ),
      title: 'Troca de CNH pela carta portuguesa'
    }
  ]
  return (
    <>
      <div className='relative mt-6'>
        <ul className='grid gap-8 sm:grid-cols-2 lg:grid-cols-5'>
          {features.map((item, idx) => (
            <li
              key={idx}
              className='bg-brandOrange-900/70 space-y-3 p-4 rounded-lg drop-shadow-lg hover:transition-all'
            >
              <div className='flex items-center justify-center'>
                <div className='text-brandRed-900 pb-3'>{item.icon}</div>
              </div>
              <p className='text-center text-brandRed-900 font-semibold'>{item.title}</p>
            </li>
          ))}
        </ul>
        <div className='mt-10 flex justify-center'>
          <ButtonHero />
        </div>
      </div>
    </>
  )
}
