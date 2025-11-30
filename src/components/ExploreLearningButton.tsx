import React from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ExploreLearningButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/know")}
      className="w-full md:w-auto bg-[#003781] text-white px-6 py-3 rounded-xl font-semibold 
                 flex items-center gap-2 shadow hover:bg-[#002A5D] transition"
    >
      Know Your Protection
      <ChevronRight size={20} />
    </button>
  );
}
