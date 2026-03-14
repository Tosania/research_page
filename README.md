# Academic Homepage Template

This repository contains a clean academic homepage that can be deployed directly on Vercel without a build step.

## Files you will edit most

- `site-data.js`: your name, affiliation, biography, publications, teaching, and contact links
- `index.html`: page structure and section order
- `styles.css`: colors, layout, and visual style

## Local preview

From the project root, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Customize your academic profile

Open `site-data.js` and replace the sample content:

- `profile`: your name, title, affiliation, location, bio, and external links
- `highlights`: 3 short statements that define your academic identity
- `research`: your main research directions
- `news`: recent updates such as accepted papers, talks, awards, or recruiting
- `publications`: selected papers with venue, authors, summary, and links
- `teaching`: courses or workshops
- `experience`: education, appointments, or lab roles
- `contact`: your call-to-action and contact buttons

## Upload to GitHub

If this folder is not already a Git repository:

```bash
git init
git add .
git commit -m "Initial academic homepage"
```

Create a new empty GitHub repository, then connect and push:

```bash
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git branch -M main
git push -u origin main
```

## Deploy to Vercel

1. Sign in to Vercel with your GitHub account.
2. Click `Add New...` -> `Project`.
3. Import the GitHub repository you just pushed.
4. Vercel will detect it as a static site automatically.
5. Click `Deploy`.

After deployment, every push to `main` will trigger a new production deployment.

## Optional next step

If you want a custom domain later, open the project in Vercel, go to `Settings` -> `Domains`, and add your domain there.
