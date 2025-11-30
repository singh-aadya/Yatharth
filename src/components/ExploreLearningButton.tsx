import React from "react";
import { ChevronRight } from "lucide-react";

export default function ExploreLearningButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full md:w-auto bg-[#003781] text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow hover:bg-[#002A5D] transition"
    >
      Know Your Protection 
      <ChevronRight size={20} />
    </button>
  );
}
