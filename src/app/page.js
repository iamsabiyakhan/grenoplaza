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
              className="mt-5 inline-flex items-center rounded-full bg-[#C5A15B] px-4 py-2.5 text-[8px] font-semibold text-[#0D1F17] transition-all duration-300 hover:bg-[#D8BB75]"
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

          <p className="mt-1.5 max-w-[190px] text-[9px] leading-[1.5] text-[#777A73] sm:text-[10px]">
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

          <p className="mt-1.5 max-w-[190px] text-[9px] leading-[1.5] text-[#777A73] sm:text-[10px]">
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

          <p className="mt-1.5 max-w-[190px] text-[9px] leading-[1.5] text-[#777A73] sm:text-[10px]">
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
          src="/images/hero/heroAbout.png"
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

        <p className="mt-2 text-[9px] leading-[1.5] text-white/60">
          Years of Experience
        </p>

      </div>


      <div>

        <p className="font-serif text-[24px] leading-none text-[#C5A15B]">
          15+
        </p>

        <p className="mt-2 text-[9px] leading-[1.5] text-white/60">
          Projects Delivered
        </p>

      </div>


      <div>

        <p className="font-serif text-[24px] leading-none text-[#C5A15B]">
          50+
        </p>

        <p className="mt-2 text-[9px] leading-[1.5] text-white/60">
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

            <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#B29351]">
              Building High Streets
            </p>

            <h2 className="mt-4 max-w-[560px] text-[34px] font-light leading-[1.05] tracking-[-0.03em] text-[#0D1F17] sm:text-[42px]">

              Building spaces

              <br />

              <span className="font-serif italic">
                for ambitious brands.
              </span>

            </h2>

            <p className="mt-6 max-w-[500px] text-[10px] leading-7 text-[#6D746D]">
              Greno Plaza is designed as a premium commercial destination
              where businesses can connect with customers, create visibility
              and build lasting brand presence.
            </p>

            <p className="mt-3 max-w-[500px] text-[10px] leading-7 text-[#6D746D]">
              From retail and food &amp; beverage to lifestyle and service
              brands, every space is planned around the modern high-street
              experience.
            </p>

            <a
              href="#services"
              className="mt-6 inline-flex rounded-full bg-[#0D1F17] px-5 py-2.5 text-[8px] font-semibold uppercase tracking-[0.12em] text-white"
            >
              Discover Greno Plaza
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
        className="bg-[#0D1F17] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-24"
      >

        <div className="mx-auto max-w-[1400px]">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>

              <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#C5A15B]">
                Why Greno Plaza
              </p>

              <h2 className="mt-4 text-[34px] font-light leading-[1.05] tracking-[-0.03em] sm:text-[44px]">

                Built for

                <br />

                <span className="font-serif italic text-[#C5A15B]">
                  business.
                </span>

              </h2>

            </div>


            <p className="max-w-[400px] text-[9px] leading-6 text-white/55">
              Every detail is designed to create a strong commercial
              environment for brands, customers and investors.
            </p>

          </div>


          {/* SERVICE CARDS */}

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => (

              <div
                key={feature.number}
                className="border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:bg-white/[0.06]"
              >

                <div className="flex items-start justify-between">

                  <span className="text-[9px] text-[#C5A15B]">
                    {feature.number}
                  </span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 text-[10px] text-[#C5A15B]">
                    ↗
                  </span>

                </div>

                <h3 className="mt-12 text-[14px] font-medium">
                  {feature.title}
                </h3>

                <p className="mt-3 text-[9px] leading-6 text-white/45">
                  {feature.text}
                </p>

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

              <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#B29351]">
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
              className="w-fit rounded-full border border-[#0D1F17] px-5 py-2.5 text-[8px] font-semibold uppercase tracking-[0.12em]"
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

                  <p className="text-[7px] font-bold uppercase tracking-[0.18em] text-[#B29351]">
                    0{index + 1} / {property.type}
                  </p>

                  <h3 className="mt-2 text-[17px] font-medium text-[#0D1F17]">
                    {property.title}
                  </h3>

                  <p className="mt-1.5 text-[8px] text-[#777B73]">
                    {property.location}
                  </p>


                  <div className="mt-5 flex items-center justify-between border-t border-[#E5DFD3] pt-4">

                    <span className="text-[7px] uppercase tracking-[0.12em] text-[#777B73]">
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

              <p className="mt-2 text-[7px] font-semibold uppercase tracking-[0.16em] text-[#777B73]">
                {label}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section
        id="contact"
        className="relative overflow-hidden bg-[#0D1F17] px-5 py-20 sm:px-8 lg:px-10 lg:py-24"
      >

        {/* Decorative circles */}

        <div className="absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full border border-[#C5A15B]/15" />

        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full border border-[#C5A15B]/10" />


        <div className="relative mx-auto flex max-w-[1400px] flex-col justify-between gap-10 md:flex-row md:items-end">

          <div>

            <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#C5A15B]">
              Find Your Next Address
            </p>

            <h2 className="mt-4 max-w-[650px] text-[35px] font-light leading-[1.05] tracking-[-0.03em] text-white sm:text-[48px]">

              Let&apos;s Grow Your

              <br />

              <span className="font-serif italic text-[#C5A15B]">
                Business Together.
              </span>

            </h2>

            <p className="mt-5 max-w-[440px] text-[9px] leading-6 text-white/45">
              Tell us what you are looking for and our property team will help
              you explore suitable commercial spaces at Greno Plaza.
            </p>

          </div>


          <a
            href="mailto:hello@grenoplaza.com"
            className="w-fit rounded-full bg-[#C5A15B] px-6 py-3 text-[8px] font-bold uppercase tracking-[0.14em] text-[#0D1F17] transition hover:bg-[#D8BB75]"
          >
            Start a Conversation
          </a>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-[#081A13] px-5 py-10 text-white sm:px-8 lg:px-10">

        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-8 md:grid-cols-4">

            {/* LOGO */}

            <div className="md:col-span-2">

              <div className="flex items-center gap-2">

                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#C5A15B]">
                  <span className="font-serif text-sm text-[#C5A15B]">
                    G
                  </span>
                </div>

                <div>
                  <p className="text-[12px] font-semibold tracking-[0.12em]">
                    GRENO
                  </p>

                  <p className="mt-1 text-[6px] uppercase tracking-[0.3em] text-[#C5A15B]">
                    Plaza
                  </p>
                </div>

              </div>

              <p className="mt-4 max-w-[360px] text-[8px] leading-6 text-white/40">
                A premium commercial high street designed for brands,
                businesses and investors in Greater Noida.
              </p>

            </div>


            {/* EXPLORE */}

            <div>

              <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#C5A15B]">
                Explore
              </p>

              <div className="mt-4 space-y-2.5">

                <a
                  href="#"
                  className="block text-[8px] text-white/45 hover:text-white"
                >
                  Home
                </a>

                <a
                  href="#properties"
                  className="block text-[8px] text-white/45 hover:text-white"
                >
                  Properties
                </a>

                <a
                  href="#about"
                  className="block text-[8px] text-white/45 hover:text-white"
                >
                  About
                </a>

                <a
                  href="#contact"
                  className="block text-[8px] text-white/45 hover:text-white"
                >
                  Contact
                </a>

              </div>

            </div>


            {/* CONTACT */}

            <div>

              <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#C5A15B]">
                Contact
              </p>

              <div className="mt-4 space-y-2.5">

                <p className="text-[8px] text-white/45">
                  +91 98765 43210
                </p>

                <p className="text-[8px] text-white/45">
                  hello@grenoplaza.com
                </p>

                <p className="text-[8px] leading-5 text-white/45">
                  Greater Noida,
                  <br />
                  Uttar Pradesh
                </p>

              </div>

            </div>

          </div>


          {/* COPYRIGHT */}

          <div className="mt-8 flex flex-col justify-between gap-2 border-t border-white/10 pt-5 sm:flex-row">

            <p className="text-[7px] uppercase tracking-[0.12em] text-white/25">
              © 2026 Greno Plaza. All Rights Reserved.
            </p>

            <p className="text-[7px] uppercase tracking-[0.12em] text-white/25">
              Premium Commercial Real Estate
            </p>

          </div>

        </div>

      </footer>

    </main>
  );
}