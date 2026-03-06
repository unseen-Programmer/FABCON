"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, BookOpen, BriefcaseBusiness, Factory, ArrowRight, Check } from "lucide-react"

function AnimatedSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const categories = [
  {
    icon: GraduationCap,
    title: "Students",
    features: [
      "Access to all sessions",
      "Conference kit & materials",
      "Certificate of participation",
      "Lunch & refreshments",
    ],
  },
  {
    icon: BookOpen,
    title: "Research Scholars",
    features: [
      "All student benefits",
      "Poster presentation slot",
      "Networking opportunities",
      "Digital proceedings access",
    ],
  },
  {
    icon: BriefcaseBusiness,
    title: "Faculty",
    features: [
      "All scholar benefits",
      "Paper presentation priority",
      "Workshop access",
      "Publication opportunity",
    ],
  },
  {
    icon: Factory,
    title: "Industry Participants",
    features: [
      "All faculty benefits",
      "Industry exhibition space",
      "B2B networking session",
      "Sponsorship recognition",
    ],
  },
]

export function RegistrationSection() {
  const formLink =
    "https://docs.google.com/forms/d/e/1FAIpQLScjegjmzW9Rln1RPbxjW_5bUpFR-dcglIkrJ9YOWkd5vCGcQA/viewform"

  return (
    <section id="registration" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        {/* Section Header */}

        <AnimatedSection>
          <div className="mb-4 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Join Us
            </span>
          </div>

          <h2 className="mb-6 text-center text-3xl font-bold text-foreground md:text-4xl">
            Registration
          </h2>

          <p className="mx-auto mb-16 max-w-2xl text-center text-base leading-relaxed text-muted-foreground">
            Register for FABCON 2026 and be part of an enriching academic experience in food science and technology.
          </p>
        </AnimatedSection>

        {/* Registration Cards */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((cat, index) => (
            <AnimatedSection key={cat.title}>
              <motion.div
                transition={{ delay: index * 0.1 }}
                className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
              >

                {/* Icon */}

                <div className="mb-5 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <cat.icon className="h-6 w-6" />
                </div>

                {/* Title */}

                <h3 className="mb-4 text-lg font-semibold text-card-foreground">
                  {cat.title}
                </h3>

                {/* Features */}

                <ul className="mb-6 flex flex-1 flex-col gap-2.5">
                  {cat.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}

                <a
                  href={formLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                >
                  Register Now
                  <ArrowRight className="h-4 w-4" />
                </a>

              </motion.div>
            </AnimatedSection>
          ))}

        </div>

        {/* Note */}

        <p className="mt-12 text-center text-sm text-muted-foreground">
          Registration will be completed through the official Google Form.
        </p>

      </div>
    </section>
  )
}