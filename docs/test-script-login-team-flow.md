# Test Script: Login → Redirect → Team Page Flow

**Task:** [Login Restyling Bootstrap] Task 6: Test Login → Redirect → Team Page Flow
**Role:** Dev 2: Jamie Hoang
**Related docs:** `docs/requirements-login-team-page.md`, `docs/DESIGN-LOGIN-AND-TEAM-PAGE.md`

## Scope

This script covers the **happy path** only: a valid login, the redirect to the Team Page, and verification that all required Team Page content renders correctly. It maps to functional requirements FR1–FR7 from `docs/requirements-login-team-page.md`.

Edge cases (failed login, unauthenticated access to `/team`, mobile/responsive breakpoints, missing photo at the data level) are **out of scope** for this script, cover those in a follow-up edge-case test pass.

## Preconditions

| Item | Value |
|---|---|
| Deployed URL | `https://capstone-boilerplate-sprint0-frontend-lx91ypyfm-jamie-04e9.vercel.app/`, the Vercel production URL for this project (see `docs/CI-CD.md`) |
| Test account | `jamiehoang90@gmail.com` / `Abcdefg1`: a real Firebase Auth user in the deployed project, email-verified. Do **not** commit real credentials to the repo; keep them in a password manager or local `.env` and reference them here as placeholders. |
| Browser | Latest Chrome (or the browser the tester has available) |
| Viewport | Desktop, ≥1280px wide |

## Test Cases

### TC-01: Valid login redirects to the Team Page

| Step | Action | Expected Result |
|---|---|---|
| 1 | Navigate to `https://capstone-boilerplate-sprint0-frontend-lx91ypyfm-jamie-04e9.vercel.app/auth/signin` | Login page loads with the full-page background image and the email/password panel anchored to the right third of the screen |
| 2 | Enter the test account email and password | Fields accept input, no validation errors shown |
| 3 | Click **Sign in** | A "Signed in successfully" toast appears |
| 4 | Wait for navigation | Browser redirects to `https://capstone-boilerplate-sprint0-frontend-lx91ypyfm-jamie-04e9.vercel.app/team` (URL bar confirms `/team`) |

### TC-02: Team identity content

| Step | Action | Expected Result |
|---|---|---|
| 1 | On the Team Page, locate the main heading | Team name (`h1`) is present and matches the agreed team name |
| 2 | Locate the subheading | Project name (`h2`) is present and matches the agreed project name, directly below the team name |

### TC-03: Team member cards render required fields

| Step | Action | Expected Result |
|---|---|---|
| 1 | Count the member cards in the grid | One card per team member (5 expected), laid out 3 columns per row on desktop |
| 2 | For each card, check the photo | A photo (or placeholder, see TC-04) is visible with non-empty `alt` text in the format `<Name> photo` |
| 3 | For each card, check the name | Team member's name is displayed and matches the roster |
| 4 | For each card, check the role | Role is displayed and non-empty |
| 5 | For each card, check the bio | A short blurb is displayed and non-empty |

### TC-04: Photo vs. placeholder fallback

| Step | Action | Expected Result |
|---|---|---|
| 1 | Identify any team member without a real photo assigned | Their card shows the placeholder avatar, not a broken-image icon or empty gap |
| 2 | Compare placeholder card dimensions to a card with a real photo | Image container is the same fixed size (96×96) in both cases the layout does not shift |

### TC-05: Long content stays inside a fixed-size card

| Step | Action | Expected Result |
|---|---|---|
| 1 | Find the card with the longest name and/or bio | Card height stays fixed (does not grow to fit content) |
| 2 | If the text overflows the card | The card content scrolls internally (`overflow-y-auto`) so the full text is reachable; text wraps rather than being hyphenated or truncated |

### TC-06: Continue to dashboard link

| Step | Action | Expected Result |
|---|---|---|
| 1 | Locate the "Continue to dashboard" link | Visible, fixed to the top-right corner of the Team Page, does not overlap the headings |
| 2 | Click it | Browser navigates to `/dashboard` |

## Sign-off

Once every test case above has a Pass/Fail result, record it in `docs/test-report-login-team-flow.md` and update the Task 6 checklist on the board.
