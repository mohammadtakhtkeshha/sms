import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import faInfrastructure from "./infrastructure.json";
const resources = {
  en: {
    translation: {
      paragraph: "ENG",
    },
    infrastructure: faInfrastructure,
  },

  fa: {
    translation: {
            paragraph: "فا"
    },
    infrastructure: faInfrastructure,
    
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18n;
