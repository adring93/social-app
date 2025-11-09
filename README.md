# Social App

This is a responsive front-end social media interface built as coursework for the CSS Frameworks (FED2-24) module.  
It demonstrates usage of [Tailwind CSS](https://tailwindcss.com/) with [Vite](https://vitejs.dev/) and [PostCSS](https://postcss.dev/) in a local development setup (no CDN).

---

## Project Overview

The project includes three pages:

- **`index.html`**: Login/registration form with HTML validation (email and minimum 8 characters for passwords).
- **`feed/index.html`**: Feed displaying a list of posts, search bar, sorting options, and a form for new posts.
- **`profile/index.html`**: Profile page with user image, follow button, and user's posts.

All pages are responsive and built with a consistent, component-based style.

---

## Setup

**Install dependencies:**
```bash
npm install
```

**Start local development:**
```bash
npm run dev
```

**Build for production:**
```bash
npm run build
```

---

## Technical Details

- Tailwind CSS (npm install)
- PostCSS (configured with `postcss.config.js` and `tailwind.config.js`)
- Vite for dev/build scripts
- No CDN is used for any CSS or JS

---

## Testing & Validation

- All layouts were manually checked from 320px wide to desktop screen widths.
- Form fields enforce required email and password length via HTML validation.
- Navigation between pages works through form actions.
- Tailwind CLI was confirmed to output `public/styles.css` on changes.
- The Vite server was verified at `http://localhost:5173/`.

## Branch & Submission

- Branch: `css-frameworks`
- Submitted via open Pull Request into `main`

---

This project is for educational demonstration only.