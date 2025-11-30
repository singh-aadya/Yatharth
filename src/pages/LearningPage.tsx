import React from "react";
import { Play, Volume2, Info, ChevronRight } from "lucide-react";
import Marquee from "../components/Marquee"; // correct path based on your structure
   

export default function LearningPage() {
  return (
    <div className="min-h-screen bg-[#F7F2E7] text-[#003781]">

      {/* ===== PAGE CONTAINER ===== */}
      <div className="max-w-7xl mx-auto px-5 py-8">

        {/* ===== TOP HEADER ===== */}
        <div className="flex justify-between items-center bg-white shadow-sm border border-[#E3EAF4] rounded-xl px-5 py-4 mb-8">
          <h1 className="text-xl md:text-2xl font-bold tracking-tight flex items-center gap-2">
            🌾 Know Your Protection
          </h1>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 text-sm text-[#003781] hover:opacity-80 font-medium">
              <Volume2 size={18} /> Hear Guide
            </button>

            {/* <div className="bg-[#003781] text-white px-4 py-1.5 rounded-lg font-semibold shadow-sm">
              Hi, Suresh
            </div> */}
          </div>
        </div>

        {/* ===== MAIN GRID ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* LEFT: VIDEO THUMBNAIL */}
          <div className="lg:col-span-1 bg-white border border-[#D6DFEB] rounded-2xl shadow-sm p-4">
            <div className="relative rounded-xl overflow-hidden aspect-[9/16] group cursor-pointer shadow-md">
              <img
                src="/demo-video-thumb.jpg"
                alt="Insurance Video"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="bg-white bg-opacity-85 p-4 rounded-full shadow-lg">
                  <Play size={36} className="text-[#003781]" />
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs text-gray-600 text-center">
              30-sec crop insurance explainer • in your language
            </p>
          </div>

          {/* CENTER MAIN CONTENT */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* ===== UNDERSTAND YOUR INSURANCE ===== */}
            <div className="bg-white rounded-2xl border border-[#D6DFEB] shadow-sm p-6">
              <h2 className="font-bold text-lg mb-5 flex items-center gap-2">
                <Info size={20} /> Understand Your Insurance
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                <InfoCard
                  icon="/crop-icon.png"
                  title="Crop Risk"
                  desc="Covers crop loss due to rain"
                />

                <InfoCard
                  icon="/rupee-icon.png"
                  title="Benefit"
                  desc="Assured compensation"
                />

                <InfoCard
                  icon="/doc-icon.png"
                  title="Docs"
                  desc="Simple document steps"
                />
              </div>
            </div>

            {/* ===== NEXT STEPS CAROUSEL ===== */}
            <div className="bg-white rounded-2xl border border-[#D6DFEB] shadow-sm p-6">
              <h3 className="font-bold text-lg mb-3">What To Do Next</h3>

              <div className="flex justify-between items-center">

                <div>
                  <p className="font-semibold">Step 1: Check Eligibility</p>
                  <p className="text-sm text-gray-600">
                    Tap next to see more steps
                  </p>
                </div>

                <button className="p-3 bg-[#003781] text-white rounded-full shadow hover:bg-[#002A5D] transition">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE COLUMN */}
          <div className="lg:col-span-1 flex flex-col gap-6">

            {/* ===== PROGRESS TRACKER ===== */}
            <div className="bg-white rounded-2xl border border-[#D6DFEB] shadow-sm p-6">
              <h3 className="font-semibold mb-4 text-[#003781]">Your Progress</h3>

              <Stage label="Learning" active />
              <Stage label="Survey Completed" />
              <Stage label="Options Ready" />
              <Stage label="Claim Assistance" />
            </div>

            {/* ===== LATEST ALERTS ===== */}
            <div className="bg-white rounded-2xl border border-[#D6DFEB] shadow-sm p-6">
              <h3 className="font-semibold mb-2">Latest Alerts</h3>

              <div className="overflow-hidden rounded-md bg-[#F8FBFF] border border-[#E1E8F4]">
                <Marquee speed={25} className="text-sm py-2 px-3">
                  ⚠ Beware of fake insurance agents • PMFBY deadline extended •
                  New update issued for Rabi season • Check eligibility today
                </Marquee>
              </div>
              {/* <Marquee speed={25}>
                ⚠ Beware of fake insurance agents • PMFBY deadline extended •
                New update issued for Rabi season • Check eligibility today
              </Marquee> */}


              <button className="flex items-center gap-2 mt-3 text-sm font-medium text-[#003781]">
                <Volume2 size={16} /> Tap to Listen
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

/* ===== SMALL COMPONENTS ===== */

function InfoCard({ icon, title, desc }: any) {
  return (
    <div className="bg-[#EAF3FF] p-4 rounded-xl shadow-sm hover:shadow-md transition">
      <img src={icon} alt={title} className="h-10 mx-auto" />
      <p className="mt-2 font-semibold text-center">{title}</p>
      <p className="text-sm text-gray-600 text-center">{desc}</p>
    </div>
  );
}

function Stage({ label, active }: { label: string; active?: boolean }) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <div
        className={`h-4 w-4 rounded-full ${
          active ? "bg-[#003781]" : "bg-gray-300"
        }`}
      />
      <span className={`${active ? "font-semibold" : "text-gray-600"} text-sm`}>
        {label}
      </span>
    </div>
  );
}
