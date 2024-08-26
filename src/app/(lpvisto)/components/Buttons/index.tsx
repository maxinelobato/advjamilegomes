import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { ButtonFloat } from "./ButtonCta";
import { IconWtpFloat } from "./IconWtpFloat";

export function ButtonFloatWttp() {
  return (
    <>
      <ButtonFloat href="https://api.whatsapp.com/send?phone=5531990813600&text=Ol%C3%A1,%20Dra.%20Gabriela!%20Vim%20do%20Google.%20Podemos%20conversar?">
        <IconWtpFloat icon={WhatsappLogo} />
      </ButtonFloat>
    </>
  );
}
