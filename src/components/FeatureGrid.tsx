import React from "react";

/**
 * FeatureGrid
 * - 6 polished feature cards with icons, title, and one-line descriptions.
 * - Responsive: 1 / 2 / 3 columns
 * - Accessible: semantic roles + aria
 * - Tailwind styling (Allianz palette)
 */

const features = [
  {
    key: "vernacular",
    title: "Vernacular Learning",
    desc: "Short reels, audio stories & simple visuals in local languages.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden>
        <path fill="currentColor" d="M4 6h16v2H4zM4 10h10v2H4zM4 14h7v2H4z" />
      </svg>
    ),
  },
  {
    key: "survey",
    title: "Survey Profiling",
    desc: "Capture occupation, crops, livestock & income for tailored advice.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden>
        <path fill="currentColor" d="M19 3H5a2 2 0 00-2 2v14l4-2 4 2 4-2 4 2V5a2 2 0 00-2-2z" />
      </svg>
    ),
  },
  {
    key: "recommend",
    title: "Need-based Recommendations",
    desc: "Affordable, role-aligned insurance suggestions from the profile.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden>
        <path fill="currentColor" d="M12 2l3 7h7l-5.5 4 2 7L12 16 5.5 20l2-7L2 9h7z" />
      </svg>
    ),
  },
  {
    key: "process",
    title: "Process Guidance",
    desc: "Step-by-step help for eKYC, docs, purchases & claims.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden>
        <path fill="currentColor" d="M3 6h18v2H3V6zm0 4h12v2H3v-2zm0 4h18v2H3v-2z" />
      </svg>
    ),
  },
  {
    key: "whatsapp",
    title: "WhatsApp Assistance",
    desc: "Lightweight chat channel for reminders and micro-support.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden>
        <path fill="currentColor" d="M20 2H4a2 2 0 00-2 2v16l4-2h14a2 2 0 002-2V4a2 2 0 00-2-2z" />
      </svg>
    ),
  },
  {
    key: "local",
    title: "Local Touchpoints",
    desc: "Connects users to BC Sakhis, CSCs, SHGs & co-op banks.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden>
        <path fill="currentColor" d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7z" />
      </svg>
    ),
  },
];

export default function FeatureGrid() {
  return (
    <section
      aria-labelledby="features-heading"
      className="max-w-7xl mx-auto px-6 py-12"
    >
      <h2
        id="features-heading"
        className="text-2xl sm:text-3xl font-bold text-[#003781] mb-6"
      >
        What Yatharth Offers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <article
            key={f.key}
            className="flex gap-4 items-start bg-white border border-[#E6EDF7] rounded-2xl p-5 shadow-sm hover:shadow-md transition transform hover:-translate-y-1"
            role="group"
            aria-labelledby={`feature-${f.key}-title`}
          >
            <div
              className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
              style={{ background: "#EAF3FF" }}
              aria-hidden
            >
              <div className="text-[#003781]">{f.icon}</div>
            </div>

            <div>
              <h3
                id={`feature-${f.key}-title`}
                className="text-lg font-semibold text-[#003781]"
              >
                {f.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1 leading-tight max-w-prose">
                {f.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
