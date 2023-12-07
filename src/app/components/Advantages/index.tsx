import Image from "next/image";

export default function Advantages() {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M125.66,165.66l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L64,204.69l50.34-50.35a8,8,0,0,1,11.32,11.32ZM208,32H48A16,16,0,0,0,32,48V156.23a4,4,0,0,0,4.41,4,32,32,0,0,1,26.22,9.16,1.93,1.93,0,0,0,2.74,0l32-32a32,32,0,0,1,45.26,45.26l-34.55,34.54a4,4,0,0,0,2.83,6.83H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z"></path>
        </svg>
      ),
      title:
        "Com o passaporte português você poderá morar em qualquer dos 27 países da Europa sem necessidade de visto;",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M125.66,165.66l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L64,204.69l50.34-50.35a8,8,0,0,1,11.32,11.32ZM208,32H48A16,16,0,0,0,32,48V156.23a4,4,0,0,0,4.41,4,32,32,0,0,1,26.22,9.16,1.93,1.93,0,0,0,2.74,0l32-32a32,32,0,0,1,45.26,45.26l-34.55,34.54a4,4,0,0,0,2.83,6.83H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z"></path>
        </svg>
      ),
      title:
        "Não precisa de visto para turistar em países como Canadá, EUA, Emirados Árabes e Japão;",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M125.66,165.66l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L64,204.69l50.34-50.35a8,8,0,0,1,11.32,11.32ZM208,32H48A16,16,0,0,0,32,48V156.23a4,4,0,0,0,4.41,4,32,32,0,0,1,26.22,9.16,1.93,1.93,0,0,0,2.74,0l32-32a32,32,0,0,1,45.26,45.26l-34.55,34.54a4,4,0,0,0,2.83,6.83H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z"></path>
        </svg>
      ),
      title: "Agilidade na imigração;",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M125.66,165.66l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L64,204.69l50.34-50.35a8,8,0,0,1,11.32,11.32ZM208,32H48A16,16,0,0,0,32,48V156.23a4,4,0,0,0,4.41,4,32,32,0,0,1,26.22,9.16,1.93,1.93,0,0,0,2.74,0l32-32a32,32,0,0,1,45.26,45.26l-34.55,34.54a4,4,0,0,0,2.83,6.83H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z"></path>
        </svg>
      ),
      title: "Acesso mais fácil a instituições de ensino;",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M125.66,165.66l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L64,204.69l50.34-50.35a8,8,0,0,1,11.32,11.32ZM208,32H48A16,16,0,0,0,32,48V156.23a4,4,0,0,0,4.41,4,32,32,0,0,1,26.22,9.16,1.93,1.93,0,0,0,2.74,0l32-32a32,32,0,0,1,45.26,45.26l-34.55,34.54a4,4,0,0,0,2.83,6.83H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z"></path>
        </svg>
      ),
      title: "Passar a nacionalidade para os seus filhos, netos e seguintes",
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-tr from-brandRose-200 to-brandRose-700">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
              <div className="max-w-xl mb-6">
                <h1 className="py-4 mb-5 font-sans text-3xl font-bold tracking-tight text-brandRed-900 sm:text-4xl sm:leading-none">
                  Você sabe as Vantagens de ser um{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandRed-900 to-brandOrange-900">
                    Cidadão Português?
                  </span>
                </h1>
              </div>
              <div className="pt-2 max-w-lg lg:max-w-none">
                <ul className="space-y-4">
                  {features.map((item, idx) => (
                    <li key={idx} className="flex gap-x-4">
                      <div className="flex-none w-7 h-7 text-brandRed-900 rounded-lg flex justify-center items-center">
                        {item.icon}
                      </div>
                      <div>
                        <h1 className="text-sm text-brandRed-900 font-semibold">
                          {item.title}
                        </h1>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center -mx-4 lg:pl-8">
              <div className="flex flex-col items-end px-3">
                <Image
                  className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                  width={112}
                  height={112}
                  src="/assets/bandeiraportugal.jpg"
                  alt="Image 1"
                />
                <Image
                  className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                  width={80}
                  height={80}
                  src="/assets/bandeirabrasileira.jpeg"
                  alt="Image 2"
                />
              </div>
              <div className="px-3">
                <Image
                  className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                  width={160}
                  height={160}
                  src="/assets/portugalmagick.webp"
                  alt="Image 3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
