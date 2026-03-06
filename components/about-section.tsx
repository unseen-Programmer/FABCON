"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Beaker, Lightbulb, Users, Calendar, MapPin, Building } from "lucide-react"

function AnimatedSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function AboutSection() {

  const highlights = [
    {
      icon: Beaker,
      title: "Interdisciplinary Research",
      description:
        "Integrating Food Engineering, Biotechnology, and Automation to solve emerging challenges in food production and safety.",
    },
    {
      icon: Lightbulb,
      title: "Innovation & Technology",
      description:
        "Exploring advancements in AI-driven food processing, smart agriculture, and next-generation food technologies.",
    },
    {
      icon: Users,
      title: "Collaborative Platform",
      description:
        "Bringing together researchers, academicians, industry experts, and students for knowledge exchange and innovation.",
    },
  ]

  const facts = [
    { icon: Calendar, title: "Date", value: "16–17 March 2026" },
    { icon: MapPin, title: "Venue", value: "BKB Seminar Hall" },
    { icon: Building, title: "Host", value: "CIT Kokrajhar" },
  ]

  return (
    <section id="about" className="relative bg-background py-24">

      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        <AnimatedSection>
          <div className="text-center mb-6">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              About FABCON 2026
            </span>
          </div>

          <h2 className="text-center text-3xl md:text-4xl font-bold text-foreground mb-6">
            Advancing the Future of Food Science & Technology
          </h2>

          <p className="mx-auto max-w-3xl text-center text-muted-foreground md:text-lg leading-relaxed mb-16">
            FABCON 2026 is a national symposium bringing together leading researchers,
            academicians, industry professionals, and students to explore the convergence
            of Food Engineering, Biotechnology, and Automation. The conference promotes
            interdisciplinary collaboration and highlights innovative solutions for
            sustainable food systems, smart agriculture, and advanced food processing.
          </p>
        </AnimatedSection>

        {/* Conference Facts */}
        <AnimatedSection className="mb-16">
          <div className="grid gap-6 md:grid-cols-3">
            {facts.map((item, index) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 rounded-xl border bg-card p-6 shadow-sm"
              >
                <div className="rounded-lg bg-primary/10 p-3 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">{item.title}</p>
                  <p className="font-semibold text-card-foreground">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Highlights */}
        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((item, index) => (
            <AnimatedSection key={item.title}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-lg"
              >
                <div className="mb-5 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>

                <h3 className="mb-3 text-lg font-semibold text-card-foreground">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  )
}