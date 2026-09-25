import Link from "next/link";
import Image from "next/image";
const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Properties", href: "/properties" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Greno Plaza home">
  <div className="flex items-center">
    <Image
      src="/images/logo.png"
      alt="GrenO Plaza Logo"
      width={300}
      height={80}
      className="h-16 w-auto object-contain"
    />
  </div>
</Link>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="header-cta">
          Book a Visit
        </Link>
      </div>
    </header>
  );
}
