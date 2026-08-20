"use client";

import { ThemeProvider } from "@/lib/theme";
import { LocaleProvider, useLocale } from "@/lib/locale";
import SettingsPanel from "./SettingsPanel";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import styles from "./ResumeApp.module.css";

function ResumeLayout() {
  const { data } = useLocale();

  return (
    <>
      <SettingsPanel />
      <div className={styles.pageWrap}>
        <div className={`${styles.page} cv-page`}>
          <Sidebar data={data} />
          <MainContent data={data} />
        </div>
      </div>
    </>
  );
}

export default function ResumeApp() {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <ResumeLayout />
      </LocaleProvider>
    </ThemeProvider>
  );
}
