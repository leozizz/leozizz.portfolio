"use client";

import { Locale, i18n } from "../config/i18n.config";

import { defaultDictionary } from "./defaultDictionaries";

export const getDictionaryUseClient = (locale: Locale) => {
  return (
    defaultDictionary[locale] ?? defaultDictionary[i18n.defaultLocale as Locale]
  );
};
("");
