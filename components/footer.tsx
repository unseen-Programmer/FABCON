import { CalendarDays, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="mb-3 text-lg font-bold">FABCON 2026</h3>
            <p className="mb-4 text-sm leading-relaxed text-primary-foreground/70">
              National Symposium on the Confluence of Food, Biotechnology & Automation
            </p>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/60">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                <span>16 - 17 March 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>CIT Kokrajhar, Assam, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "About", href: "#about" },
                { label: "Themes", href: "#themes" },
                { label: "Important Dates", href: "#dates" },
                { label: "Speakers", href: "#speakers" },
                { label: "Committee", href: "#committee" },
                { label: "Registration", href: "#registration" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Organizer */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
              Organized By
            </h4>
            <p className="text-sm leading-relaxed text-primary-foreground/60">
              Department of Food Engineering & Technology
              <br />
              Central Institute of Technology Kokrajhar
              <br />
              (Deemed to be University)
              <br />
              Ministry of Education, Government of India
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-xs text-primary-foreground/40">
            &copy; {new Date().getFullYear()} FABCON 2026, CIT Kokrajhar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
