"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink } from "lucide-react" // Ensure lucide-react is installed

function AnimatedSection({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* -------------------------------- */
/* Speaker Data */
/* -------------------------------- */

const speakers = [
  {
    name: "Dr. Kshirod Kumar Dash",
    role: "Professor",
    affiliation: "Ghani Khan Choudhury Institute of Engineering & Technology",
    talk: "Advances in Food Processing and Preservation Technologies",
    image: "/Dr. Kshirod Kumar Dash..JPG",
    link: "https://www.gkciet.ac.in/faculty/13",
  },
  {
    name: "Er. Himadri Shekhar Konar",
    role: "Assistant Professor",
    affiliation: "Faculty of Technology, UBKV, Cooch Behar",
    talk: "Food Processing Innovations and Sustainable Systems",
    image: "/Dr. Kona.jpg",
    link: "https://ubkv.ac.in/Faculty_of_Technology/faculty.html",
  },
 {
  name: "Dr. Sabyasachi Mishra",
  role: "Professor & Head of the Department (HOD)",
  affiliation: "National Institute of Technology Rourkela",
  talk: "Emerging Trends in Food Engineering Research",
  image: "/Sabyasachi Mishra.jpg",
  link: "https://www.nitrkl.ac.in/FP/~mishrasa/",
},
]

export function SpeakersSection() {
  return (
    <section id="speakers" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header Section */}
        <AnimatedSection className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Invited Speakers
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Distinguished experts from academia and industry sharing insights on 
            innovations in food engineering and biotechnology.
          </p>
        </AnimatedSection>

        {/* Speaker Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker, index) => (
            <AnimatedSection key={speaker.name} delay={index * 0.1}>
              <div className="flex flex-col h-full bg-white rounded-2xl border border-gray-100 p-2 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                
                {/* Image Container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-gray-100">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-blue-600 mb-1">{speaker.role}</p>
                    <h3 className="text-xl font-bold leading-7 tracking-tight text-gray-900">
                      {speaker.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-500 line-clamp-2 italic">
                      {speaker.affiliation}
                    </p>
                    
                    <div className="mt-4 border-l-2 border-blue-100 pl-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Presentation Topic</p>
                      <p className="mt-1 text-sm font-medium text-gray-700 leading-snug">
                        "{speaker.talk}"
                      </p>
                    </div>
                  </div>

                  {/* Action Link */}
                  <a
                    href={speaker.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-600 active:bg-blue-700"
                  >
                    View Profile
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}