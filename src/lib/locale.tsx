"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { resumeContent, availableLocales, defaultLocale, ResumeData } from "@/content";

interface LocaleContextValue {
  locale: string;
  setLocale: (locale: string) => void;
  data: ResumeData;
  locales: string[];
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = "cv-locale";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<string>(defaultLocale);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (stored && resumeContent[stored]) setLocaleState(stored);
  }, []);

  const setLocale = (next: string) => {
    if (!resumeContent[next]) return;
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  const data = resumeContent[locale] ?? resumeContent[defaultLocale];

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = data.meta.documentTitle;
  }, [locale, data.meta.documentTitle]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, data, locales: availableLocales }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
