"use client";

import { useEffect, useRef, useState } from "react";

const LINKS = [
  {
    key: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/povinpuglia/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="17.2" cy="6.8" r="1.15" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@povinpuglia",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M14 3.2c.35 2.4 1.9 4 4.2 4.35v2.6c-1.5.05-2.9-.4-4.2-1.25v5.65c0 3.35-2.55 5.4-5.35 4.95-2.35-.38-3.9-2.35-3.75-4.7.15-2.35 2.15-4.05 4.5-3.85.25.02.5.06.75.13v2.75a2 2 0 1 0 1.35 1.9V3.2H14Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@povinpuglia",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2.5" y="5.5" width="19" height="13" rx="4" stroke="currentColor" strokeWidth="1.7" />
        <path d="M10.2 9.3v5.4l4.8-2.7-4.8-2.7Z" fill="currentColor" />
      </svg>
    ),
  },
];

const MAIL = "hello@povinpuglia.com";

export default function Page() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      toggleRef.current?.focus();
    };
  }, [open]);

  return (
    <main className="wrap">
      <header className="hero">
        {/* metti il tuo logo (marrone su sabbia) in /public/logo.png */}
        <img className="mark" src="/logo.png" alt="povinpuglia" width={108} height={108} />
        <h1 className="wordmark">povinpuglia</h1>
        <span className="caption">Let&apos;s live in Puglia</span>
      </header>

      <nav className="links" aria-label="Canali">
        {LINKS.map((l) => (
          <a
            key={l.key}
            className="row"
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ico">{l.icon}</span>
            <span className="label">{l.label}</span>
            <span className="arrow" aria-hidden="true">&#8599;</span>
          </a>
        ))}

        <a className="row mail" href={`mailto:${MAIL}`}>
          <span className="ico">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.7" />
              <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="label">{MAIL}</span>
          <span className="arrow" aria-hidden="true">&#8599;</span>
        </a>
      </nav>

      <button
        ref={toggleRef}
        className="projectToggle"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <span className="tri" aria-hidden="true">&#9656;</span> The project
      </button>

      <p className="footer">no script · no voiceover · just Puglia</p>

      {open && (
        <>
          <div className="scrim" onClick={() => setOpen(false)} />
          <aside
            className="drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="proj-title"
          >
            <div className="grab" aria-hidden="true" />
            <h2 id="proj-title">Project</h2>
            <p>
              No script. No voiceover. Everyday life in Puglia, filmed exactly as it happens,
              from a first-person point of view — real places, real moments, real Italian
              as it’s actually spoken. English subtitles make it easy to follow
              for anyone abroad, and double as a quiet way to pick up real, spoken Italian.
            </p>
            <span className="sub">
              Just Puglia, lived as it comes.
            </span>
            <button ref={closeRef} className="close" onClick={() => setOpen(false)}>
              Close
            </button>
          </aside>
        </>
      )}
    </main>
  );
}
