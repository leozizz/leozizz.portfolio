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
} as const;
