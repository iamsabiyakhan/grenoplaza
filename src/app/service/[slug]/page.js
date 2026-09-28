import Image from "next/image";
import Link from "next/link";

const services = {
  "leasing-renting": {
    title: "Leasing & Renting",
    eyebrow: "Our Service",
    image: "/images/service-leasing.jpg",
    shortDescription:
      "Flexible leasing options for retail and commercial spaces.",
    description:
      "At Greno Plaza, we make leasing and renting simple, transparent and convenient. Whether you are looking for a retail outlet, commercial shop or a space for your growing business, our team helps you find the right space for your requirements.",
    features: [
      "Flexible commercial spaces",
      "Prime high-street location",
      "Business-friendly leasing options",
      "Professional assistance throughout the process",
    ],
  },

  "property-advisory": {
    title: "Property Advisory",
    eyebrow: "Our Service",
    image: "/images/service-advisory.jpg",
    shortDescription:
      "Expert guidance for investment and expansion opportunities.",
    description:
      "Our property advisory service helps businesses and investors make informed commercial property decisions. From selecting the right space to understanding its potential, we provide practical guidance based on your business requirements.",
    features: [
      "Commercial property guidance",
      "Investment assistance",
      "Space selection support",
      "Business expansion planning",
    ],
  },

  "space-management": {
    title: "Space Management",
    eyebrow: "Our Service",
    image: "/images/service-management.jpg",
    shortDescription:
      "Efficient space planning and operational support.",
    description:
      "We help businesses make the most of their commercial space through efficient planning and practical management support. Every space is considered with functionality, customer movement and business requirements in mind.",
    features: [
      "Efficient space planning",
      "Operational support",
      "Business-focused layouts",
      "Better utilization of commercial space",
    ],
  },

  "relocation-support": {
    title: "Relocation Support",
    eyebrow: "Our Service",
    image: "/images/service-relocation.jpg",
    shortDescription:
      "End-to-end assistance for a smooth setup experience.",
    description:
      "Moving your business to a new commercial location can be challenging. Our relocation support helps make the transition smoother by assisting you throughout the process of selecting and setting up your new space.",
    features: [
      "Location selection assistance",
      "Smooth transition support",
      "Setup guidance",
      "End-to-end assistance",
    ],
  },

  "lifestyle-amenities": {
    title: "Lifestyle & Amenities",
    eyebrow: "Our Service",
    image: "/images/service-lifestyle.jpg",
    shortDescription:
      "High-quality amenities to enhance business and customer experience.",
    description:
      "Greno Plaza combines commercial spaces with lifestyle-focused amenities designed to create a better experience for businesses, customers and visitors.",
    features: [
      "Premium lifestyle environment",
      "Customer-friendly amenities",
      "High-street experience",
      "Business and visitor convenience",
    ],
  },
};

export default async function ServiceDetailsPage({ params }) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    return (
      <main className="min-h-screen bg-[#F4EFE9] px-6 py-32 text-center text-[#0D2118]">
        <h1 className="font-serif text-5xl">
          Service Not Found
        </h1>

        <Link
          href="/service"
          className="mt-8 inline-flex bg-[#C1993D] px-6 py-3 text-xs font-semibold uppercase tracking-wider"
        >
          Back to Services
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F4EFE9] text-[#0D2118]">

      {/* HERO */}
      <section className="relative min-h-[560px] overflow-hidden bg-[#0D2118]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0D2118] via-[#0D2118]/80 to-[#0D2118]/20" />

        <div className="relative mx-auto flex min-h-[560px] max-w-[1350px] items-center px-6 sm:px-10 lg:px-16">

          <div className="max-w-[650px]">

            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#C1993D]" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#C1993D]">
                {service.eyebrow}
              </p>
            </div>

            <h1 className="mt-7 font-serif text-[55px] font-light leading-[0.95] tracking-[-0.04em] text-white sm:text-[75px]">
              {service.title}
            </h1>

            <p className="mt-7 max-w-[520px] text-[12px] leading-7 text-white/65">
              {service.shortDescription}
            </p>

          </div>

        </div>
      </section>


      {/* DETAILS */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-[1250px] gap-16 lg:grid-cols-[1.2fr_0.8fr]">

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#C1993D]">
              About This Service
            </p>

            <h2 className="mt-5 max-w-[650px] font-serif text-[42px] font-light leading-[1] sm:text-[55px]">
              Everything You Need,
              <br />
              <span className="italic">
                All in One Place.
              </span>
            </h2>

            <p className="mt-8 max-w-[650px] text-[12px] leading-7 text-[#0D2118]/60">
              {service.description}
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-5 bg-[#C1993D] px-7 py-4 text-[8px] font-bold uppercase tracking-[0.15em] text-[#0D2118] transition hover:bg-[#0D2118] hover:text-white"
            >
              Enquire About This Service →
            </Link>
          </div>


          {/* FEATURES */}
          <div className="bg-[#FBF8F3] p-8 sm:p-10">

            <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#C1993D]">
              What We Offer
            </p>

            <div className="mt-7">
              {service.features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center gap-4 border-b border-[#0D2118]/10 py-5 last:border-b-0"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#C1993D] text-[10px] text-[#C1993D]">
                    0{index + 1}
                  </span>

                  <p className="text-[10px] font-medium">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="bg-[#0D2118] px-6 py-20 text-center">
        <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#C1993D]">
          Greno Plaza
        </p>

        <h2 className="mx-auto mt-5 max-w-[700px] font-serif text-[42px] font-light leading-none text-white sm:text-[58px]">
          Ready to Find the
          <br />
          <span className="italic text-[#C1993D]">
            Right Space?
          </span>
        </h2>

        <Link
          href="/contact"
          className="mt-8 inline-flex bg-[#C1993D] px-7 py-4 text-[8px] font-bold uppercase tracking-[0.15em] text-[#0D2118]"
        >
          Contact Us →
        </Link>
      </section>

    </main>
  );
}