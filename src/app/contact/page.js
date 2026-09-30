"use client";

import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F4EFE9] text-[#0D2118]">

      {/* =====================================================
          HEADER
      ===================================================== */}
      


      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-[520px] overflow-hidden bg-[#0D2118] lg:min-h-[560px]">

        {/* Architectural image */}
        <Image
          src="/images/contact/contactHero.png"
          alt="Greno Plaza"
          fill
          priority
          className="object-cover"
        />

        {/* Simple dark overlay */}
        <div  />


        {/* HERO CONTENT */}
        <div className="relative mx-auto flex min-h-[520px] max-w-[1450px] items-center px-6 pt-16 sm:px-10 lg:min-h-[560px] lg:px-12">

          <div className="max-w-[540px]">

            <div className="flex items-center gap-4">

              <p className="text-[12px] font-semibold uppercase tracking-[0.4em] text-[#C1993D]">
                Contact Us
              </p>

              <span className="h-px w-10 bg-[#C1993D]" />

            </div>


            <h1 className="mt-6 font-serif text-[50px] font-light leading-[0.96] tracking-[-0.04em] text-white sm:text-[64px] lg:text-[72px]">

              Let&apos;s Build
              <br />

              Something
              <br />

              <span className="italic text-[#C1993D]">
                Remarkable.
              </span>

            </h1>


            <p className="mt-7 max-w-[410px] text-[16px] leading-6 text-white/60">
              We&apos;re here to listen, understand and help you find the
              right opportunity at Greno Plaza.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT + FORM
      ===================================================== */}
      <section
        id="contact-form"
        className="px-6 py-20 sm:px-10 lg:px-12 lg:py-24"
      >

        <div className="mx-auto grid max-w-[1350px] gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">


          {/* LEFT CONTENT */}
          <div>

            <div className="flex items-center gap-4">

              <p className="text-[12px] font-semibold uppercase tracking-[0.4em] text-[#C1993D]">
                Get In Touch
              </p>

              <span className="h-px w-10 bg-[#C1993D]" />

            </div>


            <h2 className="mt-5 font-serif text-[46px] font-light leading-[0.95] tracking-[-0.04em] sm:text-[58px]">

              We&apos;re Here
              <br />

              <span className="italic text-[#C1993D]">
                to Help.
              </span>

            </h2>


            <p className="mt-7 max-w-[390px] text-[16px] leading-6 text-[#0D2118]/55">
              Whether you&apos;re a business owner, investor, or simply want
              to know more about Greno Plaza, we&apos;d love to hear from you.
              Reach out to us through the form or via our contact details.
            </p>


            {/* CONTACT DETAILS */}
            <div className="mt-8 space-y-5">

              {/* PHONE */}
              <div className="flex items-center gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C1993D] text-[#0D2118]">
                  <span className="text-2xl">⌕</span>
                </div>

                <div>
                  <p className="text-[14px] font-semibold">
                    Contact No: 9810 625 583
                  </p>

                  <p className="mt-1 text-[14px] text-[#0D2118]/45">
                    Mon - Sat, 9:00 AM - 6:00 PM
                  </p>
                </div>

              </div>


              {/* EMAIL */}
              <div className="flex items-center gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C1993D] text-[#0D2118]">
                  <span className="text-2xl">✉</span>
                </div>

                <div>
                  <p className="text-[14px] font-semibold">
                    info@grenoplaza.com
                  </p>

                  <p className="mt-1 text-[14px] text-[#0D2118]/45">
                    We reply within 24 hours
                  </p>
                </div>

              </div>


              {/* LOCATION */}
              <div className="flex items-center gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C1993D] text-[#0D2118]">
                  <span className="text-2xl">⌖</span>
                </div>

                <div>
                  <p className="text-[14px] font-semibold">
                    Greno Plaza
                  </p>

                  <p className="mt-1 text-[14px] text-[#0D2118]/45">
                    Plot No. LS-09, Sector 36, Greater Noida (U.P.)


                  </p>
                </div>

              </div>

            </div>


            {/* SOCIAL */}
            <div className="mt-8 border-t border-[#0D2118]/10 pt-5">

              <p className="text-[12px] uppercase tracking-[0.3em] text-[#0D2118]/40">
                Follow Us
              </p>

              <div className="mt-3 flex gap-3">

  {["f", "◎", "in", "▶"].map((icon) => (
    <a
      key={icon}
      href="#"
      className="group flex h-9 w-9 items-center justify-center rounded-full bg-[#C1993D] text-[24px] font-semibold transition hover:bg-[#0D2118]"
    >
      <span className="text-[#0D2118] transition-colors group-hover:text-[#C1993D]">{icon}</span>
    </a>
  ))}

</div>

            </div>

          </div>


          {/* =================================================
              FORM
          ================================================= */}
          <div className="relative overflow-hidden bg-[#0D2118] p-7 sm:p-10 lg:p-12">

            {/* Decorative line */}
            <div className="absolute right-8 top-8 h-px w-12 bg-[#C1993D]" />

            {/* Decorative circle */}
            <div className="absolute -bottom-28 -right-20 h-72 w-72 rounded-full border border-[#C1993D]/10" />


            <div className="relative">

              <p className="text-[8px] font-semibold uppercase tracking-[0.4em] text-[#C1993D]">
                Send Us A Message
              </p>


              <form className="mt-8 space-y-3">

                {/* NAME + EMAIL */}
                <div className="grid gap-3 sm:grid-cols-2">

                  <input
                    type="text"
                    placeholder="Full Name*"
                    className="h-11 border border-white/20 bg-transparent px-4 text-[9px] text-white outline-none placeholder:text-white/45 focus:border-[#C1993D]"
                  />

                  <input
                    type="email"
                    placeholder="Email Address*"
                    className="h-11 border border-white/20 bg-transparent px-4 text-[9px] text-white outline-none placeholder:text-white/45 focus:border-[#C1993D]"
                  />

                </div>


                {/* PHONE */}
                <input
                  type="tel"
                  placeholder="Phone Number*"
                  className="h-11 w-full border border-white/20 bg-transparent px-4 text-[9px] text-white outline-none placeholder:text-white/45 focus:border-[#C1993D]"
                />


                {/* BUSINESS TYPE */}
                <select
                  defaultValue=""
                  className="h-11 w-full appearance-none border border-white/20 bg-[#0D2118] px-4 text-[9px] text-white/45 outline-none focus:border-[#C1993D]"
                >
                  <option value="" disabled>
                    Business Type
                  </option>

                  <option value="retail">Retail</option>
                  <option value="food">Food & Beverage</option>
                  <option value="office">Office</option>
                  <option value="investment">Investment</option>
                  <option value="other">Other</option>
                </select>


                {/* MESSAGE */}
                <textarea
                  placeholder="Your Message*"
                  rows={6}
                  className="w-full resize-none border border-white/20 bg-transparent px-4 py-4 text-[9px] text-white outline-none placeholder:text-white/45 focus:border-[#C1993D]"
                />


                {/* BUTTON */}
                <button
                  type="submit"
                  className="group flex h-12 w-full items-center justify-center gap-5 bg-[#C1993D] text-[8px] font-bold uppercase tracking-[0.18em] transition-colors hover:bg-[#0D2118]"
                >
                  <span className="text-[#0D2118] transition-colors group-hover:text-white">Send Enquiry</span>
                  <span className="text-[13px] text-[#0D2118] transition-colors group-hover:text-[#C1993D]">→</span>
                </button>

              </form>

            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          LOCATION
      ===================================================== */}
      <section className="grid lg:grid-cols-2">

        {/* MAP */}
        <div className="relative min-h-[420px] overflow-hidden bg-[#DED8CE]">

          {/* Replace with actual Google Maps embed if required */}
          <iframe
            title="Greno Plaza Location"
            src="https://www.google.com/maps?q=Plot%20No.%20LS-09%2C%20Sector%2036%2C%20Greater%20Noida%20(U.P.)&output=embed"
            className="absolute inset-0 h-full w-full grayscale opacity-60"
            loading="lazy"
          />

          {/* Map label */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

            <div className="flex flex-col items-center">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C1993D] text-[#0D2118] shadow-xl">
                ⌖
              </div>

              <div className="mt-2 bg-[#C1993D] px-4 py-2 text-[8px] font-bold uppercase tracking-[0.08em] text-[#0D2118]">
                Greno Plaza
              </div>

            </div>

          </div>

        </div>


        {/* LOCATION CONTENT */}
        <div className="flex items-center bg-[#F4EFE9] px-7 py-20 sm:px-12 lg:px-20">

          <div className="max-w-[500px]">

            <div className="flex items-center gap-4">

              <p className="text-[12px] font-semibold uppercase tracking-[0.4em] text-[#C1993D]">
                Our Location
              </p>

              <span className="h-px w-10 bg-[#C1993D]" />

            </div>


            <h2 className="mt-5 font-serif text-[43px] font-light leading-[0.98] sm:text-[55px]">

              Visit Us at
              <br />

              the Heart of
              <br />

              <span className="italic text-[#C1993D]">
                Greater Noida.
              </span>

            </h2>


            <div className="mt-6 h-px w-10 bg-[#C1993D]" />


            <p className="mt-6 max-w-[430px] text-[18px] leading-6 text-[#0D2118]/55">
              Strategically located in a prime commercial hub, Greno Plaza
              offers excellent connectivity, high visibility and easy access
              for your customers and business.
            </p>


            <a
              href="https://www.google.com/maps/search/?api=1&query=Plot+No.+LS-09%2C+Sector+36%2C+Greater+Noida+%28U.P.%29"
              target="_blank"
              rel="noreferrer"
              className="group mt-7 inline-flex items-center gap-6 bg-[#C1993D] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.15em] text-[#0D2118] transition-colors hover:bg-[#0D2118] hover:text-white"
            >
              <span className="text-[#0D2118] transition-colors group-hover:text-[#C1993D]">➤</span>
              <span className="transition-colors group-hover:text-[#C1993D]">Get Directions</span>
              <span className="text-[#0D2118] transition-colors group-hover:text-[#C1993D]">→</span>
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="relative min-h-[440px] overflow-hidden bg-[#0D2118]">

        {/* Background image */}
        <Image
          src="/images/contact/contactAbout.png"
          alt="Greno Plaza"
          fill
          className="object-cover opacity-45"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0D2118]/95 via-[#0D2118]/80 to-[#0D2118]/30" />


        {/* Gold decorative curve */}
        <div className="absolute -right-20 bottom-[-120px] h-[500px] w-[280px] rotate-[25deg] rounded-[100%] border border-[#C1993D]/70" />


        <div className="relative mx-auto flex min-h-[440px] max-w-[1400px] items-center px-6 sm:px-10 lg:px-12">

          <div>

            <div className="flex items-center gap-4">

              <p className="text-[12px] font-semibold uppercase tracking-[0.4em] text-[#C1993D]">
                Let&apos;s Create Opportunities Together
              </p>

              <span className="h-px w-10 bg-[#C1993D]" />

            </div>


            <h2 className="mt-5 max-w-[700px] font-serif text-[46px] font-light leading-[0.98] text-white sm:text-[62px]">

              Your Next Business
              <br />

              Address{" "}

              <span className="italic text-[#C1993D]">
                Starts Here.
              </span>

            </h2>


            <p className="mt-6 max-w-[470px] text-[14px] leading-6 text-white/55">
              Be a part of Greno Plaza — a high-street destination designed
              for growth, visibility and long-term success.
            </p>


            <a
              href="#contact-form"
              className="group mt-8 inline-flex items-center gap-6 bg-[#C1993D] px-7 py-4 text-[12px] font-bold uppercase tracking-[0.16em] text-[#0D2118] transition-colors hover:bg-[#0D2118] hover:text-[#F4EFE9]"
            >
              <span className="transition-colors group-hover:text-[#F4EFE9]">Enquire Now</span>
              <span className="transition-colors group-hover:text-[#F4EFE9]">→</span>
            </a>

          </div>

        </div>

      </section>


      

    </main>
  );
}