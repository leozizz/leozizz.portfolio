import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import reactSPAAgency from "@/public/reactSPAAgency.png";
import javascriptForm from "@/public/javascriptForm.png";
import javascriptRating from "@/public/javascriptRating.png";

export const enUS = {
  links: [
    {
      name: "Home",
      display: "Home",
      hash: "#home",
    },
    {
      name: "About",
      display: "About",
      hash: "#about",
    },
    {
      name: "Projects",
      display: "Projects",
      hash: "#projects",
    },
    {
      name: "Skills",
      display: "Skills",
      hash: "#skills",
    },
    {
      name: "Experience",
      display: "Experience",
      hash: "#experience",
    },
    {
      name: "Contact",
      display: "Contact",
      hash: "#contact",
    },
  ],

  introData: {
    intro:
      "<strong>Hello, my name is Leonardo.</strong> I'm a <strong>Front-End Developer</strong> in training, <strong>currently studying Information Systems.</strong>  I am currently an intern and I am focused on Front-End Development with <u>React</u>.",
    contactBtn: "Contact me here",
    downloadCv: "Download CV",
  },

  aboutData: {
    heading: "About me",
    about: `<p className="mb-3">
        While my journey is just beginning, I've had the privilege of <span className="font-medium">interning</span> for the last 4 months on exciting projects that have allowed me to apply what I've been learning in college. My primary focus is on front-end development, and I'm particularly thrilled to work with technologies like <span className="font-medium">ReactJS</span>.
      </p>
      <p className="mb-3">
        I firmly believe that the key to success in the development field lies
        in a passion for continuous learning and a readiness to tackle
        challenges head-on. I am wholeheartedly dedicated to honing my skills
        and crafting
        <span className="underline">elegant, functional web interfaces</span>.
      </p>
      <p className="mb-3">
        Within this portfolio, you'll discover some of the projects I've had the
        opportunity to work on thus far. These projects serve as a testament to
        my progress and unwavering commitment to evolving into a skilled
        front-end developer.
      </p>
      <p className="mb-3">
        If you're on the lookout for an
        <span className="underline">enthusiastic</span> and
        <span className="underline">dedicated</span> front-end developer to join
        your team or contribute to your project, please do not hesitate to reach
        out. I am always open to new
        <span className="font-medium">learning experiences</span> and
        <span className="font-medium">collaborative opportunities</span>.
      </p>`,
  },

  experiencesData: [
    {
      title: "Information Systems",
      location: "Campinas, SP",
      description:
        "I started studying Information Systems as soon as I started my job as an IT Technician. I continue to study in parallel through courses, forums, and communities on the internet in order to develop my skills as a programmer.",
      icon: React.createElement(LuGraduationCap),
      date: "2021 - present",
    },
    {
      title: "IT Technician",
      location: "Campinas, SP",
      description:
        "I worked as an IT technician for almost 2 years at a company responsible for a network of schools in the city. There, I was able to work with the maintenance and assembly of computers and servers, as well as dealing with various operating systems such as Windows, Linux, and macOS.",
      icon: React.createElement(CgWorkAlt),
      date: "2021 - 2023",
    },
    {
      title: "Front-End Developer Intern",
      location: "Campinas, SP",
      description:
        "I am currently an intern in front-end development at Agibank, where I am able to put into practice everything I have learned and also learn a lot from other developers on my team. The technologies I use at the moment are JavaScript, React, Tailwind, and Styled Components.",
      icon: React.createElement(FaReact),
      date: "2023 - present",
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

  headings: {
    aboutMe: "Sobre Mim",
    myProjects: "Meus Projetos",
    mySkills: "Skills",
    myExperience: "Minha Experiência",
    contactMe: "Contate-me",
  },
} as const;
