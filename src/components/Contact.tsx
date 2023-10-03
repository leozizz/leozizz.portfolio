"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";

import { useTranslations } from "next-intl";
import ReactHtmlParser from "html-react-parser";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const t = useTranslations("contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 100 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>{t("title")}</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        {ReactHtmlParser(t.raw("contact"))}
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder={t("email")}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all"
          name="message"
          required
          maxLength={5000}
          placeholder={t("message")}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
