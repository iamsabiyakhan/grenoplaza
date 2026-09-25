import ImagePlaceholder from "@/components/image-placeholder";

export default function ContactPage() {
  return (
    <div className="page-content">
      <section className="page-hero compact">
        <div className="container split-layout contact-layout">
          <div className="section-copy">
            <span className="eyebrow">Contact</span>
            <h1>Let’s turn your next move into a smart investment.</h1>
            <p>
              Talk with our team about buying, selling, or investing in a property that fits your goals and lifestyle.
            </p>
            <div className="contact-details">
              <div>
                <strong>Phone</strong>
                <span>+92 300 1234567</span>
              </div>
              <div>
                <strong>Email</strong>
                <span>hello@greno-plaza.com</span>
              </div>
              <div>
                <strong>Office</strong>
                <span>Downtown Avenue, Karachi</span>
              </div>
            </div>
          </div>

          <div className="form-card-wrap">
            <ImagePlaceholder title="Office Photo" heightClass="image-contact" tone="dark" />
            <form className="contact-form">
              <div className="field-row">
                <input type="text" placeholder="Full name" />
              </div>
              <div className="field-row">
                <input type="email" placeholder="Email address" />
              </div>
              <div className="field-row">
                <input type="tel" placeholder="Phone number" />
              </div>
              <div className="field-row">
                <textarea rows="4" placeholder="Tell us what you are looking for" />
              </div>
              <button type="submit" className="button primary full-width">Send request</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
