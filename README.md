# UXR Portfolio

A static, no-build portfolio site (HTML/CSS/JS) modelled on the structure of
Matthew Elias Moutos' site — recreated styling, original content. Designed to
deploy on **GitHub Pages**.

## Files
| File | Purpose |
|------|---------|
| `index.html` | Home: hero, case-study cards, about, résumé, contact |
| `case-study-1.html`–`case-study-5.html` | Deep-dive case studies (password-gated) |
| `styles.css` | All styling (design system: Inter + DM Serif Display, indigo palette) |
| `script.js` | Mobile nav + client-side password gate |
| `images/` | Put `profile.jpg` and any case-study images here |

## Preview locally
The folder lives in your Google Drive workspace, so just **double-click any
`.html` file** to open it in a browser. No server needed.

## Set the case-study password
Open `script.js` → change `var PASSWORD = "Christos";` to your chosen password.
(Client-side only — keeps casual visitors out, but the source is readable, so
keep genuinely confidential detail out of these pages.)

## Add a new case study
1. Copy `case-study-1.html` → `case-study-2.html`.
2. Update the content + the `<title>`.
3. Add a matching `<a class="case-card" href="case-study-2.html">…</a>` on `index.html`
   and a nav link in the sidebar (on every page).

## Deploy to GitHub Pages
1. Create a GitHub repo. For a personal site at `https://<username>.github.io`,
   name the repo exactly **`<username>.github.io`**. (Any repo name also works —
   it'll serve at `https://<username>.github.io/<repo>/`.)
2. Upload these files to the repo root (drag-and-drop in the GitHub web UI, or
   `git push`).
3. Repo **Settings → Pages → Source: Deploy from branch → `main` / root → Save**.
4. Wait ~1 min; your site is live at the URL above.

> Note on confidentiality: case studies are based on real work but anonymised (company
> names withheld, figures directional). Keep it that way — no employer-confidential data,
> screenshots, or unreleased product detail.
