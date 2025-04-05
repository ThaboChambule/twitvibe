"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { Post } from "@/components/post"
import { ComposeBox } from "@/components/compose-box"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"

// Mock data for posts
const MOCK_USERS = [
  { id: "1", name: "Jane Cooper", username: "jane", avatar: "/placeholder.svg?height=40&width=40" },
  { id: "2", name: "Alex Johnson", username: "alexj", avatar: "/placeholder.svg?height=40&width=40" },
  { id: "3", name: "Sam Wilson", username: "samw", avatar: "/placeholder.svg?height=40&width=40" },
  { id: "4", name: "Taylor Swift", username: "taylorswift", avatar: "/placeholder.svg?height=40&width=40" },
  { id: "5", name: "Elon Musk", username: "elonmusk", avatar: "/placeholder.svg?height=40&width=40" },
]

const generateMockPost = (id: string, index: number) => {
  const user = MOCK_USERS[index % MOCK_USERS.length]
  const hasImage = index % 3 === 0
  const likesCount = Math.floor(Math.random() * 1000)
  const commentsCount = Math.floor(Math.random() * 100)
  const repostsCount = Math.floor(Math.random() * 50)
  const timeAgo = `${Math.floor(Math.random() * 24)}h`

  return {
    id,
    content: `This is a sample post #${index + 1} for our TwitVibe social media platform. What do you think about it? #twitvibe #social`,
    user,
    image: hasImage ? `/placeholder.svg?height=400&width=600` : null,
    likesCount,
    commentsCount,
    repostsCount,
    timeAgo,
  }
}

export function Feed() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const { ref, inView } = useInView()

  // Initial load
  useEffect(() => {
    const initialPosts = Array.from({ length: 10 }, (_, i) => generateMockPost(`post-${i}`, i))

    setTimeout(() => {
      setPosts(initialPosts)
      setLoading(false)
    }, 1500)
  }, [])

  // Infinite scroll
  useEffect(() => {
    if (inView && !loading) {
      loadMorePosts()
    }
  }, [inView])

  const loadMorePosts = () => {
    setLoading(true)

    // Simulate API call delay
    setTimeout(() => {
      const newPosts = Array.from({ length: 5 }, (_, i) => {
        const index = page * 5 + i
        return generateMockPost(`post-${page}-${i}`, index)
      })

      setPosts((prev) => [...prev, ...newPosts])
      setPage((prev) => prev + 1)
      setLoading(false)
    }, 1500)
  }

  const handleNewPost = (content: string, image?: string) => {
    const newPost = {
      id: `user-post-${Date.now()}`,
      content,
      user: {
        id: "current-user",
        name: "Current User",
        username: "currentuser",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      image: image || null,
      likesCount: 0,
      commentsCount: 0,
      repostsCount: 0,
      timeAgo: "Just now",
    }

    setPosts((prev) => [newPost, ...prev])
  }

  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-10 border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80">
        <div className="p-4">
          <h1 className="text-xl font-bold">Home</h1>
        </div>
        <Tabs defaultValue="for-you" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="for-you">For You</TabsTrigger>
            <TabsTrigger value="following">Following</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="border-b border-gray-200 p-4 dark:border-gray-800">
        <ComposeBox onSubmit={handleNewPost} />
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-800">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}

        {/* Loading indicator */}
        {loading && (
          <div className="p-4">
            <div className="flex items-start space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-64 w-full" />
              </div>
            </div>
          </div>
        )}

        {/* Intersection observer target */}
        <div ref={ref} className="h-10" />
      </div>
    </div>
  )
}

