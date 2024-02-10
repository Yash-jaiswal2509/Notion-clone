import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("anima rounded-md bg-primary/5", className)}
      {...props}
    />
  )
}

export { Skeleton }
