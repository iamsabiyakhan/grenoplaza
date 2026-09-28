"use client";

import Image from "next/image";

const advantages = [
  {
    number: "01",
    title: "Strategic Location",
    text: "Excellent connectivity and high footfall potential.",
    dark: true,
  },
  {
    number: "02",
    title: "Thoughtful Design",
    text: "Modern architecture with functional and flexible spaces.",
    dark: false,
  },
  {
    number: "03",
    title: "High Growth Potential",
    text: "A future-ready destination for ambitious businesses.",
    dark: true,
  },
  {
    number: "04",
    title: "Vibrant Community",
    text: "A dynamic mix of retail, dining, lifestyle and entertainment.",
    dark: false,
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#F4EFE9] text-[#0D2118]">

      {/* =========================================================
          NAVBAR
      ========================================================= */}
      <header className="absolute left-0 top-0 z-50 w-full">
        <div className="mx-auto flex h-[82px] max-w-[1450px] items-center justify-between px-6 lg:px-12">

          {/* LOGO */}
          <a href="/" className="group">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-9 items-center justify-center border border-[#C1993D] text-[#C1993D]">
                <span className="font-serif text-xl">G</span>
              </div>

              <div className="leading-none">
                <div className="text-[18px] font-bold tracking-[-0.04em] text-white">
                  GRENO
                </div>

                <div className="mt-1 text-[13px] font-semibold tracking-[0.12em] text-[#C1993D]">
                  PLAZA
                </div>

                <div className="mt-0.5 text-[4px] tracking-[0.2em] text-white/70">
                  HIGH STREET COMMERCIAL
                </div>
              </div>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-9 lg:flex">
            {[
              ["HOME", "/"],
              ["ABOUT", "#about"],
              ["AMENITIES", "#amenities"],
              ["GALLERY", "#gallery"],
              ["LOCATION", "#location"],
              ["CONTACT", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className={`relative text-[8px] font-medium tracking-[0.08em] text-white/85 transition hover:text-[#C1993D] ${
                  label === "ABOUT"
                    ? "after:absolute after:-bottom-3 after:left-0 after:h-px after:w-full after:bg-[#C1993D]"
                    : ""
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden bg-[#C1993D] px-5 py-3 text-[8px] font-semibold uppercase tracking-[0.1em] text-[#0D2118] transition hover:bg-[#d4ae58] sm:block"
          >
            Enquire Now
            <span className="ml-3">→</span>
          </a>
        </div>
      </header>


      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[680px] overflow-hidden bg-[#0D2118] lg:min-h-[760px]">

        <Image
          src="/images/greno-hero.jpg"
          alt="Greno Plaza"
          fill
          priority
          className="object-cover"
        />

        {/* Green overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#062016] via-[#0D2118]/85 to-[#0D2118]/15" />

        {/* Gold decorative curve */}
        <div className="absolute bottom-[-130px] left-[43%] h-[470px] w-[190px] rotate-[17deg] rounded-[100%] border-l border-[#C1993D] opacity-80" />

        <div className="relative mx-auto flex min-h-[680px] max-w-[1450px] items-center px-6 pt-24 lg:min-h-[760px] lg:px-12">

          <div className="max-w-[560px]">

            <p className="mb-6 text-[9px] font-medium uppercase tracking-[0.42em] text-[#C1993D]">
              About Greno Plaza
            </p>

            <h1 className="font-serif text-[52px] font-light leading-[0.94] tracking-[-0.04em] text-white sm:text-[70px] lg:text-[82px]">
              More Than
              <br />
              Real Estate,
              <br />
              <span className="italic text-[#C1993D]">
                A Better Tomorrow
              </span>
            </h1>

            <div className="mt-7 h-px w-10 bg-[#C1993D]" />

            <p className="mt-6 max-w-[430px] text-[11px] leading-6 text-white/65">
              Greno Plaza is a new-age high street commercial destination,
              created to bring together visionary businesses, vibrant
              experiences and long-term value in one landmark address.
            </p>

            <a
              href="#about"
              className="mt-8 inline-flex items-center gap-5 border border-[#C1993D] px-6 py-3 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#C1993D] transition hover:bg-[#C1993D] hover:text-[#0D2118]"
            >
              Our Story
              <span>→</span>
            </a>

          </div>
        </div>
      </section>


      {/* =========================================================
          ABOUT US
      ========================================================= */}
      <section
        id="about"
        className="bg-[#F4EFE9] px-6 py-20 sm:px-10 lg:px-12 lg:py-28"
      >

        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.82fr_1.18fr]">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center">

            <p className="text-[8px] font-semibold uppercase tracking-[0.4em] text-[#C1993D]">
              Who We Are
            </p>

            <h2 className="mt-5 max-w-[450px] font-serif text-[43px] font-light leading-[0.98] tracking-[-0.04em] sm:text-[57px]">
              Creating Spaces
              <br />
              for People,
              <br />
              Brands and
              <br />
              <span className="italic">Opportunities.</span>
            </h2>

            <div className="mt-7 h-px w-10 bg-[#C1993D]" />

            <p className="mt-6 max-w-[440px] text-[11px] leading-6 text-[#0D2118]/60">
              Greno Plaza is designed as a premium high-street commercial
              development that redefines the way businesses and people
              interact. Our focus is on creating thoughtfully planned retail
              and lifestyle spaces that offer high visibility, seamless
              accessibility and a thriving commercial ecosystem.
            </p>

            {/* MINI FEATURES */}
            <div className="mt-10 grid grid-cols-3 max-w-[470px]">

              {[
                ["⌖", "Prime", "Location"],
                ["▥", "Modern", "Infrastructure"],
                ["◎", "People-Centric", "Design"],
              ].map(([icon, line1, line2]) => (
                <div
                  key={line1}
                  className="border-r border-[#0D2118]/10 px-3 first:pl-0 last:border-0"
                >
                  <div className="text-[21px] text-[#C1993D]">
                    {icon}
                  </div>

                  <p className="mt-2 text-[8px] font-medium">
                    {line1}
                  </p>

                  <p className="text-[7px] text-[#0D2118]/50">
                    {line2}
                  </p>
                </div>
              ))}

            </div>
          </div>


          {/* RIGHT IMAGE COMPOSITION */}
          <div className="grid grid-cols-[1fr_0.45fr] gap-2">

            <div className="relative min-h-[480px] overflow-hidden sm:min-h-[560px]">
              <Image
                src="/images/greno-courtyard.jpg"
                alt="Greno Plaza courtyard"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative flex min-h-[480px] items-end overflow-hidden bg-[#0D2118] sm:min-h-[560px]">

              <div className="absolute right-[-70px] top-10 h-[300px] w-[180px] rotate-[18deg] rounded-[100%] border border-[#C1993D]/60" />

              <div className="relative z-10 p-7 sm:p-9">

                <div className="mb-28 text-[70px] leading-none text-[#C1993D]/70">
                  ◇
                </div>

                <div className="h-px w-8 bg-[#C1993D]" />

                <p className="mt-5 max-w-[130px] text-[10px] uppercase leading-5 tracking-[0.25em] text-white">
                  A Destination
                  <br />
                  That Inspires
                  <br />
                  <span className="text-[#C1993D]">Growth</span>
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          VISION + MISSION
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#0D2118] px-6 py-20 sm:px-10 lg:px-12 lg:py-28">

        {/* Background decorative leaf */}
        <div className="absolute bottom-[-120px] left-[-60px] h-[400px] w-[260px] rotate-[25deg] rounded-[100%] border border-[#C1993D]/10" />

        <div className="relative mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.7fr_1.3fr]">

          {/* TITLE */}
          <div className="flex flex-col justify-center">

            <p className="text-[8px] font-semibold uppercase tracking-[0.4em] text-[#C1993D]">
              Our Purpose
            </p>

            <h2 className="mt-5 font-serif text-[45px] font-light leading-[1] text-white sm:text-[58px]">
              Our Vision
              <br />
              <span className="italic text-[#C1993D]">
                & Mission
              </span>
            </h2>

            <div className="mt-7 h-px w-10 bg-[#C1993D]" />

          </div>


          {/* CARDS */}
          <div className="grid gap-3 md:grid-cols-2">

            {/* VISION */}
            <div className="bg-[#F4EFE9] p-8 sm:p-10">

              <div className="flex items-start justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C1993D] text-xl text-[#C1993D]">
                  ◉
                </div>

                <span className="font-serif text-[55px] leading-none text-[#0D2118]/5">
                  01
                </span>

              </div>

              <p className="mt-14 text-[8px] font-semibold uppercase tracking-[0.3em] text-[#0D2118]/55">
                Our Vision
              </p>

              <p className="mt-5 text-[11px] leading-6 text-[#0D2118]/60">
                To become a landmark commercial destination that sets new
                benchmarks in design, experience and value, empowering
                businesses and communities to grow together.
              </p>

            </div>


            {/* MISSION */}
            <div className="border border-[#C1993D]/70 bg-[#0D2118] p-8 sm:p-10">

              <div className="flex items-start justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C1993D] text-xl text-[#C1993D]">
                  ◎
                </div>

                <span className="font-serif text-[55px] leading-none text-[#C1993D]/10">
                  02
                </span>

              </div>

              <p className="mt-14 text-[8px] font-semibold uppercase tracking-[0.3em] text-[#C1993D]">
                Our Mission
              </p>

              <p className="mt-5 text-[11px] leading-6 text-white/55">
                To develop high-quality commercial spaces that provide
                exceptional opportunities, foster vibrant business
                ecosystems and create lasting value for our partners,
                investors and visitors.
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          WHY CHOOSE US
      ========================================================= */}
      <section className="bg-[#F4EFE9] px-6 py-20 sm:px-10 lg:px-12 lg:py-28">

        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-10 lg:grid-cols-[0.7fr_1fr_0.55fr]">

            {/* TITLE */}
            <div>

              <p className="text-[8px] font-semibold uppercase tracking-[0.4em] text-[#C1993D]">
                The Greno Advantage
              </p>

              <h2 className="mt-5 font-serif text-[45px] font-light leading-[0.98] sm:text-[58px]">
                Why
                <br />
                Choose Us?
              </h2>

              <div className="mt-7 h-px w-10 bg-[#C1993D]" />

            </div>


            {/* DESCRIPTION + CARDS */}
            <div>

              <p className="max-w-[430px] text-[10px] leading-6 text-[#0D2118]/55">
                We combine strategic location, modern design and a deep
                understanding of business needs to create a commercial
                destination that stands apart.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-2">

                {advantages.map((item) => (
                  <div
                    key={item.number}
                    className={`min-h-[175px] p-6 ${
                      item.dark
                        ? "bg-[#0D2118] text-white"
                        : "bg-[#E9E0D5] text-[#0D2118]"
                    }`}
                  >

                    <span className="text-[7px] text-[#C1993D]">
                      {item.number}
                    </span>

                    <h3 className="mt-8 font-serif text-[19px] leading-tight">
                      {item.title}
                    </h3>

                    <p
                      className={`mt-3 text-[8px] leading-5 ${
                        item.dark
                          ? "text-white/50"
                          : "text-[#0D2118]/50"
                      }`}
                    >
                      {item.text}
                    </p>

                  </div>
                ))}

              </div>

            </div>


            {/* IMAGE */}
            <div className="relative min-h-[420px] overflow-hidden">

              <Image
                src="/images/greno-commercial.jpg"
                alt="Greno Plaza commercial spaces"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0D2118]/80 to-transparent" />

              <div className="absolute bottom-7 left-7">

                <p className="font-serif text-[25px] leading-none text-white">
                  Business
                  <br />
                  Meets
                  <br />
                  <span className="italic text-[#C1993D]">
                    Possibilities
                  </span>
                </p>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#0D2118]">

        <Image
          src="/images/greno-night.jpg"
          alt="Greno Plaza"
          fill
          className="object-cover opacity-25"
        />

        <div className="absolute inset-0 bg-[#0D2118]/80" />

        <div className="relative mx-auto flex max-w-[1400px] flex-col justify-between gap-10 px-6 py-20 sm:px-10 lg:flex-row lg:items-end lg:px-12 lg:py-28">

          <div>

            <p className="text-[8px] font-semibold uppercase tracking-[0.4em] text-[#C1993D]">
              Let&apos;s Shape The Future Together
            </p>

            <h2 className="mt-5 max-w-[700px] font-serif text-[45px] font-light leading-[0.98] text-white sm:text-[65px]">
              Your Next Business
              <br />
              Address{" "}
              <span className="italic text-[#C1993D]">
                Starts Here.
              </span>
            </h2>

          </div>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-7 bg-[#C1993D] px-7 py-4 text-[8px] font-bold uppercase tracking-[0.18em] text-[#0D2118] transition hover:bg-[#F4EFE9]"
          >
            Get In Touch
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>
      </section>


      {/* =========================================================
          CONTACT
      ========================================================= */}
      <section
        id="contact"
        className="bg-[#F4EFE9] px-6 py-20 sm:px-10 lg:px-12 lg:py-28"
      >

        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[0.85fr_0.9fr_0.65fr]">

          {/* CONTACT TITLE */}
          <div>

            <p className="text-[8px] font-semibold uppercase tracking-[0.4em] text-[#C1993D]">
              Get In Touch
            </p>

            <h2 className="mt-5 font-serif text-[45px] font-light leading-[0.95] sm:text-[60px]">
              Let&apos;s Build
              <br />
              Something
              <br />
              <span className="italic text-[#C1993D]">
                Remarkable.
              </span>
            </h2>

            <div className="mt-7 h-px w-10 bg-[#C1993D]" />

            <p className="mt-6 max-w-[340px] text-[10px] leading-6 text-[#0D2118]/55">
              Have questions or want to know more about Greno Plaza? Our team
              is here to help you explore opportunities and find the perfect
              space for your business.
            </p>

          </div>


          {/* CONTACT DETAILS */}
          <div className="space-y-8">

            {[
              {
                icon: "◯",
                title: "Phone",
                value: "+91 98765 43210",
                sub: "Mon - Sat, 9:00 AM - 6:00 PM",
              },
              {
                icon: "✉",
                title: "Email",
                value: "info@grenoplaza.com",
                sub: "We reply within 24 hours",
              },
              {
                icon: "⌖",
                title: "Greno Plaza",
                value: "Greater Noida, Uttar Pradesh",
                sub: "Visit our site for a personal tour",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-5">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C1993D] text-[#0D2118]">
                  {item.icon}
                </div>

                <div>
                  <p className="text-[7px] uppercase tracking-[0.25em] text-[#0D2118]/40">
                    {item.title}
                  </p>

                  <p className="mt-1 text-[11px] font-medium">
                    {item.value}
                  </p>

                  <p className="mt-1 text-[8px] text-[#0D2118]/45">
                    {item.sub}
                  </p>
                </div>

              </div>
            ))}

            <a
              href="mailto:info@grenoplaza.com"
              className="inline-flex items-center gap-6 border border-[#C1993D] px-6 py-3 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#0D2118] transition hover:bg-[#C1993D]"
            >
              Send Enquiry
              <span>→</span>
            </a>

          </div>


          {/* CONTACT IMAGE */}
          <div className="relative min-h-[420px] overflow-hidden bg-[#0D2118]">

            <Image
              src="/images/greno-reception.jpg"
              alt="Greno Plaza reception"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0D2118]/90 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-7">

              <div className="mb-3 h-12 w-10 border border-[#C1993D] text-center leading-[48px] text-[#C1993D]">
                G
              </div>

              <p className="text-[18px] font-bold tracking-[-0.03em] text-white">
                GRENO
              </p>

              <p className="text-[13px] font-semibold tracking-[0.1em] text-[#C1993D]">
                PLAZA
              </p>

              <p className="mt-1 text-[5px] tracking-[0.18em] text-white/60">
                HIGH STREET COMMERCIAL
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="border-t border-white/10 bg-[#0D2118] px-6 py-7 text-white sm:px-10 lg:px-12">

        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-4 sm:flex-row sm:items-center">

          <p className="text-[7px] uppercase tracking-[0.2em] text-white/35">
            © 2026 Greno Plaza. All Rights Reserved.
          </p>

          <p className="text-[7px] uppercase tracking-[0.2em] text-[#C1993D]">
            High Street Commercial
          </p>

        </div>

      </footer>

    </main>
  );
}