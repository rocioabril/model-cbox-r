import { createContext, useState, useContext } from "react";
import en from "../lang/en.js";
import es from "../lang/es.js";

export const defaultLang = { es, en }

const LangContext = createContext({
  lang: defaultLang.en,
  setLang: () => {},
});

export function useLang() {
  return useContext(LangContext);
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(defaultLang.en);

  const toggleLanguage = (lang) => {
    setLang(defaultLang[lang]);
  };

  return (
    <LangContext.Provider value={{ lang, setLang: toggleLanguage }}>
      {children}
    </LangContext.Provider>
  );
}

export default LangContext;
