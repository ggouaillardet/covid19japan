import { enUS, ja, es, de, ptBR } from "date-fns/locale";

// Add new languages and their emoji flag here. Make sure the array indices line up.
export const LANGUAGES = ["en", "ja", "es", "de", "pt"];
export const FLAGS = ["🇺🇸", "🇯🇵", "🇪🇸", "🇩🇪", "🇧🇷"];
// Add locales for date-fns here. Make sure the keys match the languages in LANGUAGES.
export const LOCALES = { en: enUS, ja: ja, es: es, de: de, pt: ptBR };

const generateExport = () => {
  const resources = {};
  for (const language of LANGUAGES) {
    resources[language] = {
      translation: require(`./${language}.json`),
    };
  }
  return resources;
};

export default generateExport();
