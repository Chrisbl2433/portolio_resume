# How to Publish Your Portfolio on GitHub — Today

Your site will go live, free, at **https://chrisbl2433.github.io**. No coding — it's all
drag-and-drop in your web browser. Budget about **15 minutes**.

> **TL;DR:** Download & unzip `portfolio_website.zip` → create a public GitHub repo named
> `chrisbl2433.github.io` → drag the **contents** of the `portfolio` folder in → Settings ›
> Pages › Branch: `main` / `/root` › Save → visit the URL. Case-study password: **Christos**.

---

## Before you start
1. **The files.** In your Google Drive `Personal` folder, download **`portfolio_website.zip`**
   and **unzip it**. You'll get a `portfolio` folder containing:
   - `index.html`
   - `case-study-1.html` … `case-study-5.html`
   - `styles.css`, `script.js`
   - `Chris_Bouloumpasis_CV.pdf`
   - an `images` folder (with `profile.jpg`)
   - (`README.md` and this guide may also be inside — they don't affect the site; upload or ignore.)
2. **A free GitHub account** (Step 1 below if you don't have one).
3. ~15 minutes.

> Tip: put this guide on one half of your screen and your browser on the other.

---

## Step 1 — Create a free GitHub account (skip if you have one)
1. Go to **https://github.com** → **Sign up**.
2. Use your personal email; pick a username. *Your site address depends on the username —
   it's currently set up for **chrisbl2433**. If you pick a different one, tell me and I'll
   update the files.*
3. Verify your email. The free plan is all you need.

---

## Step 2 — Create the repository
A "repository" (repo) is just the folder GitHub will host.
1. Top-right **+** → **New repository**.
2. **Repository name** — type exactly:
   ```
   chrisbl2433.github.io
   ```
   This exact name (your username + `.github.io`, all lowercase) is what makes GitHub serve it
   as a website.
3. Set **Public**.
4. Leave everything else unticked (no README, no .gitignore, no licence).
5. **Create repository**.

---

## Step 3 — Upload the site files
1. On the empty repo page, click **uploading an existing file** (or **Add file → Upload files**).
2. Open your unzipped `portfolio` folder.
3. Select **everything inside it** — all the files **and** the `images` folder — and **drag them
   into the browser upload box**.
   - ✅ Drag the **contents** of `portfolio`, not the `portfolio` folder itself. `index.html` must
     land at the top level of the repo.
   - ✅ Make sure the `images` folder (with `profile.jpg`) comes along, or your photo won't show.
4. Wait for the files to finish uploading, then click the green **Commit changes**.

---

## Step 4 — Turn on GitHub Pages
For a repo named `username.github.io` this is usually automatic — this just confirms it.
1. In the repo, **Settings** (top) → **Pages** (left sidebar).
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. **Branch:** `main`, folder **`/ (root)`** → **Save**.
4. You'll see "Your site is live at …".

---

## Step 5 — Check it 🎉
1. Wait **1–2 minutes** for the first publish.
2. Visit **https://chrisbl2433.github.io**.
3. Click a case study → enter the password **Christos** to view it.

Put that URL on your CV and LinkedIn, and share it with recruiters.

---

## Updating the site later
1. Ask me to make the change (or edit the file yourself).
2. In the repo: **Add file → Upload files** → drag the changed file(s) in → **Commit changes**.
3. The live site updates within a minute. Hard-refresh to see it: **Cmd+Shift+R** (Mac) /
   **Ctrl+Shift+R** (Windows).

**Change the case-study password:** open `script.js`, edit the line near the top
`var PASSWORD = "Christos";`, save, and re-upload `script.js`.

---

## If something goes wrong
| Problem | Fix |
|--------|-----|
| **404 / not found** | Wait 2 min; confirm the repo is named exactly `chrisbl2433.github.io` and is **Public**; confirm `index.html` sits at the top level (not inside a `portfolio` subfolder). |
| **Photo missing** | The `images` folder (with `profile.jpg`) must be uploaded and sit next to `index.html`. |
| **Styling looks broken** | `styles.css` must be at the top level next to `index.html`. Re-upload it. |
| **Old version showing** | Hard refresh: `Cmd+Shift+R` (Mac) / `Ctrl+Shift+R` (Windows). |

---

## Good to know
- **The site is fully public.** The case-study password is a light "please don't peek" gate,
  not real security — anyone technical can view the page source. Keep genuinely confidential
  detail off these pages. Your résumé, name, email, and About text are publicly visible (normal
  for a portfolio).
- **The case studies are illustrative** (the disclaimer says so) — your methods and experience
  are real; the specific companies, data, and figures are anonymised or hypothetical.
- **Filenames are case-sensitive** on GitHub. Don't rename `index.html` or the `images` folder,
  or links will break.

## Optional — custom domain later
If you buy a domain (e.g. `chrisbouloumpasis.com`): Settings → Pages → **Custom domain**. Not
needed to launch — the `.github.io` address works perfectly.

---

*Stuck? Bring me any error message or screenshot and I'll walk you through it.*
