"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { RotateCcw, Sparkles } from "lucide-react"
import { AppleHelloEffectCanh } from "@/components/apple-hello-effect-canh"

export default function Home() {
  const [key, setKey] = useState(0)

  const handleReplay = () => {
    setKey(prev => prev + 1)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white font-sans overflow-hidden">
      {/* Cinematic dark grid backing */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Main Showcase Area */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl px-6 text-center">
        
        {/* Luminous Title Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-12"
        >
          <Sparkles className="h-3 w-3 text-cyan-400" />
          Original Apple Hello Standard
        </motion.div>

        {/* Elegant Handwriting Container */}
        <div className="w-full py-16 flex items-center justify-center min-h-[250px]">
          <AppleHelloEffectCanh 
            key={key} 
            className="w-full max-w-[340px] xs:max-w-[420px] sm:max-w-[480px] text-white"
          />
        </div>

        {/* Replay Button */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mt-12"
        >
          <button
            onClick={handleReplay}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-xs text-white transition-all active:scale-95 cursor-pointer font-medium"
          >
            <RotateCcw className="h-3 w-3" />
            Xem Lại Chuyển Động
          </button>
        </motion.div>

      </div>
    </div>
  )
}
