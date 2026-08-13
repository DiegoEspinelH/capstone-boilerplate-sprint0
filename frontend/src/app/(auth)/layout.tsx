import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Authentication',
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen">
      <Image
        src="/images/login-background.jpg"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="relative z-10 flex w-full items-center justify-center bg-zinc-50 px-4 py-12 dark:bg-zinc-950 md:ml-auto md:w-1/3 md:px-8">
        <div className="w-full max-w-sm">{children}</div>
      </div>
    </div>
  )
}
