"use client"

import { useEffect, useState } from "react"

export default function Countdown() {

  const targetDate = new Date("2026-03-16T09:00:00").getTime()

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {

    const timer = setInterval(() => {

      const now = new Date().getTime()
      const distance = targetDate - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((distance / 1000 / 60) % 60)
      const seconds = Math.floor((distance / 1000) % 60)

      setTimeLeft({ days, hours, minutes, seconds })

    }, 1000)

    return () => clearInterval(timer)

  }, [targetDate])

  return (

    <section className="py-16 text-center bg-[#0c2b63] text-white">

      <h2 className="text-3xl font-bold mb-6">
        Event Starts In
      </h2>

      <div className="flex justify-center gap-8 text-2xl font-semibold">

        <div>
          {timeLeft.days}
          <p className="text-sm opacity-70">Days</p>
        </div>

        <div>
          {timeLeft.hours}
          <p className="text-sm opacity-70">Hours</p>
        </div>

        <div>
          {timeLeft.minutes}
          <p className="text-sm opacity-70">Minutes</p>
        </div>

        <div>
          {timeLeft.seconds}
          <p className="text-sm opacity-70">Seconds</p>
        </div>

      </div>

    </section>
  )
}