"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Repeat2, Share } from "lucide-react"

interface PostProps {
  post: {
    id: string
    content: string
    user: {
      id: string
      name: string
      username: string
      avatar: string
    }
    image: string | null
    likesCount: number
    commentsCount: number
    repostsCount: number
    timeAgo: string
  }
}

export function Post({ post }: PostProps) {
  const [liked, setLiked] = useState(false)
  const [reposted, setReposted] = useState(false)
  const [likesCount, setLikesCount] = useState(post.likesCount)
  const [repostsCount, setRepostsCount] = useState(post.repostsCount)

  const handleLike = () => {
    if (liked) {
      setLikesCount((prev) => prev - 1)
    } else {
      setLikesCount((prev) => prev + 1)
    }
    setLiked(!liked)
  }

  const handleRepost = () => {
    if (reposted) {
      setRepostsCount((prev) => prev - 1)
    } else {
      setRepostsCount((prev) => prev + 1)
    }
    setReposted(!reposted)
  }

  // Format content to highlight hashtags and mentions
  const formattedContent = post.content.split(" ").map((word, index) => {
    if (word.startsWith("#")) {
      return (
        <Link
          key={index}
          href={`/hashtag/${word.substring(1)}`}
          className="text-cyan-600 hover:underline dark:text-cyan-400"
        >
          {word}{" "}
        </Link>
      )
    } else if (word.startsWith("@")) {
      return (
        <Link
          key={index}
          href={`/user/${word.substring(1)}`}
          className="text-cyan-600 hover:underline dark:text-cyan-400"
        >
          {word}{" "}
        </Link>
      )
    }
    return word + " "
  })

  return (
    <article className="p-4 hover:bg-gray-50 dark:hover:bg-gray-900">
      <div className="flex">
        <Link href={`/profile/${post.user.username}`} className="mr-3 flex-shrink-0">
          <Avatar className="h-12 w-12">
            <AvatarImage src={post.user.avatar} alt={post.user.name} />
            <AvatarFallback>{post.user.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </Link>

        <div className="flex-1 min-w-0">
          <div className="flex items-center text-sm">
            <Link href={`/profile/${post.user.username}`} className="font-bold hover:underline">
              {post.user.name}
            </Link>
            <Link
              href={`/profile/${post.user.username}`}
              className="ml-1 text-gray-500 hover:underline dark:text-gray-400"
            >
              @{post.user.username}
            </Link>
            <span className="mx-1 text-gray-500 dark:text-gray-400">·</span>
            <span className="text-gray-500 dark:text-gray-400">{post.timeAgo}</span>
          </div>

          <div className="mt-1 whitespace-pre-wrap text-gray-900 dark:text-gray-100">{formattedContent}</div>

          {post.image && (
            <div className="mt-3 overflow-hidden rounded-xl">
              <Image
                src={post.image || "/placeholder.svg"}
                alt="Post image"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
          )}

          <div className="mt-3 flex max-w-md justify-between">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center text-gray-500 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-400"
            >
              <MessageCircle className="mr-1 h-4 w-4" />
              <span>{post.commentsCount}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className={`flex items-center ${
                reposted
                  ? "text-green-600 dark:text-green-400"
                  : "text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400"
              }`}
              onClick={handleRepost}
            >
              <Repeat2 className="mr-1 h-4 w-4" />
              <span>{repostsCount}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className={`flex items-center ${
                liked
                  ? "text-red-600 dark:text-red-400"
                  : "text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400"
              }`}
              onClick={handleLike}
            >
              <Heart className={`mr-1 h-4 w-4 ${liked ? "fill-current" : ""}`} />
              <span>{likesCount}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="flex items-center text-gray-500 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-400"
            >
              <Share className="mr-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}

