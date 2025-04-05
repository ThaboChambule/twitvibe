import { AuthForm } from "@/components/auth-form"
import Image from "next/image"
import Link from "next/link"

export default function AuthPage() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Left side with logo and branding */}
      <div className="flex flex-1 items-center justify-center bg-gradient-to-br from-cyan-500 to-cyan-700 p-10 dark:from-cyan-900 dark:to-cyan-950">
        <div className="max-w-md text-center">
          <div className="mb-6 flex justify-center">
            <div className="relative h-48 w-48">
              <Image
                src="/images/twitvibe-logo.png"
                alt="TwitVibe Logo"
                fill
                className="object-contain drop-shadow-lg"
                priority
              />
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white">TwitVibe Social</h1>
          <p className="text-xl text-white/90">Connect with friends and the world around you on TwitVibe.</p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1"></path>
                  <path d="M17 3h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1"></path>
                  <path d="M12 12v9"></path>
                  <path d="M8 21h8"></path>
                  <path d="M12 3v9"></path>
                </svg>
              </div>
              <p className="text-left text-white/90">Follow your interests and stay updated</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                </svg>
              </div>
              <p className="text-left text-white/90">Share your thoughts with the world</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <p className="text-left text-white/90">Connect with like-minded people</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side with auth form */}
      <div className="flex flex-1 items-center justify-center bg-white p-10 dark:bg-gray-950">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h2 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Welcome back</h2>
            <p className="text-gray-600 dark:text-gray-400">Sign in to your account to continue</p>
          </div>

          <AuthForm />

          <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            By signing up, you agree to our{" "}
            <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-400">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-400">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

