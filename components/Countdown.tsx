"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Countdown() {

  const calculateTimeLeft = () => {
    const eventDate = new Date("March 16, 2026 09:00:00").getTime()
    const now = new Date().getTime()
    const distance = eventDate - now

    if (distance <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / (1000 * 60)) % 60),
      seconds: Math.floor((distance / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const boxVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-[#071a52] via-[#0A2A66] to-[#071a52] text-white">

      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide">
          Countdown to FABCON 2026
        </h2>

        <p className="text-blue-200 mb-12">
          National Symposium on Food • Biotechnology • Automation
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {timeUnits.map((unit, index) => (

            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.2 }}
              variants={boxVariants}
              className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-6 shadow-xl"
            >

              <motion.div
                key={unit.value}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-4xl md:text-5xl font-bold text-yellow-400"
              >
                {unit.value}
              </motion.div>

              <p className="mt-2 text-sm uppercase tracking-widest text-blue-200">
                {unit.label}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}