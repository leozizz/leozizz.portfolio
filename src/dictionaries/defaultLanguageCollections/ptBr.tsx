import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import reactSPAAgency from "@/public/reactSPAAgency.png";
import javascriptForm from "@/public/javascriptForm.png";
import javascriptRating from "@/public/javascriptRating.png";

export const ptBR = {
  links: [
    {
      name: "Home",
      display: "Início",
      hash: "#home",
    },
    {
      name: "About",
      display: "Sobre",
      hash: "#about",
    },
    {
      name: "Projects",
      display: "Projetos",
      hash: "#projects",
    },
    {
      name: "Skills",
      display: "Skills",
      hash: "#skills",
    },
    {
      name: "Experience",
      display: "Experiência",
      hash: "#experience",
    },
    {
      name: "Contact",
      display: "Contato",
      hash: "#contact",
    },
  ],

  introData: {
    intro:
      "<strong>Olá, meu nome é Leonardo.</strong><br/> Sou um <strong>desenvolvedor front-end</strong> em treinamento. Atualmente, estou cursando <strong>Análise e Desenvolvimento de Sistemas</strong> e estou em um estágio com foco em <u>React</u>.",
    contactBtn: "Entre em contato",
    downloadCv: "Baixar CV",
  },

  aboutData: {
    heading: "Sobre mim",
    about: `<p className="mb-3">
        Embora minha jornada esteja apenas começando, tive o privilégio de <span    className="font-medium">estagiar e atuar</span> nos últimos 4 meses em projetos   empolgantes que me permitiram aplicar o que aprendi na faculdade. Meu foco principal é desenvolvimento front-end, e estou particularmente entusiasmado em trabalhar com tecnologias como <span className="font-medium">ReactJS</span>.
      </p>
      <p className="mb-3">
        Acredito firmemente que a chave para o sucesso no campo do desenvolvimento é a  paixão pelo aprendizado contínuo e a prontidão para enfrentar desafios de frente.  Estou totalmente dedicado a aprimorar minhas habilidades e criar
        <span className="underline">interfaces web elegantes e funcionais.</span>.
      </p>
      <p className="mb-3">
        Neste portfólio, você descobrirá alguns dos projetos em que tive a oportunidade de trabalhar até agora. Esses projetos servem como um testemunho do meu progresso e compromisso inabalável de me tornar um desenvolvedor front-end qualificado.
      </p>
      <p className="mb-3">
        Se você está procurando um desenvolvedor front-end
        <span className="underline">entusiasmado </span> e
        <span className="underline">dedicado </span> para se juntar à sua equipe ou contribuir para o seu projeto, não hesite em entrar em contato. Estou sempre aberto a
        <span className="font-medium">novas experiências de aprendizado</span> e
        <span className="font-medium">portunidades de colaboração.</span>.
      </p>`,
  },

  experiencesData: [
    {
      title: "Análise e Desenvolvimento de Sistemas",
      location: "Campinas, SP",
      description: `Comecei a estudar Análise e Desenvolvimento de Sistemas assim que comecei meu trabalho como Técnico de TI. Continuo estudando paralelamente através de cursos, fóruns e comunidades na internet para desenvolver minhas habilidades como programador.`,
      icon: React.createElement(LuGraduationCap),
      date: "2021 - atual",
    },
    {
      title: "Técnico de TI",
      location: "Campinas, SP",
      description:
        "Trabalhei como técnico de TI por quase 2 anos em uma empresa responsável por uma rede de escolas na cidade. Lá, tive a oportunidade de trabalhar com a manutenção e montagem de computadores e servidores, bem como lidar com diversos sistemas operacionais, como Windows, Linux e macOS.",
      icon: React.createElement(CgWorkAlt),
      date: "2021 - 2023",
    },
    {
      title: "Estagiário de Desenvolvimento Front-End",
      location: "Campinas, SP",
      description:
        "Atualmente sou estagiário de desenvolvimento front-end no Agibank, onde posso colocar em prática tudo o que aprendi e também aprender muito com outros desenvolvedores da minha equipe. As tecnologias que utilizo no momento são JavaScript, React, Tailwind e Styled Components.",
      icon: React.createElement(FaReact),
      date: "2023 - atual",
    },
  ],

  projectsData: [
    {
      title: "Landing Page - Agência de Branding",
      description:
        "Esta é uma Aplicação de Página Única (SPA) de uma Agência de Branding. A aplicação inclui um cabeçalho com um botão de alternância de tema e um banner animado com Lottie.",
      tags: ["React", "JavaScript", "CSS", "Lottie"],
      imageUrl: reactSPAAgency,
    },
    {
      title: "Javascript Form Validation",
      description:
        "Form created using validation through JavaScript. This project was created as a training challenge provided by the Dev em Dobro team.",
      tags: ["JavaScript", "HTML", "CSS"],
      imageUrl: javascriptForm,
    },
    {
      title: "Interactive Rating Component",
      description:
        "This is my solution to the Interactive Rating Component challenge from Frontend Mentor.",
      tags: ["JavaScript", "HTML", "CSS"],
      imageUrl: javascriptRating,
    },
  ],

  skillsData: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Tailwind",
    "Next.js",
    "Vite",
    "Git",
    "Framer Motion",
  ],

  headings: {
    aboutMe: "Sobre Mim",
    myProjects: "Meus Projetos",
    mySkills: "Skills",
    myExperience: "Minha Experiência",
    contactMe: "Contate-me",
  },
} as const;
