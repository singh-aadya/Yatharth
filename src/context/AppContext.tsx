import { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "hi" | "pa";

type SurveyAnswers = Record<string, string>;

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;

  userName: string;
  setUserName: (name: string) => void;

  surveyAnswers: SurveyAnswers;
  setSurveyAnswers: (answers: SurveyAnswers) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [userName, setUserName] = useState("");
  const [surveyAnswers, setSurveyAnswers] = useState<SurveyAnswers>({});

  // Load from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) setLanguage(savedLang as Language);

    const savedName = localStorage.getItem("userName");
    if (savedName) setUserName(savedName);

    const savedSurvey = localStorage.getItem("surveyAnswers");
    if (savedSurvey) setSurveyAnswers(JSON.parse(savedSurvey));
  }, []);

  // Save on changes
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  useEffect(() => {
    if (userName.trim() !== "") {
      localStorage.setItem("userName", userName);
    }
  }, [userName]);

  useEffect(() => {
    if (Object.keys(surveyAnswers).length > 0) {
      localStorage.setItem("surveyAnswers", JSON.stringify(surveyAnswers));
    }
  }, [surveyAnswers]);

  return (
    <AppContext.Provider value={{ language, setLanguage, userName, setUserName, surveyAnswers, setSurveyAnswers }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be used inside <AppProvider>");
  return ctx;
}
