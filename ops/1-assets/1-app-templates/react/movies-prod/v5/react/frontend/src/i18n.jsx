import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// lang file
import en from "./lang/en.json";
import ar from "./lang/ar.json";
import gr from "./lang/gr.json";
import fr from "./lang/fr.json";
import de from "./lang/de.json";


// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
  gr: {
    translation: gr,
  },
  fr: {
    translation: fr,
  },
  de: {
    translation: de,
  },
};


i18n.use(initReactI18next).init({
  react: {
    useSuspense: false,
  },
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
