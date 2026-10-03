"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const properties = [
  {
    slug: "retail-spaces",
    title: "Retail Shops",
    location: "Greno Plaza, Sector 36, Greater Noida",
    type: "Retail",
    image: "/images/hero/site1.png",
  },
  {
    slug: "food-beverage",
    title: "Food & Beverage Units",
    location: "Greno Plaza, Sector 36, Greater Noida",
    type: "Food & Beverage",
    image: "/images/service/05-lifestyle-amenities.jpg",
  },
  {
    slug: "commercial-shops",
    title: "Commercial Shop Units",
    location: "Greno Plaza, Sector 36, Greater Noida",
    type: "Commercial",
    image: "/images/hero/site2.png",
  },
];

const features = [
  {
    number: "01",
    title: "Sector 36 Address",
    text: "Greno Plaza is located at LS-09, Sector 36, Greater Noida.",
  },
  {
    number: "02",
    title: "High-Street Shops",
    text: "Commercial shop spaces for retail, service and food businesses.",
  },
  {
    number: "03",
    title: "Business Categories",
          text: "Clinics, banks, pharmacies, salons, gyms, hypermarkets, bakeries, labs and restaurants.",
  },
  {
    number: "04",
    title: "Plan a Site Visit",
    text: "Contact the Greno Plaza team to discuss space requirements.",
  },
];

export default function Home() {
  const [showMore, setShowMore] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#F5F0E6] text-[#0D1F17]">

      {/* =====================================================
          HEADER
      ===================================================== */}

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative bg-[#0D1F17]">

        <div className="mx-auto grid min-h-[560px] max-w-[1400px] grid-cols-1 items-center gap-8 px-5 pb-10 pt-[20px] sm:px-8 md:grid-cols-[0.82fr_1.18fr] md:pt-[45px] lg:px-10">

          {/* LEFT CONTENT */}

          <div className="relative z-10 max-w-[560px] -translate-y-8 lg:pl-4 lg:-translate-y-12">

            <p className="mb-3 text-[7px] font-medium uppercase tracking-[0.28em] text-[#C5A15B] sm:text-[8px]">
              Premium Commercial High Street
            </p>

            <h1 className="max-w-[580px] text-[42px] font-light leading-[0.98] tracking-[-0.04em] text-[#F4EFE5] sm:text-[52px] lg:text-[64px]">
              Commercial Spaces
              <br />
              <span className="font-serif italic text-[#C5A15B]">
                on the High Street
              </span>
            </h1>

            <p className="mt-5 max-w-[500px] text-[14px] leading-[1.7] text-[#B9C1BA] sm:text-[15px] md:text-[16px] lg:text-[18px]">
              Explore retail shops and business units at Greno Plaza, a
              high-street commercial project at LS-09, Sector 36, Greater
              Noida. Enquire about a space or arrange a site visit.
            </p>

          </div>

          {/* RIGHT IMAGE */}

          <div className="relative overflow-hidden rounded-[7px]">

            <img
              src="/images/hero/homeHeroBanner.png"
              alt="Greno Plaza commercial building"
              className="block h-[270px] w-full object-cover sm:h-[330px] md:h-[350px] lg:h-[485px]"
            />

            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-[60%]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(13,31,23,0.96) 0%, rgba(13,31,23,0.88) 14%, rgba(13,31,23,0.65) 32%, rgba(13,31,23,0.35) 55%, rgba(13,31,23,0) 100%)",
              }}
            />

            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(13,31,23,0.02), rgba(13,31,23,0.10))",
              }}
            />

          </div>

        </div>

        <div className="mx-auto h-px max-w-[1320px] bg-white/10" />

      </section>

      {/* =====================================================
          GRENO PLAZA — ABOUT / FEATURE SECTION
      ===================================================== */}

      <section className="bg-[#F5F0E6]">

        {/* TOP FEATURES */}

        <div className="border-b border-[#E3DCCF]">

          <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-0 px-5 py-6 sm:px-8 lg:grid-cols-4 lg:px-10">

            {/* FEATURE 1 */}

            <div className="flex items-start gap-4 px-3 py-3 lg:px-5">

              <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-[#C5A15B]">
                <span className="text-[16px] text-[#C5A15B]">
                  ⌖
                </span>
              </div>

              <div>
                <h3 className="text-[12px] font-semibold text-[#18372B] sm:text-[13px] lg:text-[14px]">
                  Commercial Address
                </h3>

                <p
                  className="mt-1.5 max-w-[190px] leading-[1.5] text-[#777A73]"
                  style={{ fontSize: "14px" }}
                >
                  Plot No. LS-09, Sector 36, Greater Noida
                </p>
              </div>

            </div>

            {/* FEATURE 2 */}

            <div className="flex items-start gap-4 px-3 py-3 lg:px-5">

              <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-[#C5A15B]">
                <span className="text-[15px] text-[#C5A15B]">
                  ▣
                </span>
              </div>

              <div>
                <h3 className="text-[12px] font-semibold text-[#18372B] sm:text-[13px] lg:text-[14px]">
                  Flexible Shop Formats
                </h3>

                <p
                  className="mt-1.5 max-w-[190px] leading-[1.5] text-[#777A73]"
                  style={{ fontSize: "14px" }}
                >
                  Units sized for boutiques, services and F&amp;B
                </p>
              </div>

            </div>

            {/* FEATURE 3 */}

            <div className="flex items-start gap-4 px-3 py-3 lg:px-5">

              <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-[#C5A15B]">
                <span className="text-[15px] text-[#C5A15B]">
                  ✓
                </span>
              </div>

              <div>
                <h3 className="text-[12px] font-semibold text-[#18372B] sm:text-[13px] lg:text-[14px]">
                  Retail & Services
                </h3>

                <p
                  className="mt-1.5 max-w-[190px] leading-[1.5] text-[#777A73]"
                  style={{ fontSize: "14px" }}
                >
                  Shop spaces for retail and customer services
                </p>
              </div>

            </div>

            {/* FEATURE 4 */}

            <div className="flex items-start gap-4 px-3 py-3 lg:px-5">

              <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-[#C5A15B]">
                <span className="text-[15px] text-[#C5A15B]">
                  ↗
                </span>
              </div>

              <div>
                <h3 className="text-[12px] font-semibold text-[#18372B] sm:text-[13px] lg:text-[14px]">
                  Site Visit Support
                </h3>

                <p className="mt-1.5 max-w-[190px] text-[9px] leading-[1.5] text-[#777A73] sm:text-[10px]">
                  Ask our team about available commercial units
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* MAIN CONTENT */}

        <div className="mx-auto grid max-w-[1400px] items-center gap-8 px-5 py-12 sm:px-8 md:grid-cols-[0.85fr_1.25fr_0.48fr] lg:px-10 lg:py-14">

          {/* LEFT TEXT */}

          <div className="max-w-[420px]">

            <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-[#B29351]">
              About Greno Plaza
            </p>

            <h2 className="mt-4 font-serif text-[34px] font-normal leading-[1.05] tracking-[-0.025em] text-[#18372B] sm:text-[38px] lg:text-[42px]">
              Real Estate Experience,
              <br />
              <span className="italic">
                High-Street Focus.
              </span>
            </h2>

            {/* ABOUT TEXT + READ MORE */}

            <p className="mt-5 max-w-[390px] text-[18px] leading-[1.75] text-[#777A73]">

              Greno has worked in Greater Noida real estate since 2015.
              Greno Plaza brings that experience to a high-street commercial
              project planned for shops, services and food businesses.

              {!showMore && (
                <button
                  type="button"
                  onClick={() => setShowMore(true)}
                  className="ml-2 font-medium text-[#B29351] underline underline-offset-4 transition hover:text-[#18372B]"
                >
                  Read More
                </button>
              )}

              {showMore && (
                <>
                  {" "}
                  Greno Plaza brings retail, food and everyday services
                  together in one commercial destination. Contact us to
                  discuss unit options and arrange a site visit.

                  <button
                    type="button"
                    onClick={() => setShowMore(false)}
                    className="ml-2 font-medium text-[#B29351] underline underline-offset-4 transition hover:text-[#18372B]"
                  >
                    Read Less
                  </button>
                </>
              )}

            </p>

            

          </div>

          {/* CENTER IMAGE */}

          <div className="relative">

            <div className="relative h-[260px] overflow-hidden sm:h-[300px] lg:h-[320px]">

              <img
                src="/images/hero/homeAbout.png"
                alt="Greno Plaza interior"
                className="h-full w-full object-cover"
              />

            </div>

          </div>

          {/* RIGHT STATS */}

          <div className="flex h-[260px] flex-col justify-between bg-[#0D1F17] px-6 py-7 text-white sm:h-[300px] lg:h-[320px]">

            <div>
              <p className="font-serif text-[24px] leading-none text-[#C5A15B]">
                Since 2015
              </p>

              <p className="mt-2 text-[16px] leading-[1.5] text-white/60">
                Greater Noida Real Estate
              </p>
            </div>

            <div>
              <p className="font-serif text-[24px] leading-none text-[#C5A15B]">
                High Street
              </p>

              <p className="mt-2 text-[16px] leading-[1.5] text-white/60">
                Commercial Project
              </p>
            </div>

            <div>
              <p className="font-serif text-[24px] leading-none text-[#C5A15B]">
                Retail + Services
              </p>

              <p className="mt-2 text-[16px] leading-[1.5] text-white/60">
                Business Categories
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          ABOUT / INTRO
      ===================================================== */}

      <section
        id="about"
        className="px-5 py-20 sm:px-8 lg:px-10 lg:py-24"
      >

        <div className="mx-auto grid max-w-[1400px] items-center gap-12 md:grid-cols-2">

          {/* TEXT */}

          <div>

            <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-[#B29351]">
              Greno Plaza
            </p>

            <h2 className="mt-4 max-w-[560px] text-[34px] font-light leading-[1.05] tracking-[-0.03em] text-[#0D1F17] sm:text-[42px]">
              Commercial spaces
              <br />
              <span className="font-serif italic">
                on the high street.
              </span>
            </h2>

            <p className="mt-6 max-w-[500px] text-[16px] leading-7 text-[#6D746D]">
              Greno Plaza is a high-street commercial project in Greater
              Noida, planned for retail shops and customer-facing businesses.
            </p>

            <p className="mt-3 max-w-[500px] text-[16px] leading-7 text-[#6D746D]">
              Explore retail, food, pharmacy, salon, banking and other
              commercial service categories, then contact us about a visit.
            </p>

            <a
              href="#services"
              style={{
                display: "inline-block",
                backgroundColor: "#0D1F17",
                color: "#FFFFFF",
                padding: "12px 24px",
                borderRadius: "9999px",
                fontSize: "12px",
                fontWeight: "600",
                marginTop: "16px",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                textDecoration: "none",
              }}
            >
              Explore More
            </a>

          </div>

          {/* IMAGES */}

          <div className="grid grid-cols-2 gap-3">

            <div className="overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85"
                alt="Commercial interior"
                className="h-[250px] w-full object-cover sm:h-[310px]"
              />
            </div>

            <div className="mt-8 overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85"
                alt="Premium commercial property"
                className="h-[250px] w-full object-cover sm:h-[310px]"
              />
            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        id="services"
        className="bg-[#0D2118] px-5 py-14 text-white sm:px-8 lg:px-10 lg:py-16"
      >

        <div className="mx-auto max-w-[1400px]">

          {/* HEADER */}

          <div className="flex items-end justify-between">

            <div>

              <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#C5A15B]">
                Greno Plaza
              </p>

              <h2 className="mt-2 font-serif text-[25px] font-normal leading-none tracking-[-0.025em] sm:text-[32px] lg:text-[34px]">
                Commercial Space Categories
              </h2>

            </div>

            <Link
              href="/properties"
              className="mb-1 hidden text-[7px] font-medium uppercase tracking-[0.05em] text-[#C5A15B] transition-opacity hover:opacity-70 sm:block"
            >
              View All Spaces&nbsp; →
            </Link>

          </div>

          {/* MOBILE VIEW ALL */}

          <Link
            href="/properties"
            className="mt-4 block text-[7px] font-medium uppercase tracking-[0.05em] text-[#C5A15B] sm:hidden"
          >
            View All Spaces&nbsp; →
          </Link>

          {/* PROPERTY CARDS */}

          <div className="mt-7 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">

            {[
              {
                number: "01",
                title: "Retail Shops",
                location: "Greno Plaza, Sector 36, Greater Noida",
                badge: "Retail",
                image: "/images/deliveredProjects/proj1.png",
              },
              {
                number: "02",
                title: "Food & Beverage Units",
                location: "Greno Plaza, Sector 36, Greater Noida",
                badge: "Dining",
                image: "/images/deliveredProjects/proj2.png",
              },
              {
                number: "03",
                title: "Retail & Service Businesses",
                location: "Greno Plaza, Sector 36, Greater Noida",
                badge: "Commercial",
                image: "/images/deliveredProjects/proj3.png",
              },
            ].map((space) => (

              <div key={space.number} className="group">

                {/* IMAGE */}

                <div className="relative aspect-[1.72/1] overflow-hidden">

                  <img
                    src={space.image}
                    alt={space.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                  <div className="absolute bottom-3 left-3">
                    <span className="inline-flex rounded-full bg-[#07140F]/90 px-3 py-[5px] text-[6px] font-semibold uppercase tracking-[0.12em] text-white">
                      {space.badge}
                    </span>
                  </div>

                </div>

                {/* CARD INFORMATION */}

                <div className="mt-3 flex items-start justify-between">

                  <div>

                    <h3 className="text-[12px] font-medium leading-tight text-white md:text-[16px]">
                      {space.title}
                    </h3>

                    <div className="mt-1.5 flex items-center gap-1.5">

                      <span className="h-[4px] w-[4px] rounded-full bg-[#D74A43]" />

                      <p className="text-[14px] leading-none text-white/45">
                        {space.location}
                      </p>

                    </div>

                  </div>

                  <Link
                    href="/properties"
                    className="ml-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#C5A15B]/70 text-[11px] text-[#C5A15B] transition-all duration-300 group-hover:bg-[#C5A15B] group-hover:text-[#0D2118]"
                    aria-label={`View ${space.title}`}
                  >
                    ↗
                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          PROPERTIES
      ===================================================== */}

      <section
        id="properties"
        className="px-5 py-20 sm:px-8 lg:px-10 lg:py-24"
      >

        <div className="mx-auto max-w-[1400px]">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-[#B29351]">
                Featured Properties
              </p>

              <h2 className="mt-4 text-[34px] font-light leading-[1.05] tracking-[-0.03em] sm:text-[44px]">
                Find your
                <br />
                <span className="font-serif italic">
                  perfect space.
                </span>
              </h2>

            </div>

            <Link
              href="/properties"
              className="w-fit rounded-full border border-[#0D1F17] px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em]"
            >
              View All Spaces
            </Link>

          </div>

          {/* PROPERTY GRID */}

          <div className="mt-12 grid gap-4 md:grid-cols-3">

            {properties.map((property, index) => (

              <Link
                href={`/properties/${property.slug}`}
                key={property.title}
                className="group overflow-hidden border border-[#DDD5C5] bg-white"
              >

                <div className="relative overflow-hidden">

                  <img
                    src={property.image}
                    alt={property.title}
                    className="h-[270px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-[#F5F0E6] px-3 py-1.5 text-[7px] font-bold uppercase tracking-[0.12em] text-[#0D1F17]">
                    Featured
                  </span>

                </div>

                <div className="p-5">

                  <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#B29351]">
                    0{index + 1} / {property.type}
                  </p>

                  <h3 className="mt-2 text-[18px] font-medium text-[#0D1F17]">
                    {property.title}
                  </h3>

                  <p className="mt-1.5 text-[12px] text-[#777B73]">
                    {property.location}
                  </p>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="border-y border-[#DDD5C5] bg-[#EEE8DC]">

        <div className="mx-auto grid max-w-[1400px] grid-cols-2 md:grid-cols-4">

          {[
            ["Retail", "Shop spaces"],
            ["Food", "Restaurant and cafe units"],
            ["Services", "Customer-facing businesses"],
            ["Visit", "Arrange a site tour"],
          ].map(([number, label]) => (

            <div
              key={label}
              className="border-r border-[#DDD5C5] px-5 py-10 text-center last:border-r-0"
            >

              <p className="text-[28px] font-light tracking-[-0.04em] text-[#0D1F17]">
                {number}
              </p>

              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#777B73]">
                {label}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="bg-[#07140F] px-0">

        <div className="mx-auto grid max-w-[1400px] min-h-[180px] grid-cols-1 md:grid-cols-[260px_1fr_1px_260px]">

          {/* LEFT IMAGE */}

          <div className="relative hidden overflow-hidden md:block">

            <img
              src="/images/hero/ctaimage.png"
              alt="Greno Plaza greenery"
              className="h-full min-h-[180px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-[#07140F]/15" />

          </div>

          {/* CTA CONTENT */}

          <div className="flex items-center px-7 py-8 md:px-10 md:py-6">

            <div>

              <p
                className="uppercase tracking-[0.28em] text-[#C5A15B]"
                style={{ fontSize: "8px" }}
              >
                Commercial Space Enquiries
              </p>

              <h2
                className="mt-2 font-serif font-normal leading-[1.05] text-[#F4EFE5]"
                style={{ fontSize: "22px" }}
              >
                Explore Greno Plaza Spaces
              </h2>

              <p
                className="mt-2 max-w-[390px] leading-[1.45] text-[#AEB8B1]"
                style={{ fontSize: "16px" }}
              >
                Ask our team about commercial unit options and arrange a site
                visit at Greno Plaza.
              </p>

              <a
                href="/contact#contact-form"
                className="mt-3 inline-flex items-center rounded-full bg-[#C5A15B] px-5 py-2 text-[#0D1F17] transition hover:bg-[#D8BB75]"
                style={{
                  fontSize: "12px",
                  lineHeight: "1",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                Contact Us
                <span className="ml-2">
                  →
                </span>
              </a>

            </div>

          </div>

          {/* DIVIDER */}

          <div className="hidden bg-white/10 md:block" />

          {/* RIGHT LOGO */}

        </div>

      </section>

    </main>
  );
}