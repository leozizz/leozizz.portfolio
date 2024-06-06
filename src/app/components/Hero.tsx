type HeroProps = {
  description: string;
};

const Hero = ({ description }: HeroProps) => {
  return (
    <section
      id="hero"
      className="flex flex-col items-start gap-4 my-56 max-w-5xl w-full"
    >
      <p>Olá, meu nome é</p>
      <h1 className="text-5xl">Leonardo Silva</h1>
      <h2 className="text-4xl ">Desenvolvedor Frontend</h2>
      <p>{description}</p>
      <button className="bg-transparent text-white border-2 border-black rounded-md py-2 px-6 hover:bg-black transition duration-300 ease-in-out mt">
        Baixar CV
      </button>
    </section>
  );
};

export default Hero;
