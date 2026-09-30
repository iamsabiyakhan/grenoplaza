import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";

export default function ServiceDetail({ service }) {
  return (
    <main className="min-h-screen bg-[#F5F0E6] text-[#18372B]">
      <section className="relative min-h-[590px] overflow-hidden bg-[#0D1F17] lg:min-h-[650px]">
        <Image src={service.heroImage} alt={service.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1F17] via-[#0D1F17]/85 to-[#0D1F17]/20" />
        <div className="relative mx-auto flex min-h-[590px] max-w-[1400px] items-center px-6 py-20 lg:min-h-[650px] lg:px-10">
          <div className="max-w-[700px] text-white">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[2px] w-9 bg-[#C59F40]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#E7D5A6]">{service.eyebrow}</span>
            </div>
            <h1 className="font-serif text-[44px] leading-[1.05] sm:text-[58px] lg:text-[72px]">{service.heroTitle}</h1>
            <p className="mt-7 max-w-[570px] text-[15px] leading-7 text-white/80">{service.heroDescription}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href={service.primaryHref} className="group flex items-center gap-3 bg-[#C59F40] px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#A9852F]">
                {service.primaryLabel}<ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/contact" className="flex items-center gap-3 border border-white/70 px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-white hover:text-[#0D1F17]">Talk to Our Team</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F0E6] px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1300px] items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="mb-5 h-[2px] w-9 bg-[#C59F40]" />
            <h2 className="font-serif text-[38px] leading-tight text-[#18372B] sm:text-[48px]">{service.introHeading}</h2>
            {service.intro.map((paragraph) => <p key={paragraph} className="mt-6 max-w-[580px] text-[14px] leading-7 text-[#5E665F]">{paragraph}</p>)}
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 bg-[#ECE5D5] px-5 py-5">
              {service.highlights.map((highlight) => <div key={highlight} className="flex items-center gap-2"><MapPin size={17} className="shrink-0 text-[#C59F40]" /><span className="text-[11px] font-semibold uppercase tracking-wide">{highlight}</span></div>)}
            </div>
          </div>
          <div className="relative min-h-[440px]">
            <div className="absolute left-0 top-0 h-[340px] w-[72%] overflow-hidden"><Image src={service.image} alt={`${service.title} at Greno Plaza`} fill className="object-cover" /></div>
            <div className="absolute bottom-0 right-0 h-[220px] w-[52%] overflow-hidden border-[8px] border-[#F5F0E6]"><Image src="/images/service/serviceHero.png" alt="Greno Plaza commercial destination" fill className="object-cover" /></div>
            <div className="absolute bottom-0 left-[5%] hidden w-[38%] bg-[#ECE5D5] px-6 py-6 lg:block"><div className="mb-3 h-[2px] w-7 bg-[#C59F40]" /><p className="font-serif text-[21px] leading-tight">Commercial spaces for the next stage of your business.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-[#0D1F17] px-6 py-20 text-white lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1300px]">
          <div className="mb-12"><div className="mb-5 h-[2px] w-9 bg-[#C59F40]" /><h2 className="font-serif text-[38px] sm:text-[46px]">{service.servicesHeading}</h2></div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {service.offerings.map((offering) => <article key={offering.title} className="min-h-[245px] border border-[#C59F40]/70 p-5 transition hover:-translate-y-1 hover:bg-[#163025]"><CheckCircle2 size={28} strokeWidth={1.4} className="mb-8 text-[#C59F40]" /><h3 className="font-serif text-[19px] leading-tight">{offering.title}</h3><p className="mt-4 text-[12px] leading-5 text-white/65">{offering.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F0E6] px-6 py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1300px] gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div><div className="mb-5 h-[2px] w-9 bg-[#C59F40]" /><h2 className="font-serif text-[36px] leading-tight sm:text-[44px]">{service.audienceHeading}</h2><p className="mt-5 text-[14px] leading-7 text-[#687068]">{service.audienceText}</p><Link href="/contact" className="mt-7 inline-flex items-center gap-3 bg-[#C59F40] px-5 py-3 text-[11px] font-semibold uppercase tracking-wide text-white transition hover:bg-[#A9852F]">Discuss Your Requirements<ArrowRight size={15} /></Link></div>
          <ul className="grid content-start gap-x-8 border-y border-[#D8D0C1] sm:grid-cols-2">
            {service.audiencePoints.map((point) => <li key={point} className="flex items-center gap-3 border-b border-[#D8D0C1] py-5 text-[13px] last:border-0"><CheckCircle2 size={17} className="shrink-0 text-[#C59F40]" />{point}</li>)}
          </ul>
        </div>
      </section>

      <section className="bg-[#F5F0E6] px-6 pb-20 lg:px-10 lg:pb-24">
        <div className="mx-auto max-w-[1300px]">
          <div className="mb-12"><div className="mb-5 h-[2px] w-9 bg-[#C59F40]" /><h2 className="font-serif text-[38px] sm:text-[44px]">Why businesses choose us</h2></div>
          <div className="grid border-y border-[#D8D0C1] sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((benefit, index) => <article key={benefit.title} className="border-b border-[#D8D0C1] px-6 py-8 last:border-0 sm:border-r lg:border-b-0"><div className="flex items-center gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0D1F17] text-white"><CheckCircle2 size={20} strokeWidth={1.5} /></div><span className="font-serif text-[22px] text-[#777A73]">0{index + 1}</span></div><h3 className="mt-6 font-serif text-[21px]">{benefit.title}</h3><p className="mt-3 text-[12px] leading-5 text-[#737970]">{benefit.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#0D1F17] px-6 py-20 text-white lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1300px]">
          <div className="mb-14"><div className="mb-5 h-[2px] w-9 bg-[#C59F40]" /><h2 className="font-serif text-[36px] sm:text-[44px]">A clear path to the right space</h2></div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => <article key={step.title}><div className="mb-7 flex items-center gap-4"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E7D5A6] text-[12px] font-bold text-[#0D1F17]">0{index + 1}</div>{index !== service.process.length - 1 && <div className="hidden h-px flex-1 bg-[#C59F40]/50 lg:block" />}</div><h3 className="font-serif text-[19px] leading-tight">{step.title}</h3><p className="mt-3 text-[12px] leading-5 text-white/60">{step.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0D1F17] px-6 py-20 text-white lg:px-10 lg:py-24">
        <div className="absolute inset-0 opacity-25"><Image src={service.image} alt="" fill className="object-cover" /></div><div className="absolute inset-0 bg-[#0D1F17]/85" />
        <div className="relative mx-auto flex max-w-[1300px] flex-col justify-between gap-10 lg:flex-row lg:items-center">
          <div><div className="mb-5 h-[2px] w-9 bg-[#C59F40]" /><h2 className="max-w-[650px] font-serif text-[38px] leading-tight sm:text-[48px]">{service.ctaTitle}</h2><p className="mt-5 max-w-[580px] text-[13px] leading-6 text-white/70">{service.ctaText}</p></div>
          <div className="flex shrink-0 flex-wrap gap-3"><Link href={service.primaryHref} className="flex items-center gap-3 bg-[#C59F40] px-6 py-4 text-[11px] font-semibold uppercase tracking-wide transition hover:bg-[#A9852F]">{service.primaryLabel}<ArrowRight size={15} /></Link><Link href="/contact" className="flex items-center gap-3 border border-white/60 px-6 py-4 text-[11px] font-semibold uppercase tracking-wide transition hover:bg-white hover:text-[#0D1F17]">Contact Us</Link></div>
        </div>
      </section>

      <footer className="border-t border-[#C59F40]/40 bg-[#0D1F17] px-6 py-6 text-white lg:px-10">
        <div className="mx-auto flex max-w-[1300px] flex-col items-center justify-between gap-5 sm:flex-row"><p className="text-[10px] text-white/50">© 2026 Greno Plaza. All rights reserved.</p><nav className="flex flex-wrap justify-center gap-5 text-[10px] text-white/60" aria-label="Footer"><Link href="/" className="hover:text-[#C59F40]">Home</Link><Link href="/about" className="hover:text-[#C59F40]">About</Link><Link href="/properties" className="hover:text-[#C59F40]">Properties</Link><Link href="/service" className="hover:text-[#C59F40]">Services</Link><Link href="/contact" className="hover:text-[#C59F40]">Contact</Link></nav></div>
      </footer>
    </main>
  );
}
