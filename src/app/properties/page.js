import Image from "next/image";
import Link from "next/link";

const propertyTypes = [
  {
    slug: "retail-spaces",
    title: "Premium Retail Spaces",
    category: "Retail Spaces",
    description: "Retail shop spaces at Greno Plaza for businesses planning a high-street presence.",
    image: "/images/hero/site1.png",
  },
  {
    slug: "commercial-shops",
    title: "Premium Commercial Shops",
    category: "Commercial Shops",
    description: "Commercial shop units for retail and customer-facing services at Greno Plaza.",
    image: "/images/hero/site2.png",
  },
  {
    slug: "food-beverage",
    title: "Premium F&B Outlets",
    category: "Food & Beverage",
    description: "Commercial spaces for restaurants, cafes and food businesses at Greno Plaza.",
    image: "/images/hero/site3.png",
  },
  {
    slug: "office-workspaces",
    title: "Commercial Service Units",
    category: "Retail & Customer Services",
    description: "Ask about commercial spaces for pharmacy, salon, banking, diagnostics and other customer services.",
    image: "/images/service/officeSpace.png",
  },
];

export const metadata = {
  title: "Commercial Spaces | Greno Plaza",
  description: "Explore high-street retail, food and commercial service spaces at Greno Plaza, Sector 36, Greater Noida.",
};

export default function PropertiesPage() {
  return (
    <main className="overflow-hidden bg-[#F4EFE9] text-[#0D2118]">
      <section className="relative flex min-h-[390px] items-end overflow-hidden bg-[#0D2118] px-6 pb-14 pt-24 sm:min-h-[440px] sm:px-10 sm:pb-16 lg:px-12">
        <Image
          src="/images/hero/homeHeroBanner.png"
          alt="Greno Plaza commercial destination"
          fill
          priority
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D2118]/95 via-[#0D2118]/70 to-[#0D2118]/25" />
        <div className="relative mx-auto w-full max-w-[1300px] text-white">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C1993D]">High-street commercial | Sector 36</p>
          <h1 className="mt-5 max-w-[760px] font-serif text-[42px] font-light leading-[1.02] sm:text-[58px] lg:text-[68px]">
            High-street commercial spaces in Greater Noida.
          </h1>
          <p className="mt-5 max-w-[560px] text-[14px] leading-6 text-white/75 sm:text-[16px]">
            Explore retail shops, food outlets and customer-service categories at Greno Plaza, Plot No. LS-09, Sector 36.
          </p>
          <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.12em] text-white/65">
            RERA No. UPRERAPRJ390493 | GNIDA 100% Paid-Up Land
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1300px] px-6 py-14 sm:px-10 sm:py-20 lg:px-12">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#A78532]">Available categories</p>
            <h2 className="mt-3 font-serif text-[32px] leading-tight sm:text-[40px]">Explore Greno Plaza space categories</h2>
          </div>
          <Link href="/contact#contact-form" className="text-sm font-semibold text-[#18372B] underline decoration-[#C1993D] underline-offset-4">
            Ask about availability
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {propertyTypes.map((property) => (
            <article key={property.slug} className="group min-w-0 overflow-hidden border border-[#0D2118]/10 bg-white">
              <Link href={`/properties/${property.slug}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#D9D5CC]">
                  <Image
                    src={property.image}
                    alt={`${property.category} at Greno Plaza`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A78532]">{property.category}</p>
                  <h3 className="mt-3 font-serif text-[22px] leading-tight">{property.title}</h3>
                  <p className="mt-3 min-h-[66px] text-[13px] leading-[1.65] text-[#5D695F]">{property.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#18372B]">
                    View spaces <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
