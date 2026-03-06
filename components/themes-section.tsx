"use client"

import { motion, useInView, useAnimation } from "framer-motion"
import { useRef, useEffect } from "react"
import { Cpu, FlaskConical, Leaf, Wheat, BrainCircuit, Beaker, Rocket, FileText, Send } from "lucide-react"

function AnimatedSection({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function AnimatedCard({
  children,
  index,
}: {
  children: React.ReactNode
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group"
    >
      {children}
    </motion.div>
  )
}

const themes = [
  {
    icon: Cpu,
    title: "Sustainable Food Processing",
    description:
      "Sustainable food processing, preservation and packaging technologies.",
  },
  {
    icon: FlaskConical,
    title: "Biotechnology for Food Security",
    description:
      "Biotechnology interventions for food and nutritional security.",
  },
  {
    icon: Beaker,
    title: "Emerging Materials & Food Engineering",
    description:
      "Emerging trends in materials, food and agriculture engineering.",
  },
  {
    icon: BrainCircuit,
    title: "Automation & Industry 4.0",
    description:
      "Automation, smart agriculture, and Industry 4.0 in food systems.",
  },
  {
    icon: Leaf,
    title: "Chemical & Analytical Innovations",
    description:
      "Chemical innovations and analytical approaches in food systems.",
  },
  {
    icon: Rocket,
    title: "Food Entrepreneurship & Startups",
    description:
      "Entrepreneurship development and start-up ecosystem in the food sector.",
  },
  {
    icon: Wheat,
    title: "Resilient Food Systems",
    description:
      "Resilient and sustainable food systems in the North-eastern region.",
  },
]

export function ThemesSection() {
  return (
    <section
      id="themes"
      className="relative bg-gradient-to-br from-slate-50 to-white py-20 lg:py-32 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">

        {/* Section Header */}

        <AnimatedSection delay={0.2}>

          <div className="mb-6 text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-100">
              Conference Themes
            </span>
          </div>

          <h2 className="mb-8 text-center text-4xl lg:text-5xl font-bold text-slate-900">
            Thematic Areas
          </h2>

          <p className="mx-auto mb-20 max-w-3xl text-center text-lg text-slate-600">
            FABCON 2026 focuses on interdisciplinary research connecting food
            technology, biotechnology, automation, and sustainable food systems.
          </p>

        </AnimatedSection>


        {/* Theme Cards */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {themes.map((theme, index) => (

            <AnimatedCard key={theme.title} index={index}>

              <motion.div
                className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue-300 hover:shadow-xl"
              >

                <div className="mb-6 inline-flex rounded-xl bg-blue-50 p-4">

                  <theme.icon className="h-8 w-8 text-blue-600" />

                </div>

                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  {theme.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600">
                  {theme.description}
                </p>

              </motion.div>

            </AnimatedCard>

          ))}

        </div>


        {/* CTA SECTION */}


      </div>
    </section>
  )
}