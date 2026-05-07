import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AutoLab — Browser Automation Training Ground",
  description: "A hands-on lab for learning browser automation tools like Playwright and Selenium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta name="darkreader-lock" />
        <meta name="color-scheme" content="dark" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var ready = false;
                function showApp() {
                  if (ready) return;
                  ready = true;
                  document.documentElement.classList.add("app-ready");
                }

                window.addEventListener("load", showApp, { once: true });
                setTimeout(showApp, 1800);
              })();
            `,
          }}
        />
        <style>{`
          html, body {
            background: #0a0c10;
            color: #e2e6ed;
          }

          body {
            margin: 0;
          }

          #startup-skeleton {
            position: fixed;
            inset: 0;
            z-index: 9999;
            background:
              radial-gradient(circle at 12% 18%, rgba(0, 220, 130, 0.14), transparent 30%),
              radial-gradient(circle at 78% 10%, rgba(0, 220, 130, 0.1), transparent 26%),
              #0a0c10;
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
            padding: 1.25rem;
          }

          .sk-nav,
          .sk-hero,
          .sk-cards {
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.02);
            overflow: hidden;
            position: relative;
          }

          .sk-nav {
            height: 64px;
          }

          .sk-hero {
            height: min(36vh, 260px);
          }

          .sk-cards {
            height: min(32vh, 220px);
          }

          .sk-nav::before,
          .sk-hero::before,
          .sk-cards::before {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(
              110deg,
              transparent 0%,
              rgba(255, 255, 255, 0.08) 42%,
              rgba(255, 255, 255, 0.14) 50%,
              rgba(255, 255, 255, 0.08) 58%,
              transparent 100%
            );
            transform: translateX(-100%);
            animation: sk-shimmer 1.1s linear infinite;
          }

          @keyframes sk-shimmer {
            to {
              transform: translateX(100%);
            }
          }

          #app-root {
            opacity: 0;
          }

          html.app-ready #app-root {
            opacity: 1;
            transition: opacity 0.2s ease;
          }

          html.app-ready #startup-skeleton {
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.2s ease;
          }
        `}</style>
        <noscript>
          <style>{`#startup-skeleton { display: none; } #app-root { opacity: 1; }`}</style>
        </noscript>
      </head>
      <body suppressHydrationWarning>
        <div id="startup-skeleton" aria-hidden="true">
          <div className="sk-nav"></div>
          <div className="sk-hero"></div>
          <div className="sk-cards"></div>
        </div>
        <div id="app-root">{children}</div>
      </body>
    </html>
  );
}
