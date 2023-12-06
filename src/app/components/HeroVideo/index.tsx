import ButtonHero from "../ButtonHero";
import GoogleReviews from "../GoogleReviews";
import Navbar from "../Navbar";

export default function HeroVideo() {
  return (
    <section className="overflow-hidden bg-brandRose-200 sm:grid sm:grid-cols-2">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <div className="gap-x-3 space-y-2 py-0 sm:py-8 sm:items-center">
            <Navbar />
          </div>
          <h1 className="uppercase text-3xl font-bold font-sans tracking-tight text-brandRed-900 sm:text-4xl sm:leading-none">
            Precisa regulamentar sua cidadania {""}
            <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-brandRed-900 to-brandOrange-900">
              ou nacionalidade em portugal?
            </span>
          </h1>
          <p className="hidden text-base text-brandRed-900 md:block md:mt-4 md:text-lg">
            Saiba o que é necessário para regulamentar sua cidadania
          </p>

          <div className="pt-6 pb-2 gap-x-3 space-y-3 sm:items-center">
            <ButtonHero />
          </div>
          <div className="flex justify-center sm:justify-start sm:items-center">
            <GoogleReviews />
          </div>
        </div>
      </div>
      <div className="p-4 sm:p-8">
        <iframe
          className="aspect-video overflow-hidden rounded-2xl shadow-2xl w-full object-cover sm:h-full"
          src="https://www.youtube.com/embed/JkLLb8Vs3zk?rel=0&autoplay=1"
          title="POR QUE TER UMA ADVOGADA NO PROCESSO DE NACIONALIDADE PORTUGUESA?"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
