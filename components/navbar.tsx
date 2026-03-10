"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Themes", href: "#themes" },
  { label: "Important Dates", href: "#dates" },
  { label: "Speakers", href: "#speakers" },
  { label: "Committee", href: "#committee" },
  { label: "Venue", href: "#venue" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {

  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg border-b shadow-sm"
          : "bg-gradient-to-r from-[#071a52] via-[#0A2A66] to-[#0f3d91]"
      }`}
    >

      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between py-3">

          {/* LEFT LOGOS */}

          <div className="flex items-center gap-2">

            <img
              src="/btc gov.webp"
              alt="BTC Government"
              className="h-8 w-auto object-contain"
            />

            <img
              src="/cit kok logo.jpg"
              alt="CIT Kokrajhar"
              className="h-8 w-auto object-contain"
            />

            <img
              src="/newlog.jpeg"
              alt="NRF"
              className="h-8 w-auto object-contain"
            />

          </div>


          {/* CENTER FABCON BRAND */}

          <div className="flex items-center gap-2">

            <img
              src="/fabcon-logo.jpeg"
              alt="FABCON logo"
              className="h-9 w-auto object-contain"
            />

            <div className="leading-tight">

              <h1
                className={`text-sm md:text-lg font-semibold ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              >
                FABCON 2026
              </h1>

              <p
                className={`text-[10px] md:text-xs ${
                  scrolled ? "text-gray-500" : "text-blue-100"
                }`}
              >
                Food • Biotechnology • Automation
              </p>

            </div>

          </div>


          {/* DESKTOP MENU */}

          <nav className="hidden lg:flex items-center gap-6">

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition ${
                  scrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-blue-100 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#registration"
              className="ml-2 px-5 py-2 rounded-lg bg-yellow-500 text-sm font-semibold text-black hover:bg-yellow-400 transition"
            >
              Register
            </a>

          </nav>


          {/* MOBILE MENU BUTTON */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            {mobileOpen ? <X size={24}/> : <Menu size={24}/>}
          </button>

        </div>

      </div>


      {/* MOBILE MENU */}

      <AnimatePresence>

        {mobileOpen && (

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-white border-t"
          >

            <div className="flex flex-col px-6 py-4 space-y-3">

              {navLinks.map((link) => (

                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                  {link.label}
                </a>

              ))}

              <a
                href="#registration"
                className="mt-3 text-center py-2 rounded-lg bg-blue-600 text-white font-semibold"
              >
                Register Now
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  )
}