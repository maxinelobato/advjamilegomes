// import { Suspense } from 'react'
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic', 'cyrillic-ext', 'latin-ext', 'vietnamese'],
  weight: ['100', '200', '300', '400']
})

export const metadata = {
  title: 'Jamile Gomes - Advocacia e Consultoria Jurídica em Cidadania e Nacionalidade Portuguesa',
  description:
    'Advogada Especialista em Cidania e Nacionalidade para Brasileiros em Portugal',
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pt-BR'>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  )
}
