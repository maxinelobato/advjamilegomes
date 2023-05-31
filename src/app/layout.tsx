import { Suspense } from 'react'
import './globals.css'
import { Montserrat_Alternates } from 'next/font/google'

const montserrat_alternates = Montserrat_Alternates({
  subsets: ['latin', 'cyrillic', 'cyrillic-ext', 'latin-ext', 'vietnamese'],
  weight: ['100', '200', '300', '400']
})

export const metadata = {
  title: 'Jamile Gomes - Advocacia e Consultoria Jurídica',
  description:
    'Advogada Especialista em Cidania e Nacionalidade para Brasileiros em Portugal'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={montserrat_alternates.className}>
        <Suspense>{children}</Suspense>
      </body>
    </html>
  )
}
