"use client";

import { useState } from "react";

export default function ReadMore() {
  const [showMore, setShowMore] = useState(false);

  return (
    <p className="mt-5 max-w-[390px] text-[18px] leading-[1.75] text-[#777A73]">
      Greno has worked in Greater Noida real estate since 2015. Greno Plaza
      brings that experience to a high-street commercial project planned for
      shops, services and food businesses.
      {showMore && (
        <>
          {" "}Greno Plaza brings retail, food and everyday services together
          in one commercial destination. Contact us to discuss unit options
          and arrange a site visit.
        </>
      )}
      <button
        type="button"
        onClick={() => setShowMore(!showMore)}
        className="ml-2 font-medium text-[#B29351] underline underline-offset-4 transition hover:text-[#18372B]"
      >
        {showMore ? "Read Less" : "Read More"}
      </button>
    </p>
  );
}