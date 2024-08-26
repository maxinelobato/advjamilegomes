import { ComponentProps } from "react";

export interface ButtonCta {
  className: string;
}

type ButtonServicesProps = ComponentProps<"a">;

export function ButtonServices(props: ButtonServicesProps) {
  return (
    <div className="z-50 my-4 flex w-full justify-center sm:justify-center">
      <a
        target="_blank"
        aria-label="Clique no botão"
        className="delay-0 inline-flex h-10 w-auto items-center justify-center px-6 font-medium text-brandPrimary duration-75 ease-in-out hover:scale-105 sm:h-10"
        {...props}
      />
    </div>
  );
}

type ButtonServicesFlexProps = ComponentProps<"div">;

export function ButtonServicesFlex(props: ButtonServicesFlexProps) {
  return <div className="z-50 ml-2 flex items-center" {...props} />;
}

type ButtonServicesTextProps = ComponentProps<"div">;

export function ButtonServicesText(props: ButtonServicesTextProps) {
  return (
    <div
      className="z-50 text-center font-bold uppercase text-brandPrimary sm:text-left sm:text-xs"
      {...props}
    />
  );
}

type ButtonHomeProps = ComponentProps<"a">;

export function ButtonHome(props: ButtonHomeProps) {
  return (
    <div className="z-50 my-4 flex w-full justify-center sm:justify-start">
      <a
        target="_blank"
        aria-label="Clique no botão"
        className="focus:shadow-outline delay-0 inline-flex h-12 w-auto items-center justify-center rounded-full bg-brandPrimary px-8 font-medium text-white shadow-inner shadow-black duration-75 ease-in-out hover:scale-105 hover:transition-opacity focus:outline-none sm:h-14 md:w-auto"
        {...props}
      />
    </div>
  );
}

type ButtonHomeFlexProps = ComponentProps<"div">;

export function ButtonHomeFlex(props: ButtonHomeFlexProps) {
  return <div className="z-50 ml-3 flex items-center" {...props} />;
}

type ButtonHomeTextProps = ComponentProps<"div">;

export function ButtonHomeText(props: ButtonHomeTextProps) {
  return (
    <div
      className="z-50 text-center text-xs font-medium uppercase text-white sm:text-left sm:text-lg"
      {...props}
    />
  );
}

type ButtonFloatProps = ComponentProps<"a">;

export function ButtonFloat(props: ButtonFloatProps) {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex h-24 w-24 items-end justify-end p-2 hover:-translate-x-0 hover:scale-110 hover:transition-all hover:duration-300">
      <div className="absolute flex items-center justify-center rounded-full bg-brandPrimary p-4 text-white shadow-inner shadow-black hover:transition-all focus:outline-none">
        <a
          className="decoration-transparent"
          target="_blank"
          aria-label="Clique no botão"
          {...props}
        />
      </div>
    </div>
  );
}
