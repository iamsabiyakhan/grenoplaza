"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function BookVisit() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const body = [
      `Name: ${formData.get("name")}`,
      `Phone: ${formData.get("phone")}`,
      `Email: ${formData.get("email")}`,
      `Preferred visit date: ${formData.get("date")}`,
      `Interested in: ${formData.get("interest")}`,
    ].join("\n");
    const params = new URLSearchParams({
      subject: "Greno Plaza visit request",
      body,
    });

    window.location.href = `mailto:info@grenoplaza.com?${params.toString()}`;
  }

  return (
    <>
      <button
        type="button"
        className="header-cta"
        style={{
          backgroundColor: "#C09D41",
          color: "#F3EBDD",
        }}
        onClick={() => setIsOpen(true)}
      >
        Book a Visit
      </button>

      {isOpen && typeof document !== "undefined" && createPortal(
        <div className="fixed inset-x-0 bottom-0 top-[72px] z-[100] flex items-start justify-end overflow-y-auto bg-[#07130F]/75 p-4 sm:top-[84px] sm:p-6">
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="book-visit-title"
            className="relative max-h-[calc(100dvh-6rem)] w-full max-w-[430px] overflow-y-auto rounded-2xl bg-[#F4EFE9] p-5 text-[#0D2118] shadow-2xl sm:max-h-[calc(100dvh-8.25rem)] sm:p-6"
          >
            <button
              type="button"
              aria-label="Close visit request form"
              onClick={() => setIsOpen(false)}
              className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center text-3xl leading-none text-[#0D2118]/60 transition hover:text-[#0D2118]"
            >
              ×
            </button>

            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A78532]">
              Greno Plaza
            </p>
            <h2 id="book-visit-title" className="mt-2 pr-9 font-serif text-3xl leading-tight">
              Plan your visit
            </h2>
            <p className="mt-2 text-sm text-[#0D2118]/60">
              Share your details and preferred date.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="space-y-1.5 text-xs font-medium">
                  <span>Name</span>
                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="h-10 w-full border border-[#0D2118]/20 bg-transparent px-3 text-sm outline-none focus:border-[#A78532]"
                  />
                </label>
                <label className="space-y-1.5 text-xs font-medium">
                  <span>Phone</span>
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    className="h-10 w-full border border-[#0D2118]/20 bg-transparent px-3 text-sm outline-none focus:border-[#A78532]"
                  />
                </label>
                <label className="space-y-1.5 text-xs font-medium">
                  <span>Email</span>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="h-10 w-full border border-[#0D2118]/20 bg-transparent px-3 text-sm outline-none focus:border-[#A78532]"
                  />
                </label>
                <label className="space-y-1.5 text-xs font-medium">
                  <span>Preferred date</span>
                  <input
                    name="date"
                    type="date"
                    required
                    className="h-10 w-full border border-[#0D2118]/20 bg-transparent px-3 text-sm outline-none focus:border-[#A78532]"
                  />
                </label>
              </div>

              <label className="block space-y-1.5 text-xs font-medium">
                <span>What are you interested in?</span>
                <select
                  name="interest"
                  defaultValue="Commercial space"
                  className="h-10 w-full border border-[#0D2118]/20 bg-[#F4EFE9] px-3 text-sm outline-none focus:border-[#A78532]"
                >
                  <option>Retail shop</option>
                  <option>Restaurant or bakery</option>
                  <option>Pharmacy or diagnostic lab</option>
                  <option>Bank or customer service</option>
                  <option>Salon, gym or hypermarket</option>
                  <option>Other commercial use</option>
                </select>
              </label>

              <button
                type="submit"
                className="flex h-11 w-full items-center justify-center rounded-md bg-[#C09D41] px-5 text-xs font-semibold uppercase tracking-[0.12em] text-[#0D2118] transition hover:bg-[#AD8931]"
              >
                Continue via email
              </button>
            </form>
          </section>
        </div>,
        document.body,
      )}
    </>
  );
}