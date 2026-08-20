import Image from "next/image";
import styles from "./Sidebar.module.css";
import { PersonIcon, PhoneIcon, WebsiteIcon, LocationIcon, GraduationCapIcon } from "./icons";
import type { ResumeData } from "@/content/types";

const contactIcons = {
  phone: PhoneIcon,
  website: WebsiteIcon,
  location: LocationIcon,
  email: WebsiteIcon,
};

export default function Sidebar({ data }: { data: ResumeData }) {
  const { profile, contacts, formation } = data;

  return (
    <aside className={styles.sidebar}>
      <div className={styles.top}>
        <h1 className={styles.name}>
          {profile.firstName}
          <br />
          {profile.lastName}
        </h1>
        <p className={styles.jobTitle}>{profile.title}</p>

        <div className={styles.photoWrap}>
          <div className={styles.photoInner}>
            <Image src={profile.photo} alt={`${profile.firstName} ${profile.lastName}`} fill sizes="190px" />
          </div>
        </div>

        <h2 className={styles.sectionHeading}>
          <span className={styles.iconBadge}>
            <PersonIcon />
          </span>
          {contacts.heading}
        </h2>
        <ul className={styles.contactList}>
          {contacts.items.map((item, i) => {
            const Icon = contactIcons[item.type] ?? WebsiteIcon;
            const content = item.href ? (
              <a href={item.href} target="_blank" rel="noreferrer noopener">
                {item.value}
              </a>
            ) : (
              item.value
            );
            return (
              <li className={styles.contactItem} key={i}>
                <Icon />
                <span>{content}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles.bottom}>
        <h2 className={styles.sectionHeading}>
          <span className={`${styles.iconBadge} ${styles.iconBadgeLight}`}>
            <GraduationCapIcon />
          </span>
          {formation.heading}
        </h2>
        {formation.items.map((item, i) => (
          <div className={styles.formationItem} key={i}>
            <p className={styles.school}>{item.school}</p>
            <p className={styles.degree}>{item.degree}</p>
            <p className={styles.dates}>
              {item.start} - {item.end}
            </p>
          </div>
        ))}
      </div>
    </aside>
  );
}
