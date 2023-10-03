"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { iconsData } from "@/lib/data";
import { useTheme } from "../context/ThemeContext";
import { useTranslations } from "next-intl";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  const t = useTranslations("experiences");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:40">
      <SectionHeading>{t("title")}</SectionHeading>
      <VerticalTimeline lineColor="">
        {t.raw("experienceData")?.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.05)",
              }}
              date={item.date}
              icon={iconsData.map((item, index) => item.icon)[index]}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.05)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
