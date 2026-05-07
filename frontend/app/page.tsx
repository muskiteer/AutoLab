const ToolsMarquee = () => {
  const tools = ["Playwright", "Selenium", "Puppeteer", "Cypress", "WebdriverIO", "Node.js", "Python", "Java", "TypeScript", "Ruby", "CDP", "Go", "Rust"];
  return (
    <section className="marquee-wrapper">
      <div className="marquee-mask">
        <div className="marquee-track">
          <div className="marquee-content">
            {tools.map((t, i) => (
              <span key={`first-${i}`} className="marquee-item">
                <span className="marquee-dot">◆</span> {t}
              </span>
            ))}
          </div>
          <div className="marquee-content">
            {tools.map((t, i) => (
              <span key={`second-${i}`} className="marquee-item">
                <span className="marquee-dot">◆</span> {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav>
        <div className="container nav-inner">
          <a className="nav-logo" href="#">
            <span className="logo-icon">
              <svg suppressHydrationWarning width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            </span>
            AUTO<span>LAB</span>
          </a>
          <ul className="nav-links">
            <li><a href="#why">Why</a></li>
            <li><a href="#how">Get Started</a></li>
            <li><a href="/challenges">Challenges</a></li>
            <li><a href="#tools">Docs</a></li>
            <li>
              <a className="nav-gh" href="https://github.com/muskiteer/autolab" target="_blank" rel="noreferrer">
                <svg suppressHydrationWarning width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              BROWSER AUTOMATION TRAINING GROUND
            </div>
            <h1>Stop reading docs.<br /><em>Start automating.</em></h1>
            <p className="hero-desc">
              AutoLab is a hands-on lab for learning browser automation tools like Playwright and Selenium — by solving real challenges on controlled websites, not by watching tutorials.
            </p>
            <div className="hero-actions">
              <a className="btn-main" href="/challenges">
                <span>Start Challenge 01</span>
                <svg suppressHydrationWarning width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
              <a className="btn-outline" href="https://github.com/muskiteer/autolab" target="_blank" rel="noreferrer">
                <svg suppressHydrationWarning width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                View on GitHub
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-value">3</span>
                <span className="stat-label">Challenges</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-value">Any</span>
                <span className="stat-label">Framework</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-value">∞</span>
                <span className="stat-label">Solutions</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-wrapper">
              <div className="hero-glow"></div>
              <img src="/assets/front.jpg" alt="Automation Training Environment" />
              <div className="hero-image-badge">
                <svg suppressHydrationWarning width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                Live Environment
              </div>
            </div>
          </div>
        </div>
      </section>

      <ToolsMarquee />

      {/* WHY */}
      <section className="section" id="why">
        <div className="container">
          <div className="section-header">
            <div className="section-label">// THE THESIS</div>
            <h2 className="section-title">Built because tutorials <em>aren&apos;t enough.</em></h2>
            <p className="section-subtitle">The gap between &ldquo;hello world&rdquo; scripts and real-world automation is massive. AutoLab bridges it.</p>
          </div>
          <div className="why-grid">
            <div className="why-cell full">
              <div className="why-icon">
                <svg suppressHydrationWarning width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
              </div>
              <h3>THE PROBLEM</h3>
              <p>
                You want to learn browser automation — Playwright, Puppeteer, Selenium. You read the docs.
                You watch a tutorial. You write a script that scrapes a simple page. And then you hit a real website
                and <strong>nothing works the way it should.</strong> Dynamic content. Weird selectors. Timing issues.
                There was no place to practice on messy, realistic targets before facing the real web.
                <em>AutoLab is that place.</em>
              </p>
            </div>
            <div className="why-cell">
              <div className="why-icon">
                <svg suppressHydrationWarning width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              </div>
              <h3>WHAT YOU NEED</h3>
              <p>Your own machine. Node.js or Python. Playwright or Selenium installed. That&apos;s it. AutoLab provides the target — a live website you automate against. You write the script locally, run it yourself, and check your own output.</p>
            </div>
            <div className="why-cell">
              <div className="why-icon">
                <svg suppressHydrationWarning width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <h3>WHAT YOU GAIN</h3>
              <p>Practical debugging skills. An understanding of how real web behavior works. The confidence to open any website and automate it — even when it fights back.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" id="how">
        <div className="container">
          <div className="section-header">
            <div className="section-label">// THE WORKFLOW</div>
            <h2 className="section-title">Five steps. <em>No shortcuts.</em></h2>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-num">01</div>
              <div className="step-line"></div>
              <div className="step-body">
                <h4>Pick a level</h4>
                <p>Each level has a target website and a goal. Read the goal. Open the target site in your browser to understand its structure.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <div className="step-line"></div>
              <div className="step-body">
                <h4>Set up your environment</h4>
                <p>Install <code>playwright</code> or <code>selenium</code> locally. No sandboxes, no in-browser editors — you run scripts on your own machine, like a real engineer.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <div className="step-line"></div>
              <div className="step-body">
                <h4>Write your script</h4>
                <p>Automate the target site to achieve the goal. Use any tool, any language. There&apos;s no single right answer — only correct output.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">04</div>
              <div className="step-line"></div>
              <div className="step-body">
                <h4>Check your output</h4>
                <p>Compare your script&apos;s output to the goal. No automated grader — you know when you&apos;ve got it. Move to the next level when you&apos;re satisfied.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">05</div>
              <div className="step-line"></div>
              <div className="step-body">
                <h4>Share your solution on GitHub</h4>
                <p>If your solution is unique, open a PR. It gets reviewed and merged into the <code>/solutions</code> folder — your name in the repo forever.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* TOOLS / DOCS */}
      <section className="section" id="tools">
        <div className="container">
          <div className="section-header">
            <div className="section-label">// REFERENCE DOCS</div>
            <h2 className="section-title">Your toolkit. <em>Your choice.</em></h2>
            <p className="section-subtitle">
              AutoLab is tool-agnostic. Use whatever you&apos;re comfortable with. Here are the official docs for the most common tools:
            </p>
          </div>
          <div className="tools-row">
            <a className="tool-card" href="https://playwright.dev/docs/intro" target="_blank" rel="noreferrer">
              <div className="tool-icon">
                <svg suppressHydrationWarning width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              </div>
              <div>
                <div className="tool-name">Playwright</div>
                <div className="tool-desc">Node.js · Python · Java · .NET</div>
              </div>
              <div className="tool-arrow">↗</div>
            </a>
            <a className="tool-card" href="https://www.selenium.dev/documentation/" target="_blank" rel="noreferrer">
              <div className="tool-icon">
                <svg suppressHydrationWarning width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </div>
              <div>
                <div className="tool-name">Selenium</div>
                <div className="tool-desc">Python · Java · JS · Ruby · C#</div>
              </div>
              <div className="tool-arrow">↗</div>
            </a>
            <a className="tool-card" href="https://pptr.dev/" target="_blank" rel="noreferrer">
              <div className="tool-icon">
                <svg suppressHydrationWarning width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
              </div>
              <div>
                <div className="tool-name">Puppeteer</div>
                <div className="tool-desc">Node.js · Chrome DevTools Protocol</div>
              </div>
              <div className="tool-arrow">↗</div>
            </a>
          </div>
        </div>
      </section>

      {/* GITHUB CTA */}
      <div className="gh-banner">
        <div className="container">
          <div className="gh-inner">
            <div className="gh-glow"></div>
            <div className="gh-content">
              <div className="gh-icon">
                <svg suppressHydrationWarning width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              </div>
              <div className="gh-text">
                <h3>This is built in public.</h3>
                <p>
                  Found a bug? Have an idea for a new level? Open an issue.<br />
                  Solved a level in a unique way? Open a PR — unique solutions get merged.
                </p>
              </div>
            </div>
            <a className="btn-main" href="https://github.com/muskiteer/autolab" target="_blank" rel="noreferrer">
              <svg suppressHydrationWarning width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              <span>Star on GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="container footer-inner">
          <div className="footer-left">
            <div className="footer-logo">
              <svg suppressHydrationWarning width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              AUTOLAB
            </div>
            <div className="footer-note">Open source · Built for automation engineers</div>
          </div>
          <div className="footer-links">
            <a href="https://github.com/muskiteer/autolab" target="_blank" rel="noreferrer">GitHub</a>
            <a href="/challenges">Challenges</a>
            <a href="#tools">Docs</a>
          </div>
        </div>
      </footer>
    </>
  );
}
