import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Property', href: '/property' },
    { label: 'Gardens', href: '/gardens' },
    { label: 'Green Committee', href: '/green-committee' },
    { label: 'Amenities', href: '/amenities' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Resident Resources', href: '/resident-resources' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-[5.25rem]">
          {/* Logo */}
          <Link href="/">
            <a className="shrink-0 flex items-center gap-3 no-underline hover:opacity-85 transition-opacity">
              <img
                src="/images/park-terrace/park-terrace-tree-mark-white.png"
                alt="Park Terrace tree mark"
                className="h-10 w-auto sm:h-[2.95rem]"
                loading="eager"
              />
              <div className="leading-none text-foreground">
                <p className="text-[0.83rem] sm:text-[0.94rem] uppercase tracking-[0.24em] font-semibold">
                  Park Terrace
                </p>
                <p className="text-[0.74rem] sm:text-[0.84rem] uppercase tracking-[0.24em] font-medium mt-1">
                  Gardens Inc.
                </p>
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className="px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors no-underline">
                  {item.label}
                </a>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border py-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors no-underline"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
