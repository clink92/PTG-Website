import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="inline-flex items-center gap-4 mb-4">
              <img
                src="/images/park-terrace/park-terrace-tree-mark-white.png"
                alt="Park Terrace Gardens tree mark"
                className="h-[4.4rem] w-auto"
                loading="lazy"
              />
              <div className="leading-none">
                <p className="text-[0.85rem] uppercase tracking-[0.24em] font-semibold text-foreground">
                  Park Terrace
                </p>
                <p className="mt-1 text-[0.76rem] uppercase tracking-[0.24em] font-medium text-foreground">
                  Gardens Inc.
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              A historic 1940 garden apartment cooperative in Manhattan, featuring lush landscapes and sustainable community living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-base mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/property">
                  <a className="text-muted-foreground hover:text-accent transition-colors no-underline">Property</a>
                </Link>
              </li>
              <li>
                <Link href="/gardens">
                  <a className="text-muted-foreground hover:text-accent transition-colors no-underline">Gardens</a>
                </Link>
              </li>
              <li>
                <Link href="/amenities">
                  <a className="text-muted-foreground hover:text-accent transition-colors no-underline">Amenities</a>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <a className="text-muted-foreground hover:text-accent transition-colors no-underline">Gallery</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif font-bold text-base mb-4 text-foreground">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/green-committee">
                  <a className="text-muted-foreground hover:text-accent transition-colors no-underline">Green Committee</a>
                </Link>
              </li>
              <li>
                <Link href="/resident-resources">
                  <a className="text-muted-foreground hover:text-accent transition-colors no-underline">Resident Resources</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-muted-foreground hover:text-accent transition-colors no-underline">Contact Us</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-bold text-base mb-4 text-foreground">Contact</h4>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>Park Terrace Gardens, Inc.</p>
              <p>72 Park Terrace West<br />New York, NY 10034</p>
              <p className="pt-2">
                <a href="tel:+12125676376" className="text-accent hover:opacity-80 no-underline">(212) 567-6376</a>
              </p>
              <p>
                <a href="mailto:Office@gardensnyc.net" className="text-accent hover:opacity-80 no-underline">Office@gardensnyc.net</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Park Terrace Gardens, Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
