import { Suspense } from 'react'
import './globals.css'
import { Montserrat } from 'next/font/google'
import Script from 'next/script'

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic', 'cyrillic-ext', 'latin-ext', 'vietnamese'],
  weight: ['100', '200', '300', '400']
})

export const metadata = {
  title:
    'Jamile Gomes - Advocacia e Consultoria Jurídica em Cidadania e Nacionalidade Portuguesa',
  description:
    'Advogada Especialista em Cidania e Nacionalidade para Brasileiros em Portugal'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pt-BR'>
      <Suspense>
        <Script
          id='gtag-base'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', 'GTM-TTQ336T');
          `
          }}
        ></Script>
      </Suspense>
      <body className={montserrat.className}>
        <Suspense>{children}</Suspense>
        <Suspense>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=GTM-TTQ336T`}
              height='0'
              width='0'
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        </Suspense>
      </body>
    </html>
  )
}
