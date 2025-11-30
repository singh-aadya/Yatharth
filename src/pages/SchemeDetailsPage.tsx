import { useParams, Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

// ======================== SCHEME DATA ========================
const SCHEMES: Record<
  string,
  {
    title: string;
    desc: string;
    benefits: string[];
    eligibility: string[];
    documents: string[];
    premium: string;
  }
> = {
  pmfby: {
    title: "PM Fasal Bima Yojana (PMFBY)",
    desc:
      "A government-backed crop insurance scheme covering farmers against natural calamities, pests, and diseases.",
    benefits: [
      "Coverage for crop loss due to natural disasters",
      "Low premium for farmers (2%–5%)",
      "Claim settlement based on notified crop-loss reports",
      "Wide coverage across Kharif & Rabi crops",
    ],
    eligibility: [
      "Farmers growing notified crops",
      "Tenant farmers and sharecroppers",
      "Farmers with valid land records",
    ],
    documents: ["Aadhaar", "Land record / 7/12", "Bank passbook", "Crop details"],
    premium: "2% (Kharif), 1.5% (Rabi), 5% (Commercial crops)",
  },

  pmsby: {
    title: "Pradhan Mantri Suraksha Bima Yojana (PMSBY)",
    desc:
      "An accident insurance scheme for individuals between 18–70 years, offering affordable coverage.",
    benefits: [
      "₹2 lakh accidental death coverage",
      "₹2 lakh disability coverage",
      "₹1 lakh partial disability coverage",
      "Very low annual premium (₹20/year)",
    ],
    eligibility: ["Age 18–70 years", "Active bank account", "Auto-debit consent"],
    documents: ["Aadhaar", "Bank account details"],
    premium: "₹20 per year",
  },

  ayushman: {
    title: "Ayushman Bharat (PM-JAY)",
    desc:
      "India's largest health insurance scheme providing cashless hospitalization to eligible families.",
    benefits: [
      "₹5 lakh coverage per family per year",
      "Cashless treatment at empaneled hospitals",
      "Covers surgery, medicines, tests",
      "No age limit for family members",
    ],
    eligibility: [
      "Listed in SECC 2011 database",
      "Economically weaker families",
      "Rural & urban poor households",
    ],
    documents: ["Aadhaar", "PMJAY Family ID (if available)", "Ration card"],
    premium: "Fully government-funded",
  },

  livestock: {
    title: "Livestock Insurance Scheme",
    desc:
      "Provides insurance for animals including cattle, buffalo, goats, sheep, and more.",
    benefits: [
      "Covers death due to disease or accident",
      "Subsidized premium (up to 50%)",
      "Covers multiple animals",
      "Tagging & certification support",
    ],
    eligibility: ["Livestock owners", "Valid animal ID/tag", "Health certificate"],
    documents: [
      "Livestock photo & tag number",
      "Owner ID (Aadhaar)",
      "Bank account",
      "Vet certificate",
    ],
    premium: "Varies by animal & region (₹200–₹800 typical)",
  },

  micro: {
    title: "Micro Insurance Plans",
    desc:
      "Small-ticket insurance for low-income households to protect against emergencies.",
    benefits: [
      "Low premium, flexible plans",
      "Covers health, accidents, life",
      "Suitable for irregular income",
      "Quick enrollment process",
    ],
    eligibility: ["Low-income households", "Self-employed workers", "Rural families"],
    documents: ["Aadhaar", "Bank details", "Occupation proof (optional)"],
    premium: "₹100–₹500 per month depending on the plan",
  },

  general: {
    title: "General Rural Insurance",
    desc:
      "Basic insurance options for rural households covering health, accidents, and assets.",
    benefits: [
      "Flexible coverage types",
      "Affordable premiums",
      "Designed for rural needs",
      "Available at local CSCs",
    ],
    eligibility: ["Open to all rural residents", "Valid identification"],
    documents: ["Aadhaar", "Bank passbook"],
    premium: "Varies by insurer and coverage",
  },
};

// ======================== PAGE ========================
export default function SchemeDetailsPage() {
  const { id } = useParams();
  const { language } = useAppContext();

  const scheme = id ? SCHEMES[id] : null;

  if (!scheme) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-[#003781] px-6">
        <h2 className="text-3xl font-bold mb-4">Scheme Not Found</h2>
        <p className="text-gray-600 mb-6 text-center">
          The scheme you are looking for does not exist or is not available.
        </p>
        <Link
          to="/guidance"
          className="bg-[#0050A0] text-white py-3 px-6 rounded-xl hover:bg-[#003781]"
        >
          Back to Recommendations
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F2F4F8] text-[#003781] px-6 py-12">

      {/* HEADER */}
      <h1 className="text-3xl font-bold mb-2">{scheme.title}</h1>
      <p className="text-gray-600 mb-10 max-w-3xl">{scheme.desc}</p>

      {/* CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl">

        {/* Benefits */}
        <div className="bg-white p-6 rounded-2xl border border-[#DDE2E9] shadow-md">
          <h3 className="text-xl font-semibold mb-4">Benefits</h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            {scheme.benefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>

        {/* Eligibility */}
        <div className="bg-white p-6 rounded-2xl border border-[#DDE2E9] shadow-md">
          <h3 className="text-xl font-semibold mb-4">Eligibility</h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            {scheme.eligibility.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>

        {/* Documents */}
        <div className="bg-white p-6 rounded-2xl border border-[#DDE2E9] shadow-md">
          <h3 className="text-xl font-semibold mb-4">Required Documents</h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            {scheme.documents.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>

        {/* Premium */}
        <div className="bg-white p-6 rounded-2xl border border-[#DDE2E9] shadow-md">
          <h3 className="text-xl font-semibold mb-4">Premium</h3>
          <p className="text-gray-700">{scheme.premium}</p>
        </div>
      </div>

      {/* BACK BUTTON */}
      <div className="mt-12">
        <Link
          to="/guidance"
          className="bg-[#0050A0] text-white py-3 px-6 rounded-xl hover:bg-[#003781]"
        >
          ← Back to Recommendations
        </Link>
      </div>
    </div>
  );
}
