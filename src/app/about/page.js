"use client";

import Image from "next/image";

const advantages = [
  {
    number: "01",
    title: "Greater Noida Address",
    text: "A commercial high-street project in Sector 36.",
    dark: true,
  },
  {
    number: "02",
    title: "Retail Shop Spaces",
    text: "Commercial units for shops and customer-facing services.",
    dark: false,
  },
  {
    number: "03",
    title: "Business Categories",
    text: "Explore retail, food, pharmacy, salon and service uses.",
    dark: true,
  },
  {
    number: "04",
    title: "Site Visit Enquiries",
    text: "Contact the team to discuss spaces and arrange a visit.",
    dark: false,
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#F4EFE9] text-[#0D2118]">

      

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[680px] overflow-hidden bg-[#0D2118] lg:min-h-[760px]">

        <Image
          src="/images/about/aboutHero.png"
          alt="Greno Plaza"
          fill
          priority
          className="object-cover"
        />

        {/* Green overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#062016] via-[#0D2118]/85 to-[#0D2118]/15" />

        {/* Gold decorative curve */}
        <div className="absolute bottom-[-130px] left-[43%] h-[470px] w-[190px] rotate-[17deg] rounded-[100%] border-l border-[#C1993D] opacity-80" />

        <div className="relative mx-auto flex min-h-[500px] max-w-[1450px] items-start px-6 pt-10 lg:min-h-[500px] lg:px-12">

          <div className="max-w-[560px]">

            <p className="mb-6 text-[9px] font-medium uppercase tracking-[0.42em] text-[#C1993D]">
              About Greno Plaza
            </p>

            <h1 className="font-serif text-[40px] font-light leading-[0.94] tracking-[-0.04em] text-white sm:text-[70px] lg:text-[82px]">
              High-Street
              <br />
              Commercial Spaces
              <br />
              <span className="italic text-[#C1993D]">
                in Greater Noida
              </span>
            </h1>

            <div className="mt-7 h-px w-10 bg-[#C1993D]" />

            <p className="mt-6 max-w-[430px] text-[14px] leading-6 text-white/65">
              Greno Plaza is a high-street commercial project in Greater
              Noida, planned for retail shops, food outlets and customer
              services in one business address.
            </p>

            <a
              href="#about"
              className="mt-8 inline-flex items-center gap-5 border bg-[#C1993D] border-[#C1993D] px-6 py-3 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#0D2118] transition hover:bg-[#C1993D] hover:text-[#0D2118]"
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

            <p className="text-[24px] font-semibold uppercase tracking-[0.2em] text-[#C1993D]">
              Who We Are
            </p>

            <h2 className="mt-5 max-w-[450px] font-serif text-[43px] font-light leading-[0.98] tracking-[-0.04em] sm:text-[57px]">
              Commercial Spaces
              <br />
              for Retail,
              <br />
              Services and Dining.
            </h2>

            <div className="mt-7 h-px w-10 bg-[#C1993D]" />

            <p className="mt-6 max-w-[440px] text-[16px] leading-6 text-[#0D2118]/60">
              Greno Plaza is a commercial high-street project in Sector 36,
              Greater Noida. The project is planned for shops, food outlets
              and service businesses, with space enquiries handled by our
              team.
            </p>

            {/* MINI FEATURES */}
            <div className="mt-10 grid grid-cols-3 max-w-[470px]">

              {[
                ["⌖", "Sector 36", "Greater Noida"],
                ["▥", "High-Street", "Commercial"],
                ["◎", "Retail", "& Services"],
              ].map(([icon, line1, line2]) => (
                <div
                  key={line1}
                  className="border-r border-[#0D2118]/10 px-3 first:pl-0 last:border-0"
                >
                  <div className="text-[24px] text-[#C1993D]">
                    {icon}
                  </div>

                  <p className="mt-2 text-[14px] font-medium">
                    {line1}
                  </p>

                  <p className="text-[12px] text-[#0D2118]/50">
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
                src="/images/about/aboutSection.png"
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

            <p className="text-[12px] font-semibold uppercase tracking-[0.4em] text-[#C1993D]">
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

              <p className="mt-14 text-[18px] font-semibold uppercase tracking-[0.3em] text-[#0D2118]/55">
                Our Vision
              </p>

              <p className="mt-5 text-[16px] leading-6 text-[#0D2118]/60">
                To establish Greno Plaza as a clear commercial address for
                retail, food and customer-service businesses in Greater Noida.
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

              <p className="mt-14 text-[18px] font-semibold uppercase tracking-[0.3em] text-[#C1993D]">
                Our Mission
              </p>

              <p className="mt-5 text-[16px] leading-6 text-white/55">
                To bring relevant shop formats and service categories
                together, and help businesses understand available spaces,
                site visits and enquiry steps.
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

              <p className="text-[12px] font-semibold uppercase tracking-[0.4em] text-[#C1993D]">
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

              <p className="max-w-[430px] text-[16px] leading-6 text-[#0D2118]/55">
                Greno Plaza focuses on high-street commercial property in
                Greater Noida, with shop spaces planned for retail, food and
                customer-service uses.
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

                    <span className="text-[12px] text-[#C1993D]">
                      {item.number}
                    </span>

                    <h3 className="mt-8 font-serif text-[24px] leading-tight">
                      {item.title}
                    </h3>

                    <p
                      className={`mt-3 text-[14px] leading-5 ${
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
                src="/images/about/about2.png"
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
                src="/images/hero/site3.png"
          alt="Greno Plaza"
          fill
          className="object-cover opacity-25"
        />

        <div className="absolute inset-0 bg-[#0D2118]/80" />

        <div className="relative mx-auto flex max-w-[1400px] flex-col justify-between gap-10 px-6 py-20 sm:px-10 lg:flex-row lg:items-end lg:px-12 lg:py-28">

          <div>

            <p className="text-[12px] font-semibold uppercase tracking-[0.4em] text-[#C1993D]">
              Discuss a Commercial Space
            </p>

            <h2 className="mt-5 max-w-[700px] font-serif text-[45px] font-light leading-[0.98] text-white sm:text-[65px]">
              Find a High-Street
              <br />
              Address{" "}
              <span className="italic text-[#C1993D]">
                at Greno Plaza.
              </span>
            </h2>

          </div>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-7 bg-[#C1993D] px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#0D2118] transition hover:bg-[#F4EFE9]"
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

            <p className="text-[12px] font-semibold uppercase tracking-[0.4em] text-[#C1993D]">
              Get In Touch
            </p>

            <h2 className="mt-5 font-serif text-[45px] font-light leading-[0.95] sm:text-[60px]">
              Let&apos;s Discuss
              <br />
              Your Commercial
              <br />
              <span className="italic text-[#C1993D]">
                Space.
              </span>
            </h2>

            <div className="mt-7 h-px w-10 bg-[#C1993D]" />

            <p className="mt-6 max-w-[340px] text-[16px] leading-6 text-[#0D2118]/55">
              Ask about retail, food or service-oriented commercial spaces at
              Greno Plaza, or arrange a visit to the Sector 36 project.
            </p>

          </div>


          {/* CONTACT DETAILS */}
          <div className="space-y-8">

            {[
              {
                icon: "◯",
                title: "Phone",
                value: "+91 98106 25583",
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
                sub: "Ask our team to arrange a site visit",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-5">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C1993D] text-[#0D2118]">
                  {item.icon}
                </div>

                <div>
                  <p className="text-[12px] uppercase tracking-[0.25em] text-[#0D2119]/40">
                    {item.title}
                  </p>

                  <p className="mt-1 text-[12px] font-medium">
                    {item.value}
                  </p>

                  <p className="mt-1 text-[12px] text-[#0D2118]/45">
                    {item.sub}
                  </p>
                </div>

              </div>
            ))}

            <a
              href="mailto:info@grenoplaza.com"
              className="inline-flex items-center gap-6 border border-[#C1993D] px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#0D2118] transition hover:bg-[#C1993D]"
            >
              Send Enquiry
              <span>→</span>
            </a>

          </div>


          {/* CONTACT IMAGE */}
          <div className="relative min-h-[420px] overflow-hidden bg-[#0D2118]">

            <Image
              src="/images/about/about2.png"
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
      

    </main>
  );
}