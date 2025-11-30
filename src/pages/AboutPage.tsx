import { useAppContext } from "../context/AppContext";

export default function AboutPage() {
  const { language, userName } = useAppContext();

  const titleText =
    language === "hi"
      ? "हमारे बारे में"
      : language === "pa"
      ? "ਸਾਡੇ ਬਾਰੇ"
      : "About the Platform";

  const missionTitle =
    language === "hi"
      ? "हमारा मिशन"
      : language === "pa"
      ? "ਸਾਡਾ ਮਿਸ਼ਨ"
      : "Our Mission";

  const missionText =
    language === "hi"
      ? "ग्रामीण समुदायों को बीमा की सही जानकारी, विश्वसनीय मार्गदर्शन और सुरक्षित सहायता प्रदान करना।"
      : language === "pa"
      ? "ਪਿੰਡਾਂ ਨੂੰ ਸਹੀ ਬੀਮਾ ਜਾਣਕਾਰੀ ਅਤੇ ਭਰੋਸੇਯੋਗ ਸਹਾਇਤਾ ਮੁਹੱਈਆ ਕਰਨਾ।"
      : "To make insurance understandable, accessible, and trustworthy for rural communities.";

  const featuresText =
    language === "hi"
      ? "हमारा प्लेटफॉर्म बीमा शिक्षा, व्यक्तिगत सिफारिशें, प्रक्रिया मार्गदर्शन, स्थानीय सहायता और WhatsApp चैटबॉट प्रदान करता है।"
      : language === "pa"
      ? "ਸਾਡਾ ਪਲੇਟਫਾਰਮ ਬੀਮਾ ਸਿੱਖਿਆ, ਨਿੱਜੀ ਸਿਫਾਰਸ਼ਾਂ, ਪ੍ਰਕਿਰਿਆ ਮਦਦ, ਸਥਾਨਕ ਸਹਾਇਤਾ ਅਤੇ WhatsApp ਚੈਟਬੋਟ ਮੁਹੱਈਆ ਕਰਦਾ ਹੈ।"
      : "Our platform provides insurance learning, personalized recommendations, process guidance, local support, and a WhatsApp assistance bot.";

  const whyTitle =
    language === "hi"
      ? "क्यों बनाया गया?"
      : language === "pa"
      ? "ਇਹ ਕਿਉਂ ਬਣਾਇਆ ਗਿਆ?"
      : "Why This Platform Exists";

  const whyText =
    language === "hi"
      ? "ग्रामीण क्षेत्रों में बीमा अपनाने में कई बाधाएं हैं — कठिन भाषा, जटिल प्रक्रिया, विश्वसनीय जानकारी की कमी और सीमित डिजिटल अनुभव। हमारा प्लेटफॉर्म इन्हीं समस्याओं को हल करने के लिए डिज़ाइन किया गया है।"
      : language === "pa"
      ? "ਪਿੰਡਾਂ ਵਿੱਚ ਬੀਮੇ ਦੀ ਗ੍ਰਹਿਣਸ਼ੀਲਤਾ ਘੱਟ ਹੈ ਕਿਉਂਕਿ ਭਾਸ਼ਾ ਮੁਸ਼ਕਲ ਹੈ, ਪ੍ਰਕਿਰਿਆ ਜਟਿਲ ਹੈ, ਸਹੀ ਜਾਣਕਾਰੀ ਨਹੀਂ ਮਿਲਦੀ। ਇਹ ਪਲੇਟਫਾਰਮ ਇਨ੍ਹਾਂ ਹੀ ਰੁਕਾਵਟਾਂ ਨੂੰ ਦੂਰ ਕਰਨ ਲਈ ਬਣਾਇਆ ਗਿਆ ਹੈ।"
      : "Insurance adoption in rural India is low due to complex language, uncertain procedures, lack of trusted information, and limited digital familiarity. This platform is designed to bridge those gaps.";

  return (
    <div className="min-h-screen bg-[#F2F4F8] text-[#003781] px-6 py-12">

      {/* Greeting */}
      {userName && (
        <h2 className="text-2xl font-bold mb-4">
          {language === "hi"
            ? `नमस्ते, ${userName}`
            : language === "pa"
            ? `ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ${userName}`
            : `Hello, ${userName}`}
        </h2>
      )}

      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-8">{titleText}</h1>

      {/* Mission */}
      <section className="max-w-4xl bg-white border border-[#DDE2E9] shadow-md rounded-2xl p-8 mb-10">
        <h2 className="text-2xl font-semibold mb-3">{missionTitle}</h2>
        <p className="text-gray-700 leading-relaxed">{missionText}</p>
      </section>

      {/* What Platform Offers */}
      <section className="max-w-4xl bg-white border border-[#DDE2E9] shadow-md rounded-2xl p-8 mb-10">
        <h2 className="text-2xl font-semibold mb-3">
          {language === "hi"
            ? "प्लेटफॉर्म में क्या है?"
            : language === "pa"
            ? "ਪਲੇਟਫਾਰਮ ਕੀ ਦਿੰਦਾ ਹੈ?"
            : "What the Platform Provides"}
        </h2>

        <p className="text-gray-700 mb-4">{featuresText}</p>

        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Insurance learning in simple language</li>
          <li>Personalized guidance based on your profile</li>
          <li>Step-by-step process help for documents & claims</li>
          <li>Local touchpoint information for real-world support</li>
          <li>WhatsApp chatbot for easy, everyday help</li>
        </ul>
      </section>

      {/* Why it exists */}
      <section className="max-w-4xl bg-white border border-[#DDE2E9] shadow-md rounded-2xl p-8">
        <h2 className="text-2xl font-semibold mb-3">{whyTitle}</h2>
        <p className="text-gray-700 leading-relaxed">{whyText}</p>
      </section>
    </div>
  );
}
