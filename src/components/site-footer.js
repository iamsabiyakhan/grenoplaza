import Link from "next/link";
import Image from "next/image";
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
            <Link
          href="/"
          className="brand"
          aria-label="Greno Plaza home"
        >
          <div className="flex items-center">
            <Image
              src="/images/footerlogo.png"
              alt="Greno Plaza Logo"
              width={155}
              height={80}
              className="h-auto w-[120px] object-contain"
            />
          </div>
        </Link>
          <p className="footer-copy">
            Retail shops, food outlets and customer services at Greno Plaza.
          </p>
        </div>

        <div>
          <h4>Quick links</h4>
          <ul className="footer-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/service">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        

        <div>
          <h4>Contact</h4>
          <ul className="footer-links">
            <li><a href="tel:+919810625583">9810 625 583</a></li>
            <li><a href="mailto:info@grenoplaza.com">info@grenoplaza.com</a></li>
            <li>Plot No. LS-09, Sector 36, Greater Noida (U.P.)</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© 2026 Greno Plaza</span>
          <span>Commercial spaces for business and brands</span>
        </div>
      </div>
    </footer>
  );
}
