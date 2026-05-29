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

export type AppleHelloEffectCongAnhProps = Omit<
  ComponentProps<typeof motion.svg>,
  "durationScale" | "onAnimationComplete"
> & {
  /**
   * Scales the duration and delay of the handwriting animation.
   * Values below 1 speed up, values above 1 slow down.
   * @defaultValue 1
   */
  durationScale?: number
  /** Called when the full handwriting animation completes. */
  onAnimationComplete?: () => void
}

export function AppleHelloEffectCongAnh({
  className,
  durationScale = 1,
  onAnimationComplete,
  ...props
}: AppleHelloEffectCongAnhProps) {
  const calc = (x: number) => x * durationScale

  return (
    <motion.svg
      className={cn("h-20", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1100 280"
      fill="none"
      stroke="currentColor"
      strokeWidth="14.8883"
      strokeLinecap="round"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      <title>công anh</title>

      {/* c, ô (body & connection) */}
      <motion.path
        d="M115.91 109.876C111.265 100.446 100.943 93.4984 85.459 93.4984C56.516 93.4984 42.044 117.816 42.044 143.374C42.044 171.503 62.265 192.506 91.307 192.506C113.806 192.506 132.209 164.721 141.509 138.289C150.896 111.612 162.558 94.9867 186.876 94.9867C206.975 94.9867 222.856 109.875 222.856 137.915C222.856 168.932 202.732 192.257 177.302 192.505C154.924 192.753 140.226 174.639 141.714 147.344C143.451 117.071 161.814 94.9867 185.883 94.9867C199.779 94.9867 211.45 101.164 220.623 107.89C245.49 126.031 264.65 114.82 271.983 96.8832"
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(1.5),
          ease: "easeInOut",
          opacity: { duration: 0.25 },
        }}
      />

      {/* ô (circumflex hat ^) */}
      <motion.path
        d="M167 62L182 47L197 62"
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.4),
          ease: "easeInOut",
          delay: calc(1.3),
          opacity: { duration: 0.15, delay: calc(1.3) },
        }}
      />

      {/* n1 (in công) */}
      <motion.path
        d="M271.983 96.2278C267.268 127.741 263.298 158.759 258.335 190.272"
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.4),
          ease: "easeOut",
          delay: calc(1.6),
          opacity: { duration: 0.2, delay: calc(1.6) },
        }}
      />

      {/* n2 (in công) */}
      <motion.path
        d="M261.717 167.951C268.548 121.32 289.352 94.2422 314.166 94.2422C331.536 94.2422 340.469 106.153 338.98 123.026C337.74 135.681 333.521 150.322 332.529 162.729C331.288 179.85 340.343 191.513 354.613 191.513C372.566 191.513 383.153 179.314 387.987 165.965"
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.7),
          ease: "easeOut",
          delay: calc(1.9),
          opacity: { duration: 0.35, delay: calc(1.9) },
        }}
      />

      {/* g (circle) */}
      <motion.path
        d="M470.871 112.995C466.007 101.8 455.666 94.2423 439.207 94.2423C411.912 94.2423 391.398 121.538 390.052 150.818C388.878 177.617 401.244 192.681 418.857 192.505C443.858 192.255 462.234 167.699 470.437 115.742C471.449 109.332 472.498 102.638 473.51 96.2274"
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.7),
          ease: "easeInOut",
          delay: calc(2.5),
          opacity: { duration: 0.35, delay: calc(2.5) },
        }}
      />

      {/* g (loop + connecting swing) */}
      <motion.path
        d="M473.51 96.227C471.0 121.5 462.0 171.5 457.0 201.5C452.0 231.5 437.0 266.5 417.0 266.5C397.0 266.5 392.0 246.5 402.0 226.5C412.0 206.5 437.0 186.5 472.0 186.5C497.0 186.5 515.0 186.5 535.0 186.5"
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.9),
          ease: "easeInOut",
          delay: calc(3.1),
          opacity: { duration: 0.45, delay: calc(3.1) },
        }}
      />

      {/* a (circle in anh) */}
      <motion.path
        d="M665.819 112.995C660.955 101.8 650.614 94.2423 634.155 94.2423C606.86 94.2423 586.346 121.538 585.0 150.818C583.826 177.617 596.192 192.681 613.805 192.505C638.806 192.255 657.182 167.699 665.385 115.742C666.397 109.332 667.446 102.638 668.458 96.2274"
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.8),
          ease: "easeOut",
          delay: calc(3.9),
          opacity: { duration: 0.4, delay: calc(3.9) },
        }}
      />

      {/* anh — ONE single continuous stroke reusing the ORIGINAL beautiful curves, joined at transition points */}
      <motion.path
        d={[
          // === a2: stem going down (ORIGINAL beautiful curve from 'i' pattern) ===
          "M668.458 96.2273",
          "C665.606 113.101 662.98 126.997 661.335 139.404",
          "C660.404 147.592 659.959 154.54 660.011 161.488",
          "C660.144 179.354 667.179 191.513 685.11 191.513",
          "C711.805 191.513 738.596 159.123 746.145 118.5",
          "C747.479 111.321 749.427 103.759 750.554 96.2273",

          // === n1: straight down from peak (ORIGINAL curve) ===
          "C745.839 127.741 741.869 158.759 736.906 190.272",

          // --- tiny bridge: from n1 end (736.906,190.272) up to n2 start (740.288,167.951) ---
          "C738.0 183.0 739.5 175.0 740.288 167.951",

          // === n2: arch (ORIGINAL beautiful curve) ending at 833.184 ===
          "C747.119 121.32 767.923 94.2422 792.737 94.2422",
          "C810.107 94.2422 819.04 106.153 817.551 123.026",
          "C816.311 135.681 812.092 150.322 811.1 162.729",
          "C809.859 179.85 818.914 191.513 833.184 191.513",

          // === h1: ascender (ORIGINAL beautiful curve) ===
          "C881.639 191.513 914.779 136.708 943.458 97.8807",
          "C962.641 71.9101 971.751 49.2359 972.249 31.1674",
          "C972.497 17.7684 966.045 7.60362 953.887 7.60362",
          "C940.487 7.60362 932.05 17.7684 926.84 41.1011",
          "C921.132 66.7441 916.914 96.1684 906.244 190.521",

          // --- tiny bridge: from h1 end (906.244,190.521) to h2 start area (906.244,181.299) ---
          "C906.244 187.5 906.244 184.5 906.244 181.299",

          // === h2: arch (ORIGINAL beautiful curve) ===
          "C911.508 135.025 932.494 98.2125 959.044 98.2125",
          "C974.925 98.2125 985.018 110.868 982.152 128.982",
          "C980.539 139.652 977.625 152.059 975.959 164.217",
          "C973.933 179.602 979.721 191.513 997.644 191.513",
          "C1023.009 191.513 1038.206 164.077 1046.444 135.196",
        ].join("")}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(3.5),
          ease: "easeInOut",
          delay: calc(4.5),
          opacity: { duration: 0.35, delay: calc(4.5) },
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </motion.svg>
  )
}
