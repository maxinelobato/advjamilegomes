import "./globals.css";
import { Montserrat } from "next/font/google";



const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata = {
  title:
    "Jamile Gomes - Advocacia e Consultoria Jurídica em Visto, Cidadania e Nacionalidade Portuguesa",
  description:
    "Advogada Especialista em Visto, Cidania e Nacionalidade para Brasileiros em Portugal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.className} scroll-smooth antialiased`}>
        {children}
        </body>
    </html>
  );
}
