"use client";

import styles from "./SettingsPanel.module.css";
import { useLocale } from "@/lib/locale";
import { useTheme, themePresets } from "@/lib/theme";

export default function SettingsPanel() {
  const { locale, setLocale, locales, data } = useLocale();
  const { primary, setPrimary, presetId, applyPreset } = useTheme();

  return (
    <div className={`${styles.panel} no-print`}>
      <div className={styles.group}>
        {locales.map((loc) => (
          <button
            key={loc}
            type="button"
            className={`${styles.localeBtn} ${loc === locale ? styles.localeBtnActive : ""}`}
            onClick={() => setLocale(loc)}
          >
            {loc}
          </button>
        ))}
      </div>

      <div className={styles.group}>
        {themePresets.map((preset) => (
          <button
            key={preset.id}
            type="button"
            title={preset.label}
            aria-label={preset.label}
            className={`${styles.swatch} ${presetId === preset.id ? styles.swatchActive : ""}`}
            style={{ background: preset.primary }}
            onClick={() => applyPreset(preset.id)}
          />
        ))}
        <input
          className={styles.colorInput}
          type="color"
          value={primary}
          onChange={(e) => setPrimary(e.target.value)}
          title="Couleur personnalisée"
          aria-label={data.meta.locale === "fr" ? "Couleur personnalisée" : "Custom color"}
        />
      </div>
    </div>
  );
}
