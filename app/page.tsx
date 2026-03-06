import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import Countdown from "@/components/Countdown"
import { AboutSection } from "@/components/about-section"
import { ThemesSection } from "@/components/themes-section"
import { ImportantDatesSection } from "@/components/dates-section"
import { SpeakersSection } from "@/components/speakers-section"
import { CommitteeSection } from "@/components/committee-section"
import { RegistrationSection } from "@/components/registration-section"
import { VenueSection } from "@/components/venue-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="overflow-x-hidden">

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Countdown to Event */}
      <Countdown />

      {/* About FABCON */}
      <AboutSection />

      {/* Conference Themes */}
      <ThemesSection />

      {/* Important Dates */}
      <ImportantDatesSection />

      {/* Speakers */}
      <SpeakersSection />

      {/* Organizing Committee */}
      <CommitteeSection />

      {/* Registration */}
      <RegistrationSection />

      {/* Venue */}
      <VenueSection />

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <Footer />

    </main>
  )
}