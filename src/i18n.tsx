import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ar" | "en";
export type Text = { ar: string; en: string };

const STORAGE_KEY = "dh-lang";

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "ar" || saved === "en") return saved;
  } catch {
    // Storage can be unavailable (private mode, blocked cookies); fall back to Arabic.
  }
  return "ar";
}

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (text: Text) => string;
  num: (n: number) => string;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore: the choice just won't persist.
    }
  }, [lang]);

  const t = (text: Text) => text[lang];
  // Arabic pages use Arabic-Indic digits (١، ٢، ٣) like the original site.
  const num = (n: number) => new Intl.NumberFormat(lang === "ar" ? "ar-SA" : "en-US").format(n);

  return <LangContext.Provider value={{ lang, setLang, t, num }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
}

/** Sets the browser tab title for the current page in the current language. */
export function usePageTitle(title: Text | null) {
  const { lang } = useLang();
  useEffect(() => {
    const brand = lang === "ar" ? "تناغم البيانات" : "Data Harmony";
    document.title = title ? `${title[lang]} | ${brand}` : `${brand} | ${lang === "ar" ? "Data Harmony" : "تناغم البيانات"}`;
  }, [title, lang]);
}
