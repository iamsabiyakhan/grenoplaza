import Link from "next/link";
import ImagePlaceholder from "@/components/image-placeholder";

const properties = [
  { title: "Skyline Residence", location: "Downtown Heights", type: "Luxury Villa", price: "$1.4M" },
  { title: "Harbor View", location: "North Marina", type: "Penthouse", price: "$980K" },
  { title: "Cedar Courtyard", location: "Greenfield", type: "Townhouse", price: "$760K" },
  { title: "Montrose Homes", location: "Hillcrest", type: "Family Villa", price: "$1.1M" },
  { title: "Palm Circle", location: "Coastal Block", type: "Apartment", price: "$540K" },
  { title: "The Grove", location: "West End", type: "Modern Home", price: "$870K" },
];

export default function PropertiesPage() {
  return (
    <div className="page-content">
      <section className="page-hero compact">
        <div className="container narrow-center">
          <span className="eyebrow">Our portfolio</span>
          <h1>Discover premium homes in the most sought-after locations.</h1>
          <p>Curated properties designed for elevated living, exceptional value, and long-term growth.</p>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="filter-row" aria-label="Property filters">
            <button className="filter-chip active">All</button>
            <button className="filter-chip">Villa</button>
            <button className="filter-chip">Apartment</button>
            <button className="filter-chip">Townhouse</button>
            <button className="filter-chip">Penthouse</button>
          </div>

          <div className="property-grid three-up">
            {properties.map((property) => (
              <article key={property.title} className="property-card">
                <ImagePlaceholder title={property.type} heightClass="image-property" tone="warm" />
                <div className="property-card-body">
                  <div className="property-meta">
                    <span>{property.type}</span>
                    <strong>{property.price}</strong>
                  </div>
                  <h3>{property.title}</h3>
                  <p>{property.location}</p>
                  <Link href="/contact" className="text-link">Schedule a visit</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
