# Task 2 – Login and Team Page Requirements

## Overview

For Task 2, we are updating the styling of the existing login page and creating a Team Page.

The login functionality already exists in the Garage Boilerplate, so we are not changing how authentication works. The main goal for the login page is to improve its styling while keeping the existing Firebase authentication working.

The Team Page will introduce our project and show the members of our team.

## Login Page

The login page changes are mainly styling changes based on the UX design.

The existing Firebase authentication and login behaviour should remain the same. We are not adding a new authentication method or changing the authentication logic as part of this task.

After a successful login, the user should be able to access the Team Page.

If login fails, the existing error handling should continue to work.

## Team Page

The Team Page should include:

- Team name
- Project name
- Team member photo
- Team member name
- Team member role
- A short blurb about each team member

Each team member should follow the same general card/layout style so the page looks consistent and is easy to read.

## Display and Validation

The team member name and role should not be empty.

If a team member does not have a photo yet, a placeholder should be shown instead of displaying a broken image.

Different blurb lengths should not break the team member card or page layout.

The page should remain readable and usable on desktop and smaller screen sizes.

## Functional Requirements

**FR1:** The existing login page should be restyled based on the UX design.

**FR2:** Existing Firebase authentication should continue working after the styling changes.

**FR3:** A successful login should allow the user to access the Team Page.

**FR4:** The Team Page should display the team name and project name.

**FR5:** The Team Page should display all team members.

**FR6:** Each team member should have their photo, name, role and short blurb displayed.

**FR7:** A placeholder should be shown if a team member photo is missing.

**FR8:** The Team Page should work properly on common desktop and mobile screen sizes.

## Edge Cases

UX and development should consider the following:

- Missing team member photo
- Long team member names
- Different blurb lengths
- Small/mobile screen sizes
- Failed login
- User trying to access the Team Page without being logged in

## Acceptance Criteria

Task 2 can be considered complete when:

- The login page has the agreed styling.
- Existing Firebase login still works.
- A successful login allows the user to access the Team Page.
- The team name and project name are visible on the Team Page.
- Every team member has their name, role, photo or placeholder, and short blurb displayed.
- Missing photos do not break the page.
- Different blurb lengths do not break the layout.
- The page is usable on desktop and smaller screens.

## BA Handoff

The requirements are ready for UX and development.

**Deliverable:** This requirements document will be committed to the team repository and linked on the Task 2 Planner card.

UX can use these requirements when working on the Login and Team Page designs. Development can use the functional requirements and acceptance criteria when implementing the feature.

If anything in the design changes these requirements, or if something is unclear during development, it should be discussed with the team before implementation.