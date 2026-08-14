export function PinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <path
        d="M20 4C13.4 4 8 9.4 8 16c0 9.5 12 20 12 20s12-10.5 12-20c0-6.6-5.4-12-12-12Zm0 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <path
        d="M12 6h16v6c0 4.4-3.1 8.1-7.2 8.8V25h4.2v4H15v-4h4.2v-4.2C15.1 20.1 12 16.4 12 12V6Z"
        fill="currentColor"
      />
      <path
        d="M12 8H7a1 1 0 0 0-1 1v1c0 3 2.2 5.5 5 5.9V13a9 9 0 0 1-1-4V8ZM28 8h5a1 1 0 0 1 1 1v1c0 3-2.2 5.5-5 5.9V13a9 9 0 0 0 1-4V8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CertificateIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <circle cx="20" cy="15" r="10" fill="currentColor" />
      <path d="M20 10.5 21.6 14l3.8.4-2.9 2.6.8 3.8-3.3-2-3.3 2 .8-3.8-2.9-2.6 3.8-.4L20 10.5Z" fill="#FBF9F1" />
      <path d="M14 22 12 34l8-4 8 4-2-12" fill="currentColor" />
    </svg>
  );
}

export function LightningIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <path d="M22 4 9 23h8l-2 13 15-19h-8l2-13Z" fill="currentColor" />
    </svg>
  );
}
