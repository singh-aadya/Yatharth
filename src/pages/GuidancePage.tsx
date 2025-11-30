import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

export default function GuidancePage() {
  const { surveyAnswers, language, userName } = useAppContext();

  // Extract survey data
  const work = surveyAnswers.work;
  const income = surveyAnswers.income;
  const risk = surveyAnswers.risk;

  // Multi-language title
  const titleText =
    language === "hi"
      ? "आपके लिए बीमा सुझाव"
      : language === "pa"
      ? "ਤੁਹਾਡੇ ਲਈ ਬੀਮਾ ਸਿਫਾਰਸ਼ਾਂ"
      : "Your Insurance Recommendations";

  const subtitleText =
    language === "hi"
      ? "आपके उत्तरों के आधार पर हमने कुछ विकल्प चुने हैं।"
      : language === "pa"
      ? "ਤੁਹਾਡੇ ਜਵਾਬਾਂ ਅਨੁਸਾਰ, ਇਹ ਸਿਫਾਰਸ਼ਾਂ ਤਿਆਰ ਕੀਤੀਆਂ ਗਈਆਂ ਹਨ।"
      : "Based on your responses, here are your personalized suggestions.";

  // Recommendation logic
  const recommendations: { title: string; desc: string; link: string }[] = [];

  if (risk === "Crop Loss" || work === "Farmer") {
    recommendations.push({
      title: "PM Fasal Bima Yojana (PMFBY)",
      desc:
        "Government-backed crop insurance for losses due to flood, drought, pests, and weather.",
      link: "/scheme/pmfby",
    });
  }

  if (risk === "Accidents" || work === "Daily Wage Worker") {
    recommendations.push({
      title: "Pradhan Mantri Suraksha Bima Yojana (PMSBY)",
      desc:
        "Accident insurance with affordable premiums, ideal for workers exposed to daily risks.",
      link: "/scheme/pmsby",
    });
  }

  if (risk === "Health Issues" || work === "Household Worker" || work === "Livestock Owner") {
    recommendations.push({
      title: "Ayushman Bharat – Health Insurance",
      desc:
        "Covers hospital expenses for families, suitable for low-income households.",
      link: "/scheme/ayushman",
    });
  }

  if (risk === "Livestock Death" || work === "Livestock Owner") {
    recommendations.push({
      title: "Livestock Insurance Scheme",
      desc:
        "Covers cattle, buffalo, goats, and more against disease, accidents, and death.",
      link: "/scheme/livestock",
    });
  }

  if (risk === "Unexpected Expenses") {
    recommendations.push({
      title: "Small Savings & Micro Insurance",
      desc:
        "Low-premium policies providing coverage for emergencies and financial shocks.",
      link: "/scheme/micro",
    });
  }

  // If nothing matches
  if (recommendations.length === 0) {
    recommendations.push({
      title: "General Micro-Insurance Plans",
      desc:
        "Affordable coverage for health, accidents, income loss, and emergencies.",
      link: "/scheme/general",
    });
  }

  return (
    <div className="min-h-screen bg-[#F2F4F8] text-[#003781] px-6 py-12">

      {/* Personalized Greeting */}
      {userName && (
        <h2 className="text-2xl font-bold mb-4">
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

      {/* Display Survey Summary */}
      <div className="mb-10 bg-white p-6 rounded-xl shadow-md border border-[#DDE2E9] max-w-3xl">
        <h3 className="text-xl font-semibold mb-2">Your Inputs</h3>
        <p className="text-gray-600">
          <strong>Work:</strong> {work || "Not provided"} <br />
          <strong>Income Pattern:</strong> {income || "Not provided"} <br />
          <strong>Top Risk Concern:</strong> {risk || "Not provided"}
        </p>
      </div>

      {/* Recommendations */}
      <h2 className="text-2xl font-semibold mb-6">Recommended for You</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">

        {recommendations.map((rec) => (
          <Link
            key={rec.title}
            to={rec.link}
            className="bg-white p-6 rounded-2xl shadow-md border border-[#DDE2E9] 
                       hover:shadow-xl hover:-translate-y-1 transition"
          >
            <h3 className="text-xl font-semibold">{rec.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{rec.desc}</p>
            <button className="mt-3 text-[#0050A0] font-medium hover:underline">
              View Details →
            </button>
          </Link>
        ))}

      </div>
    </div>
  );
}
