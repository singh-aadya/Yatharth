export default function Logo({ size = 48 }: { size?: number }) {
  return (
    <div className="flex items-center gap-3 select-none">
      {/* ICON */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 46 46"
        xmlns="http://www.w3.org/2000/svg"
        className="rounded-xl"
      >
        <rect width="46" height="46" rx="12" fill="#003781" />

        {/* Shield */}
        <path
          d="M23 10 L34 15 V23 C34 30 29 36 23 38 C17 36 12 30 12 23 V15 Z"
          fill="white"
        />

        {/* Leaf */}
        <path
          d="M23 16 C19 20 19 27 23 31 C27 27 27 20 23 16Z"
          fill="#003781"
        />

        {/* Chat dot
        <circle cx="23" cy="25" r="2.3" fill="white" /> */}
      </svg>

      {/* TEXT */}
      <div className="flex flex-col leading-tight">
        <span className="text-2xl font-bold text-[#003781]">
          Yatharth
        </span>

        <span className="text-[11px] text-[#0050A0] tracking-wide">
          Rural Insurance Guidance
        </span>
      </div>
    </div>
  );
}
