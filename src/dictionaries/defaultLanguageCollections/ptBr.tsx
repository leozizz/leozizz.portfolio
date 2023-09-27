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
      hash: "#home",
    },
    {
      name: "About",
      hash: "#about",
    },
    {
      name: "Projects",
      hash: "#projects",
    },
    {
      name: "Skills",
      hash: "#skills",
    },
    {
      name: "Experience",
      hash: "#experience",
    },
    {
      name: "Contact",
      hash: "#contact",
    },
  ],

  experiencesData: [
    {
      title: "Análise e Desenvolvimento de Sistemas",
      location: "Campinas, SP",
      description: `Comecei a estudar <strong>Análise e Desenvolvimento de Sistemas</strong> assim que comecei meu trabalho como Técnico de TI. Continuo estudando paralelamente através de cursos, fóruns e comunidades na internet para desenvolver minhas habilidades como programador.`,
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
      title: "Agency Landing Page",
      description:
        "This is a Branding Agency's Single Page Application (SPA). The application includes a header with a theme toggle button and an animated banner with Lottie.",
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
} as const;
