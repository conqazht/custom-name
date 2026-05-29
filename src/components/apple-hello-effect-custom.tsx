"use client"

import type { ComponentProps } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export type AppleHelloEffectCustomProps = Omit<
  ComponentProps<"div">,
  "onAnimationComplete"
> & {
  durationScale?: number
  onAnimationComplete?: () => void
}

export function AppleHelloEffectCustom({
  className,
  durationScale = 1,
  onAnimationComplete,
  ...props
}: AppleHelloEffectCustomProps) {
  const calc = (x: number) => x * durationScale

  return (
    <div className={cn("relative overflow-hidden", className)} {...props}>
      {/* chữ nền mờ (outline) */}
      <span
        className="block select-none font-['Georgia',_serif] italic text-[5rem] leading-none tracking-tight opacity-10"
        style={{ WebkitTextStroke: "1px currentColor", color: "transparent" }}
        aria-hidden
      >
        công anh
      </span>

      {/* chữ chính được reveal bằng clip */}
      <motion.span
        className="absolute inset-0 block overflow-hidden font-['Georgia',_serif] italic text-[5rem] leading-none tracking-tight whitespace-nowrap"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{
          duration: calc(2.5),
          ease: [0.25, 0.1, 0.25, 1],
        }}
        onAnimationComplete={onAnimationComplete}
      >
        công anh
      </motion.span>
    </div>
  )
}
