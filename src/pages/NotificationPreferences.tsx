import { useState, useEffect } from "react";
import { useAppContext } from "../context/AppContext";

// ================== TYPES ==================
type NotificationPrefs = {
  premiumReminders: boolean;
  renewalAlerts: boolean;
  schemeDeadlineAlerts: boolean;
  whatsapp: boolean;
  sms: boolean;
  inApp: boolean;
};

export default function NotificationPreferences() {
  const { language, userName } = useAppContext();

  // ================== STATE ==================
  const [preferences, setPreferences] = useState<NotificationPrefs>(() => {
    const saved = localStorage.getItem("notificationPreferences");
    return saved
      ? JSON.parse(saved)
      : {
          premiumReminders: true,
          renewalAlerts: true,
          schemeDeadlineAlerts: true,
          whatsapp: true,
          sms: false,
          inApp: true,
        };
  });

  // ================== SAVE CHANGES ==================
  useEffect(() => {
    localStorage.setItem(
      "notificationPreferences",
      JSON.stringify(preferences)
    );
  }, [preferences]);

  // ================== TOGGLE FUNCTION ==================
  const toggle = (key: keyof NotificationPrefs) => {
    setPreferences((prev: NotificationPrefs) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // ================== TEXT (MULTILINGUAL) ==================
  const titleText =
    language === "hi"
      ? "सूचना प्राथमिकताएँ"
      : language === "pa"
      ? "ਸੂਚਨਾ ਪਸੰਦਾਂ"
      : "Notification Preferences";

  const subtitleText =
    language === "hi"
      ? "अपनी पसंद के अनुसार रिमाइंडर चुनें।"
      : language === "pa"
      ? "ਆਪਣੀ ਪਸੰਦ ਅਨੁਸਾਰ ਰਿਮਾਈਂਡਰ ਚੁਣੋ।"
      : "Choose the types of reminders you want.";

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

      {/* Title */}
      <h1 className="text-3xl font-bold mb-2">{titleText}</h1>
      <p className="text-gray-600 mb-10 max-w-2xl">{subtitleText}</p>

      {/* MAIN SETTINGS CARD */}
      <div className="max-w-3xl mx-auto bg-white border border-[#DDE2E9] shadow-md rounded-2xl p-8 space-y-10">

        {/* ========= Notification Channels ========= */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Notification Channels</h3>

          <div className="space-y-4">

            <label className="flex items-center gap-3 text-gray-800">
              <input
                type="checkbox"
                checked={preferences.whatsapp}
                onChange={() => toggle("whatsapp")}
                className="w-5 h-5"
              />
              WhatsApp Notifications
            </label>

            <label className="flex items-center gap-3 text-gray-800">
              <input
                type="checkbox"
                checked={preferences.sms}
                onChange={() => toggle("sms")}
                className="w-5 h-5"
              />
              SMS Alerts
            </label>

            <label className="flex items-center gap-3 text-gray-800">
              <input
                type="checkbox"
                checked={preferences.inApp}
                onChange={() => toggle("inApp")}
                className="w-5 h-5"
              />
              In-App Notifications
            </label>

          </div>
        </div>

        {/* ========= Reminder Types ========= */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Reminder Types</h3>

          <div className="space-y-4">

            <label className="flex items-center gap-3 text-gray-800">
              <input
                type="checkbox"
                checked={preferences.premiumReminders}
                onChange={() => toggle("premiumReminders")}
                className="w-5 h-5"
              />
              Premium Payment Reminders
            </label>

            <label className="flex items-center gap-3 text-gray-800">
              <input
                type="checkbox"
                checked={preferences.renewalAlerts}
                onChange={() => toggle("renewalAlerts")}
                className="w-5 h-5"
              />
              Policy Renewal Alerts
            </label>

            <label className="flex items-center gap-3 text-gray-800">
              <input
                type="checkbox"
                checked={preferences.schemeDeadlineAlerts}
                onChange={() => toggle("schemeDeadlineAlerts")}
                className="w-5 h-5"
              />
              Government Scheme Deadline Alerts
            </label>

          </div>
        </div>
      </div>
    </div>
  );
}
