"use client"

import type { ComponentProps } from "react"
import type { TargetAndTransition } from "motion/react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

const initialProps: TargetAndTransition = {
  pathLength: 0,
  opacity: 0,
}

const animateProps: TargetAndTransition = {
  pathLength: 1,
  opacity: 1,
}

export type AppleHelloEffectCanhProps = Omit<
  ComponentProps<typeof motion.svg>,
  "durationScale" | "onAnimationComplete"
> & {
  durationScale?: number
  onAnimationComplete?: () => void
}

export function AppleHelloEffectCanh({
  className,
  durationScale = 1,
  onAnimationComplete,
  ...props
}: AppleHelloEffectCanhProps) {
  const calc = (x: number) => x * durationScale

  // --- Perfect connected "canh" using original Apple Hello geometries ---
  // Adjusted the letter 'c':
  // 1. The top hook is extended and rounded beautifully to start at (124, 105), giving it a mature signature feel.
  // 2. The bottom curve transition begins rising immediately at x=108 (instead of lingering flatly at x=115),
  //    rendering a perfectly round bottom that sweeps dynamically and flawlessly into 'a'.
  
  const pathC = [
    "M 124 105",
    "C 118 95 105 93.4984 85.459 93.4984",
    "C 56.516 93.4984 42.044 117.816 42.044 143.374",
    "C 42.044 171.503 62.265 192.506 91.307 192.506",
    "C 108 192.506 138 168 180.0 150.818" // Seamless, organic upward sweep into 'a'
  ].join(" ")

  const pathA_circle = [
    "M 260.819 112.995",
    "C 255.955 101.8 245.614 94.2423 229.155 94.2423",
    "C 201.86 94.2423 181.346 121.538 180.0 150.818", // Seamless target contact point
    "C 178.826 177.617 191.192 192.681 208.805 192.505",
    "C 233.806 192.255 252.182 167.699 260.385 115.742",
    "C 261.397 109.332 262.446 102.638 263.458 96.2274"
  ].join(" ")

  const pathANH = [
    // a2: stem going down
    "M 263.458 96.2273",
    "C 260.606 113.101 257.98 126.997 256.335 139.404",
    "C 255.404 147.592 254.959 154.54 255.011 161.488",
    "C 255.144 179.354 262.179 191.513 280.11 191.513",

    // n1: first leg
    "C 306.805 191.513 333.596 159.123 341.145 118.5",
    "C 342.479 111.321 344.427 103.759 345.554 96.2273",
    "C 340.839 127.741 336.869 158.759 331.906 190.272",

    // bridge
    "C 333.0 183.0 334.5 175.0 335.288 167.951",

    // n2: arch
    "C 342.119 121.32 362.923 94.2422 387.737 94.2422",
    "C 405.107 94.2422 414.04 106.153 412.551 123.026",
    "C 411.311 135.681 407.092 150.322 406.1 162.729",
    "C 404.859 179.85 413.914 191.513 428.184 191.513",

    // h1: tall loop
    "C 476.639 191.513 509.779 136.708 538.458 97.8807",
    "C 557.641 71.9101 566.751 49.2359 567.249 31.1674",
    "C 567.497 17.7684 561.045 7.60362 548.887 7.60362",
    "C 535.487 7.60362 527.05 17.7684 521.84 41.1011",
    "C 516.132 66.7441 511.914 96.1684 501.244 190.521",

    // bridge
    "C 501.244 187.5 501.244 184.5 501.244 181.299",

    // h2: arch and exit flourish
    "C 506.508 135.025 527.494 98.2125 554.044 98.2125",
    "C 569.925 98.2125 580.018 110.868 577.152 128.982",
    "C 575.539 139.652 572.625 152.059 570.959 164.217",
    "C 574.933 179.602 580.721 191.513 592.644 191.513",
    "C 618.009 191.513 633.206 164.077 641.444 135.196"
  ].join(" ")

  return (
    <motion.svg
      className={cn("select-none w-full max-w-[550px]", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 710 250"
      fill="none"
      stroke="currentColor"
      strokeWidth="14.8883" // Original Apple Hello line thickness
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      <title>canh</title>

      {/* 1. Letter 'c' and the smooth connection sweep */}
      <motion.path
        d={pathC}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(1.1),
          ease: "easeInOut",
          opacity: { duration: 0.25 },
        }}
      />

      {/* 2. Perfect 'a' circle body */}
      <motion.path
        d={pathA_circle}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.8),
          ease: "easeInOut",
          delay: calc(0.9), // Timed perfectly to start right as 'c' reaches the circle start
          opacity: { duration: 0.35, delay: calc(0.9) },
        }}
      />

      {/* 3. Flowing 'anh' stem and loop flourishes */}
      <motion.path
        d={pathANH}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(2.2),
          ease: "easeInOut",
          delay: calc(1.5), // Timed to start flowing right as 'a' circle completes
          opacity: { duration: 0.5, delay: calc(1.5) },
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </motion.svg>
  )
}
