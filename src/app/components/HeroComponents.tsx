import { ComponentProps } from 'react'

export interface HeroSectionProps {
  className: string
}

type HeroGradientProps = ComponentProps<'div'>

export function HeroGradient(props: HeroGradientProps) {
  return (
    <div
      className="absolute h-full w-full bg-gradient-to-b sm:bg-gradient-to-r from-brandBase1-100 from-30% to-brandBase3-300/30 to-90% p-6 md:p-12 lg:px-16 lg:py-12"
      {...props}
    />
  )
}

type HeroRootProps = ComponentProps<'section'>

export function HeroRoot(props: HeroRootProps) {
  return <section className="relative h-svh overflow-hidden" {...props} />
}

type HeroSectionPropertyProps = ComponentProps<'div'>

export function HeroSectionProperty(props: HeroSectionPropertyProps) {
  return (
    <div className="mx-auto py-32 sm:max-w-xl md:max-w-full md:px-20 lg:max-w-6xl lg:px-4">
      <div className="flex flex-col items-center justify-between xl:flex-row">
        <div className="z-50 mb-0 w-full max-w-6xl p-4 xl:w-8/12" {...props} />
      </div>
    </div>
  )
}

type HeroH1Props = ComponentProps<'h1'>

export function HeroH1(props: HeroH1Props) {
  return (
    <h1
      className="z-50 pb-6 text-center text-2xl font-extrabold uppercase text-brandRed-900 sm:text-left sm:text-5xl md:mx-auto"
      {...props}
    />
  )
}

type HeroSectionSpanProps = ComponentProps<'span'>

export function HeroSectionSpan(props: HeroSectionSpanProps) {
  return <span className="z-50 text-yellow-100 sm:block" {...props} />
}

type HeroParagraphProps = ComponentProps<'p'>

export function HeroParagraph(props: HeroParagraphProps) {
  return (
    <p
      className="z-50 text-center text-sm font-semibold text-brandRed-900/60 sm:text-left sm:text-lg md:block"
      {...props}
    />
  )
}

type HeroParagraphStrongProps = ComponentProps<'strong'>

export function HeroParagraphStrong(props: HeroParagraphStrongProps) {
  return (
    <strong
      className="z-50 text-center text-sm font-extrabold text-brandRed-900 sm:text-left sm:text-lg"
      {...props}
    />
  )
}

type HeroStrongProps = ComponentProps<'strong'>

export function HeroStrong(props: HeroStrongProps) {
  return <strong className="font-extrabold text-yellow-100" {...props} />
}

type HeroImageProps = ComponentProps<'div'>

export function HeroImage(props: HeroImageProps) {
  return (
    <div className="z-50 mx-auto max-w-5xl">
      <div className="z-50 flex justify-center sm:flex-none sm:justify-start">
        <div className="z-50 -mt-10 block pb-8" {...props} />
      </div>
    </div>
  )
}
type HeroDivideProps = ComponentProps<'div'>

export function HeroDivide(props: HeroDivideProps) {
  return (
    <span className="relative flex justify-center py-6">
      <div
        className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-brandRed-900 to-transparent opacity-90"
        {...props}
      />
    </span>
  )
}
