/* eslint-disable react/no-unescaped-entities */

"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      id="about"
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        While my journey is just beginning, I've had the privilege of{" "}
        <span className="font-medium">interning</span> for the last 4 months on
        exciting projects that have allowed me to apply what I've been learning
        in college. My primary focus is on front-end development, and I'm
        particularly thrilled to work with technologies like{" "}
        <span className="font-medium">ReactJS</span>.
      </p>
      <p className="mb-3">
        I firmly believe that the key to success in the development field lies
        in a passion for continuous learning and a readiness to tackle
        challenges head-on. I am wholeheartedly dedicated to honing my skills
        and crafting{" "}
        <span className="underline">elegant, functional web interfaces</span>.
      </p>
      <p className="mb-3">
        Within this portfolio, you'll discover some of the projects I've had the
        opportunity to work on thus far. These projects serve as a testament to
        my progress and unwavering commitment to evolving into a skilled
        front-end developer.
      </p>
      <p className="mb-3">
        If you're on the lookout for an{" "}
        <span className="underline">enthusiastic</span> and{" "}
        <span className="underline">dedicated</span> front-end developer to join
        your team or contribute to your project, please do not hesitate to reach
        out. I am always open to new{" "}
        <span className="font-medium">learning experiences</span> and{" "}
        <span className="font-medium">collaborative opportunities</span>.
      </p>
    </motion.section>
  );
}
