import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  const {
    userName,
    setUserName,
    language,
    surveyAnswers,
  } = useAppContext();

  const [editName, setEditName] = useState(userName || "");
  const notificationPrefs = JSON.parse(
    localStorage.getItem("notificationPreferences") || "{}"
  );

  const titleText =
    language === "hi"
      ? "आपकी प्रोफ़ाइल"
      : language === "pa"
      ? "ਤੁਹਾਡਾ ਪ੍ਰੋਫ਼ਾਈਲ"
      : "Your Profile";

  return (
    <div className="min-h-screen bg-[#F2F4F8] text-[#003781] px-6 py-12">

      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-8">{titleText}</h1>

      {/* PROFILE CARD */}
      <div className="max-w-3xl bg-white border border-[#DDE2E9] rounded-2xl shadow-md p-8 mx-auto">

        {/* Name Section */}
        <h2 className="text-xl font-semibold mb-4">Basic Details</h2>

        <label className="text-sm opacity-80 block mb-2">
          Your Name
        </label>
        <input
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
          onBlur={() => {
            setUserName(editName);
            localStorage.setItem("userName", editName);
          }}
          className="w-full py-3 px-4 border rounded-xl border-[#DDE2E9] text-[#003781] mb-6"
          placeholder="Enter your name..."
        />

        {/* Survey Summary */}
        <h2 className="text-xl font-semibold mt-6 mb-4">Your Survey Details</h2>

        <div className="bg-[#F8FAFC] p-5 rounded-xl border border-[#DDE2E9] text-gray-700">
          <p><strong>Work:</strong> {surveyAnswers.work || "Not provided"}</p>
          <p><strong>Income Pattern:</strong> {surveyAnswers.income || "Not provided"}</p>
          <p><strong>Top Risk:</strong> {surveyAnswers.risk || "Not provided"}</p>
        </div>

        {/* Notification Summary */}
        <h2 className="text-xl font-semibold mt-8 mb-4">Notification Settings</h2>
        <div className="bg-[#F8FAFC] p-5 rounded-xl border border-[#DDE2E9] text-gray-700 space-y-2">
          <p>
            <strong>WhatsApp Alerts:</strong>{" "}
            {notificationPrefs.whatsapp ? "Enabled" : "Disabled"}
          </p>
          <p>
            <strong>SMS Alerts:</strong>{" "}
            {notificationPrefs.sms ? "Enabled" : "Disabled"}
          </p>
          <p>
            <strong>In-App Notifications:</strong>{" "}
            {notificationPrefs.inApp ? "Enabled" : "Disabled"}
          </p>
          <p>
            <strong>Premium Reminders:</strong>{" "}
            {notificationPrefs.premiumReminders ? "On" : "Off"}
          </p>
          <p>
            <strong>Renewal Alerts:</strong>{" "}
            {notificationPrefs.renewalAlerts ? "On" : "Off"}
          </p>
          <p>
            <strong>Scheme Deadlines:</strong>{" "}
            {notificationPrefs.schemeDeadlineAlerts ? "On" : "Off"}
          </p>
        </div>

        {/* Quick Navigation */}
        <h2 className="text-xl font-semibold mt-10 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <Link
            to="/survey"
            className="bg-white border border-[#DDE2E9] rounded-xl p-5 shadow hover:shadow-md hover:-translate-y-1 transition"
          >
            Update Survey →
          </Link>

          <Link
            to="/notifications"
            className="bg-white border border-[#DDE2E9] rounded-xl p-5 shadow hover:shadow-md hover:-translate-y-1 transition"
          >
            Edit Notifications →
          </Link>

          <Link
            to="/saved"
            className="bg-white border border-[#DDE2E9] rounded-xl p-5 shadow hover:shadow-md hover:-translate-y-1 transition"
          >
            View Saved Items →
          </Link>

          <Link
            to="/learn"
            className="bg-white border border-[#DDE2E9] rounded-xl p-5 shadow hover:shadow-md hover:-translate-y-1 transition"
          >
            Go to Learning Hub →
          </Link>

        </div>
      </div>
    </div>
  );
}
