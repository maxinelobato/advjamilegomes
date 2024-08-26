// import { ComponentProps } from "react";

// export interface HeroComponents {
//   className: string;
// }

// type HeroGradientProps = ComponentProps<"div">;

// export function HeroGradient(props: HeroGradientProps) {
//   return (
//     <div
//       className="from-30% to-90% absolute h-full w-full bg-gradient-to-b from-transparent to-brandBase3-300/30 sm:bg-gradient-to-r"
//       {...props}
//     />
//   );
// }

// type HeroRootProps = ComponentProps<"section">;

// export function HeroRoot(props: HeroRootProps) {
//   return <section className="h-svh relative overflow-hidden" {...props} />;
// }

// type HeroSectionPropertyProps = ComponentProps<"div">;

// export function HeroSectionProperty(props: HeroSectionPropertyProps) {
//   return (
//     <div className="mt-48 pt-8 sm:my-28 sm:py-16">
//       <div className="mx-auto max-w-screen-xl justify-between gap-x-12 px-4 md:flex md:px-8">
//         <div className="max-w-xl space-y-4" {...props} />
//       </div>
//     </div>
//   );
// }

// type HeroH1Props = ComponentProps<"h1">;

// export function HeroH1(props: HeroH1Props) {
//   return (
//     <h1
//       className="z-50 mt-4 pb-4 text-center text-2xl font-extrabold uppercase text-brandRed-900 sm:text-left sm:text-5xl md:mx-auto"
//       {...props}
//     />
//   );
// }

// type HeroSectionSpanProps = ComponentProps<"span">;

// export function HeroSectionSpan(props: HeroSectionSpanProps) {
//   return <span className="z-50 text-yellow-100 sm:block" {...props} />;
// }

// type HeroParagraphProps = ComponentProps<"p">;

// export function HeroParagraph(props: HeroParagraphProps) {
//   return (
//     <p
//       className="z-50 text-center text-sm font-semibold text-brandRed-900/60 sm:text-left sm:text-lg md:block"
//       {...props}
//     />
//   );
// }

// type HeroParagraphStrongProps = ComponentProps<"strong">;

// export function HeroParagraphStrong(props: HeroParagraphStrongProps) {
//   return (
//     <strong
//       className="z-50 text-center text-sm font-extrabold text-brandRed-900 sm:text-left sm:text-lg"
//       {...props}
//     />
//   );
// }

// type HeroStrongProps = ComponentProps<"strong">;

// export function HeroStrong(props: HeroStrongProps) {
//   return <strong className="font-extrabold text-yellow-100" {...props} />;
// }

// type HeroImageProps = ComponentProps<"div">;

// export function HeroImage(props: HeroImageProps) {
//   return (
//     <div className="z-50 mx-auto max-w-5xl">
//       <div className="z-50 flex justify-center sm:flex-none sm:justify-start">
//         <div className="z-50 -mt-10 block pb-8" {...props} />
//       </div>
//     </div>
//   );
// }
// type HeroDivideProps = ComponentProps<"div">;

// export function HeroDivide(props: HeroDivideProps) {
//   return (
//     <span className="relative flex justify-center py-6">
//       <div
//         className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-brandRed-900 to-transparent opacity-90"
//         {...props}
//       />
//     </span>
//   );
// }

// type HeroSectionRootProps = ComponentProps<"section">;

// export function HeroSectionRoot(props: HeroSectionRootProps) {
//   return <section className="relative h-auto overflow-hidden" {...props} />;
// }

// type HeroSectionProps = ComponentProps<"div">;

// export function HeroSection(props: HeroSectionProps) {
//   return (
//     <section className="md:bgDesktop lg:bgDesktop bg-bgMobile sm:bg-bgDesktop hero min-h-min bg-cover bg-fixed bg-center bg-no-repeat sm:bg-cover md:bg-cover lg:bg-cover">
//       <div
//         className="from-5% hero-overlay bg-opacity-0 bg-gradient-to-r from-black/5"
//         {...props}
//       />
//     </section>
//   );
// }

// type HeroPropertyProps = ComponentProps<"div">;

// export function HeroProperty(props: HeroPropertyProps) {
//   return (
//     <div className="mt-48 pt-8 sm:my-28 sm:py-16">
//       <div className="mx-auto max-w-screen-xl justify-between gap-x-12 px-4 md:flex md:px-8">
//         <div className="max-w-xl space-y-4" {...props} />
//       </div>
//     </div>
//   );
// }

// type HeroCardProps = ComponentProps<"div">;

// export function HeroCard(props: HeroCardProps) {
//   return (
//     <div className="card-compact h-auto w-full min-w-full">
//       <div className="card-body" {...props} />
//     </div>
//   );
// }

// type HeroCardTextProps = ComponentProps<"div">;

// export function HeroCardText(props: HeroCardTextProps) {
//   return <div className="text-center sm:text-left" {...props} />;
// }

// type HeroCardH1Props = ComponentProps<"h1">;

// export function HeroCardH1(props: HeroCardH1Props) {
//   return (
//     <h1
//       className="mt-4 pb-4 text-2xl font-extrabold text-white drop-shadow-lg md:text-4xl"
//       {...props}
//     />
//   );
// }

// type HeroCardP1Props = ComponentProps<"p">;

// export function HeroCardP1(props: HeroCardP1Props) {
//   return (
//     <p
//       className="mt-4 pb-4 text-sm leading-relaxed text-white md:text-xl"
//       {...props}
//     />
//   );
// }

// type HeroCardP2Props = ComponentProps<"p">;

// export function HeroCardP2(props: HeroCardP2Props) {
//   return (
//     <p
//       className="pb-1 pt-1 text-sm leading-relaxed text-white md:text-xl"
//       {...props}
//     />
//   );
// }

// type HeroImgPropertyProps = ComponentProps<"div">;

// export function HeroImgProperty(props: HeroImgPropertyProps) {
//   return (
//     <>
//       <div
//         className="flex justify-center sm:flex-none sm:justify-start"
//         {...props}
//       />
//     </>
//   );
// }

import { ComponentProps } from "react";

export interface HeroComponents {
  className: string;
}

type HeroRootProps = ComponentProps<"section">;

export function HeroRoot(props: HeroRootProps) {
  return <section className="h-svh relative overflow-hidden" {...props} />;
}

type HeroGradientProps = ComponentProps<"div">;

export function HeroGradient(props: HeroGradientProps) {
  return (
    <div
      className="from-30% to-70% absolute h-full w-full bg-gradient-to-t from-brandBase1-100 to-transparent sm:bg-gradient-to-r sm:from-transparent"
      {...props}
    />
  );
}

type HeroPropertyProps = ComponentProps<"div">;

export function HeroProperty(props: HeroPropertyProps) {
  return (
    <div className="z-50 mt-48 pt-8 sm:my-28 sm:py-16">
      <div className="mx-auto max-w-6xl justify-between gap-x-6 px-4 md:flex">
        <div className="max-w-xl space-y-4" {...props} />
      </div>
    </div>
  );
}

type HeroCardProps = ComponentProps<"div">;

export function HeroCard(props: HeroCardProps) {
  return (
    <div className="card-compact h-auto w-full min-w-full">
      <div className="card-body" {...props} />
    </div>
  );
}

type HeroCardTextProps = ComponentProps<"div">;

export function HeroCardText(props: HeroCardTextProps) {
  return <div className="z-50 text-center sm:text-left" {...props} />;
}

type HeroCardH1Props = ComponentProps<"h1">;

export function HeroCardH1(props: HeroCardH1Props) {
  return (
    <h1
      className="mt-4 pb-4 text-2xl font-semibold uppercase text-brandSecondary md:text-4xl"
      {...props}
    />
  );
}

type HeroCardP1Props = ComponentProps<"p">;

export function HeroCardP1(props: HeroCardP1Props) {
  return (
    <p
      className="z-50 mt-4 pb-4 text-sm font-medium leading-relaxed text-brandSecondary md:text-xl"
      {...props}
    />
  );
}

type HeroCardP2Props = ComponentProps<"p">;

export function HeroCardP2(props: HeroCardP2Props) {
  return (
    <p
      className="pb-1 pt-1 text-sm leading-relaxed text-white md:text-xl"
      {...props}
    />
  );
}

type HeroImgPropertyProps = ComponentProps<"div">;

export function HeroImgProperty(props: HeroImgPropertyProps) {
  return (
    <>
      <div
        className="flex justify-center sm:flex-none sm:justify-start"
        {...props}
      />
    </>
  );
}
