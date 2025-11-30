import { useAppContext } from "../context/AppContext";

export default function LocalSupport() {
  const { language, userName } = useAppContext();

  const titleText =
    language === "hi"
      ? "स्थानीय सहायता केंद्र"
      : language === "pa"
      ? "ਸਥਾਨਕ ਸਹਾਇਤਾ ਕੇਂਦਰ"
      : "Local Support Centers";

  const subtitleText =
    language === "hi"
      ? "अपने नज़दीकी BC सखी, CSC केंद्र, बैंक या पंचायत कार्यालय से सहायता प्राप्त करें।"
      : language === "pa"
      ? "ਆਪਣੇ ਨੇੜਲੇ BC ਸਖੀ, CSC ਕੇਂਦਰ, ਬੈਂਕ ਜਾਂ ਪੰਚਾਇਤ ਦਫ਼ਤਰ ਤੋਂ ਮਦਦ ਲਵੋ।"
      : "Find help from nearby BC Sakhis, CSCs, banks, or panchayat offices.";

  return (
    <div className="min-h-screen bg-[#F2F4F8] text-[#003781] px-6 py-12">

      {/* Personalized greeting */}
      {userName && (
        <h2 className="text-2xl font-bold mb-4">
          {language === "hi"
            ? `नमस्ते, ${userName}`
            : language === "pa"
            ? `ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ${userName}`
            : `Hello, ${userName}`}
        </h2>
      )}

      <h1 className="text-3xl font-bold mb-2">{titleText}</h1>
      <p className="text-gray-600 mb-10 max-w-2xl">{subtitleText}</p>

      {/* Location permission card */}
      <div className="bg-white border border-[#DDE2E9] rounded-2xl shadow-md p-8 max-w-3xl mx-auto mb-10">

        <h3 className="text-xl font-semibold mb-3">Find Support Near You</h3>
        <p className="text-gray-600 mb-4">
          Enable location to see the nearest centers that can help with insurance forms,
          eKYC, submissions, and claim-related assistance.
        </p>

        <button className="bg-[#0050A0] text-white py-3 px-6 rounded-xl hover:bg-[#003781] transition">
          Allow Location Access
        </button>
      </div>

      {/* Support types */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

        {/* Card */}
        <div className="bg-white border border-[#DDE2E9] shadow-md rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-2">📍 BC Sakhi</h3>
          <p className="text-gray-600">
            Local women facilitators who help with applications, form filling, bank-related
            tasks and insurance assistance.
          </p>
        </div>

        <div className="bg-white border border-[#DDE2E9] shadow-md rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-2">🏢 CSC Center</h3>
          <p className="text-gray-600">
            Common Service Centers offering digital services, eKYC, insurance enrollment and
            claims support.
          </p>
        </div>

        <div className="bg-white border border-[#DDE2E9] shadow-md rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-2">🏦 Cooperative Bank</h3>
          <p className="text-gray-600">
            Bank branches and mini-bank operators enable premium payments and help verify forms.
          </p>
        </div>

        <div className="bg-white border border-[#DDE2E9] shadow-md rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-2">🏡 Gram Panchayat Office</h3>
          <p className="text-gray-600">
            The Panchayat can guide you to official enrollment windows, verification offices,
            and certified centers.
          </p>
        </div>
      </div>
    </div>
  );
}
