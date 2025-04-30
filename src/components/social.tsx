import { cn } from "@/lib/utils"
import type { ComponentPropsWithoutRef } from "react"

type SocialLinkProps = ComponentPropsWithoutRef<'a'> & {
  label: string
}

export function SocialLink({ className, label, children, ...props }: SocialLinkProps) {
  return (
    <a
      {...props}
      className={cn(
        "border border-border/75 p-2 flex items-center justify-center hover:bg-foreground/95 hover:text-background transition-colors outline-none focus-visible:border-ring focus-visible:ring-ring/75 focus-visible:ring-[3px]",
        className
      )}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${label} (opens in a new tab)`}
      title={label}
    >
      <>
        <span className="sr-only">{label}</span>
        {children}
      </>
    </a>
  )
}