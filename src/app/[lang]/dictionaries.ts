import "server-only";

const dictionaries: { [key: string]: () => Promise<{ description: string }> } =
  {
    en: () => import("./dictionaries/en.json").then((module) => module.default),
    pt: () => import("./dictionaries/pt.json").then((module) => module.default),
  };

export const getDictionary = async (locale: string) => dictionaries[locale]();
