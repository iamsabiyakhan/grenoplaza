"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import BookVisit from "@/components/book-visit";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/service" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="site-header"
      style={{
        backgroundColor: "#f4efe9",
      }}
    >
      <div className="container header-inner">

        <Link
          href="/"
          className="brand"
          aria-label="Greno Plaza home"
        >
          <div className="flex items-center">
            <Image
              src="/images/grenoplaza2.png"
              alt="Greno Plaza Logo"
              width={155}
              height={80}
              className="h-auto w-[112px] object-contain sm:w-[155px]"
            />
          </div>
        </Link>

        <nav
          id="main-navigation"
          className={`main-nav${isMenuOpen ? " mobile-nav-open" : ""}`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
              style={{
                color: "#C09D41",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="main-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <BookVisit />

      </div>
    </header>
  );
}