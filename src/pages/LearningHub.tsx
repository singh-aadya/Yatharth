import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

export default function LearningHub() {
  const { userName, language } = useAppContext();

  const titleText =
    language === "hi"
      ? "सीखने का केंद्र"
      : language === "pa"
      ? "ਸਿੱਖਣ ਕੇਂਦਰ"
      : "Learning Hub";

  const subtitleText =
    language === "hi"
      ? "बीमा को सरल और समझने योग्य तरीके से जानें।"
      : language === "pa"
      ? "ਬੀਮੇ ਨੂੰ ਆਸਾਨ ਭਾਸ਼ਾ ਵਿੱਚ ਸਮਝੋ।"
      : "Learn insurance concepts in simple, clear formats.";

  return (
    <div className="min-h-screen bg-[#F2F4F8] text-[#003781] px-6 py-12">

      {/* Greeting */}
      {userName && (
        <h2 className="text-2xl font-bold mb-6">
          {language === "hi"
            ? `नमस्ते, ${userName}`
            : language === "pa"
            ? `ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ${userName}`
            : `Hello, ${userName}`}
        </h2>
      )}

      {/* Title */}
      <h1 className="text-3xl font-bold mb-2">{titleText}</h1>
      <p className="text-gray-600 mb-10">{subtitleText}</p>

      {/* GRID OF LEARNING SECTIONS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Basics */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-[#DDE2E9]">
          <h3 className="text-xl font-semibold mb-2">Insurance Basics</h3>
          <p className="text-gray-600 text-sm mb-4">
            Simple explanations of premiums, claims, risks, and coverage.
          </p>
          <button className="text-[#0050A0] font-medium hover:underline">
            Explore →
          </button>
        </div>

        {/* Videos / Reels */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-[#DDE2E9]">
          <h3 className="text-xl font-semibold mb-2">Short Videos</h3>
          <p className="text-gray-600 text-sm mb-4">
            Watch short clips explaining rural risks, schemes, and processes.
          </p>
          <button className="text-[#0050A0] font-medium hover:underline">
            Watch →
          </button>
        </div>

        {/* Audio Stories */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-[#DDE2E9]">
          <h3 className="text-xl font-semibold mb-2">Audio Stories</h3>
          <p className="text-gray-600 text-sm mb-4">
            Listen to real-life stories from farmers, SHGs, and policyholders.
          </p>
          <button className="text-[#0050A0] font-medium hover:underline">
            Listen →
          </button>
        </div>

        {/* Step-by-step guides */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-[#DDE2E9]">
          <h3 className="text-xl font-semibold mb-2">Step-by-Step Guides</h3>
          <p className="text-gray-600 text-sm mb-4">
            Clear, visual walkthroughs for buying insurance or filing claims.
          </p>
          <button className="text-[#0050A0] font-medium hover:underline">
            View Guides →
          </button>
        </div>

        {/* Interactive Content */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-[#DDE2E9]">
          <h3 className="text-xl font-semibold mb-2">Interactive Lessons</h3>
          <p className="text-gray-600 text-sm mb-4">
            Mini quizzes, Q&A modules, and rural scenarios to learn quickly.
          </p>
          <button className="text-[#0050A0] font-medium hover:underline">
            Start Learning →
          </button>
        </div>

        {/* Government Schemes */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-[#DDE2E9]">
          <h3 className="text-xl font-semibold mb-2">Gov Schemes</h3>
          <p className="text-gray-600 text-sm mb-4">
            Simple summaries of PMFBY, PMSBY, PMJJBY, and more.
          </p>
          <button className="text-[#0050A0] font-medium hover:underline">
            Learn More →
          </button>
        </div>
      </div>
    </div>
  );
}
