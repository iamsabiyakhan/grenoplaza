import Image from "next/image";
import Link from "next/link";

const floorPrices = [
  { floor: "Ground floor", price: "₹28,990", note: "Per sq. ft." },
  { floor: "First floor", price: "₹18,990", note: "Per sq. ft." },
  { floor: "Second floor", price: "₹14,990", note: "Per sq. ft." },
  { floor: "Third floor", price: "₹13,990", note: "Per sq. ft." },
  { floor: "Fourth floor", price: "₹12,990", note: "Studio · per sq. ft." },
];

const locationCharges = [
  { label: "Corner facing", value: "5% of BSP" },
  { label: "Atrium facing", value: "4% of BSP" },
];

const additionalCharges = [
  { label: "Lease rent", value: "₹700", unit: "per sq. ft." },
  { label: "EDC", value: "₹125", unit: "per sq. ft." },
  { label: "EEC, FFC", value: "₹225", unit: "per sq. ft." },
  { label: "IFMS", value: "₹100", unit: "per sq. ft." },
  { label: "Dual meter charges", value: "₹25,000", unit: "per KVA" },
];

const paymentPlans = [
  {
    name: "Standard payment plan",
    label: "Plan A",
    steps: [
      { milestone: "At the time of booking", amount: "10% of BSP" },
      { milestone: "Within 30 days of booking", amount: "80% of BSP + 50% of additional charges" },
      { milestone: "On offer of possession", amount: "10% of BSP + 50% of additional charges" },
    ],
  },
  {
    name: "Flexi payment plan",
    label: "Plan B",
    steps: [
      { milestone: "At the time of booking", amount: "10% of BSP" },
      { milestone: "Within 30 days of booking", amount: "40% of BSP + 50% of additional charges" },
      { milestone: "Within 60 days of booking", amount: "25% of BSP + 50% of additional charges" },
      { milestone: "On offer of possession", amount: "25% of BSP" },
    ],
  },
];

const terms = [
  'All payments must be made by cheque, demand draft or pay order only, issued in favour of "NAVDURGA BUILDCON PVT. LTD. GRENO PLAZA RERA COLLECTION A/C", payable in Delhi-NCR only.',
  "The Basic Sale Price (BSP) rate per sq. ft. is firm after the unit is booked and payment is realized by the company; there will be no escalation in the BSP rate.",
  "Applicable government charges, taxes, GST, labour cess, other taxes, cesses, levies and any future enhancements are payable extra by the applicant/allottee on a proportionate basis.",
  "Building layouts, plans and specifications may be changed, modified or revised by the company, architect or GNIDA authority as provided in the scheme brochure, allotment letter, lease deed and building by-laws.",
  "The booked unit area is super built-up area, including covered/built-up area and a proportionate share of service and common areas. These sale terms are indicative and subject to the application form and allotment letter/agreement.",
  "Prices may change without prior notice at the company's sole discretion. The price prevailing on the date the company accepts the booking applies; applicants should confirm the current price before booking.",
  "Registration expenses, stamp duty, legal charges, court fee and documentation charges are payable extra by the allottee at the time of registration of title deeds.",
  "GST is payable extra on BSP, PLC and additional charges wherever applicable.",
  "The jurisdiction shall be Gautam Budh Nagar, Uttar Pradesh only.",
];

export const metadata = {
  title: "Price List & Payment Plans | Greno Plaza",
  description:
    "Explore Greno Plaza floor-wise commercial space prices, additional charges and available payment plans for Sector 36, Greater Noida.",
};

export default function PricingPage() {
  return (
    <main className="overflow-hidden bg-[#F4EFE9] text-[#0D2118]">
      <section className="relative flex min-h-[430px] items-end overflow-hidden bg-[#0D2118] px-6 pb-14 pt-24 sm:min-h-[490px] sm:px-10 sm:pb-16 lg:px-12">
        <Image
          src="/images/hero/heroBannerFinal.png"
          alt="Greno Plaza commercial high street"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D2118]/95 via-[#0D2118]/75 to-[#0D2118]/35" />
        <div className="relative mx-auto w-full max-w-[1240px] text-white">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C5A15B]">
            Greno Plaza · Sector 36, Greater Noida
          </p>
          <h1 className="mt-5 max-w-[760px] font-serif text-[44px] font-light leading-[1.02] sm:text-[60px] lg:text-[72px]">
            Price list &amp;
            <br />
            <span className="italic text-[#D9BE73]">payment plans.</span>
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-white/75 sm:text-sm">
            <span>Effective 1 August 2026</span>
            <span className="hidden h-1 w-1 rounded-full bg-[#D9BE73] sm:block" />
            <span>RERA No. UPRERAPRJ390493</span>
          </div>
          <Link
            href="#floor-prices"
            className="mt-8 inline-flex min-h-11 items-center rounded-full bg-[#D9BE73] px-6 text-xs font-semibold uppercase tracking-[0.1em] text-[#0D2118] transition hover:bg-[#E7D29B]"
          >
            Explore pricing <span className="ml-3" aria-hidden="true">↓</span>
          </Link>
        </div>
      </section>

      <section id="floor-prices" className="mx-auto max-w-[1300px] px-6 py-14 sm:px-10 sm:py-20 lg:px-12">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#A78532]">01 · Basic sale price</p>
            <h2 className="mt-3 font-serif text-[34px] leading-tight sm:text-[42px]">Choose your floor</h2>
          </div>
          <p className="max-w-[390px] text-sm leading-6 text-[#5D695F]">
            Floor-wise rates for commercial units at Greno Plaza. Prices shown are the Basic Sale Price (BSP) per sq. ft.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {floorPrices.map((item, index) => (
            <article
              key={item.floor}
              className={`relative flex min-h-[205px] flex-col justify-between overflow-hidden border p-5 ${
                index === 0
                  ? "border-[#18372B] bg-[#18372B] text-white"
                  : "border-[#0D2118]/10 bg-white"
              }`}
            >
              <span className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${index === 0 ? "text-[#D9BE73]" : "text-[#A78532]"}`}>
                {String(index + 1).padStart(2, "0")} / Floor
              </span>
              <div>
                <h3 className="font-serif text-[20px]">{item.floor}</h3>
                <p className="mt-3 text-[27px] font-medium tracking-tight">{item.price}</p>
                <p className={`mt-1 text-[14px] ${index === 0 ? "text-white/60" : "text-[#5D695F]"}`}>{item.note}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <article className="border border-[#0D2118]/10 bg-[#EEE7DA] p-6 sm:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A78532]">Preferential location charges</p>
            <h3 className="mt-3 font-serif text-[26px]">A better-positioned space</h3>
            <div className="mt-6 divide-y divide-[#0D2118]/10">
              {locationCharges.map((charge) => (
                <div key={charge.label} className="flex items-center justify-between gap-4 py-4">
                  <span className="text-md text-[#5D695F]">{charge.label}</span>
                  <span className="text-md font-semibold">{charge.value}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[14px] leading-5 text-[#5D695F]">PLC is calculated on the Basic Sale Price (BSP).</p>
          </article>

          <article className="border border-[#0D2118]/10 bg-white p-6 sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A78532]">Additional charges</p>
                <h3 className="mt-3 font-serif text-[26px]">Plan for the full cost</h3>
              </div>
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#5D695F]">Payable in addition to BSP</span>
            </div>
            <div className="mt-5 grid gap-x-8 sm:grid-cols-2">
              {additionalCharges.map((charge) => (
                <div key={charge.label} className="flex items-center justify-between gap-3 border-t border-[#0D2118]/10 py-4">
                  <span className="text-[14px] text-[#5D695F]">{charge.label}</span>
                  <span className="shrink-0 text-right">
                    <span className="block text-md font-semibold">{charge.value}</span>
                    <span className="text-[16px] text-[#5D695F]">{charge.unit}</span>
                  </span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#0D2118] px-6 py-14 text-white sm:px-10 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D9BE73]">02 · Payment plans</p>
            <h2 className="mt-3 font-serif text-[34px] leading-tight sm:text-[42px]">A payment schedule that works for you</h2>
            <p className="mt-3 max-w-[620px] text-md leading-6 text-white/60">
              Compare the standard and flexi schedules below. BSP and additional charges are shown separately as specified in the price list.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {paymentPlans.map((plan) => (
              <article key={plan.label} className="border border-white/15 bg-white/[0.04] p-5 sm:p-7">
                <div className="flex items-start justify-between gap-4 border-b border-white/15 pb-5">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D9BE73]">{plan.label}</p>
                    <h3 className="mt-2 font-serif text-[25px]">{plan.name}</h3>
                  </div>
                  <span className="font-serif text-4xl text-white/15">{plan.label.slice(-1)}</span>
                </div>
                <ol className="divide-y divide-white/10">
                  {plan.steps.map((step, index) => (
                    <li key={step.milestone} className="grid grid-cols-[30px_1fr] gap-3 py-4 sm:grid-cols-[36px_1fr_auto] sm:items-center">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#D9BE73]/50 text-[14px] text-[#D9BE73]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[16px] leading-5 text-white/70">{step.milestone}</span>
                      <span className="col-start-2 text-[16px] font-semibold leading-5 text-white sm:col-start-auto sm:text-right">{step.amount}</span>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
          <p className="mt-5 text-[14px] leading-5 text-white/50">
            BSP: Basic Sale Price. All amounts and percentages are as stated in the price list; applicable taxes and charges may be extra.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1300px] px-6 py-14 sm:px-10 sm:py-20 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#A78532]">Please note</p>
            <h2 className="mt-3 font-serif text-[34px] leading-tight sm:text-[42px]">Important terms</h2>
            <p className="mt-4 text-md leading-6 text-[#5D695F]">
              Please review these price-list conditions and confirm the prevailing price with the Greno Plaza team before booking.
            </p>
            <div className="mt-7 border-l-2 border-[#C5A15B] pl-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A78532]">Project registration</p>
              <p className="mt-2 text-sm font-semibold">UPRERAPRJ390493</p>
            </div>
          </div>
          <ol className="divide-y divide-[#0D2118]/10 border-y border-[#0D2118]/10">
            {terms.map((term, index) => (
              <li key={term} className="grid grid-cols-[30px_1fr] gap-3 py-4">
                <span className="pt-0.5 text-[14px] font-semibold tracking-[0.1em] text-[#A78532]">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-[14px] leading-[1.7] text-[#5D695F]">{term}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-[1300px] px-6 pb-16 sm:px-10 sm:pb-20 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-6 bg-[#E9E1D2] p-6 sm:flex-row sm:items-center sm:p-9">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A78532]">Let’s talk about your space</p>
            <h2 className="mt-2 font-serif text-[27px] sm:text-[32px]">Need a current quote or a site visit?</h2>
            <p className="mt-2 text-sm text-[#5D695F]">Our team can help you understand availability, pricing and next steps.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-[#C09D41] px-6 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-[#0D2118]"
          >
            Enquire now <span className="ml-3" aria-hidden="true">→</span>
          </Link>
        </div>
        <p className="mt-5 text-[14px] leading-5 text-[#5D695F]">
          Price list effective 1 August 2026. Prices and terms are subject to the conditions above and may change; confirm the applicable price with the company before booking.
        </p>
      </section>
    </main>
  );
}
