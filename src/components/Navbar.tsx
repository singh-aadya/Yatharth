import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import Logo from "../components/Logo";



export default function Navbar() {
  const { language, setLanguage, userName } = useAppContext();
 
  return (
    

    <header className="w-full bg-white shadow-sm py-4 px-8 flex justify-between items-center">
      <Link to="/" className="flex items-center px-6 py-4 shadow bg-white">
        <Logo size={46} />
      </Link>
      <Link to="/" className="text-2xl font-bold text-[#003781]">
        Yatharth
      </Link>

      <div className="flex items-center gap-4">
        {userName && (
          <span className="text-[#003781] font-medium">Hi, {userName}</span>
        )}

        <select
          className="border border-[#DDE2E9] rounded-lg px-3 py-1"
          value={language}
          onChange={(e) => setLanguage(e.target.value as any)}
        >
          <option value="en">EN</option>
          <option value="hi">HI</option>
          <option value="pa">PA</option>
        </select>
      </div>
    </header>
  );
}
