import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

export default function SurveyFlow() {
  const navigate = useNavigate();
  const { language, surveyAnswers, setSurveyAnswers, userName } = useAppContext();

  // Local step system
  const [step, setStep] = useState(1);

  // Local temporary storage for current answers
  const [answers, setAnswers] = useState<Record<string, string>>(surveyAnswers);

  // Helper to update one answer
  const updateAnswer = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  // Submit
  const handleComplete = () => {
    setSurveyAnswers(answers);
    navigate("/guidance");
  };

  // Multi-language header
  const titleText =
    language === "hi"
      ? "त्वरित सर्वे"
      : language === "pa"
      ? "ਤੁਰੰਤ ਸਰਵੇਖਣ"
      : "Quick Survey";

  const subtitleText =
    language === "hi"
      ? "अपनी जानकारी भरें ताकि हम आपके लिए सही सुझाव दे सकें।"
      : language === "pa"
      ? "ਤੁਹਾਡੇ ਲਈ ਨਿੱਜੀ ਸਿਫਾਰਸ਼ਾਂ ਲਈ ਕੁਝ ਵੇਰਵੇ ਭਰੋ।"
      : "Tell us a bit about yourself so we can personalize your guidance.";

  return (
    <div className="min-h-screen bg-[#F2F4F8] text-[#003781] px-6 py-12">

      {/* Greeting */}
      {userName && (
        <h2 className="text-2xl font-bold mb-4">
          {language === "hi"
            ? `नमस्ते, ${userName}`
            : language === "pa"
            ? `ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ${userName}`
            : `Hi, ${userName}`}
        </h2>
      )}

      <h1 className="text-3xl font-bold mb-2">{titleText}</h1>
      <p className="text-gray-600 mb-10">{subtitleText}</p>

      {/* ================= STEP 1 ================= */}
      {step === 1 && (
        <div className="max-w-xl bg-white p-6 rounded-2xl shadow-md border border-[#DDE2E9] mx-auto">

          <h3 className="text-xl font-semibold mb-4">Your Work</h3>

          <label className="block mb-3">What describes your work best?</label>

          <select
            className="w-full py-3 px-4 rounded-xl border border-[#DDE2E9]"
            value={answers.work || ""}
            onChange={(e) => updateAnswer("work", e.target.value)}
          >
            <option value="">Select...</option>
            <option>Farmer</option>
            <option>Daily Wage Worker</option>
            <option>Livestock Owner</option>
            <option>Household Worker</option>
            <option>Student</option>
            <option>Other</option>
          </select>

          <button
            onClick={() => setStep(2)}
            disabled={!answers.work}
            className="mt-6 bg-[#0050A0] text-white py-3 px-6 rounded-xl hover:bg-[#003781] disabled:opacity-40"
          >
            Next →
          </button>
        </div>
      )}

      {/* ================= STEP 2 ================= */}
      {step === 2 && (
        <div className="max-w-xl bg-white p-6 rounded-2xl shadow-md border border-[#DDE2E9] mx-auto">

          <h3 className="text-xl font-semibold mb-4">Your Income Pattern</h3>

          <label className="block mb-3">How does your income come?</label>

          <select
            className="w-full py-3 px-4 rounded-xl border border-[#DDE2E9]"
            value={answers.income || ""}
            onChange={(e) => updateAnswer("income", e.target.value)}
          >
            <option value="">Select...</option>
            <option>Monthly</option>
            <option>Seasonal</option>
            <option>Unpredictable</option>
          </select>

          <div className="flex justify-between mt-6">
            <button
              onClick={() => setStep(1)}
              className="text-[#0050A0] hover:underline"
            >
              ← Back
            </button>

            <button
              onClick={() => setStep(3)}
              disabled={!answers.income}
              className="bg-[#0050A0] text-white py-3 px-6 rounded-xl hover:bg-[#003781] disabled:opacity-40"
            >
              Next →
            </button>
          </div>
        </div>
      )}

      {/* ================= STEP 3 ================= */}
      {step === 3 && (
        <div className="max-w-xl bg-white p-6 rounded-2xl shadow-md border border-[#DDE2E9] mx-auto">

          <h3 className="text-xl font-semibold mb-4">Your Risks</h3>

          <label className="block mb-3">What are your top concerns?</label>

          <select
            className="w-full py-3 px-4 rounded-xl border border-[#DDE2E9]"
            value={answers.risk || ""}
            onChange={(e) => updateAnswer("risk", e.target.value)}
          >
            <option value="">Select...</option>
            <option>Crop Loss</option>
            <option>Accidents</option>
            <option>Health Issues</option>
            <option>Livestock Death</option>
            <option>Unexpected Expenses</option>
          </select>

          <div className="flex justify-between mt-6">
            <button
              onClick={() => setStep(2)}
              className="text-[#0050A0] hover:underline"
            >
              ← Back
            </button>

            <button
              onClick={handleComplete}
              disabled={!answers.risk}
              className="bg-[#0050A0] text-white py-3 px-6 rounded-xl hover:bg-[#003781] disabled:opacity-40"
            >
              Get Recommendations →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
