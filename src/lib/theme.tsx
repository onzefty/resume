"use client";

import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";

export interface ThemePreset {
  id: string;
  label: string;
  primary: string;
  primaryContrast: string;
}

export const themePresets: ThemePreset[] = [
  { id: "charcoal", label: "Anthracite", primary: "#2b2b2b", primaryContrast: "#ffffff" },
  { id: "navy", label: "Bleu nuit", primary: "#1f3a5f", primaryContrast: "#ffffff" },
  { id: "burgundy", label: "Bordeaux", primary: "#5c1f2e", primaryContrast: "#ffffff" },
  { id: "forest", label: "Forêt", primary: "#22432f", primaryContrast: "#ffffff" },
  { id: "teal", label: "Sarcelle", primary: "#0f4c4c", primaryContrast: "#ffffff" },
  { id: "plum", label: "Prune", primary: "#3d2952", primaryContrast: "#ffffff" },
];

interface ThemeContextValue {
  primary: string;
  setPrimary: (color: string) => void;
  presetId: string | null;
  applyPreset: (id: string) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "cv-theme-primary";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [primary, setPrimaryState] = useState<string>(themePresets[0].primary);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (stored) setPrimaryState(stored);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.style.setProperty("--color-primary", primary);
    window.localStorage.setItem(STORAGE_KEY, primary);
  }, [primary, hydrated]);

  const presetId = useMemo(
    () => themePresets.find((p) => p.primary.toLowerCase() === primary.toLowerCase())?.id ?? null,
    [primary]
  );

  const value: ThemeContextValue = {
    primary,
    setPrimary: setPrimaryState,
    presetId,
    applyPreset: (id: string) => {
      const preset = themePresets.find((p) => p.id === id);
      if (preset) setPrimaryState(preset.primary);
    },
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
