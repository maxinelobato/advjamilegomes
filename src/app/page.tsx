import Image from 'next/image'
import {
  ButtonHome,
  ButtonHomeFlex,
  ButtonHomeText,
} from '@/app/components/ButtonCta'
import {
  HeroDivide,
  HeroH1,
  HeroGradient,
  HeroParagraph,
  HeroSectionProperty,
  HeroRoot,
  HeroParagraphStrong,
} from '@/app/components/HeroComponents'
import imgDesktop from '@/../../public/assets/portugalmagick.webp'
import imgMobile from '@/../../public/assets/portugalmagick.webp'
import LogoJam from '@/../../public/assets/jamilelogo1.svg'
import { WhatsappLogo, ArrowElbowRight } from '@phosphor-icons/react/dist/ssr'

export default function Home() {
  return (
    <>
      <HeroRoot>
        <Image
          src={imgDesktop}
          alt="BgImage"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="empty"
          priority
          fill
          className="h-auto w-full bg-cover bg-fixed bg-center bg-no-repeat object-cover sm:bg-[imgDesktop]"
        />
        <Image
          src={imgMobile}
          alt="BgImage"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="empty"
          priority
          fill
          className="h-screen w-full bg-cover bg-fixed bg-center bg-no-repeat object-cover sm:hidden sm:bg-[imgMobile]"
        />
        <HeroGradient />
        <HeroSectionProperty>
        <div className="mx-auto sm:mx-0 max-w-fit sm:max-w-lg -pt-0 pb-8 sm:-pt-16">
              <Image
               src={LogoJam}
                width={150}
                height={50}
                className='w-48 h-auto sm:w-60 sm:h-auto'
                alt="Logo Jamile"
                loading="lazy"
              />
            </div>
          <HeroH1>Se você está nesta página</HeroH1>
          <HeroParagraph>
            É por que você está buscando
          </HeroParagraph>
          <HeroParagraph>
            <HeroParagraphStrong>Visto</HeroParagraphStrong>, <HeroParagraphStrong>Nacionalidade ou Cidadania</HeroParagraphStrong> Portuguesa 
          </HeroParagraph>
          <HeroDivide />
          <HeroParagraph>
            Clique nos botões abaixo e escolha sua especialidade
          </HeroParagraph>
          <div className='flex flex-col itens-center py-8 gap-4 sm:flex-row'>
          <ButtonHome href="/visto">
            <ButtonHomeText>Visto</ButtonHomeText>
            <ButtonHomeFlex>
              <ArrowElbowRight size={24} weight="fill" />
            </ButtonHomeFlex>
          </ButtonHome>
          <ButtonHome href="/nacionalidade">
            <ButtonHomeText>Nacionalidade</ButtonHomeText>
            <ButtonHomeFlex>
              <ArrowElbowRight size={24} weight="fill" />
            </ButtonHomeFlex>
          </ButtonHome>
          </div>
        </HeroSectionProperty>
      </HeroRoot>
    </>
  );
}
