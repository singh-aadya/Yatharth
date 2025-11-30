import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { AppProvider } from "./context/AppContext";

// Pages
import HomePage from "./pages/HomePage";
import LearningHub from "./pages/LearningHub";
import SurveyFlow from "./pages/SurveyFlow";
import GuidancePage from "./pages/GuidancePage";
import ProcessGuidance from "./pages/ProcessGuidance";
import WhatsAppBot from "./pages/WhatsAppBot";
import LocalSupport from "./pages/LocalSupport";
import NotificationPreferences from "./pages/NotificationPreferences";
import SchemeDetailsPage from "./pages/SchemeDetailsPage";
import ProfilePage from "./pages/ProfilePage";
import SavedItemsPage from "./pages/SavedItemsPage";
import FAQPage from "./pages/FAQPage";
import AboutPage from "./pages/AboutPage";
import ErrorFallbackPage from "./pages/ErrorFallbackPage";
import LearningPage from "./pages/LearningPage";

export default function App() {
  return (
    <AppProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/learn" element={<LearningHub />} />
          <Route path="/survey" element={<SurveyFlow />} />
          <Route path="/guidance" element={<GuidancePage />} />
          <Route path="/process" element={<ProcessGuidance />} />
          <Route path="/whatsapp" element={<WhatsAppBot />} />
          <Route path="/support" element={<LocalSupport />} />
          <Route path="/notifications" element={<NotificationPreferences />} />
          <Route path="/scheme/:id" element={<SchemeDetailsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/saved" element={<SavedItemsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<ErrorFallbackPage />} />
          <Route path="/Know" element={<LearningPage />} />

        </Routes>
      </Layout>
    </AppProvider>
  );
}
