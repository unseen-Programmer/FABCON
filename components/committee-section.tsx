"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, ShieldCheck, User, Users } from "lucide-react"

/* ---------------- Scroll Animation ---------------- */

function AnimatedScroll({
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
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ---------------- Leadership Card ---------------- */

function PrincipalMemberCard({
  name,
  role,
  affiliation,
  image,
}: {
  name: string
  role: string
  affiliation: string
  image: string
}) {
  return (
    <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition">

      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow mb-5"
      />

      <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-2">
        {role}
      </span>

      <h4 className="text-lg font-bold text-slate-900">{name}</h4>

      <p className="text-sm text-slate-500 mt-2 max-w-[220px]">
        {affiliation}
      </p>

    </div>
  )
}

/* ---------------- Committee List ---------------- */

function CommitteeList({
  title,
  members,
  icon: Icon,
}: {
  title: string
  members: any[]
  icon: any
}) {
  return (
    <div className="mt-20">

      <div className="flex items-center gap-3 mb-8">
        <Icon className="text-sky-600" size={24} />
        <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

        {members.map((member) => (

          <div
            key={member.name}
            className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition"
          >

            <img
              src={member.image || "/placeholder-user.jpg"}
              alt={member.name}
              className="w-14 h-14 rounded-full object-cover"
            />

            <div>

              <p className="font-semibold text-slate-900">
                {member.name}
              </p>

              {member.uni && (
                <p className="text-sm text-slate-500">
                  {member.uni}
                </p>
              )}

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

/* ---------------- Main Section ---------------- */

export function CommitteeSection() {

  return (

    <section id="committee" className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}

        <AnimatedScroll className="text-center mb-20">

          <span className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            FABCON 2026
          </span>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            Organizing Committee
          </h2>

          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Academic leaders and researchers guiding the success of FABCON 2026.
          </p>

        </AnimatedScroll>


        {/* Leadership */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          <PrincipalMemberCard
            name="Prof. Devendra Jalihal"
            role="Patron"
            affiliation="Director (Additional Charge), CIT Kokrajhar"
            image="/Prof. Devendra Jalihal.jpg"
          />

          <PrincipalMemberCard
            name="Dr. Prakash Kumar Nayak"
            role="Convenor"
            affiliation="Head, Department of Food Engineering & Technology"
            image="/Dr. Prakash Kumar Nayak.jpg"
          />

          <PrincipalMemberCard
            name="Dr. Rajesh Kondareddy"
            role="Convenor"
            affiliation="Assistant Professor, Instrumentation Engineering"
            image="/Dr. Rajesh Kondareddy.jpg"
          />

          <PrincipalMemberCard
            name="Dr. Radha krishnan K."
            role="Organizing Secretary"
            affiliation="Assistant Professor, Food Engineering & Technology"
            image="/Dr. Radhakrishnan K.jpg"
          />

          <PrincipalMemberCard
            name="Prof. Avik Mukherjee"
            role="Conference Chair"
            affiliation="Dean (Students Affairs), CIT Kokrajhar"
            image="/Prof. Avik Mukherjee.jpg"
          />

          <PrincipalMemberCard
            name="Prof. Subhajit Ray"
            role="Conference Chair"
            affiliation="Dean (Academic Affairs), CIT Kokrajhar"
            image="/Prof. Subhajit Ray.jpg"
          />

        </div>


        {/* Organizing Committee */}

        <CommitteeList
          title="Organizing Committee Members"
          icon={ShieldCheck}
          members={[
            { name: "Dr. Santosh Kumar", image: "/Dr. Santosh Kumar.jpg" },
            { name: "Dr. Anuck Islairy", image: "/Dr. Anuck Islairy.jpg" },
            { name: "Mr. Abhijit Das", image: "/Mr. Abhijit Das.jpg" },
            { name: "Dr. Mainao Alina Gayary", image: "/Dr. Mainao Alina Gayary.jpeg" },
            { name: "Dr. Sucharita Sen Maiti", image: "/Dr. Sucharita Sen Maiti.jpg" },
            { name: "Dr. Lourembam Monika Devi", image: "/Dr. Lourembam Monika Devi.png" },
          ]}
        />


        {/* Advisory Committee */}

        <CommitteeList
          title="Advisory / Technical Committee"
          icon={GraduationCap}
          members={[
            { name: "Prof. S C Deka", uni: "Tezpur University", image: "/Prof. S C Deka.jpg" },
            { name: "Prof. Vimal Katiyar", uni: "IIT Guwahati", image: "/Prof. Vimal Katiyar.jpg" },
            { name: "Prof. N Sivakumaran", uni: "NIT Trichy", image: "/Sivakumaran.jpeg" },
            { name: "Prof. R C Pradhan", uni: "NIT Rourkela", image: "/Prof. R C Pradhan.jpg" },
            { name: "Prof. S Senthil Kumar", uni: "IIT Guwahati", image: "/Prof. S Senthil Kumar.jpg" },
          ]}
        />


        {/* Student Convener */}

        <CommitteeList
          title="Student Convener"
          icon={User}
          members={[
            { name: "Mr. Pratyush Saikia", image: "/Pratyush Saikia.png" },
          ]}
        />


        {/* Student Coordinators */}

        <CommitteeList
          title="Student Coordinators"
          icon={User}
          members={[
            { name: "Mr Jwangshar Boro", image: "/MB.jpeg" },
          ]}
        />


        {/* Student Committee */}

        <CommitteeList
          title="Student Committee Members"
          icon={Users}
          members={[
            { name: "Manisha Hazarika", image: "/Manisha Hazarika.jpeg" },
            { name: "Minijuli Basumatary", image: "/Minijuli Basumatary.jpeg" },
            { name: "Tangkhima Basumatary", image: "/Tangkhima Basumatary.jpeg" },
            { name: "Ringkhang Brahma", image: "/Ringkhang Brahma.jpeg" },
            { name: "Phami Basumatary", image: "/Phami Basumatary.jpeg" },
            { name: "Bhuyashi Boruah", image: "/Bhuyashi Boruah.jpeg" },
            { name: "Zircon Basumatary", image: "/Zircon Basumatary.jpeg" },
            { name: "Samudra Brahma", image: "/Samudra Brahma.jpeg" },
            { name: "Rangina Brahma", image: "/Rangina Brahma.jpeg" },
            { name: "Khwmthagwra Narzary", image: "/Khwmthagwra Narzary.jpeg" },
          ]}
        />

      </div>

    </section>

  )
}