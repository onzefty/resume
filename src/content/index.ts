import fr from "./fr.json";
import en from "./en.json";
import type { ResumeData } from "./types";

export const resumeContent: Record<string, ResumeData> = {
  fr: fr as ResumeData,
  en: en as ResumeData,
};

export const availableLocales = Object.keys(resumeContent);
export const defaultLocale = "fr";

export type { ResumeData };
