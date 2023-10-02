import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

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
