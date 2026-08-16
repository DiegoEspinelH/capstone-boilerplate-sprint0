import type { TeamMember } from './types'

// Team name and project name are taken directly from docs/assets/team-sketch.png
// (the team's own design sketch) — not placeholder text.
export const teamName = 'Meet Team 18'
export const projectName = 'Telstra: Robotics and NLI'

// Placeholder avatar (provided by the team) used for any member without a
// real photo yet, and as the runtime fallback if a real photo fails to load
// (see TeamMemberPhoto). Exported so both cases can detect it and crop
// tighter — the source image has a small white margin around the icon that
// a real photo doesn't have.
export const PLACEHOLDER_PHOTO = '/images/team-pic/placeholder-avatar.png'

// Photo alt text isn't stored per-member — it's derived from `name` at
// render time (`${name} photo`), per docs/DESIGN-LOGIN-AND-TEAM-PAGE.md's
// alt-text rule. This keeps it correct automatically, including for
// unfilled slots (name is ADD_INFO until a member is identified).

export const teamMembers: TeamMember[] = [
  {
    name: 'Aryan Singla',
    role: 'PM',
    bio: 'Hello, I am Aryan Singla, a project manager on the team. I enjoy leading teams and delivering successful projects.',
    // TODO: no real photo yet for this team member — replace PLACEHOLDER_PHOTO
    // with an actual photo path once this member is identified.
    photoPath: PLACEHOLDER_PHOTO,
  },
  {
    name: 'Wasif Fouzan Mohammed',
    role: 'BA',
    bio: 'Hello, I am Wasif Fouzan Mohammed, a business analyst on the team. I enjoy analyzing data and providing insights to drive business decisions.',
    // TODO: no real photo yet for fouzan121 — replace PLACEHOLDER_PHOTO with
    // an actual photo path once one is provided.
    photoPath: '/images/team-pic/wasif.png',
  },
  {
    name: 'Diego Espinel Hernandez',
    role: 'UX/UI Designer',
    bio: 'Hello, I am Diego Espinel Hernandez, a UX/UI designer on the team. I enjoy creating user-friendly interfaces and improving user experiences.',
    photoPath: '/images/team-pic/Diego.JPG',
  },
  {
    // Only 3 team members are known from repo history. These 2 remaining
    // slots match the sketch's 5-member grid but have no data yet.
    name: 'Lav Bujak',
    role: 'Dev',
    bio: 'Hello, I am Lav Bujak, a developer on the team. I enjoy coding and working on innovative projects.',
    photoPath: '/images/team-pic/lav-bujak.png',
  },
  {
    name: 'Jamie Hoang',
    role: 'Dev',
    bio: 'Hello, I am Jamie Hoang, a developer on the team. I enjoy coding and working on innovative projects.',
    photoPath: '/images/team-pic/jamie-hoang.jpg',
  },
]
