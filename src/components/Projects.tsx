"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";
import { useTranslations } from "next-intl";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  const t = useTranslations("projects");

  return (
    <section id="projects" ref={ref} className="scroll-mt-28 mb-28">
      <SectionHeading>{t("title")}</SectionHeading>
      <div>
        {t.raw("projectsData").map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
