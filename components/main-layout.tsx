import type React from "react"
import { Sidebar } from "@/components/sidebar"
import { TrendingSection } from "@/components/trending-section"
import { ThemeToggle } from "@/components/theme-toggle"

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      <Sidebar />
      <main className="flex-1 border-x border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-2xl">{children}</div>
      </main>
      <div className="sticky top-0 hidden h-screen w-80 lg:block">
        <div className="flex h-full flex-col p-4">
          <div className="mb-4 flex justify-end">
            <ThemeToggle />
          </div>
          <TrendingSection />
        </div>
      </div>
    </div>
  )
}

