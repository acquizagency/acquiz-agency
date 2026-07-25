export type IconComponent = (props: { className?: string }) => React.JSX.Element;

export function LandingPageIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <rect x="5" y="7" width="30" height="26" rx="3" fill="currentColor" fillOpacity="0.25" />
      <rect x="5" y="7" width="30" height="7" rx="3" fill="currentColor" />
      <rect x="10" y="19" width="14" height="3" rx="1.5" fill="currentColor" />
      <rect x="10" y="25" width="20" height="3" rx="1.5" fill="currentColor" />
      <rect x="10" y="19" width="14" height="9" rx="1.5" fill="none" />
      <rect x="24" y="19" width="6" height="9" rx="1.5" fill="currentColor" />
    </svg>
  );
}
