"use client"

import { Facebook, Twitter, Linkedin, Link } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

interface ShareButtonsProps {
  title: string
}

export default function ShareButtons({ title }: ShareButtonsProps) {
  const handleShare = (platform: string) => {
    const url = window.location.href
    let shareUrl = ""

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
        break
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        break
      case "copy":
        navigator.clipboard.writeText(url).then(
          () => {
            toast({
              title: "Link copied!",
              description: "The article link has been copied to your clipboard.",
            })
          },
          (err) => {
            console.error("Could not copy text: ", err)
          },
        )
        return
      default:
        return
    }

    window.open(shareUrl, "_blank", "width=600,height=400")
  }

  return (
    <div className="flex items-center justify-between">
      <div className="text-gray-700 font-medium">Share this article:</div>
      <div className="flex space-x-2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200"
          onClick={() => handleShare("facebook")}
        >
          <Facebook className="h-4 w-4" />
          <span className="sr-only">Share on Facebook</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full hover:bg-sky-50 hover:text-sky-500 hover:border-sky-200"
          onClick={() => handleShare("twitter")}
        >
          <Twitter className="h-4 w-4" />
          <span className="sr-only">Share on Twitter</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200"
          onClick={() => handleShare("linkedin")}
        >
          <Linkedin className="h-4 w-4" />
          <span className="sr-only">Share on LinkedIn</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full hover:bg-gray-100"
          onClick={() => handleShare("copy")}
        >
          <Link className="h-4 w-4" />
          <span className="sr-only">Copy link</span>
        </Button>
      </div>
    </div>
  )
}
