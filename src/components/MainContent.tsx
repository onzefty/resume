import styles from "./MainContent.module.css";
import { BriefcaseIcon, ChartIcon, GlobeIcon, FlagIcon } from "./icons";
import type { ResumeData } from "@/content/types";

export default function MainContent({ data }: { data: ResumeData }) {
  const { profile, experiences, competences, langues, hobbies } = data;
  const skillRows = Math.ceil(competences.items.length / 2);

  return (
    <main className={styles.main}>
      <div className={styles.tagline}>
        {profile.tagline.map((line, i) => (
          <h2 key={i}>{line}</h2>
        ))}
      </div>

      <section>
        <div className={styles.sectionHeading}>
          <span className={styles.iconBadge}>
            <BriefcaseIcon />
          </span>
          <h3>{experiences.heading}</h3>
        </div>

        {experiences.items.map((exp, i) => (
          <article className={styles.experienceItem} key={i}>
            <div className={styles.experienceHead}>
              <h4 className={styles.role}>{exp.role}</h4>
              <span className={styles.dates}>
                {exp.start} - {exp.end}
              </span>
            </div>
            <p className={styles.company}>
              {exp.company} / {exp.location}
            </p>
            <ul className={styles.bullets}>
              {exp.bullets.map((bullet, j) => (
                <li key={j}>
                  {bullet.text}
                  {bullet.detail && <span className={styles.bulletDetail}>{bullet.detail}</span>}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section>
        <div className={styles.sectionHeading}>
          <span className={styles.iconBadge}>
            <ChartIcon />
          </span>
          <h3>{competences.heading}</h3>
        </div>
        <div className={styles.skillsGrid} style={{ gridTemplateRows: `repeat(${skillRows}, auto)` }}>
          {competences.items.map((skill, i) => (
            <div className={styles.skillRow} key={i}>
              <span className={styles.skillName}>{skill.name}</span>
              <div className={styles.skillTrack}>
                <div className={styles.skillFill} style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.twoCol}>
        <section>
          <div className={styles.sectionHeading}>
            <span className={styles.iconBadge}>
              <GlobeIcon />
            </span>
            <h3>{langues.heading}</h3>
          </div>
          <ul className={`${styles.bulletList} ${styles.inlineList}`}>
            {langues.items.map((item, i) => (
              <li key={i}>
                <span className={styles.dot} />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <div className={styles.sectionHeading}>
            <span className={styles.iconBadge}>
              <FlagIcon />
            </span>
            <h3>{hobbies.heading}</h3>
          </div>
          <ul className={`${styles.bulletList} ${styles.inlineList}`}>
            {hobbies.items.map((item, i) => (
              <li key={i}>
                <span className={styles.dot} />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
