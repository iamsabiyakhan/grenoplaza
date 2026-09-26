import Link from "next/link";
import Image from "next/image";
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
           <div className="flex items-center">
                          <Image
                            src="/images/logo.png"
                            alt="GrenO Plaza Logo"
                            width={200}
                            height={80}
                            className="h-10 w-auto object-contain"
                          />
            </div>
          <p className="footer-copy">
            Premium addresses, thoughtfully designed living, and exceptional service for modern buyers.
          </p>
        </div>

        <div>
          <h4>Quick links</h4>
          <ul className="footer-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/properties">Properties</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Services</h4>
          <ul className="footer-links">
            <li>Property Search</li>
            <li>Investment Advisory</li>
            <li>Legal Support</li>
            <li>Prime Location Advice</li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className="footer-links">
            <li>+92 300 1234567</li>
            <li>hello@greno-plaza.com</li>
            <li>Downtown Avenue, Karachi</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© 2026 Greno Plaza</span>
          <span>Built for elevated living</span>
        </div>
      </div>
    </footer>
  );
}
