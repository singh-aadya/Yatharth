import { useState } from "react";
import { useAppContext } from "../context/AppContext";

type FAQ = {
  question: string;
  answer: string;
};

export default function FAQPage() {
  const { language, userName } = useAppContext();

  // ================= FAQ DATA =================
  const faqList: FAQ[] = [
    {
      question: "What is insurance?",
      answer:
        "Insurance is a financial protection plan that helps you cover unexpected losses such as accidents, hospital bills, crop loss, or livestock death.",
    },
    {
      question: "Why is insurance important for rural families?",
      answer:
        "Rural households often rely on seasonal or irregular income. Insurance protects them during emergencies and reduces financial burden.",
    },
    {
      question: "Which documents are needed?",
      answer:
        "Most schemes require Aadhaar, bank passbook, land records (for farmers), livestock photo (for cattle schemes), and basic ID proof.",
    },
    {
      question: "How do I file a claim?",
      answer:
        "Visit your nearest CSC center, BC Sakhi, or insurer’s office. Submit proof of loss—photos, bills, certificates, or land/crop records.",
    },
    {
      question: "How long does claim settlement take?",
      answer:
        "Depending on the scheme, it can take 7–30 days. Some government schemes may take longer based on verification.",
    },
    {
      question: "Can I get reminders?",
      answer:
        "Yes! You can enable WhatsApp, SMS, and in-app reminders from the Notification Settings page.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const titleText =
    language === "hi"
      ? "अक्सर पूछे जाने वाले प्रश्न"
      : language === "pa"
      ? "ਅਕਸਰ ਪੁੱਛੇ ਜਾਣ ਵਾਲੇ ਸਵਾਲ"
      : "Frequently Asked Questions";

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

      <h1 className="text-3xl font-bold mb-8">{titleText}</h1>

      {/* FAQ ACCORDION */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqList.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-[#DDE2E9] rounded-xl shadow-sm"
          >
            {/* Question */}
            <button
              className="w-full text-left p-5 flex justify-between items-center"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* Answer */}
            {openIndex === index && (
              <div className="px-5 pb-5 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
