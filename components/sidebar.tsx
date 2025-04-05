"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Home, Search, Bell, Mail, Bookmark, User, Settings, LogOut, PenSquare } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ComposeModal } from "@/components/compose-modal"

export function Sidebar() {
  const [showComposeModal, setShowComposeModal] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleLogout = () => {
    localStorage.removeItem("twitvibe-auth-token")
    toast({
      title: "Logged out successfully",
      description: "See you again soon!",
    })
    router.push("/auth")
  }

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Search, label: "Explore", href: "/explore" },
    { icon: Bell, label: "Notifications", href: "/notifications" },
    { icon: Mail, label: "Messages", href: "/messages" },
    { icon: Bookmark, label: "Bookmarks", href: "/bookmarks" },
    { icon: User, label: "Profile", href: "/profile" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ]

  const SidebarContent = () => (
    <div className="flex h-full flex-col justify-between p-4">
      <div className="space-y-6">
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-10">
            <Image src="/images/twitvibe-logo.png" alt="TwitVibe Logo" fill className="object-contain" />
          </div>
          <span className="ml-2 text-xl font-bold text-cyan-600 dark:text-cyan-400">TwitVibe</span>
        </Link>

        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center rounded-full px-4 py-3 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              <item.icon className="mr-4 h-6 w-6" />
              <span className="text-lg">{item.label}</span>
            </Link>
          ))}
        </nav>

        <Button
          onClick={() => setShowComposeModal(true)}
          className="w-full rounded-full bg-cyan-500 py-6 text-lg font-bold hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-700"
        >
          <PenSquare className="mr-2 h-5 w-5" />
          Compose
        </Button>
      </div>

      <Button
        variant="ghost"
        className="flex w-full items-center justify-start rounded-full px-4 py-3 text-red-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950"
        onClick={handleLogout}
      >
        <LogOut className="mr-4 h-6 w-6" />
        <span className="text-lg">Logout</span>
      </Button>
    </div>
  )

  return (
    <>
      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="fixed bottom-4 left-4 z-50 rounded-full bg-cyan-500 p-3 text-white shadow-lg hover:bg-cyan-600 lg:hidden"
          >
            <div className="relative h-6 w-6">
              <Image src="/images/twitvibe-logo.png" alt="TwitVibe Logo" fill className="object-contain" />
            </div>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[280px] p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="sticky top-0 hidden h-screen w-64 lg:block">
        <SidebarContent />
      </div>

      {/* Compose Modal */}
      <ComposeModal open={showComposeModal} onClose={() => setShowComposeModal(false)} />
    </>
  )
}

