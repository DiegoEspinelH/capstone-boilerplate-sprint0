import type { Metadata } from 'next'
import Link from 'next/link'
import { requireAuth } from '@/actions/auth.actions'
import { teamName, projectName, teamMembers } from '@/features/team/data'
import { TeamMemberCard } from '@/features/team/components/TeamMemberCard'

export const metadata: Metadata = {
  title: 'Team',
}

export default async function TeamPage() {
  await requireAuth()

  return (
    <div className="min-h-screen bg-black p-8 text-white sm:p-12">
      <div className="relative">
        <Link
          href="/dashboard"
          className="mb-4 block text-center text-sm text-zinc-300 underline hover:text-white sm:absolute sm:top-0 sm:right-0 sm:mb-0 sm:text-right"
        >
          Continue to dashboard →
        </Link>
        <div className="text-center">
          <h1 className="text-6xl font-bold tracking-tight">{teamName}</h1>
          <h2 className="mt-2 text-2xl text-zinc-300">{projectName}</h2>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={`${member.name}-${index}`} member={member} />
        ))}
      </div>
    </div>
  )
}
