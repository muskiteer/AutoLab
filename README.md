# AutoLab — Browser Automation Training Ground

AutoLab is a hands-on learning environment for browser automation tools (Playwright, Selenium, Puppeteer, etc.). The frontend hosts a set of controlled challenge sites you can automate locally to build real-world skills: filling forms, paginated data extraction, timed interactions, and more.

## What this repo contains
- Frontend: a Next.js app that provides the challenge targets and documentation ([frontend/package.json](frontend/package.json)).
- Solutions: a folder for community-submitted solutions and language-specific helpers ([Solutions/]).

## Key features
- Play with three starter challenges (login form, paginated table, timed form).
- Tool-agnostic: solve challenges using Node.js, Python, Java, or any supported language.
- Simple workflow: run locally, write a script, verify output, then optionally submit a PR with your solution.
    
## Prerequisites
- Node.js (recommended 18+), npm/yarn/pnpm
- For Playwright or Puppeteer: install the tool and browsers per their docs
- For Selenium: install language bindings and a browser driver (e.g., chromedriver)

## Quick start (frontend)
1. Install dependencies:

```bash
cd frontend
npm install
```

2. Run the dev server:

```bash
npm run dev
# open http://localhost:3000
```

3. Build & start for production:

```bash
npm run build
npm start
```

## Where to find challenges
Open the site at `http://localhost:3000` and visit the Challenges section. The challenge targets are under `frontend/public/challenges` (served by the Next.js app). Each challenge has a short goal and hint to guide automation.

## Contributing solutions
- Add your working solution under the `Solutions/` folder in a clear subdirectory (e.g., `Solutions/playwright/level-01-yourname`).
- Include a README explaining how to run your solution and any dependencies. For Python solutions, add a `requirements.txt` alongside the code.
- Open a PR and reference the level you solved.

## Notes
- The frontend is built with Next.js, React and Tailwind (see `frontend/package.json`).
- This repo is tool-agnostic — there is no automated grader. The goal is practice and sharing real solutions.

## Links
- Next.js: https://nextjs.org
- Playwright: https://playwright.dev
- Selenium: https://www.selenium.dev

If you'd like, I can also add a simple CONTRIBUTING guide or scaffold a template under `Solutions/` for new submissions. Want me to do that next?
