"use client"

import { motion } from "framer-motion"
import { CalendarDays, MapPin, ArrowRight, Download } from "lucide-react"

function ScientificPattern() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.07]"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern id="hex" width="60" height="52" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
          <path
            d="M30 0 L60 15 L60 37 L30 52 L0 37 L0 15 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex)" />
    </svg>
  )
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary text-primary-foreground">
      <ScientificPattern />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(30,136,229,0.15),_transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(30,136,229,0.1),_transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-32 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-5 py-2 text-sm font-medium backdrop-blur-sm">
            <CalendarDays className="h-4 w-4" />
            <span>16 - 17 March 2026</span>
          </div>

          {/* Conference name */}
          <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            <span className="text-balance">FABCON 2026</span>
          </h1>

          <p className="mx-auto mb-6 max-w-3xl text-balance text-lg leading-relaxed text-primary-foreground/80 md:text-xl lg:text-2xl">
            National Symposium on the Confluence of Food, Biotechnology & Automation
          </p>

          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary-foreground/60">
            Organized by
          </p>
          <p className="mx-auto mb-2 max-w-2xl text-pretty text-base text-primary-foreground/80 md:text-lg">
            Department of Food Engineering & Technology
          </p>
          <p className="mx-auto mb-8 max-w-2xl text-pretty text-sm text-primary-foreground/60">
            Central Institute of Technology Kokrajhar (Deemed to be University)
            <br />
            Ministry of Education, Government of India
          </p>

          {/* Venue */}
          <div className="mb-10 inline-flex items-center gap-2 text-sm text-primary-foreground/70">
            <MapPin className="h-4 w-4" />
            <span>BKB Seminar Hall, CIT Kokrajhar, Assam, India</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#registration"
            className="group inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25"
          >
            Submit Abstract
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 bg-primary-foreground/5 px-8 py-3.5 text-base font-semibold text-primary-foreground backdrop-blur-sm transition-all hover:border-primary-foreground/50 hover:bg-primary-foreground/10"
          >
            <Download className="h-4 w-4" />
            Download Brochure
          </a>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-hidden="true">
          <path
            d="M0 40 C360 80 720 0 1080 40 C1260 60 1380 50 1440 40 V80 H0 Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  )
}
