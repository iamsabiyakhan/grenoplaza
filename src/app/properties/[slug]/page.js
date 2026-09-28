import Image from "next/image";
import Link from "next/link";

const properties = [
  {
    slug: "retail-spaces",

    category: "Retail Spaces",

    title: "Premium Retail Spaces",

    subtitle: "at Greno Plaza.",

    description:
      "High-visibility retail spaces designed for leading brands to grow, connect and create exceptional customer experiences.",

    heroImage: "/images/property-retail.jpg",

    stats: [
      {
        label: "Size Range",
        value: "500 - 2,000 Sq. Ft.",
        icon: "◉",
      },
      {
        label: "Available On",
        value: "Ground & First Floor",
        icon: "▥",
      },
      {
        label: "Ideal For",
        value: "Retail / Showroom",
        icon: "◇",
      },
      {
        label: "Key Advantage",
        value: "High Footfall Area",
        icon: "⌂",
      },
    ],

    gallery: [
      "/images/property-retail.jpg",
      "/images/retail-interior-1.jpg",
      "/images/retail-interior-2.jpg",
      "/images/retail-courtyard.jpg",
    ],

    highlights: [
      "Prime Location",
      "Flexible Layouts",
      "Modern Infrastructure",
      "Growing Catchment",
    ],

    specifications: [
      ["Size Range", "500 - 2,000 Sq. Ft."],
      ["Available On", "Ground & First Floor"],
      ["Ceiling Height", "Up to 14 Ft."],
      ["Flooring", "Premium Vitrified Tiles"],
      ["Frontage", "Wide Store Fronts"],
      ["Utilities", "Power, Water Supply, HVAC Ready"],
      ["Possession", "Ready / Under Development"],
    ],

    amenities: [
      "High Footfall",
      "Ample Parking",
      "24/7 Security",
      "Power Backup",
      "Modern Elevators",
      "Wide Corridors",
      "Food & Beverage",
      "Landscaped Spaces",
    ],

    locationDescription:
      "Greno Plaza offers excellent connectivity to major residential hubs, corporate offices and key city landmarks, making it an ideal destination for businesses.",

    landmarks: [
      {
        name: "Residential Communities",
        image: "/images/landmark-residential.jpg",
      },
      {
        name: "Corporate Offices",
        image: "/images/landmark-corporate.jpg",
      },
      {
        name: "Metro Connectivity",
        image: "/images/landmark-metro.jpg",
      },
      {
        name: "Educational Institutions",
        image: "/images/landmark-education.jpg",
      },
      {
        name: "Hotels & Hospitality",
        image: "/images/landmark-hotel.jpg",
      },
      {
        name: "Entertainment & Lifestyle",
        image: "/images/landmark-lifestyle.jpg",
      },
    ],
  },

  {
    slug: "commercial-shops",

    category: "Commercial Shops",

    title: "Premium Commercial Shops",

    subtitle: "at Greno Plaza.",

    description:
      "Well-planned commercial spaces designed for brands looking for visibility, accessibility and long-term growth.",

    heroImage: "/images/property-commercial.jpg",

    stats: [
      {
        label: "Size Range",
        value: "300 - 1,500 Sq. Ft.",
        icon: "◉",
      },
      {
        label: "Available On",
        value: "Ground & First Floor",
        icon: "▥",
      },
      {
        label: "Ideal For",
        value: "Retail / Commercial",
        icon: "◇",
      },
      {
        label: "Key Advantage",
        value: "Strategic Location",
        icon: "⌂",
      },
    ],

    gallery: [
      "/images/property-commercial.jpg",
      "/images/commercial-interior-1.jpg",
      "/images/commercial-interior-2.jpg",
      "/images/commercial-courtyard.jpg",
    ],

    highlights: [
      "Strategic Location",
      "Flexible Floor Plans",
      "Premium Infrastructure",
      "Strong Visibility",
    ],

    specifications: [
      ["Size Range", "300 - 1,500 Sq. Ft."],
      ["Available On", "Ground & First Floor"],
      ["Frontage", "High Visibility"],
      ["Flooring", "Premium Finish"],
      ["Utilities", "Power & Water Ready"],
      ["Parking", "Dedicated Visitor Parking"],
    ],

    amenities: [
      "High Visibility",
      "Ample Parking",
      "24/7 Security",
      "Power Backup",
      "Modern Elevators",
      "Wide Corridors",
      "Food & Beverage",
      "Landscaped Spaces",
    ],

    locationDescription:
      "A strategically positioned commercial environment offering convenient access for businesses, customers and visitors.",

    landmarks: [
      {
        name: "Residential Communities",
        image: "/images/landmark-residential.jpg",
      },
      {
        name: "Corporate Offices",
        image: "/images/landmark-corporate.jpg",
      },
      {
        name: "Metro Connectivity",
        image: "/images/landmark-metro.jpg",
      },
      {
        name: "Educational Institutions",
        image: "/images/landmark-education.jpg",
      },
      {
        name: "Hotels & Hospitality",
        image: "/images/landmark-hotel.jpg",
      },
      {
        name: "Entertainment & Lifestyle",
        image: "/images/landmark-lifestyle.jpg",
      },
    ],
  },

  {
    slug: "food-beverage",

    category: "Food & Beverage",

    title: "Premium F&B Outlets",

    subtitle: "at Greno Plaza.",

    description:
      "Distinctive food and beverage spaces designed for restaurants, cafés and lifestyle concepts.",

    heroImage: "/images/property-food.jpg",

    stats: [
      {
        label: "Size Range",
        value: "400 - 2,500 Sq. Ft.",
        icon: "◉",
      },
      {
        label: "Available On",
        value: "Ground & Rooftop",
        icon: "▥",
      },
      {
        label: "Ideal For",
        value: "Restaurants / Cafés",
        icon: "◇",
      },
      {
        label: "Key Advantage",
        value: "High Customer Footfall",
        icon: "⌂",
      },
    ],

    gallery: [
      "/images/property-food.jpg",
      "/images/food-interior-1.jpg",
      "/images/food-interior-2.jpg",
      "/images/food-terrace.jpg",
    ],

    highlights: [
      "High Footfall",
      "Outdoor Seating Potential",
      "Modern Infrastructure",
      "Lifestyle Destination",
    ],

    specifications: [
      ["Size Range", "400 - 2,500 Sq. Ft."],
      ["Available On", "Ground & Rooftop"],
      ["Ceiling Height", "Up to 14 Ft."],
      ["Frontage", "Excellent Visibility"],
      ["Utilities", "Power, Water & HVAC Ready"],
      ["Possession", "Ready / Under Development"],
    ],

    amenities: [
      "High Footfall",
      "Ample Parking",
      "24/7 Security",
      "Power Backup",
      "Modern Elevators",
      "Outdoor Seating",
      "Food Infrastructure",
      "Landscaped Spaces",
    ],

    locationDescription:
      "A vibrant environment designed to attract visitors throughout the day and create memorable food and lifestyle experiences.",

    landmarks: [
      {
        name: "Residential Communities",
        image: "/images/landmark-residential.jpg",
      },
      {
        name: "Corporate Offices",
        image: "/images/landmark-corporate.jpg",
      },
      {
        name: "Metro Connectivity",
        image: "/images/landmark-metro.jpg",
      },
      {
        name: "Educational Institutions",
        image: "/images/landmark-education.jpg",
      },
      {
        name: "Hotels & Hospitality",
        image: "/images/landmark-hotel.jpg",
      },
      {
        name: "Entertainment & Lifestyle",
        image: "/images/landmark-lifestyle.jpg",
      },
    ],
  },

  {
    slug: "office-workspaces",

    category: "Office & Workspaces",

    title: "Premium Office Spaces",

    subtitle: "at Greno Plaza.",

    description:
      "Contemporary office environments designed for businesses seeking a professional address and flexible workspace.",

    heroImage: "/images/property-office.jpg",

    stats: [
      {
        label: "Size Range",
        value: "1,000 - 5,000 Sq. Ft.",
        icon: "◉",
      },
      {
        label: "Available On",
        value: "Upper Floors",
        icon: "▥",
      },
      {
        label: "Ideal For",
        value: "Corporate / Offices",
        icon: "◇",
      },
      {
        label: "Key Advantage",
        value: "Premium Business Address",
        icon: "⌂",
      },
    ],

    gallery: [
      "/images/property-office.jpg",
      "/images/office-interior-1.jpg",
      "/images/office-interior-2.jpg",
      "/images/office-lounge.jpg",
    ],

    highlights: [
      "Premium Address",
      "Flexible Floor Plans",
      "Modern Infrastructure",
      "Professional Environment",
    ],

    specifications: [
      ["Size Range", "1,000 - 5,000 Sq. Ft."],
      ["Available On", "Upper Floors"],
      ["Ceiling Height", "Up to 12 Ft."],
      ["Flooring", "Premium Finish"],
      ["Utilities", "Power, Water & HVAC Ready"],
      ["Parking", "Dedicated Parking"],
    ],

    amenities: [
      "Business Connectivity",
      "Ample Parking",
      "24/7 Security",
      "Power Backup",
      "Modern Elevators",
      "Conference Areas",
      "Cafeteria",
      "Landscaped Spaces",
    ],

    locationDescription:
      "A professional commercial environment with excellent connectivity, modern infrastructure and amenities designed around today's businesses.",

    landmarks: [
      {
        name: "Residential Communities",
        image: "/images/landmark-residential.jpg",
      },
      {
        name: "Corporate Offices",
        image: "/images/landmark-corporate.jpg",
      },
      {
        name: "Metro Connectivity",
        image: "/images/landmark-metro.jpg",
      },
      {
        name: "Educational Institutions",
        image: "/images/landmark-education.jpg",
      },
      {
        name: "Hotels & Hospitality",
        image: "/images/landmark-hotel.jpg",
      },
      {
        name: "Entertainment & Lifestyle",
        image: "/images/landmark-lifestyle.jpg",
      },
    ],
  },
];

export function generateStaticParams() {
  return properties.map((property) => ({
    slug: property.slug,
  }));
}

export default async function PropertyDetailsPage({ params }) {
  const { slug } = await params;

  const property = properties.find(
    (item) => item.slug === slug
  );

  if (!property) {
    return null;
  }

  return (
    <main className="overflow-hidden bg-[#F4EFE9] text-[#0D2118]">

      {/* ================= NAVBAR ================= */}

      <header className="absolute left-0 top-0 z-50 w-full">

        <div className="mx-auto flex h-[82px] max-w-[1450px] items-center justify-between px-6 lg:px-12">

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-9 items-center justify-center border border-[#C1993D] text-[#C1993D]">
              <span className="font-serif text-xl">
                G
              </span>
            </div>

            <div className="leading-none">

              <div className="text-[18px] font-bold tracking-[-0.04em] text-white">
                GRENO
              </div>

              <div className="mt-1 text-[13px] font-semibold tracking-[0.1em] text-[#C1993D]">
                PLAZA
              </div>

              <div className="mt-1 text-[4px] tracking-[0.18em] text-white/60">
                HIGH STREET COMMERCIAL
              </div>

            </div>
          </Link>


          <nav className="hidden items-center gap-8 lg:flex">

            <Link
              href="/"
              className="text-[8px] text-white/80 hover:text-[#C1993D]"
            >
              HOME
            </Link>

            <Link
              href="/about"
              className="text-[8px] text-white/80 hover:text-[#C1993D]"
            >
              ABOUT
            </Link>

            <Link
              href="/services"
              className="text-[8px] text-white/80 hover:text-[#C1993D]"
            >
              SERVICES
            </Link>

            <Link
              href="/gallery"
              className="text-[8px] text-white/80 hover:text-[#C1993D]"
            >
              GALLERY
            </Link>

            <Link
              href="/location"
              className="text-[8px] text-white/80 hover:text-[#C1993D]"
            >
              LOCATION
            </Link>

            <Link
              href="/contact"
              className="text-[8px] text-white/80 hover:text-[#C1993D]"
            >
              CONTACT
            </Link>

          </nav>


          <Link
            href="/contact"
            className="hidden bg-[#C1993D] px-5 py-3 text-[8px] font-semibold uppercase tracking-[0.1em] text-[#0D2118] sm:block"
          >
            Enquire Now
            <span className="ml-3">
              →
            </span>
          </Link>

        </div>

      </header>


      {/* ================= HERO ================= */}

      <section className="relative min-h-[620px] overflow-hidden bg-[#0D2118]">

        <Image
          src={property.heroImage}
          alt={property.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0D2118] via-[#0D2118]/85 to-[#0D2118]/10" />


        <div className="relative mx-auto flex min-h-[620px] max-w-[1450px] items-center px-6 pt-20 sm:px-10 lg:px-12">

          <div className="max-w-[570px]">

            <Link
              href="/services"
              className="inline-flex items-center gap-3 text-[7px] font-semibold uppercase tracking-[0.18em] text-[#C1993D]"
            >
              ← Back to Properties
            </Link>


            <p className="mt-10 text-[8px] font-semibold uppercase tracking-[0.4em] text-[#C1993D]">
              {property.category}
            </p>


            <h1 className="mt-5 font-serif text-[52px] font-light leading-[0.94] tracking-[-0.04em] text-white sm:text-[70px]">

              {property.title}

              <br />

              <span className="italic text-[#C1993D]">
                {property.subtitle}
              </span>

            </h1>


            <p className="mt-7 max-w-[430px] text-[10px] leading-6 text-white/60">
              {property.description}
            </p>


            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-6 bg-[#C1993D] px-7 py-4 text-[8px] font-bold uppercase tracking-[0.15em] text-[#0D2118]"
            >
              Enquire Now
              <span className="text-[13px]">
                →
              </span>
            </Link>

          </div>

        </div>

      </section>


      {/* ================= QUICK STATS ================= */}

      <section className="border-b border-[#0D2118]/10 bg-[#FBF8F3]">

        <div className="mx-auto grid max-w-[1350px] md:grid-cols-4">

          {property.stats.map((stat, index) => (

            <div
              key={stat.label}
              className={`flex items-center gap-4 px-6 py-7 lg:px-8 ${
                index !== 3
                  ? "border-b border-[#0D2118]/10 md:border-b-0 md:border-r"
                  : ""
              }`}
            >

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E5ECE5] text-[15px] text-[#C1993D]">
                {stat.icon}
              </div>

              <div>

                <p className="text-[10px] font-bold">
                  {stat.value}
                </p>

                <p className="mt-1 text-[7px] uppercase tracking-[0.12em] text-[#0D2118]/40">
                  {stat.label}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= ABOUT THE SPACE ================= */}

      <section className="px-6 py-20 sm:px-10 lg:px-12 lg:py-24">

        <div className="mx-auto grid max-w-[1350px] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">

          <div className="relative aspect-[1.35/0.9] overflow-hidden">

            <Image
              src={property.gallery[0]}
              alt={property.title}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center">

              <button
                type="button"
                className="group flex flex-col items-center"
              >

                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#0D2118] shadow-xl group-hover:bg-[#C1993D]">
                  ▶
                </span>

                <span className="mt-3 text-[7px] font-semibold uppercase tracking-[0.15em] text-white">
                  Watch Virtual Tour
                </span>

              </button>

            </div>

          </div>


          <div>

            <div className="flex items-center gap-4">

              <p className="text-[8px] font-semibold uppercase tracking-[0.4em] text-[#C1993D]">
                About The Space
              </p>

              <span className="h-px w-10 bg-[#C1993D]" />

            </div>


            <h2 className="mt-5 font-serif text-[43px] font-light leading-[0.98] sm:text-[55px]">

              An Ideal Destination
              <br />

              for{" "}

              <span className="italic text-[#C1993D]">
                Your Brand.
              </span>

            </h2>


            <p className="mt-6 text-[10px] leading-6 text-[#0D2118]/55">
              {property.description}
            </p>


            <div className="mt-8 grid grid-cols-2 gap-4">

              {property.highlights.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C1993D] text-[9px]">
                    ✓
                  </span>

                  <span className="text-[8px] font-semibold">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ================= GALLERY ================= */}

      <section className="px-6 pb-20 sm:px-10 lg:px-12">

        <div className="mx-auto grid max-w-[1350px] grid-cols-2 gap-3 lg:grid-cols-4">

          {property.gallery.map((image, index) => (

            <div
              key={image}
              className={`relative overflow-hidden ${
                index === 0
                  ? "col-span-2 row-span-2 aspect-square"
                  : "aspect-[1.3/1]"
              }`}
            >

              <Image
                src={image}
                alt={`${property.title} gallery`}
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />

            </div>

          ))}

        </div>

      </section>


      {/* ================= SPECIFICATIONS + AMENITIES ================= */}

      <section className="border-y border-[#0D2118]/10 bg-[#FBF8F3] px-6 py-20 sm:px-10 lg:px-12">

        <div className="mx-auto grid max-w-[1350px] gap-16 lg:grid-cols-2">


          {/* SPECIFICATIONS */}

          <div>

            <div className="flex items-center gap-4">

              <p className="text-[8px] font-semibold uppercase tracking-[0.4em] text-[#C1993D]">
                Space Specifications
              </p>

              <span className="h-px w-10 bg-[#C1993D]" />

            </div>


            <div className="mt-7">

              {property.specifications.map(([label, value]) => (

                <div
                  key={label}
                  className="grid grid-cols-[0.8fr_1.2fr] border-b border-[#0D2118]/10 py-3"
                >

                  <span className="text-[8px] font-semibold">
                    {label}
                  </span>

                  <span className="text-[8px] text-[#0D2118]/55">
                    {value}
                  </span>

                </div>

              ))}

            </div>

          </div>


          {/* AMENITIES */}

          <div>

            <div className="flex items-center gap-4">

              <p className="text-[8px] font-semibold uppercase tracking-[0.4em] text-[#C1993D]">
                Amenities & Features
              </p>

              <span className="h-px w-10 bg-[#C1993D]" />

            </div>


            <div className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-4">

              {property.amenities.map((amenity, index) => (

                <div
                  key={amenity}
                  className="flex min-h-[105px] flex-col items-center justify-center border border-[#0D2118]/10 bg-[#F4EFE9] p-3 text-center transition hover:border-[#C1993D]"
                >

                  <span className="text-[20px] text-[#C1993D]">
                    {["♧", "P", "✓", "ϟ", "▣", "▥", "♨", "♢"][index]}
                  </span>

                  <p className="mt-3 text-[7px] font-semibold leading-4">
                    {amenity}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ================= LOCATION ================= */}

      <section className="grid lg:grid-cols-2">

        <div className="relative min-h-[430px] overflow-hidden bg-[#DED8CE]">

          <iframe
            title="Greno Plaza Location"
            src="https://www.google.com/maps?q=Greater%20Noida%20Uttar%20Pradesh&output=embed"
            className="absolute inset-0 h-full w-full grayscale opacity-60"
            loading="lazy"
          />

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

            <div className="flex flex-col items-center">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C1993D] text-[#0D2118] shadow-xl">
                ⌖
              </div>

              <div className="mt-2 bg-[#C1993D] px-4 py-2 text-[7px] font-bold uppercase tracking-[0.1em]">
                Greno Plaza
              </div>

            </div>

          </div>

        </div>


        <div className="flex items-center bg-[#F4EFE9] px-7 py-20 sm:px-12 lg:px-20">

          <div className="max-w-[500px]">

            <div className="flex items-center gap-4">

              <p className="text-[8px] font-semibold uppercase tracking-[0.4em] text-[#C1993D]">
                Location Advantage
              </p>

              <span className="h-px w-10 bg-[#C1993D]" />

            </div>


            <h2 className="mt-5 font-serif text-[43px] font-light leading-[0.98] sm:text-[55px]">

              Strategically Located
              <br />

              in{" "}

              <span className="italic text-[#C1993D]">
                Greater Noida.
              </span>

            </h2>


            <p className="mt-6 text-[10px] leading-6 text-[#0D2118]/55">
              {property.locationDescription}
            </p>


            <div className="mt-8 grid grid-cols-4 border-y border-[#0D2118]/10 py-5">

              {[
                ["02", "mins", "Pari Chowk"],
                ["05", "mins", "Noida Expressway"],
                ["10", "mins", "Knowledge Park"],
                ["30", "mins", "IGI Airport"],
              ].map(([number, unit, place]) => (

                <div
                  key={place}
                  className="border-r border-[#0D2118]/10 px-3 first:pl-0 last:border-0"
                >

                  <p className="font-serif text-[21px] text-[#C1993D]">
                    {number}
                    <span className="ml-1 text-[8px]">
                      {unit}
                    </span>
                  </p>

                  <p className="mt-1 text-[6px] text-[#0D2118]/45">
                    {place}
                  </p>

                </div>

              ))}

            </div>


            <a
              href="https://www.google.com/maps/search/?api=1&query=Greno+Plaza+Greater+Noida"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-5 bg-[#C1993D] px-6 py-3 text-[7px] font-bold uppercase tracking-[0.12em] text-[#0D2118]"
            >
              Get Directions
              <span>
                →
              </span>
            </a>

          </div>

        </div>

      </section>


      {/* ================= LANDMARKS ================= */}

      <section className="px-6 py-20 sm:px-10 lg:px-12 lg:py-24">

        <div className="mx-auto max-w-[1350px]">

          <div className="flex items-center gap-4">

            <p className="text-[8px] font-semibold uppercase tracking-[0.4em] text-[#C1993D]">
              Nearby Landmarks
            </p>

            <span className="h-px w-10 bg-[#C1993D]" />

          </div>


          <h2 className="mt-5 font-serif text-[40px] font-light leading-none sm:text-[50px]">
            Everything Your Business
            <br className="hidden sm:block" />
            Needs, Within Reach.
          </h2>


          <div className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">

            {property.landmarks.map((landmark) => (

              <div key={landmark.name}>

                <div className="relative aspect-[1.15/1] overflow-hidden">

                  <Image
                    src={landmark.image}
                    alt={landmark.name}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                  />

                </div>

                <p className="mt-3 text-[8px] font-semibold">
                  {landmark.name}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}

      <section className="relative overflow-hidden bg-[#0D2118] px-6 py-20 sm:px-10 lg:px-12 lg:py-24">

        <div className="absolute -left-24 -bottom-40 h-[450px] w-[250px] rotate-[25deg] rounded-[100%] border border-[#C1993D]/30" />

        <div className="absolute -right-24 -top-40 h-[450px] w-[250px] rotate-[25deg] rounded-[100%] border border-[#C1993D]/30" />


        <div className="relative mx-auto flex max-w-[1200px] flex-col justify-between gap-10 md:flex-row md:items-center">

          <div>

            <p className="text-[8px] font-semibold uppercase tracking-[0.4em] text-[#C1993D]">
              Let&apos;s Discuss
            </p>


            <h2 className="mt-5 font-serif text-[43px] font-light leading-[0.98] text-white sm:text-[58px]">

              Bring Your Brand
              <br />

              to{" "}

              <span className="italic text-[#C1993D]">
                Greno Plaza.
              </span>

            </h2>

          </div>


          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-5 bg-[#C1993D] px-7 py-4 text-[8px] font-bold uppercase tracking-[0.15em] text-[#0D2118]"
            >
              Enquire Now
              <span>
                →
              </span>
            </Link>


            <div>

              <p className="text-[7px] uppercase tracking-[0.2em] text-white/40">
                Or Call Us
              </p>

              <a
                href="tel:+919876543210"
                className="mt-1 block text-[9px] text-white"
              >
                +91 98765 43210
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="bg-[#0D2118] px-6 py-6 text-center">

        <p className="text-[7px] uppercase tracking-[0.3em] text-[#C1993D]">
          Greno Plaza — High Street Commercial
        </p>

      </footer>

    </main>
  );
}