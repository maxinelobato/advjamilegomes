import { Check } from "@phosphor-icons/react/dist/ssr";
import {
  CredibilityFlexItens,
  CredibilityProperty,
} from "./CredibilityComponents";

export function Credibility() {
  const features = {
    trust: "Confiança",
    credility: "Credibilidade",
    reference: "Referência",
    city: "Belo Horizonte e Regiões",
  };

  return (
    <>
      <CredibilityProperty>
        <CredibilityFlexItens>
          <Check />
          {features.credility}
        </CredibilityFlexItens>
        <CredibilityFlexItens>
          <Check />
          {features.reference}
        </CredibilityFlexItens>
        <CredibilityFlexItens>
          <Check />
          {features.trust}
        </CredibilityFlexItens>
        <CredibilityFlexItens>
          <Check />
          {features.city}
        </CredibilityFlexItens>
      </CredibilityProperty>
    </>
  );
}
