# Social App

A responsive front-end social media interface built for the CSS Frameworks course assignment at Noroff.

This project was originally created to practise Tailwind CSS, responsive layout, reusable styling and basic multi-page structure. For Portfolio 2, the project has been reviewed, improved and prepared for professional presentation.

## Live Site

https://social-app-cssframework.netlify.app/

## Repository

https://github.com/adring93/social-app

## Project Overview

The project includes three pages:

* `index.html`: Landing page with login and register form
* `feed/index.html`: Feed page with post cards, search, sorting and a new post form
* `profile/index.html`: Profile page with user information, statistics and post cards

The site is built as a static front-end prototype. The login form is used to demonstrate navigation and user flow.

## Portfolio 2 Improvements

For Portfolio 2, I improved the project to make it more professional and portfolio ready.

The main improvements were:

* Updated the visual design with a cleaner and more modern color palette
* Improved the first impression by changing the plain login page into a more complete landing and login page
* Improved the feed page with better spacing, clearer hierarchy and more polished cards
* Improved the profile page with a cleaner layout and better content structure
* Improved contrast and readability
* Updated image alt text for better accessibility
* Fixed the Netlify deployment setup
* Added a Vite multipage build configuration so all pages work correctly after deployment

## Built With

* HTML
* Tailwind CSS
* Vite
* PostCSS
* JavaScript

## Setup

Install dependencies:

```bash
npm install
```

Start local development:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Technical Notes

This project uses Tailwind through npm instead of a CDN. The Tailwind CLI builds the CSS from:

```bash
src/styles/app.css
```

and outputs the final stylesheet to:

```bash
public/styles.css
```

The project also uses `vite.config.js` to make sure all three HTML pages are included in the production build.

## Pages

### Home and Login

The home page introduces the project and includes a login/register form. It was redesigned for Portfolio 2 to create a stronger first impression.

### Feed

The feed page shows a simple social media layout with search, sorting, post creation and responsive post cards.

### Profile

The profile page shows a user profile, follower statistics and a small post grid.

## Testing

The project was manually tested by checking:

* Home page loads correctly
* Login form redirects to the feed page
* Feed page loads correctly
* Profile page loads correctly
* Navigation between pages works
* Layout works on smaller and larger screens
* Netlify deployment works after production build

## Status

Completed and improved for Portfolio 2.
