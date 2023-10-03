import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
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
] as const;

export const iconsData = [
  {
    icon: React.createElement(LuGraduationCap),
  },
  {
    icon: React.createElement(CgWorkAlt),
  },
  {
    icon: React.createElement(FaReact),
  },
] as const;

export const skillsData = [
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
] as const;

export const projectsData = [
  {
    title: "Agency Lading Page",
    description:
      "This is a Branding Agency's Single Page Application (SPA). The application includes a header with a theme toggle button and an animated banner with Lottie.",
    tags: ["React", "JavaScript", "CSS", "Lottie"],
    imageUrl: "reactSPAAgency",
  },
  {
    title: "Javascript Form Validation",
    description:
      "Form created using validation through JavaScript. This project was created as a training challenge provided by the Dev em Dobro team.",
    tags: ["JavaScript", "HTML", "CSS"],
    imageUrl: "javascriptForm",
  },
  {
    title: "Interactive Rating Component",
    description:
      "This is my solution to the Interactive Rating Component challenge from Frontend Mentor.",
    tags: ["JavaScript", "HTML", "CSS"],
    imageUrl: "javascriptRating",
  },
] as const;
