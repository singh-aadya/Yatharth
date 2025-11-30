import React from "react";
import { Volume2, ChevronRight, Play, Info } from "lucide-react";

export default function LearningPage() {
  return (
    <div className="min-h-screen bg-[#F9F4E4] text-[#003781] p-4 md:p-8">

      {/* Top Header */}
      <div className="w-full flex justify-between items-center bg-white shadow-sm rounded-xl px-4 py-3 border border-[#D6DFEB]">
        <div className="font-bold text-lg">🌾 PMFBY – Crop Insurance</div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 text-sm font-medium hover:opacity-80">
            <Volume2 size={18} /> Listen
          </button>
          <div className="bg-[#003781] text-white px-4 py-1.5 rounded-lg font-semibold shadow">
            Hi, Suresh
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">

        {/* LEFT: Short Video */}
        <div className="lg:col-span-1 bg-white rounded-xl border border-[#D6DFEB] shadow-sm p-3 flex flex-col">
          <div className="relative rounded-lg bg-gray-200 aspect-[9/16] overflow-hidden">
            <button className="absolute inset-0 flex justify-center items-center">
              <Play size={50} className="text-white drop-shadow-lg" />
            </button>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            30-sec explainer in your language
          </p>
        </div>

        {/* CENTER PANELS */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          {/* Knowledge Panel */}
          <div className="bg-white rounded-xl border border-[#D6DFEB] shadow-sm p-5">
            <h2 className="font-bold text-xl mb-4 flex items-center gap-2">
              <Info size={22} /> Understand Your Insurance
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <div className="bg-[#EAF3FF] p-4 rounded-lg text-center">
                <img src="/crop-icon.png" alt="Crop Risk" className="mx-auto h-12" />
                <p className="mt-2 font-medium">Covers crop loss due to rain</p>
              </div>

              <div className="bg-[#EAF3FF] p-4 rounded-lg text-center">
                <img src="/rupee-icon.png" alt="Benefit" className="mx-auto h-12" />
                <p className="mt-2 font-medium">Assured compensation</p>
              </div>

              <div className="bg-[#EAF3FF] p-4 rounded-lg text-center">
                <img src="/doc-icon.png" alt="Docs" className="mx-auto h-12" />
                <p className="mt-2 font-medium">Simple document steps</p>
              </div>

            </div>
          </div>

          {/* Step Carousel */}
          <div className="bg-white rounded-xl border border-[#D6DFEB] shadow-sm p-5">
            <h2 className="font-bold text-lg mb-3">What To Do Next</h2>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">Step 1: Check Eligibility</p>
                <p className="text-sm text-gray-600">Tap next for more</p>
              </div>
              <button className="p-2 rounded-full bg-[#003781] text-white shadow-md">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-1 flex flex-col gap-6">

          {/* User Stage Tracker */}
          <div className="bg-white rounded-xl border border-[#D6DFEB] shadow-sm p-5">
            <h3 className="font-semibold mb-3">Your Progress</h3>
            <div className="space-y-3">
              <Stage active label="Learning" />
              <Stage label="Survey Completed" />
              <Stage label="Options Ready" />
              <Stage label="Claim Assistance" />
            </div>
          </div>

          {/* Alerts */}
          <div className="bg-white rounded-xl border border-[#D6DFEB] shadow-sm p-4">
            <h3 className="font-semibold mb-2">Latest Alerts</h3>

            <div className="overflow-hidden whitespace-nowrap">
              <marquee behavior="scroll" direction="left" scrollAmount={4} className="text-sm">
                ⚠ Beware of fake agents • Govt deadline extended till 15 Jan • New PMFBY update…
              </marquee>
            </div>

            <button className="mt-3 flex items-center gap-2 text-sm text-[#003781] font-medium">
              <Volume2 size={16} /> Tap to Listen
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

/* Small subcomponent for stages */
function Stage({ label, active }: { label: string; active?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`h-4 w-4 rounded-full ${
          active ? "bg-[#003781]" : "bg-gray-300"
        }`}
      ></div>
      <span className={`text-sm ${active ? "font-semibold" : "text-gray-600"}`}>
        {label}
      </span>
    </div>
  );
}
