import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function TrendingSection() {
  // Mock trending topics
  const trendingTopics = [
    { id: 1, topic: "Technology", hashtag: "#TechNews", postCount: "125K posts" },
    { id: 2, topic: "Sports", hashtag: "#WorldCup", postCount: "98K posts" },
    { id: 3, topic: "Entertainment", hashtag: "#MovieRelease", postCount: "87K posts" },
    { id: 4, topic: "Politics", hashtag: "#Election2024", postCount: "76K posts" },
    { id: 5, topic: "Health", hashtag: "#Wellness", postCount: "54K posts" },
  ]

  // Mock who to follow
  const whoToFollow = [
    { id: 1, name: "Tech News", username: "technews", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 2, name: "Sports Center", username: "sportscenter", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 3, name: "Music Daily", username: "musicdaily", avatar: "/placeholder.svg?height=40&width=40" },
  ]

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
        <Input placeholder="Search TwitVibe" className="pl-10" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Trends for you</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            {trendingTopics.map((topic) => (
              <Link
                key={topic.id}
                href={`/explore/tags/${topic.hashtag.substring(1)}`}
                className="block px-4 py-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-900"
              >
                <div className="text-sm text-gray-500 dark:text-gray-400">{topic.topic}</div>
                <div className="font-bold">{topic.hashtag}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{topic.postCount}</div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Who to follow</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            {whoToFollow.map((user) => (
              <Link
                key={user.id}
                href={`/profile/${user.username}`}
                className="flex items-center justify-between px-4 py-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-900"
              >
                <div className="flex items-center">
                  <div className="mr-3 h-10 w-10 overflow-hidden rounded-full">
                    <img
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold">{user.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">@{user.username}</div>
                  </div>
                </div>
                <Button className="rounded-full bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                  Follow
                </Button>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Import Button component
import { Button } from "@/components/ui/button"

