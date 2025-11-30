import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

export default function ErrorFallbackPage() {
  const { language, userName } = useAppContext();
  const nav = useNavigate();

  const titleText =
    language === "hi"
      ? "कुछ गलत हुआ"
      : language === "pa"
      ? "ਕੁਝ ਗਲਤ ਹੋ ਗਿਆ"
      : "Something went wrong";

  const subtitleText =
    language === "hi"
      ? "हमारे पास वह पेज लोड नहीं हो रहा — चलिए वापस चलते हैं।"
      : language === "pa"
      ? "ਅਸੀਂ ਉਹ ਪੰਨਾ ਲੋਡ ਨਹੀਂ ਕਰ پاਏ — ਆਓ ਵਾਪਸ ਚੱਲੀਏ।"
      : "We couldn't load the page — let's get you back to safety.";

  return (
    <div className="min-h-screen bg-[#F2F4F8] flex items-center justify-center px-6 py-12 text-[#003781]">
      <div className="max-w-2xl w-full bg-white border border-[#DDE2E9] rounded-2xl shadow-md p-8 text-center">
        {userName && (
          <div className="text-sm text-gray-600 mb-3">
            {language === "hi"
              ? `नमस्ते, ${userName}`
              : language === "pa"
              ? `ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ${userName}`
              : `Hello, ${userName}`}
          </div>
        )}

        <h1 className="text-2xl font-bold mb-3">{titleText}</h1>
        <p className="text-gray-600 mb-6">{subtitleText}</p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => nav(-1)}
            className="bg-white border border-[#DDE2E9] text-[#003781] py-2 px-4 rounded-xl hover:shadow-sm"
          >
            ← Go Back
          </button>

          <Link
            to="/"
            className="bg-[#0050A0] text-white py-2 px-4 rounded-xl hover:bg-[#003781] transition"
          >
            Home
          </Link>

          <button
            onClick={() => window.location.reload()}
            className="bg-[#25D366] text-white py-2 px-4 rounded-xl hover:opacity-90"
          >
            Retry
          </button>
        </div>

        <p className="text-xs text-gray-400 mt-6">
          {language === "hi"
            ? "यदि समस्या बनी रहे, तो कृपया बाद में पुनः प्रयास करें।"
            : language === "pa"
            ? "ਜੇ ਸਮੱਸਿਆ ਰਹਿ ਜਾਂਦੀ ਹੈ ਤਾਂ ਬਾਅਦ ਵਿੱਚ ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ।"
            : "If the issue persists, please try again later."}
        </p>
      </div>
    </div>
  );
}
