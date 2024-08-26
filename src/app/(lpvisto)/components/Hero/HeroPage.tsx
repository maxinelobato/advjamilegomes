import Image from "next/image";
import imgDesktop from "@/../../public/assets/desktop-jam.webp";
import imgMobile from "@/../../public/assets/mobile-jam.webp";
import LogoJam from "@/../../public/assets/jamilelogo1.svg";
import GoogleReviews from "../GoogleReviews";
import {
  HeroCard,
  HeroCardH1,
  HeroCardP1,
  HeroCardText,
  HeroGradient,
  HeroImgProperty,
  HeroProperty,
  HeroRoot,
} from "./HeroComponents";
import { IconWtp } from "../Buttons/IconWtp";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import {
  ButtonHome,
  ButtonHomeFlex,
  ButtonHomeText,
} from "../Buttons/ButtonCta";

export function HeroPage() {
  return (
    <>
      <HeroRoot>
        <Image
          src={imgDesktop}
          alt="BgImage"
          sizes="100%"
          placeholder="empty"
          priority
          fill
          className="h-auto w-full bg-cover bg-fixed bg-center bg-no-repeat object-cover sm:bg-[imgDesktop]"
        />
        <Image
          src={imgMobile}
          alt="BgImage"
          sizes="100%"
          placeholder="empty"
          priority
          fill
          className="h-screen w-full bg-cover bg-fixed bg-center bg-no-repeat object-cover sm:hidden sm:bg-[imgMobile]"
        />
        <HeroGradient />
        <HeroProperty>
          <HeroCard>
            <HeroImgProperty>
              <Image
                src={LogoJam}
                width={150}
                height={50}
                className="z-50 h-auto w-48 sm:h-auto sm:w-60"
                alt="Logo Jamile"
                loading="lazy"
              />
            </HeroImgProperty>
            <HeroCardText>
              <HeroCardH1>Precisa de visto para morar em Portugal?</HeroCardH1>
              <HeroCardP1>
                Visto para nômade digital, procura de trabalho, golden vida,
                visto d5, visto d7, visto d3, visto d6, tech visa, startup visa,
                visto d4, visto d2, visto d1
              </HeroCardP1>
            </HeroCardText>
            <ButtonHome href="https://api.whatsapp.com/send?phone=351933965256&text=Ol%C3%A1%2C%20Dra.%20Jamile!%20Vim%20pelo%20site%20e%20Preciso%20de%20Ajuda%20com%20a%20minha%20Cidadania/Nacionalidade.%20Podemos%20conversar%3F%20">
              <ButtonHomeText>eu posso te ajudar</ButtonHomeText>
              <ButtonHomeFlex>
                <IconWtp icon={WhatsappLogo} />
              </ButtonHomeFlex>
            </ButtonHome>
            <div className="z-50 max-w-md text-left">
              <GoogleReviews />
            </div>
          </HeroCard>
        </HeroProperty>
      </HeroRoot>
      {/* <HeroSection>
        <HeroProperty>
          <HeroCard>
            <HeroImgProperty>
              <Image
                src={LogoJam}
                width={150}
                height={50}
                className="h-auto w-48 sm:h-auto sm:w-60"
                alt="Logo Jamile"
                loading="lazy"
              />
            </HeroImgProperty>
            <HeroCardText>
              <HeroCardH1>Advocacia Previdenciária</HeroCardH1>
              <HeroCardP1>
                Especialista em Aposentadoria/INSS, BPC/Loas e Planejamento
                Previdenciário
              </HeroCardP1>
              <HeroCardP2>
                Tenha a ajuda de advogados especialistas para defender sua
                causa!
              </HeroCardP2>
            </HeroCardText>
            <ButtonHome href="https://api.whatsapp.com/send?phone=5531990813600&text=Ol%C3%A1,%20Dra.%20Gabriela!%20Vim%20do%20Google.%20Podemos%20conversar?">
              <ButtonHomeFlex>
                <WhatsappLogo />
              </ButtonHomeFlex>
              <ButtonHomeText>fale com a especialista agora</ButtonHomeText>
            </ButtonHome>
            <Credibility />
          </HeroCard>
        </HeroProperty>
      </HeroSection> */}
    </>
  );
}
