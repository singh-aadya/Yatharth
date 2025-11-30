import React from "react";
import { Play, ChevronRight, Volume2 } from "lucide-react";
import PMFBY from "../assets/PMFBY.png";

export default function LearningPage() {
  return (
    <div className="w-full min-h-screen bg-[#F8F3E9] px-6 py-8">
      {/* Title Bar */}
      <div className="w-full flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-[#003781] flex items-center gap-2">
          Know Your Protection
        </h1>
        <button className="flex items-center gap-2 text-[#003781] font-medium">
          <Volume2 size={20} />
          Hear Guide
        </button>
      </div>

      {/* FULL WIDTH CENTER STRIP (Your highlighted purple area) */}
      <div className="w-full bg-white rounded-xl shadow-sm p-4 mb-8 border border-gray-200">
        <p className="text-center text-gray-700 font-medium">
          Insurance Name: PMFBY (Pradhan Mantri Fasal Bima Yojana)
          – Crop insurance covering farmers against yield loss, weather shocks, and disasters.
        </p>
      </div>

      {/* MAIN 3-COLUMN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* LEFT PANEL – VIDEO BOX */}
        <div className="lg:col-span-1 bg-white shadow rounded-xl p-4 flex flex-col items-center">
          <div className="w-full h-[380px] bg-gray-200 rounded-xl flex items-center justify-center">
            <Play size={48} className="text-[#003781]" />
          </div>
          <p className="text-xs text-center text-gray-600 mt-3">
            30-sec crop insurance explainer • in your language
          </p>
        </div>

        {/* CENTER PANEL – MAIN CONTENT */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          {/* Section – Understand Insurance */}
          <div className="bg-white rounded-xl shadow p-4 border">
            <h2 className="text-xl font-semibold text-[#003781] mb-3 flex items-center gap-2">
              <span>ℹ️</span> Understand Your Insurance
            </h2>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#EEF4FF] p-4 rounded-xl text-center">
                <p className="font-semibold text-[#003781]">Crop Risk</p>
                <p className="text-sm text-gray-600">Covers crop loss due to rain</p>
              </div>

              <div className="bg-[#EEF4FF] p-4 rounded-xl text-center">
                <p className="font-semibold text-[#003781]">Benefit</p>
                <p className="text-sm text-gray-600">Assured compensation</p>
              </div>

              <div className="bg-[#EEF4FF] p-4 rounded-xl text-center">
                <p className="font-semibold text-[#003781]">Docs</p>
                <p className="text-sm text-gray-600">Simple document steps</p>
              </div>
            </div>
          </div>

          {/* Section – What To Do Next */}
          <div className="bg-white rounded-xl shadow p-4 border">
            <h2 className="text-xl font-semibold text-[#003781]">What To Do Next</h2>

            <div className="flex justify-between items-center mt-2">
              <div>
                <p className="font-medium text-[#003781]">Step 1: Check Eligibility</p>
                <p className="text-sm text-gray-600">Tap next to see more steps</p>
              </div>

              <button className="bg-[#003781] text-white p-3 rounded-full shadow">
                <ChevronRight />
              </button>
            </div>
          </div>

          {/* Section – Comparison Tools / Sources */}
          <div className="bg-white rounded-xl shadow p-4 text-center border">
            <p className="text-gray-700 font-medium">
              Sources like Allianz from where insurance comparisons can be viewed.
            </p>
          </div>
        </div>

        {/* RIGHT PANEL – PROGRESS + ALERTS */}
        <div className="lg:col-span-1 flex flex-col gap-6">

          {/* Progress */}
          <div className="bg-white rounded-xl shadow p-4 border">
            <h2 className="text-xl font-semibold text-[#003781]">Your Progress</h2>

            <ul className="mt-3 space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[#003781] rounded-full"></span>
                Learning
              </li>

              <li className="flex items-center gap-2">
                <span className="w-3 h-3 border border-gray-300 rounded-full"></span>
                Survey Completed
              </li>

              <li className="flex items-center gap-2">
                <span className="w-3 h-3 border border-gray-300 rounded-full"></span>
                Options Ready
              </li>

              <li className="flex items-center gap-2">
                <span className="w-3 h-3 border border-gray-300 rounded-full"></span>
                Claim Assistance
              </li>
            </ul>
          </div>

          {/* Alerts */}
          <div className="bg-white rounded-xl shadow p-4 border">
            <h2 className="text-xl font-semibold text-[#003781]">Latest Alerts</h2>

            <div className="bg-[#F4F9FF] rounded-lg p-3 text-gray-600 mt-2">
              5 Jan – New PMFBY update…
            </div>

            <button className="mt-3 flex items-center gap-2 text-[#003781] text-sm font-medium">
              <Volume2 size={18} />
              Tap to Listen
            </button>

            {/* PMFBY Hero Image Section */}
            <div className="w-full mt-10">
              <img 
                src={PMFBY} 
                alt="Happy rural family under PMFBY scheme" 
                className="w-full rounded-xl shadow-lg object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
