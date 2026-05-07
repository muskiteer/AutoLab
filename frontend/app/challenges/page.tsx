"use client";

import { useState } from "react";

const CHALLENGES = [
  {
    id: "01",
    title: "The Tasks Grabber",
    hint: "Login with the given credentials. Scrape Today's tasks from the dashboard.",
    tag: "EASY",
    tagClass: "tag-easy",
    href: "/level-1/index.html",
    goal: "Login with the credentials {Automata:AutoLab} and extract all uncompleted tasks from the Today's tasks section on the dashboard. Output the results as a list of task names.",
    learn: "Locating input fields, typing text, clicking submit buttons, waiting for page navigation, and extracting data from dynamic UI elements.",
    locked: false,
  },
  {
    id: "02",
    title: "Paginated Table",
    hint: "Multiple pages of data. Collect it all. Output as JSON.",
    tag: "EASY",
    tagClass: "tag-easy",
    href: "/level-2/index.html",
    goal: "Iterate through all pages of the data table and extract every row into a structured JSON array.",
    learn: "Looping through pages, identifying 'next page' buttons, extracting table row data, and handling pagination state.",
    locked: false,
  },
  {
    id: "03",
    title: "Beat the Clock",
    hint: "Fill and submit a multi-field form before the timer runs out.",
    tag: "EASY",
    tagClass: "tag-easy",
    href: "/challenges/03-timed-form/index.html",
    goal: "Complete the entire form and submit it successfully within the short 10-second time limit.",
    learn: "Fast script execution, optimizing selector lookups, and handling dynamic form validation under time constraints.",
    locked: false,
  },
  {
    id: "04",
    title: "Tier 2 — Coming soon",
    hint: "Dynamic DOM, lazy loading, SPA behavior",
    tag: "LOCKED",
    tagClass: "tag-locked",
    href: "#",
    goal: "N/A",
    learn: "N/A",
    locked: true,
  }
];

export default function Challenges() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleLevel = (id: string, locked: boolean) => {
    if (locked) return;
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      {/* NAV */}
      <nav>
        <div className="container nav-inner">
          <a className="nav-logo" href="/">
            <span className="logo-icon">
              <svg suppressHydrationWarning xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            </span>
            AUTO<span>LAB</span>
          </a>
          <ul className="nav-links">
            <li><a href="/#why">Why</a></li>
            <li><a href="/#how">Get Started</a></li>
            <li><a href="/challenges">Challenges</a></li>
            <li><a href="/#tools">Docs</a></li>
            <li>
              <a className="nav-gh" href="https://github.com/muskiteer/autolab" target="_blank" rel="noreferrer">
                <svg suppressHydrationWarning xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* LEVELS */}
      <section className="section" id="levels" style={{ paddingTop: '8rem', minHeight: '80vh' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-label">// CHALLENGES</div>
            <h2 className="section-title">Start here. <em>Level up.</em></h2>
            <p className="section-subtitle">Click on a challenge to see its goal and what you will learn. Solve them in order, or jump to what interests you.</p>
          </div>
          <div className="levels-grid">
            {CHALLENGES.map((ch) => (
              <div 
                key={ch.id}
                className={`level-card ${ch.locked ? "locked" : ""}`}
                style={{ 
                  cursor: ch.locked ? "default" : "pointer", 
                  flexDirection: "column", 
                  alignItems: "stretch",
                  background: expandedId === ch.id ? "var(--bg2)" : undefined,
                  borderColor: expandedId === ch.id ? "rgba(0, 220, 130, 0.25)" : undefined
                }}
                onClick={() => toggleLevel(ch.id, ch.locked)}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", width: "100%" }}>
                  <div className="level-status">
                    {ch.locked ? (
                      <svg suppressHydrationWarning xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    ) : (
                      <div className="level-status-dot"></div>
                    )}
                  </div>
                  <div className="level-id">{ch.id}</div>
                  <div className="level-info">
                    <div className="level-title">{ch.title}</div>
                    <div className="level-hint">{ch.hint}</div>
                  </div>
                  <div className={`level-tag ${ch.tagClass}`}>{ch.tag}</div>
                  {!ch.locked && (
                    <div className="level-arrow" style={{ transform: expandedId === ch.id ? "rotate(90deg)" : "none", transition: "transform 0.3s var(--transition)" }}>
                      <svg suppressHydrationWarning xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </div>
                  )}
                </div>

                {expandedId === ch.id && !ch.locked && (
                  <div style={{ 
                    marginTop: "1.5rem", 
                    paddingTop: "1.5rem", 
                    borderTop: "1px solid var(--border)", 
                    display: "flex", 
                    flexDirection: "column", 
                    gap: "1.5rem",
                    animation: "fadeIn 0.3s ease-in-out"
                  }}>
                    <style>{`
                      @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(-10px); }
                        to { opacity: 1; transform: translateY(0); }
                      }
                    `}</style>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
                      <div style={{ flex: "1 1 300px" }}>
                        <h4 style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--green)", letterSpacing: "1px", marginBottom: "0.5rem" }}>THE GOAL</h4>
                        <p style={{ fontSize: "14px", color: "var(--text-dim)", lineHeight: "1.6" }}>{ch.goal}</p>
                      </div>
                      <div style={{ flex: "1 1 300px" }}>
                        <h4 style={{ fontFamily: "var(--mono)", fontSize: "11px", color: "var(--green)", letterSpacing: "1px", marginBottom: "0.5rem" }}>WHAT YOU LEARN</h4>
                        <p style={{ fontSize: "14px", color: "var(--text-dim)", lineHeight: "1.6" }}>{ch.learn}</p>
                      </div>
                    </div>
                    <div style={{ marginTop: "0.5rem" }}>
                      <a href={ch.href} target="_blank" rel="noreferrer" className="btn-main" style={{ padding: "12px 24px", fontSize: "12px" }} onClick={(e) => e.stopPropagation()}>
                        <span>Launch Challenge</span>
                        <svg suppressHydrationWarning xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ marginTop: 'auto' }}>
        <div className="container footer-inner">
          <div className="footer-left">
            <div className="footer-logo">
              <svg suppressHydrationWarning xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              AUTOLAB
            </div>
            <div className="footer-note">Open source · Built for automation engineers</div>
          </div>
          <div className="footer-links">
            <a href="https://github.com/muskiteer/autolab" target="_blank" rel="noreferrer">GitHub</a>
            <a href="/challenges">Challenges</a>
            <a href="/#tools">Docs</a>
          </div>
        </div>
      </footer>
    </>
  );
}
