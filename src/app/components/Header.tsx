type HeaderProps = {
  links: {
    home: string;
  };
};

const Header = ({ links }: HeaderProps) => {
  return (
    <header className="flex fixed top-8 w-full max-w-5xl items-center justify-between font-mono text-sm">
      <p className="left-0 top-0 flex justify-center">&lt; leozizz /&gt;</p>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
        <nav className="flex gap-4">
          <a href="#">{links.home}</a>
          <a href="#">Sobre</a>
          <a href="#">Experiência</a>
          <a href="#">Tecnologias</a>
          <a href="#">Projetos</a>
          <a href="#">Contato</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
