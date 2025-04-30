import { cn } from "@/lib/utils"
import type { ComponentPropsWithoutRef } from "react"

export function SocialLink({ className, ...props }: ComponentPropsWithoutRef<'a'>) {
  return (
    <a
      {...props}
      className={cn(
        "border border-border/75 p-2 flex items-center justify-center hover:bg-foreground/95 hover:text-background transition-colors",
        className
      )}
      target="_blank"
      rel="noreferrer"
    />
  )
}