import React from "react";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export default function Marquee({ children, speed = 30, className = "" }: MarqueeProps) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className="inline-block animate-marquee"
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
    </div>
  );
}
