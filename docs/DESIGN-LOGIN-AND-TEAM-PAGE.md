# Login Redesign & Team Page

> Design decisions and layout sketches for the login page redesign and the new team page.

**Jump to:** [Login Redesign](#login-redesign) · [Team Page](#team-page) · [Responsive Behaviour](#responsive-behaviour) · [General Rules](#general-rules)

> **Note:** This redesign does not affect any existing functionality. It is purely visual and structural.

## Login Redesign

The login page uses a full-page background image with the login components overlaid on the right-hand third of the screen.

![Login page layout sketch](assets/login-sketch.png)

### Layout

- The **background image covers the entire page** (full width and height).
- The background image lives in `frontend/public/images/`
- The login components (email and password inputs) sit in a **panel spanning 1/3 of the screen width**, anchored to the **right-hand side**.
- The remaining 2/3 on the left shows the background image uncovered.

### Behaviour

- No colours change from the current design.
- On successful login, the user is **redirected to the [Team Page](#team-page)**.

## Team Page

A new page introducing the team, shown after login.

![Team page layout sketch](assets/team-sketch.png)

### Structure

- **Team name** as an `h1` heading.
- **Project title** as an `h2` heading.
- A **"continue to dashboard"** text link fixed to the **top-right corner**; clicking it redirects the user to the dashboard.
- A grid of **`team-member-card`** components, laid out **3 columns per row**.
- Team member photos are stored in `frontend/public/images/team-pic/`

### Team member cards

Each `team-member-card` contains:

| Element | Description |
|-|-|
| Image | Photo of the team member |
| Name | Team member's name |
| Role | Their role in the project |
| Bio | A brief blurb about them |

Since the team has **5 members**, the cards wrap into two rows: **3 cards on the first row, 2 on the second** (on desktop — see [Responsive Behaviour](#responsive-behaviour)).

### Card behaviour

- If a **name is too long**, it wraps onto more than one line. It is **never hyphenated or truncated**.
- If wrapping causes content to overflow the card, the **card size stays fixed** — the card content **scrolls** so the user can read everything.
- If the overall page content does not fit the viewport, the **body extends and the user scrolls down** to see the rest.

## Responsive Behaviour

The layout supports smaller screen sizes. Breakpoints below are a starting point and can be tuned during implementation.

### Login page

- On **narrow screens (mobile)**, the right-hand 1/3 panel becomes a **full-width panel** so the inputs stay usable.
- The **background image still covers the entire page** behind the panel, keeping `background-size: cover` so it scales without distortion.

### Team member grid

The 3-column grid **reflows by screen width**:

| Screen size | Columns |
|-|-|
| Desktop (wide) | 3 columns |
| Tablet (medium) | 2 columns |
| Mobile (narrow) | 1 column |

- Cards **stack vertically** as the column count drops; the page body extends and the user **scrolls down** to see all members.
- The **top-right "continue to dashboard" link** remains visible and reachable on mobile (it must not overlap the headings — wrap or reposition it if space is tight).

## General Rules

These apply across the redesign:

- Every photo **must have alt text** in case it fails to render, following the format: **`Team-member-name photo`** (e.g. `Alice Smith photo`).
- If a team member photo is **missing or fails to load**, a **placeholder/fallback image is shown** in its place (not an empty gap or broken-image icon). 
![Fallback image for photo load fail](frontend/public/images/team-pic/person-gray-photo-placeholder-man.avif)
- **Image sizes are fixed and must not be altered.** The placeholder occupies the **exact same fixed dimensions** as a real photo, so the layout never shifts whether the image loads or not.
