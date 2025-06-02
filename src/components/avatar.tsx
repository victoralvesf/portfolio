import { cn } from "@/lib/utils"
import type { ComponentPropsWithoutRef } from "react"

type AvatarProps = ComponentPropsWithoutRef<'div'> & {
  imageClassName?: string
}

export function Avatar({ className, imageClassName, ...props }: AvatarProps) {
  return (
    <div
      className={cn("hidden min-w-full aspect-square bg-foreground/10 md:block border-4 border-border/75", className)}
    >
      <img
        src="/avatar_pixel_art.png"
        alt="Victor Alves"
        className={cn("aspect-square grayscale-50 hover:grayscale-0 transition-all text-transparent", imageClassName)}
        width="1024"
        height="1024"
      />
    </div>
  )
}