"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Navigation } from "lucide-react"

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

export function VenueSection() {
  return (
    <section id="venue" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedSection>
          <div className="mb-4 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Location
            </span>
          </div>
          <h2 className="mb-6 text-center text-3xl font-bold text-foreground md:text-4xl text-balance">
            Conference Venue
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-base leading-relaxed text-muted-foreground text-pretty">
            Join us at the Central Institute of Technology Kokrajhar, a premier educational institution in the heart of Assam.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="grid lg:grid-cols-5">
              {/* Map */}
              <div className="lg:col-span-3">
                <iframe
                  title="CIT Kokrajhar Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.5!2d90.2725!3d26.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37596e0aff93bbb7%3A0xf6c2b73ee3b3a5d5!2sCentral%20Institute%20of%20Technology%2C%20Kokrajhar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-64 w-full lg:h-full"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center gap-6 p-8 lg:col-span-2 lg:p-10">
                <div>
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-card-foreground">BKB Seminar Hall</h3>
                  <p className="text-base font-medium text-primary">
                    Central Institute of Technology Kokrajhar
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Kokrajhar, Assam, India
                  </p>
                </div>
                <div className="rounded-lg bg-secondary p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    CIT Kokrajhar is a Deemed to be University under the Ministry of Education, Government of India, located in the scenic Bodoland Territorial Region of Assam.
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=Central+Institute+of+Technology+Kokrajhar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
