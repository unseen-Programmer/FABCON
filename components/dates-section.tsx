"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FileText, Bell, UserCheck, CalendarDays } from "lucide-react"

function AnimatedSection({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
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

const dates = [
  {
    icon: FileText,
    label: "Abstract Submission Deadline",
    date: "12 March 2026",
    status: "upcoming" as const,
  },
  {
    icon: Bell,
    label: "Notification of Acceptance",
    date: "13 March 2026",
    status: "upcoming" as const,
  },
  {
    icon: UserCheck,
    label: "Registration Deadline",
    date: "13 March 2026",
    status: "upcoming" as const,
  },
  {
    icon: CalendarDays,
    label: "Conference Dates",
    date: "16 – 17 March 2026",
    status: "highlight" as const,
  },
]

export function ImportantDatesSection() {
  return (
    <section id="dates" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        <AnimatedSection>
          <div className="mb-4 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Mark Your Calendar
            </span>
          </div>

          <h2 className="mb-6 text-center text-3xl font-bold text-foreground md:text-4xl">
            Important Dates
          </h2>

          <p className="mx-auto mb-16 max-w-2xl text-center text-base leading-relaxed text-muted-foreground">
            Stay updated with the key milestones for FABCON 2026.
          </p>
        </AnimatedSection>

        <div className="mx-auto max-w-3xl">

          <div className="relative">

            {/* Timeline line */}
            <div
              className="absolute left-8 top-0 hidden h-full w-px bg-border md:block"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-6">

              {dates.map((item, index) => (

                <AnimatedSection key={item.label}>

                  <motion.div
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex items-start gap-6 rounded-xl border p-6 transition-all hover:shadow-md ${
                      item.status === "highlight"
                        ? "border-accent bg-accent/5 shadow-sm"
                        : "border-border bg-card"
                    }`}
                  >

                    {/* Icon */}
                    <div
                      className={`relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-xl ${
                        item.status === "highlight"
                          ? "bg-accent text-accent-foreground"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      <item.icon className="h-6 w-6" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col">

                      <span className="mb-1 text-sm font-medium text-muted-foreground">
                        {item.status === "highlight"
                          ? "Event"
                          : `Step ${index + 1}`}
                      </span>

                      <h3 className="mb-1 text-lg font-semibold text-card-foreground">
                        {item.label}
                      </h3>

                      <span
                        className={`text-base font-medium ${
                          item.status === "highlight"
                            ? "text-accent"
                            : "text-primary"
                        }`}
                      >
                        {item.date}
                      </span>

                    </div>

                  </motion.div>

                </AnimatedSection>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}