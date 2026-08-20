interface IconProps {
  className?: string;
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.5 2.5.8 3.8.9.6 0 1 .5 1 1v3.5c0 .6-.4 1-1 1C10.7 21.4 2.6 13.3 2.6 3.9c0-.6.4-1 1-1H7c.5 0 1 .4 1 1 .1 1.3.4 2.6.9 3.8.2.3.1.7-.2 1L6.6 10.8z"
        fill="currentColor"
      />
    </svg>
  );
}

export function WebsiteIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M3 12h18M12 3c2.2 2.4 3.4 5.6 3.4 9s-1.2 6.6-3.4 9c-2.2-2.4-3.4-5.6-3.4-9s1.2-6.6 3.4-9z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function LocationIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 22s7-7.4 7-12.6A7 7 0 0 0 5 9.4C5 14.6 12 22 12 22z"
        fill="currentColor"
      />
      <circle cx="12" cy="9.4" r="2.6" fill="white" />
    </svg>
  );
}

export function PersonIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="8" r="4" fill="currentColor" />
      <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" fill="currentColor" />
    </svg>
  );
}

export function GraduationCapIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 3 2 8l10 5 10-5-10-5z" fill="currentColor" />
      <path d="M6 11.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M22 8v5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function BriefcaseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="8" width="18" height="12" rx="2" fill="currentColor" />
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.8" fill="none" />
      <rect x="3" y="8" width="18" height="12" rx="2" stroke="white" strokeOpacity="0" />
      <path d="M3 13h18" stroke="white" strokeWidth="1.4" />
    </svg>
  );
}

export function ChartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 10 10H12V2z" fill="currentColor" />
      <path d="M13 2.2A10 10 0 0 1 21.8 11H13V2.2z" fill="currentColor" fillOpacity="0.55" />
    </svg>
  );
}

export function GlobeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="currentColor" />
      <path
        d="M3 12h18M12 3c2.2 2.4 3.4 5.6 3.4 9s-1.2 6.6-3.4 9c-2.2-2.4-3.4-5.6-3.4-9s1.2-6.6 3.4-9z"
        stroke="white"
        strokeWidth="1.4"
        fill="none"
      />
    </svg>
  );
}

export function FlagIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="currentColor" />
      <path d="M8 7v10M8 7l8 1.5-3 2.5 3 2.5-8 1" stroke="white" strokeWidth="1.3" fill="none" strokeLinejoin="round" />
    </svg>
  );
}
