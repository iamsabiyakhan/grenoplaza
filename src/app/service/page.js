import Image from "next/image";
import Link from "next/link";
import { services } from "../../data/service-data";

const properties = [
  {
    slug: "retail-spaces",
    title: "Retail Spaces",
    location: "Greno Plaza, Greater Noida",
    image: "/images/hero/site1.png",
  },
  {
    slug: "commercial-shops",
    title: "Commercial Shops",
    location: "Greno Plaza, Greater Noida",
    image: "/images/hero/site2.png",
  },
  {
    slug: "food-beverage",
    title: "Food & Beverage Outlets",
    location: "Greno Plaza, Greater Noida",
    image: "/images/service/05-lifestyle-amenities.jpg",
  },
  {
    slug: "office-workspaces",
    title: "Commercial Service Units",
    location: "Greno Plaza, Greater Noida",
    image: "/images/service/officeSpace.png",
  },
];


// MANAGEMENT SERVICES

const managementServices = [
  [
    "⌂",
    "Tenant Onboarding",
    "Understand the enquiry and site-visit steps for a commercial unit.",
  ],
  [
    "◇",
    "Rental Guidance",
    "Discuss space requirements, lease questions and intended business use.",
  ],
  [
    "╱",
    "Infrastructure & Support",
    "Ask our team for project details relevant to your business needs.",
  ],
  [
    "◉",
    "Property Customization",
    "Discuss unit formats and fit-out requirements for your business.",
  ],
  [
    "⌖",
    "Request a Property Tour",
    "Arrange a visit to explore the high-street commercial project.",
  ],
];


export default function ServicePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F4EFE9] text-[#0D2118]">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative min-h-[560px] overflow-hidden bg-[#0D2118]">

        <Image
          src="/images/service/06-serviceHero.png"
          alt="Greno Plaza Services"
          fill
          priority
          className="object-cover"
        />

        

        <div className="relative mx-auto flex min-h-[560px] max-w-[1450px] items-center px-6 pt-16 sm:px-10 lg:px-12">

          <div className="max-w-[520px]">

            <div className="flex items-center gap-4">

              <span className="h-px w-10 bg-[#C1993D]" />

              <p className="text-[12px] font-semibold uppercase tracking-[0.4em] text-[#C1993D]">
                Our Services
              </p>

            </div>


            <h1 className="mt-6 font-serif text-[52px] font-light leading-[0.94] tracking-[-0.04em] text-white sm:text-[68px]">
              High-Street
              <br />
              Commercial Spaces
              <br />
              <span className="italic text-[#C1993D]">
                at Greno Plaza.
              </span>
            </h1>


            <p className="mt-7 max-w-[420px] text-[14px] leading-6 text-white/65">
              Explore retail shops, food outlets and customer-service units
              at Greno Plaza in Sector 36, Greater Noida. Contact us about
              space options and site visits.
            </p>


            

          </div>

        </div>
      </section>


      {/* =====================================================
          MAIN SERVICES / MANAGEMENT SECTION
      ===================================================== */}

      <section
        id="services"
        className="relative px-6 py-14 sm:px-10 lg:px-16 lg:py-0"
      >

        <div className="relative z-10 mx-auto max-w-[1350px] lg:-mt-5">

          <div className="grid overflow-hidden rounded-[12px] shadow-[0_20px_70px_rgba(13,33,24,0.12)] lg:grid-cols-2">


            {/* LEFT SIDE */}

            <div className="bg-[#FBF8F3] p-7 sm:p-10 lg:p-12">

              <h2 className="font-serif text-[31px] font-medium">
                Commercial Property Services
              </h2>

              <div className="mt-4 h-px bg-[#0D2118]/10" />


              <div className="mt-3">

                {managementServices.map(
                  ([icon, title, text]) => (

                    <div
                      key={title}
                      className="group flex items-center gap-4 border-b border-[#0D2118]/10 py-4 last:border-b-0"
                    >

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E5ECE5] text-[24px] transition group-hover:bg-[#C1993D]">
                        {icon}
                      </div>


                      <div className="min-w-0 flex-1">

                        <h3 className="text-[14px] font-semibold">
                          {title}
                        </h3>

                        <p className="mt-1 text-[12px] leading-4 text-[#0D2118]/50">
                          {text}
                        </p>

                      </div>


                      <span className="text-[15px] text-[#C1993D]">
                        ›
                      </span>

                    </div>

                  )
                )}

              </div>


              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-3 rounded-full border border-[#0D2118]/60 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.08em] transition hover:bg-[#0D2118] hover:text-white"
              >
                ▣ Book a Site Visit →
              </Link>

            </div>


            {/* RIGHT SIDE */}

            <div className="relative overflow-hidden bg-[#0D2118] p-8 text-white sm:p-10 lg:p-12">

              <div className="absolute right-10 top-10 h-20 w-20 rounded-full border border-[#C1993D]/20 bg-[#C1993D]/10" />

              <div className="relative">

                <p className="text-[12px] font-semibold uppercase tracking-[0.35em] text-[#C1993D]">
                  Why Choose Us
                </p>


                <h2 className="mt-6 max-w-[330px] font-serif text-[34px] font-light leading-[1]">
                  Your Commercial Space,
                  <br />
                  <span className="italic text-[#C1993D]">
                    Our Focus.
                  </span>
                </h2>


                <p className="mt-6 max-w-[390px] text-[14px] leading-5 text-white/55">
                  Our team can help you understand commercial unit options,
                  discuss intended use and arrange a visit to Greno Plaza.
                </p>


                <div className="mt-7 space-y-3">

                  {[
                    "High-street commercial project",
                    "Retail, food and service categories",
                    "Space enquiry coordination",
                    "Site visit arrangements",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >

                      <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#C1993D] text-[7px] text-[#C1993D]">
                        ✓
                      </span>

                      <span className="text-[14px] text-white/70">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>


                <Link
                  href="/about"
                  className="mt-7 inline-flex items-center gap-5 bg-[#C1993D] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.13em] text-[#0D2118]"
                >
                  Learn More About Us →
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICE CARDS
          THESE ARE NOW CLICKABLE
      ===================================================== */}

      <section className="px-6 pb-20 pt-20 sm:px-10 lg:px-16 lg:pb-28 lg:pt-24">

        <div className="mx-auto max-w-[1350px]">


          {/* SECTION HEADING */}

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <div>

              <div className="flex items-center gap-4">

                <p className="text-[12px] font-semibold uppercase tracking-[0.4em] text-[#C1993D]">
                  Our Services
                </p>

                <span className="h-px w-10 bg-[#C1993D]" />

              </div>


              <h2 className="mt-5 max-w-[650px] font-serif text-[42px] font-light leading-[0.96] tracking-[-0.04em] sm:text-[55px]">
                Explore Commercial
                <br />
                Spaces at Greno Plaza.
              </h2>

            </div>


            <p className="max-w-[300px] text-[14px] leading-5 text-[#0D2118]/50">
              Tell us your business type and space requirements. Our team
              can discuss relevant unit options and arrange a site visit.
            </p>

          </div>


          {/* =================================================
              CLICKABLE SERVICE CARDS
          ================================================= */}

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">

            {services.map((service) => (

              <Link
                href={`/service/${service.slug}`}
                key={service.slug}
                className="group block overflow-hidden border border-[#0D2118]/10 bg-[#FBF8F3] transition duration-500 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(13,33,24,0.1)]"
              >

                {/* IMAGE */}

                <div className="relative aspect-[1.25/1] overflow-hidden">

                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />


                  {/* ICON */}

                  <div className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#0D2118] text-[#C1993D]">
                    {service.icon}
                  </div>

                </div>


                {/* CARD CONTENT */}

                <div className="p-4">

                  <h3 className="font-serif text-[17px] leading-tight">
                    {service.title}
                  </h3>


                  <p className="mt-2 min-h-[38px] text-[14px] leading-4 text-[#0D2118]/50">
                    {service.description}
                  </p>


                  {/* LEARN MORE */}

                  <div className="mt-4 flex items-center justify-between">

                    <span className="text-[12px] font-semibold uppercase tracking-[0.1em]">
                      Learn More
                    </span>

                    <span className="text-[13px] text-[#C1993D] transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURED PROPERTIES
      ===================================================== */}




      {/* =====================================================
          BOTTOM BRAND SECTION
      ===================================================== */}

     <section className="relative overflow-hidden bg-[#0D2118] px-6 py-12 text-center sm:py-14 lg:py-16">

  {/* Subtle background glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(193,153,61,0.08),transparent_55%)]" />

  {/* Left decorative gold curve */}
  <div className="absolute -left-[110px] -top-[170px] h-[420px] w-[240px] rotate-[24deg] rounded-[50%] border-r border-[#C1993D]/70 sm:-left-[90px]" />

  {/* Right decorative gold curve */}
  <div className="absolute -right-[110px] -bottom-[190px] h-[440px] w-[250px] -rotate-[24deg] rounded-[50%] border-l border-[#C1993D]/70 sm:-right-[90px]" />

  {/* Subtle leaf-style decoration */}
  <div className="absolute left-0 top-0 h-full w-[180px] bg-gradient-to-r from-[#061A12]/40 to-transparent opacity-60" />

  <div className="relative mx-auto max-w-[1100px]">

    {/* TOP LABEL */}
    <div className="flex items-center justify-center gap-5">

      <span className="h-px w-16 bg-[#C1993D]/70" />

      <p className="text-[12px] font-medium uppercase tracking-[0.5em] text-[#C1993D]">
        Greno Plaza
      </p>

      <span className="h-px w-16 bg-[#C1993D]/70" />

    </div>


    {/* MAIN TITLE */}
    <h2 className="mt-5 font-serif text-[38px] font-light leading-none tracking-[-0.035em] text-white sm:text-[50px] lg:text-[58px]">

      High Street{" "}

      <span className="italic text-[#C1993D]">
        Commercial
      </span>

    </h2>


    {/* DECORATIVE DIVIDER */}
    <div className="mt-7 flex items-center justify-center gap-4">

      <span className="h-px w-20 bg-[#C1993D]/70 sm:w-28" />

      <span className="flex h-7 w-7 rotate-45 items-center justify-center border border-[#C1993D]">

        <span className="h-1.5 w-1.5 bg-[#C1993D]" />

      </span>

      <span className="h-px w-20 bg-[#C1993D]/70 sm:w-28" />

    </div>


    {/* SMALL BRAND LINE */}
    <p className="mt-7 text-[12px] uppercase tracking-[0.4em] text-white/40">
      Where Business Meets Possibility
    </p>

  </div>

</section>

    </main>
  );
}