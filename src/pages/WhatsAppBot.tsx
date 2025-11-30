import { useAppContext } from "../context/AppContext";

export default function WhatsAppBot() {
  const { language, userName } = useAppContext();

  const titleText =
    language === "hi"
      ? "WhatsApp सहायक"
      : language === "pa"
      ? "WhatsApp ਸਹਾਇਕ"
      : "WhatsApp Assistant";

  const subtitleText =
    language === "hi"
      ? "हमारे WhatsApp चैटबॉट से बीमा मार्गदर्शन, अपडेट और सहायता प्राप्त करें।"
      : language === "pa"
      ? "ਸਾਡੇ WhatsApp ਬੋਟ ਰਾਹੀਂ ਬੀਮਾ ਮਦਦ, ਅੱਪਡੇਟ ਅਤੇ ਜਾਣਕਾਰੀ ਪ੍ਰਾਪਤ ਕਰੋ।"
      : "Get insurance help, updates, and guidance through our WhatsApp chatbot.";

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
      <p className="text-gray-600 mb-10 max-w-2xl">{subtitleText}</p>

      {/* MAIN CARD */}
      <div className="bg-white border border-[#DDE2E9] shadow-md rounded-2xl p-8 max-w-3xl mx-auto">

        <h3 className="text-xl font-semibold mb-4">What This Bot Can Do</h3>

        <ul className="space-y-3 text-gray-700 mb-8">
          <li>• Explain insurance schemes in your language</li>
          <li>• Send reminders for renewals & premiums</li>
          <li>• Help with required documents</li>
          <li>• Provide simple claim filing steps</li>
          <li>• Answer common questions 24×7</li>
        </ul>

        {/* QR & Button Section */}
        <div className="flex flex-col sm:flex-row items-center gap-8 justify-center">

          {/* QR Placeholder */}
          <div className="w-40 h-40 bg-gray-300 rounded-lg flex items-center justify-center text-sm text-gray-700">
            QR Code Here
          </div>

          {/* Click to chat */}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            className="bg-[#25D366] text-white py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition"
          >
            Chat on WhatsApp →
          </a>
        </div>

        {/* Note */}
        <p className="text-xs text-gray-500 mt-6 text-center">
          Standard WhatsApp data charges may apply.
        </p>
      </div>
    </div>
  );
}
