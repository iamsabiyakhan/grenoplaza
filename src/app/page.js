import Image from "next/image";
const properties = [
  {
    title: "Greno Plaza",
    location: "Greater Noida, Uttar Pradesh",
    type: "High Street Retail",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Central Avenue",
    location: "Greater Noida",
    type: "Premium Retail",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "The Grand Walk",
    location: "Greater Noida",
    type: "Commercial Space",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
  },
];

const features = [
  {
    number: "01",
    title: "Prime Location",
    text: "Strategically positioned for visibility, accessibility and high customer footfall.",
  },
  {
    number: "02",
    title: "Built for Business",
    text: "Modern commercial spaces designed around the needs of ambitious brands.",
  },
  {
    number: "03",
    title: "High Footfall",
    text: "A vibrant commercial destination connecting brands with their customers.",
  },
  {
    number: "04",
    title: "Long-Term Value",
    text: "A location designed to support sustainable business and investment value.",
  },
];

export default function Home() {
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
              Where Great Brands
              <br />

              Meet{" "}

              <span className="font-serif italic text-[#C5A15B]">
                Footfall
              </span>
            </h1>

            <p className="mt-5 max-w-[500px] text-[14px] leading-[1.7] text-[#B9C1BA] sm:text-[15px] md:text-[16px] lg:text-[18px]">
              At Greno Plaza, we&apos;ve built Greater Noida&apos;s landmark
              commercial high street — designed for footfall, built for
              business, and positioned for lasting returns.
            </p>

            <a
              href="#properties"
              className="mt-5 inline-flex items-center rounded-full bg-[#C5A15B] px-4 py-2.5 text-[12px] font-semibold text-[#0D1F17] transition-all duration-300 hover:bg-[#D8BB75]"
            >
              Explore Available Spaces

              <span className="ml-2 text-[10px]">
                →
              </span>
            </a>

          </div>


          {/* RIGHT IMAGE */}

          <div className="relative overflow-hidden rounded-[7px]">

            <img
              src="/images/hero/homeHeroBanner.png"
              alt="Greno Plaza commercial building"
              className="block h-[270px] w-full object-cover sm:h-[330px] md:h-[350px] lg:h-[485px]"
            />


            {/* LEFT GREEN SHADOW */}

            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-[60%]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(13,31,23,0.96) 0%, rgba(13,31,23,0.88) 14%, rgba(13,31,23,0.65) 32%, rgba(13,31,23,0.35) 55%, rgba(13,31,23,0) 100%)",
              }}
            />


            {/* SUBTLE IMAGE OVERLAY */}

            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(13,31,23,0.02), rgba(13,31,23,0.10))",
              }}
            />

          </div>

        </div>


        {/* HERO BOTTOM LINE */}

        <div className="mx-auto h-px max-w-[1320px] bg-white/10" />

      </section>


      {/* =====================================================
          FEATURES STRIP
      ===================================================== */}

      {/* =====================================================
    GRENO PLAZA — ABOUT / FEATURE SECTION
===================================================== */}
{/* =====================================================
    GRENO PLAZA — ABOUT / FEATURE SECTION
===================================================== */}

<section className="bg-[#F5F0E6]">

  {/* ================= TOP FEATURES ================= */}

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
            High Footfall Location
          </h3>

          <p
  className="mt-1.5 max-w-[190px] leading-[1.5] text-[#777A73]"
  style={{ fontSize: "14px" }}
>
  Prime location with strong commercial corridor
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

          <p  className="mt-1.5 max-w-[190px] leading-[1.5] text-[#777A73]"
  style={{ fontSize: "14px" }}>
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
            Trusted Build Quality
          </h3>

          <p  className="mt-1.5 max-w-[190px] leading-[1.5] text-[#777A73]"
  style={{ fontSize: "14px" }}>
            RCC structure, premium specifications
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
            Strong Rental Returns
          </h3>

          <p className="mt-1.5 max-w-[190px] text-[9px] leading-[1.5] text-[#777A73] sm:text-[10px]">
            High-demand corridor, strong appreciation
          </p>
        </div>

      </div>

    </div>

  </div>


  {/* ================= MAIN CONTENT ================= */}

  <div className="mx-auto grid max-w-[1400px] items-center gap-8 px-5 py-12 sm:px-8 md:grid-cols-[0.85fr_1.25fr_0.48fr] lg:px-10 lg:py-14">


    {/* ================= LEFT TEXT ================= */}

    <div className="max-w-[420px]">

      <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-[#B29351]">
        About Greno Plaza
      </p>


      <h2 className="mt-4 font-serif text-[34px] font-normal leading-[1.05] tracking-[-0.025em] text-[#18372B] sm:text-[38px] lg:text-[42px]">

        Building High Streets,

        <br />

        <span className="italic">
          Building Business.
        </span>

      </h2>


      <p className="mt-5 max-w-[390px] text-[11px] leading-[1.75] text-[#777A73] sm:text-[12px] lg:text-[13px]">

        Greno Plaza is Greater Noida&apos;s landmark commercial
        high street — a curated mix of retail, F&amp;B and
        entertainment brands designed to draw footfall every
        day of the week.

      </p>


      <p className="mt-2 max-w-[390px] text-[11px] leading-[1.75] text-[#777A73] sm:text-[12px] lg:text-[13px]">

        Every shop is planned for visibility, access and
        long-term business growth.

      </p>


      <a
        href="#contact"
        className="mt-6 inline-flex items-center rounded-full bg-[#0D1F17] px-5 py-2.5 text-[9px] font-medium text-white transition hover:bg-[#18372B]"
      >
        Know More

        <span className="ml-2 text-[11px]">
          →
        </span>

      </a>

    </div>


    {/* ================= CENTER IMAGE ================= */}

    <div className="relative">

      <div className="relative h-[260px] overflow-hidden sm:h-[300px] lg:h-[320px]">

        <img
          src="/images/hero/homeAbout.png"
          alt="Greno Plaza interior"
          className="h-full w-full object-cover"
        />

      </div>

    </div>


    {/* ================= RIGHT STATS ================= */}

    <div className="flex h-[260px] flex-col justify-between bg-[#0D1F17] px-6 py-7 text-white sm:h-[300px] lg:h-[320px]">

      <div>

        <p className="font-serif text-[24px] leading-none text-[#C5A15B]">
          10+
        </p>

        <p className="mt-2 text-[16px] leading-[1.5] text-white/60">
          Years of Experience
        </p>

      </div>


      <div>

        <p className="font-serif text-[24px] leading-none text-[#C5A15B]">
          15+
        </p>

        <p className="mt-2 text-[16px] leading-[1.5] text-white/60">
          Projects Delivered
        </p>

      </div>


      <div>

        <p className="font-serif text-[24px] leading-none text-[#C5A15B]">
          50+
        </p>

        <p className="mt-2 text-[16px] leading-[1.5] text-white/60">
          Brands &amp; F&amp;B Brands
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
              Building High Streets
            </p>

            <h2 className="mt-4 max-w-[560px] text-[34px] font-light leading-[1.05] tracking-[-0.03em] text-[#0D1F17] sm:text-[42px]">

              Building spaces

              <br />

              <span className="font-serif italic">
                for ambitious brands.
              </span>

            </h2>

            <p className="mt-6 max-w-[500px] text-[16px] leading-7 text-[#6D746D]">
              Greno Plaza is designed as a premium commercial destination
              where businesses can connect with customers, create visibility
              and build lasting brand presence.
            </p>

            <p className="mt-3 max-w-[500px] text-[16px] leading-7 text-[#6D746D]">
              From retail and food &amp; beverage to lifestyle and service
              brands, every space is planned around the modern high-street
              experience.
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
          Grendo Plaza Precincts
        </p>

        <h2 className="mt-2 font-serif text-[25px] font-normal leading-none tracking-[-0.025em] sm:text-[32px] lg:text-[34px]">
          Premium Shops. Prime Footfall.
        </h2>
      </div>

      <a
        href="#spaces"
        className="mb-1 hidden text-[7px] font-medium uppercase tracking-[0.05em] text-[#C5A15B] transition-opacity hover:opacity-70 sm:block"
      >
        View All Spaces&nbsp; →
      </a>
    </div>

    {/* MOBILE VIEW ALL */}
    <a
      href="#spaces"
      className="mt-4 block text-[7px] font-medium uppercase tracking-[0.05em] text-[#C5A15B] sm:hidden"
    >
      View All Spaces&nbsp; →
    </a>

    {/* PROPERTY CARDS */}
    <div className="mt-7 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">

      {[
        {
          number: "01",
          title: "The High Street Arcade",
          location: "Ground Floor, Block A",
          badge: "RETAIL ARCADE",
          image: "/images/hero/site1.png",
        },
        {
          number: "02",
          title: "Greno Plaza Anchor Wing",
          location: "Block B, Corner Plot",
          badge: "ANCHOR STORE",
          image: "/images/hero/site2.png",
        },
        {
          number: "03",
          title: "Greno Plaza Food Court",
          location: "Rooftop, Block C",
          badge: "FOOD COURT",
          image: "/images/hero/site3.png",
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

            {/* IMAGE DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

            {/* IMAGE BADGE */}
            <div className="absolute bottom-3 left-3">
              <span className="inline-flex rounded-full bg-[#07140F]/90 px-3 py-[5px] text-[6px] font-semibold uppercase tracking-[0.12em] text-white">
                {space.badge}
              </span>
            </div>
          </div>

          {/* CARD INFORMATION */}
          <div className="mt-3 flex items-start justify-between">

            <div>
              <h3 className="md:text-[16px] font-medium leading-tight text-white text-[12px]">
                {space.title}
              </h3>

              <div className="mt-1.5 flex items-center gap-1.5">
                <span className="h-[4px] w-[4px] rounded-full bg-[#D74A43]" />

                <p className="text-[14px] leading-none text-white/45">
                  {space.location}
                </p>
              </div>
            </div>

            {/* ARROW BUTTON */}
            <button
              type="button"
              className="ml-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#C5A15B]/70 text-[11px] text-[#C5A15B] transition-all duration-300 group-hover:bg-[#C5A15B] group-hover:text-[#0D2118]"
              aria-label={`View ${space.title}`}
            >
              ↗
            </button>

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


            <a
              href="#contact"
              className="w-fit rounded-full border border-[#0D1F17] px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em]"
            >
              View All Spaces
            </a>

          </div>


          {/* PROPERTY GRID */}

          <div className="mt-12 grid gap-4 md:grid-cols-3">

            {properties.map((property, index) => (

              <article
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


                  <div className="mt-5 flex items-center justify-between border-t border-[#E5DFD3] pt-4">

                    <span className="text-[10px] uppercase tracking-[0.12em] text-[#777B73]">
                      Explore Property
                    </span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0D1F17] text-[10px] text-white">
                      ↗
                    </span>

                  </div>

                </div>

              </article>

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
            ["15+", "Years Experience"],
            ["120+", "Commercial Spaces"],
            ["35+", "Prime Locations"],
            ["98%", "Client Satisfaction"],
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
          CTA
      ===================================================== */}
            {/* =====================================================
          FINAL CTA — BEFORE FOOTER
      ===================================================== */}

      {/* =====================================================
    FINAL CTA — BEFORE FOOTER
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
          Your Store Awaits
        </p>

        <h2
          className="mt-2 font-serif font-normal leading-[1.05] text-[#F4EFE5]"
          style={{ fontSize: "22px" }}
        >
          Let&apos;s Grow Your Business Together
        </h2>

        <p
          className="mt-2 max-w-[390px] leading-[1.45] text-[#AEB8B1]"
          style={{ fontSize: "16px" }}
        >
          Get in touch for shop availability, pricing and a personalized
          site visit.
        </p>

        <a
          href="#contact"
          className="mt-3 inline-flex items-center rounded-full bg-[#C5A15B] px-5 py-2 text-[#0D1F17] transition hover:bg-[#D8BB75]"
          style={{
            fontSize: "12px",
            lineHeight: "1",
            fontWeight: "600",
            textDecoration: "none",
          }}
        >
          Contact Us
          <span className="ml-2">→</span>
        </a>

      </div>
    </div>


    {/* DIVIDER */}
    <div className="hidden bg-white/10 md:block" />


    {/* RIGHT LOGO */}
    <div className="flex items-center px-7 py-7 md:px-8">

      <div>
        <img
          src="/images/logo1.png"
          alt="Greno Plaza"
          className="h-auto w-[200px] object-contain"
        />

        <p
          className="mt-5 uppercase tracking-[0.18em] text-[#6F7A73]"
          style={{ fontSize: "6px" }}
        >
          RETAIL&nbsp;&nbsp;•&nbsp;&nbsp;FOOTFALL&nbsp;&nbsp;•&nbsp;&nbsp;GROWTH
        </p>
      </div>

    </div>

  </div>
</section>
     

    </main>
  );
}