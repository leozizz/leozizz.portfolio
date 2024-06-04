import Image from "next/image";
import { getDictionary } from "./dictionaries";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="flex fixed top-8 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <p className="left-0 top-0 flex justify-center">&lt; leozizz /&gt;</p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <nav className="flex gap-4">
            <p>Inicio</p>
            <p>Sobre</p>
            <p>Experiência</p>
          </nav>
        </div>
      </header>

      <section id="hero" className="">
        <p>Olá, meu nome é</p>
        <h1 className="text-5xl">Leonardo Silva</h1>
        <h2>Desenvolvedor Frontend</h2>
        <p>{dictionary.description}</p>
        <button>Baixar CV</button>
      </section>

      <section
        id="sobre"
        className="flex flex-col items-center justify-center gap-4"
      >
        <p>
          Sou um desenvolvedor frontend apaixonado por tecnologia e design.
          Atualmente estou estudando Next.js e TailwindCSS.
        </p>
      </section>

      <section
        id="experiencia"
        className="flex flex-col items-center justify-center gap-4"
      >
        <h2>Experiência</h2>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              src="/images/nextjs.svg"
              alt="Next.js"
              width={100}
              height={100}
            />
            <p>Next.js</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              src="/images/tailwindcss.svg"
              alt="TailwindCSS"
              width={100}
              height={100}
            />
            <p>TailwindCSS</p>
          </div>
        </div>
      </section>

      <footer>
        <p>Copyrith 2024 Leonardo Silva. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
