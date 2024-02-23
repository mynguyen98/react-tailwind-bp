import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Importing translation files

import translationEN from "./locales/en/translation.json";
import translationVN from "./locales/vn/translation.json";


//Creating object with the variables of imported translation files
const resources = {
  en: {
    translation: translationEN,
  },
  vn: {
    translation: translationVN,
  },
};

//i18N Initialization

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng:localStorage.getItem('i18nextLng') || 'en', //default language
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
