'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { PLACEHOLDER_PHOTO } from '../data'

interface TeamMemberPhotoProps {
  src: string
  alt: string
}

// Fixed dimensions, same for a real photo or the placeholder — the layout
// never shifts whether the image loads or not.
export function TeamMemberPhoto({ src, alt }: TeamMemberPhotoProps) {
  const [failedToLoad, setFailedToLoad] = useState(false)

  // Falls back to the placeholder if the real photo fails to load at
  // runtime, not just when a member has no photo assigned at all.
  const resolvedSrc = failedToLoad ? PLACEHOLDER_PHOTO : src
  const isPlaceholder = resolvedSrc === PLACEHOLDER_PHOTO

  return (
    <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full bg-zinc-200">
      <Image
        src={resolvedSrc}
        alt={alt}
        width={96}
        height={96}
        className={cn(
          'h-full w-full object-cover',
          // Placeholder stays untouched (already zoomed in to hide its white
          // margin). Real photos zoom out slightly so less gets cropped off;
          // the wrapper's bg-zinc-200 matches the card so no gap is visible.
          isPlaceholder ? 'scale-110' : 'scale-95'
        )}
        onError={() => setFailedToLoad(true)}
      />
    </div>
  )
}
