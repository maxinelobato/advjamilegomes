import "./globals.css";
import { Montserrat } from "next/font/google";
import Script from "next/script";

const GTM_ID = 'GTM-TTQ336T'

const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata = {
  title:
    "Jamile Gomes - Advocacia e Consultoria Jurídica em Cidadania e Nacionalidade Portuguesa",
  description:
    "Advogada Especialista em Cidania e Nacionalidade para Brasileiros em Portugal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
       <Script id="google-tag-manager" strategy="worker">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      <body className={`${montserrat.variable} scroll-smooth antialiased`}>
      <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />
        {children}
        </body>
    </html>
  );
}
