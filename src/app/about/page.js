import Link from "next/link";
import ImagePlaceholder from "@/components/image-placeholder";

const stats = [
  { value: "12+", label: "Years of excellence" },
  { value: "350+", label: "Happy families" },
  { value: "24/7", label: "Client support" },
  { value: "96%", label: "Repeat buyers" },
];

const process = [
  { title: "Understand your goals", text: "We listen closely to your timeline, budget, lifestyle and investment objectives." },
  { title: "Shortlist the right spaces", text: "Our team curates exceptional properties that align with your vision and future plans." },
  { title: "Close with confidence", text: "From paperwork to handover, we guide every step so the process feels effortless." },
];

export default function AboutPage() {
  return (
    <div className="page-content">
      <section className="page-hero compact">
        <div className="container split-layout">
          <div className="section-copy">
            <span className="eyebrow">About us</span>
            <h1>We build lasting trust in every neighborhood.</h1>
            <p>
              Greno Plaza brings together design-led homes, strategic guidance, and a personal approach to real estate.
              Our mission is simple: help clients invest in homes that genuinely improve their way of life.
            </p>
            <div className="inline-actions">
              <Link href="/properties" className="button primary">Explore properties</Link>
              <Link href="/contact" className="button secondary">Talk to an advisor</Link>
            </div>
          </div>

          <div className="image-stack right-stack">
            <ImagePlaceholder title="Feature Property" heightClass="image-hero-portrait" tone="warm" />
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="stats-grid four-up">
            {stats.map((item) => (
              <div key={item.label} className="stat-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block muted">
        <div className="container two-column-story">
          <div className="story-image-wrap">
            <ImagePlaceholder title="Our Story" heightClass="image-story" tone="dark" />
          </div>

          <div className="section-copy">
            <span className="eyebrow">Our promise</span>
            <h2>Thoughtful guidance for high-value decisions.</h2>
            <p>
              We believe real estate is more than a transaction. It is a place where family memories, lifestyle goals,
              and long-term financial growth converge. Every property recommendation is backed by local insight and clear strategy.
            </p>
            <p>
              From first-time buyers to seasoned investors, we deliver a smooth, transparent, and deeply informed experience.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="section-heading align-center">
            <span className="eyebrow">How we work</span>
            <h2>Simple steps, exceptional outcomes.</h2>
          </div>

          <div className="process-grid three-up">
            {process.map((step, index) => (
              <div key={step.title} className="process-card">
                <span className="step-number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
