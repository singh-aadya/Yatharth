import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

type SavedItem = {
  id: string;
  title: string;
  type: "scheme" | "lesson" | "article";
  link: string;
};

export default function SavedItemsPage() {
  const { language, userName } = useAppContext();
  const [savedItems, setSavedItems] = useState<SavedItem[]>([]);

  // Load saved items
  useEffect(() => {
    const saved = localStorage.getItem("savedItems");
    if (saved) setSavedItems(JSON.parse(saved));
  }, []);

  const removeItem = (id: string) => {
    const updated = savedItems.filter((item) => item.id !== id);
    setSavedItems(updated);
    localStorage.setItem("savedItems", JSON.stringify(updated));
  };

  const titleText =
    language === "hi"
      ? "सहेजे गए आइटम"
      : language === "pa"
      ? "ਸੰਭਾਲੇ ਗਏ ਆਈਟਮ"
      : "Saved Items";

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

      {/* Empty State */}
      {savedItems.length === 0 && (
        <div className="text-center text-gray-600 mt-20">
          <p className="text-lg mb-4">
            {language === "hi"
              ? "आपने अभी तक कुछ भी सेव नहीं किया है।"
              : language === "pa"
              ? "ਤੁਸੀਂ ਅਜੇ ਕੁਝ ਵੀ ਸੇਵ ਨਹੀਂ ਕੀਤਾ।"
              : "You haven't saved anything yet."}
          </p>

          <Link
            to="/learn"
            className="bg-[#0050A0] text-white py-3 px-6 rounded-xl hover:bg-[#003781]"
          >
            Explore Learning Hub →
          </Link>
        </div>
      )}

      {/* Saved Items Grid */}
      {savedItems.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {savedItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl shadow-md border border-[#DDE2E9]"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

              <p className="text-sm text-gray-600 mb-4">
                Type:{" "}
                {item.type === "scheme"
                  ? "Insurance Scheme"
                  : item.type === "lesson"
                  ? "Learning Lesson"
                  : "Article"}
              </p>

              <div className="flex justify-between items-center">
                <Link
                  to={item.link}
                  className="text-[#0050A0] font-medium hover:underline"
                >
                  Open →
                </Link>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}
