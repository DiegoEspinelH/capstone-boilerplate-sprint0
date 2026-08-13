import { cn } from '@/lib/utils'
import { TeamMemberPhoto } from './TeamMemberPhoto'
import type { TeamMember } from '../types'

interface TeamMemberCardProps {
  member: TeamMember
}

function isUnfilled(value: string) {
  return value === 'ADD INFORMATION'
}

// Card size stays fixed regardless of content — long bios/names scroll
// inside the card instead of growing it (docs/DESIGN-LOGIN-AND-TEAM-PAGE.md
// "Card behaviour").
export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="flex h-72 flex-col items-center gap-3 overflow-y-auto rounded-md bg-zinc-200 p-5 text-center text-zinc-900">
      <TeamMemberPhoto src={member.photoPath} alt={`${member.name} photo`} />

      <div className="space-y-1 text-sm">
        {/* break-words: long names wrap onto more lines, never truncated or hyphenated */}
        <p className={cn('break-words', isUnfilled(member.name) && 'italic text-zinc-500')}>
          <span className="font-bold">Name: </span>
          {member.name}
        </p>
        <p className={cn(isUnfilled(member.role) && 'italic text-zinc-500')}>
          <span className="font-bold">Role: </span>
          {member.role}
        </p>
        <p className={cn(isUnfilled(member.bio) && 'italic text-zinc-500')}>
          <span className="font-bold">Bio: </span>
          {member.bio}
        </p>
      </div>
    </div>
  )
}
