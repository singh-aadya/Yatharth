import { useAppContext } from "../context/AppContext";

export default function ProcessGuidance() {
  const { language, userName } = useAppContext();

  const titleText =
    language === "hi"
      ? "बीमा प्रक्रिया मार्गदर्शन"
      : language === "pa"
      ? "ਬੀਮਾ ਪ੍ਰਕਿਰਿਆ ਮਾਰਗਦਰਸ਼ਨ"
      : "Insurance Process Guidance";

  const subtitleText =
    language === "hi"
      ? "नीचे दिए गए चरण आपको खरीदारी, दस्तावेज़ और दावा प्रक्रिया को समझने में मदद करेंगे।"
      : language === "pa"
      ? "ਹੇਠਾਂ ਦਿੱਤੇ ਕਦਮ ਤੁਹਾਨੂੰ ਖਰੀਦ, ਦਸਤਾਵੇਜ਼ ਅਤੇ ਕਲੇਮ ਪ੍ਰਕਿਰਿਆ ਨੂੰ ਸਮਝਣ ਵਿੱਚ ਮਦਦ ਕਰਦੇ ਹਨ।"
      : "The steps below will help you understand purchase, documents, and claims.";

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
      <p className="text-gray-600 mb-10">{subtitleText}</p>

      {/* Step List */}
      <div className="max-w-4xl mx-auto space-y-8">

        {/* STEP 1 */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-[#DDE2E9]">
          <h3 className="text-xl font-semibold mb-2">1. Understand Your Coverage</h3>
          <p className="text-gray-600">
            Before buying a policy, understand the type of risk it covers: crop loss, accident,
            health, livestock, or savings-based plans. Choose one that matches your work and income pattern.
          </p>
        </div>

        {/* STEP 2 */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-[#DDE2E9]">
          <h3 className="text-xl font-semibold mb-2">2. Check Eligibility</h3>
          <p className="text-gray-600">
            Each scheme has eligibility requirements — age, work type, income category, or land ownership (for farmers).
            Make sure you fall under the required group.
          </p>
        </div>

        {/* STEP 3 */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-[#DDE2E9]">
          <h3 className="text-xl font-semibold mb-2">3. Collect Required Documents</h3>
          <ul className="list-disc ml-6 text-gray-600">
            <li>Aadhaar Card</li>
            <li>Bank Passbook</li>
            <li>Land Records (for crop insurance)</li>
            <li>Livestock Tag / Photo (for animal insurance)</li>
            <li>Any previous policy documents</li>
          </ul>
        </div>

        {/* STEP 4 */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-[#DDE2E9]">
          <h3 className="text-xl font-semibold mb-2">4. Submit Application</h3>
          <p className="text-gray-600">
            You can apply through a local CSC center, BC Sakhi, government office, or an insurance agent.
            Some schemes also support online applications through official portals.
          </p>
        </div>

        {/* STEP 5 */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-[#DDE2E9]">
          <h3 className="text-xl font-semibold mb-2">5. Verify & Pay Premium</h3>
          <p className="text-gray-600">
            After submitting documents, the insurer verifies your details. 
            Once approved, pay the premium amount (online or at the center). 
            Always keep the receipt safely.
          </p>
        </div>

        {/* STEP 6 */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-[#DDE2E9]">
          <h3 className="text-xl font-semibold mb-2">6. Claim Process</h3>
          <p className="text-gray-600">
            In case of loss or damage, raise a claim with supporting documents:
            photos, death certificate (livestock), hospital bills (health), or crop loss evidence.
          </p>
          <p className="text-gray-600 mt-2">
            Claims can be filed at local centers or via official portals (where available).
          </p>
        </div>

        {/* STEP 7 */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-[#DDE2E9]">
          <h3 className="text-xl font-semibold mb-2">7. Track Your Status</h3>
          <p className="text-gray-600">
            After submitting a claim or application, check the status regularly. 
            Some schemes offer SMS updates, while others require checking via CSC or insurer portal.
          </p>
        </div>
      </div>
    </div>
  );
}
