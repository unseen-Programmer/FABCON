"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

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

export function ContactSection() {
  return (
    <section id="contact" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        {/* Header */}

        <AnimatedSection>
          <div className="mb-4 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Get in Touch
            </span>
          </div>

          <h2 className="mb-6 text-center text-3xl font-bold text-foreground md:text-4xl">
            Contact Us
          </h2>

          <p className="mx-auto mb-16 max-w-2xl text-center text-base leading-relaxed text-muted-foreground">
            Have questions about FABCON 2026? We would love to hear from you.
          </p>
        </AnimatedSection>


        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">

          {/* Contact Info */}

          <AnimatedSection>
            <div className="flex h-full flex-col gap-6 rounded-xl border border-border bg-card p-8">

              <h3 className="text-xl font-bold text-card-foreground">
                Conference Secretariat
              </h3>

              <div className="flex flex-col gap-5">

                {/* Address */}

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="font-medium text-card-foreground">Address</p>

                    <p className="text-sm text-muted-foreground">
                      Department of Food Engineering & Technology
                      <br />
                      Central Institute of Technology Kokrajhar
                      <br />
                      Assam, India
                    </p>
                  </div>
                </div>


                {/* Email */}

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="font-medium text-card-foreground">Email</p>

                    <a
                      href="mailto:pk.nayak@cit.ac.in"
                      className="text-sm text-accent hover:underline"
                    >
                      pk.nayak@cit.ac.in
                    </a>
                  </div>
                </div>


                {/* Phone */}

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="font-medium text-card-foreground">Phone</p>

                    <a
                      href="tel:+917008017286"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      +91 7008017286
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </AnimatedSection>


          {/* Contact Form */}

          <AnimatedSection>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex h-full flex-col gap-5 rounded-xl border border-border bg-card p-8"
            >

              <h3 className="text-xl font-bold text-card-foreground">
                Send a Message
              </h3>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-card-foreground">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-card-foreground">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-card-foreground">
                  Message
                </label>

                <textarea
                  rows={4}
                  placeholder="Your message..."
                  className="resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>

            </form>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}