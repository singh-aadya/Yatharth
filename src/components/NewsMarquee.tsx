import React from "react";

export default function NewsMarquee() {
  const newsItems = [
    "📢 New: PMFBY Kharif 2024 enrollment window opened.",
    "🔥 Update: LIC launches simplified rural life cover schemes.",
    "🌾 Alert: Crop insurance claim guidelines updated for heavy rainfall.",
    "📌 Reminder: Premium deadlines approaching for livestock insurance.",
  ];

  return (
    <div className="w-full bg-[#003781] text-white overflow-hidden py-2">
      <div className="whitespace-nowrap animate-marquee flex gap-12 px-4 text-sm">
        {newsItems.map((item, index) => (
          <span key={index} className="hover:underline cursor-pointer">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
