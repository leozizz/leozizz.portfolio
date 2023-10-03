"use client";

import React from "react";

import ReactHtmlParser from "html-react-parser";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="mb-20 px-4 text-center text-gray-500">
      <small className="mb-2 text-xs">&copy; {new Date().getFullYear()}</small>
      {ReactHtmlParser(t.raw("footerData"))}
    </footer>
  );
}
