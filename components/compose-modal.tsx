"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ImageIcon, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ComposeModalProps {
  open: boolean
  onClose: () => void
}

export function ComposeModal({ open, onClose }: ComposeModalProps) {
  const [content, setContent] = useState("")
  const [image, setImage] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { toast } = useToast()

  const handleSubmit = () => {
    if (!content.trim() && !image) return

    setIsSubmitting(true)

    // Simulate API call delay
    setTimeout(() => {
      toast({
        title: "Post created!",
        description: "Your post has been published successfully.",
      })

      setContent("")
      setImage(null)
      setIsSubmitting(false)
      onClose()
    }, 1000)
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // In a real app, you would upload the file to a server
    // For this demo, we'll use a placeholder
    setImage(`/placeholder.svg?height=400&width=600`)
  }

  const removeImage = () => {
    setImage(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <Dialog open={open} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create a post</DialogTitle>
        </DialogHeader>

        <div className="mt-4 flex space-x-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <Textarea
              placeholder="What's happening?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[120px] resize-none border-none bg-transparent p-0 text-lg focus-visible:ring-0 focus-visible:ring-offset-0"
            />

            {image && (
              <div className="relative mt-2 rounded-xl border border-gray-200 dark:border-gray-800">
                <Image
                  src={image || "/placeholder.svg"}
                  alt="Uploaded image"
                  width={400}
                  height={300}
                  className="h-auto max-h-[300px] w-full rounded-xl object-cover"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2 rounded-full bg-black/50 text-white hover:bg-black/70"
                  onClick={removeImage}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}

            <div className="mt-4 flex items-center justify-between">
              <Button
                variant="ghost"
                size="icon"
                className="text-cyan-600 dark:text-cyan-400"
                onClick={() => fileInputRef.current?.click()}
              >
                <ImageIcon className="h-5 w-5" />
                <span className="sr-only">Add image</span>
              </Button>
              <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />

              <Button
                onClick={handleSubmit}
                disabled={(!content.trim() && !image) || isSubmitting}
                className="rounded-full bg-cyan-500 px-4 py-2 font-bold hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-700"
              >
                {isSubmitting ? "Posting..." : "Post"}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

