export interface ContactItem {
  type: "phone" | "website" | "location" | "email";
  value: string;
  href?: string;
}

export interface FormationItem {
  school: string;
  degree: string;
  start: string;
  end: string;
}

export interface ExperienceBullet {
  text: string;
  detail?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  bullets: ExperienceBullet[];
}

export interface CompetenceItem {
  name: string;
  level: number;
}

export interface ResumeData {
  meta: {
    locale: string;
    label: string;
    documentTitle: string;
  };
  profile: {
    firstName: string;
    lastName: string;
    title: string;
    photo: string;
    tagline: string[];
  };
  contacts: {
    heading: string;
    items: ContactItem[];
  };
  formation: {
    heading: string;
    items: FormationItem[];
  };
  experiences: {
    heading: string;
    items: ExperienceItem[];
  };
  competences: {
    heading: string;
    items: CompetenceItem[];
  };
  langues: {
    heading: string;
    items: string[];
  };
  hobbies: {
    heading: string;
    items: string[];
  };
}
