"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Calendar, LinkIcon, MapPin } from "lucide-react"
import { Post } from "@/components/post"

// Mock user data
const mockUser = {
  id: "1",
  name: "John Doe",
  username: "johndoe",
  avatar: "/placeholder.svg?height=150&width=150",
  coverImage: "/placeholder.svg?height=400&width=1200",
  bio: "Software developer | Tech enthusiast | Coffee lover",
  location: "San Francisco, CA",
  website: "https://johndoe.com",
  joinedDate: "September 2021",
  following: 245,
  followers: 1024,
  postsCount: 532,
}

// Mock posts
const mockPosts = Array.from({ length: 5 }, (_, i) => ({
  id: `profile-post-${i}`,
  content: `This is a sample post #${i + 1} from my profile. What do you think about it? #twitvibe #social`,
  user: {
    id: mockUser.id,
    name: mockUser.name,
    username: mockUser.username,
    avatar: mockUser.avatar,
  },
  image: i % 2 === 0 ? `/placeholder.svg?height=400&width=600` : null,
  likesCount: Math.floor(Math.random() * 1000),
  commentsCount: Math.floor(Math.random() * 100),
  repostsCount: Math.floor(Math.random() * 50),
  timeAgo: `${Math.floor(Math.random() * 24)}h`,
}))

export function ProfileView() {
  const [isFollowing, setIsFollowing] = useState(false)
  const [followerCount, setFollowerCount] = useState(mockUser.followers)

  const handleFollowToggle = () => {
    if (isFollowing) {
      setFollowerCount((prev) => prev - 1)
    } else {
      setFollowerCount((prev) => prev + 1)
    }
    setIsFollowing(!isFollowing)
  }

  return (
    <div>
      {/* Cover Image */}
      <div className="relative h-48 w-full sm:h-64">
        <Image src={mockUser.coverImage || "/placeholder.svg"} alt="Cover" fill className="object-cover" />
      </div>

      {/* Profile Info */}
      <div className="relative px-4">
        <div className="absolute -top-16 left-4 rounded-full border-4 border-white dark:border-gray-950">
          <Image
            src={mockUser.avatar || "/placeholder.svg"}
            alt={mockUser.name}
            width={120}
            height={120}
            className="h-32 w-32 rounded-full object-cover"
          />
        </div>

        <div className="mt-20 flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold">{mockUser.name}</h1>
            <p className="text-gray-500 dark:text-gray-400">@{mockUser.username}</p>
          </div>

          <Button
            onClick={handleFollowToggle}
            variant={isFollowing ? "outline" : "default"}
            className={`rounded-full px-6 ${
              isFollowing
                ? "border-gray-300 hover:border-red-500 hover:bg-red-50 hover:text-red-500 dark:border-gray-700 dark:hover:border-red-500 dark:hover:bg-red-950 dark:hover:text-red-400"
                : "bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            }`}
          >
            {isFollowing ? "Following" : "Follow"}
          </Button>
        </div>

        <div className="mt-4">
          <p className="text-gray-900 dark:text-gray-100">{mockUser.bio}</p>

          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
            {mockUser.location && (
              <div className="flex items-center">
                <MapPin className="mr-1 h-4 w-4" />
                {mockUser.location}
              </div>
            )}

            {mockUser.website && (
              <div className="flex items-center">
                <LinkIcon className="mr-1 h-4 w-4" />
                <a
                  href={mockUser.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 hover:underline dark:text-cyan-400"
                >
                  {mockUser.website.replace(/^https?:\/\//, "")}
                </a>
              </div>
            )}

            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              Joined {mockUser.joinedDate}
            </div>
          </div>

          <div className="mt-2 flex gap-4 text-sm">
            <div>
              <span className="font-bold text-gray-900 dark:text-gray-100">{mockUser.following}</span>{" "}
              <span className="text-gray-500 dark:text-gray-400">Following</span>
            </div>
            <div>
              <span className="font-bold text-gray-900 dark:text-gray-100">{followerCount}</span>{" "}
              <span className="text-gray-500 dark:text-gray-400">Followers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-6">
        <Tabs defaultValue="posts">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="replies">Replies</TabsTrigger>
            <TabsTrigger value="media">Media</TabsTrigger>
            <TabsTrigger value="likes">Likes</TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="mt-0 divide-y divide-gray-200 dark:divide-gray-800">
            {mockPosts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </TabsContent>

          <TabsContent value="replies" className="mt-0">
            <div className="flex h-40 items-center justify-center text-gray-500 dark:text-gray-400">No replies yet</div>
          </TabsContent>

          <TabsContent value="media" className="mt-0">
            <div className="flex h-40 items-center justify-center text-gray-500 dark:text-gray-400">No media yet</div>
          </TabsContent>

          <TabsContent value="likes" className="mt-0">
            <div className="flex h-40 items-center justify-center text-gray-500 dark:text-gray-400">No likes yet</div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

