/* eslint-disable react/no-unescaped-entities */

"use client";

import React, { createElement } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import ReactHtmlParser from "html-react-parser";
import { useTranslations } from "next-intl";

export default function About() {
  const { ref } = useSectionInView("About");

  const t = useTranslations("about");

  return (
    <motion.section
      id="about"
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>{ReactHtmlParser(t.raw("title"))}</SectionHeading>
      <> {ReactHtmlParser(t.raw("about"))}</>
    </motion.section>
  );
}
