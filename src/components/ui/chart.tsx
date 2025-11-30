"use client";

import * as React from "react";
import {
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { cn } from "./utils";

/* -------------------------------------------------------------------
   Chart Container
------------------------------------------------------------------- */

export function ChartContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("w-full h-full", className)}>
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  );
}

/* -------------------------------------------------------------------
   Tooltip (React 19 + Recharts 2.12 compatible)
------------------------------------------------------------------- */

export function ChartTooltipContent({ active, payload, label }: any) {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="rounded border bg-white px-3 py-2 shadow text-xs">
      {label && <div className="font-semibold mb-1">{label}</div>}

      {payload.map((item: any, index: number) => (
        <div
          key={index}
          className="flex justify-between items-center gap-2"
        >
          <span className="text-muted-foreground">
            {item.name}
          </span>
          <span className="font-mono font-medium">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}

export function ChartTooltip() {
  return <Tooltip content={<ChartTooltipContent />} />;
}

/* -------------------------------------------------------------------
   Legend
------------------------------------------------------------------- */
export function ChartLegend() {
  return <Legend />;
}
