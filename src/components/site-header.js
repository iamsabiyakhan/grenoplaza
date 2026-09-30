import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/service" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
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
              className="h-100px w-100px object-fit"
            />
          </div>
        </Link>

        <nav
          className="main-nav"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              style={{
                color: "#C09D41",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="header-cta"
          style={{
            backgroundColor: "#C09D41",
            color: "#F3EBDD",
          }}
        >
          Book a Visit
        </Link>

      </div>
    </header>
  );
}