import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import fr from "./fr";
import en from "./en";

const savedLang = typeof localStorage !== "undefined"
  ? (localStorage.getItem("mw-lang") ?? "fr")
  : "fr";

i18n.use(initReactI18next).init({
  resources: {
    fr: { translation: fr },
    en: { translation: en },
  },
  lng: savedLang,
  fallbackLng: "fr",
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lng) => {
  try { localStorage.setItem("mw-lang", lng); } catch {}
});

export default i18n;
