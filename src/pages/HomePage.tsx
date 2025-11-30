import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import NewsMarquee from "../components/NewsMarquee";

export default function HomePage() {
  const { userName, setUserName, language } = useAppContext();

  return (
    <div className="min-h-screen bg-[#F2F4F8] text-[#003781]">

      {/* ================= HERO SECTION ================= */}
      {/* <section className="w-full bg-gradient-to-r from-[#003781] to-[#0050A0] text-white py-20 px-6 text-center"> */}
      <section
        className="w-full py-24 px-6 text-center bg-cover bg-center bg-no-repeat relative text-white"
      style={{ backgroundImage: "url('/yatharth-hero.svg')" }}
      >
  

        {/* Greeting */}
        <h1 className="text-4xl font-bold mb-4">
          {userName ? `Welcome, ${userName}` : "Welcome to Yatharth"}
        </h1>

        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Your unified gateway to rural insurance learning, personalized guidance, and support.
        </p>

        {/* Ask name if missing */}
        {!userName && (
          <div className="mt-6 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Enter your name..."
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.currentTarget.value.trim() !== "") {
                  setUserName(e.currentTarget.value.trim());
                }
              }}
              className="w-full py-3 px-4 rounded-lg text-[#003781] shadow-md"
            />
            <p className="text-sm opacity-80 mt-2">
              Press Enter to continue
            </p>
          </div>
        )}

        {/* SEARCH BAR */}
        <div className="mt-8 max-w-xl mx-auto">
          <input
            placeholder={
              language === "hi"
                ? "योजनाएं, गाइड या सहायता खोजें…"
                : language === "pa"
                ? "ਯੋਜਨਾਵਾਂ, ਮਦਦ ਜਾਂ ਸਹਾਇਤਾ ਖੋਜੋ…"
                : "Search schemes, guides, or support…"
            }
            className="w-full py-3 px-5 rounded-xl shadow-lg text-[#003781] focus:outline-none"
          />
        </div>
      </section>
      <NewsMarquee />


      {/* ================= FEATURE GRID ================= */}
      <section className="py-16 px-6 max-w-6xl mx-auto">

        <h2 className="text-2xl font-semibold text-[#003781] mb-8">
          Explore Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* CARD LIST */}
          {[
            { name: "Learning Hub", link: "/learn" },
            { name: "Survey", link: "/survey" },
            { name: "Recommendations", link: "/guidance" },
            { name: "Local Support", link: "/support" },
            { name: "WhatsApp Bot", link: "/whatsapp" },
            { name: "Application Process", link: "/process" }
          ].map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="bg-white p-6 rounded-2xl shadow-md border border-[#DDE2E9] 
                         hover:shadow-xl hover:-translate-y-1 transition cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-[#003781]">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Click to open
              </p>
            </Link>
          ))}

        </div>
      </section>
    </div>
  );
}
