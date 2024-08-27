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
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import {
  ButtonHome,
  ButtonHomeFlex,
  ButtonHomeText,
} from "../Buttons/ButtonCta";

export function Hero() {
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
          className="h-auto w-full bg-cover bg-fixed bg-center bg-no-repeat object-cover sm:hidden sm:bg-[imgMobile]"
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
              <HeroCardH1>
                Precisa de visto para{" "}
                <span className="bg-brandPrimary bg-clip-text font-black text-transparent">
                  morar em Portugal?
                </span>
              </HeroCardH1>
              <HeroCardP1>
                {/* Visto para nômade digital, procura de trabalho, golden vida,
                visto d5, visto d7, visto d3, visto d6, tech visa, startup visa,
                visto d4, visto d2, visto d1 */}
                Há 2 anos ajudando famílias, investidores, profissionais e
                estudantes a conquistarem o direito de viver, trabalhar e
                estudar em Portugal
              </HeroCardP1>
            </HeroCardText>
            <ButtonHome href="https://api.whatsapp.com/send?phone=351933965256&text=Olá%20Dra.%20Jamile,%20vim%20pelo%20site%20e%20preciso%20de%20ajuda%20com%20o%20meu%20Visto.%20Podemos%20conversar%3F%20">
              <ButtonHomeText>eu posso te ajudar</ButtonHomeText>
              <ButtonHomeFlex>
                <WhatsappLogo className="h-5 w-5 sm:h-6 sm:w-6" weight="fill" />
              </ButtonHomeFlex>
            </ButtonHome>
            <div className="z-50 max-w-md text-left">
              <GoogleReviews />
            </div>
          </HeroCard>
        </HeroProperty>
      </HeroRoot>
    </>
  );
}
