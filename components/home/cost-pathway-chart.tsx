"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Bar, BarChart, LabelList, Text, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

// Illustrative only: bar widths show relative cost, not a saving promise.
const steps = [
  { label: "Current supply cost", cost: 100, note: "Starting point" },
  { label: "New commercial contract", cost: 92, note: "Illustrative step" },
  { label: "Consumption reduction", cost: 84, note: "Illustrative step" },
  { label: "Solar generation", cost: 72, note: "Illustrative step" },
  {
    label: "Battery storage where suitable",
    cost: 66,
    note: "Illustrative step",
  },
  { label: "Ongoing monitoring", cost: 63, note: "Illustrative step" },
];
type Step = (typeof steps)[number];

const chartConfig = {
  cost: { label: "Relative cost", color: "var(--green)" },
} satisfies ChartConfig;

// Column widths per breakpoint, matching the previous CSS grid
// (label | bar | note) at >820px, ≤820px and ≤560px.
const layouts = {
  desktop: { label: 160, gap: 14, note: 90, bar: 28, labelSize: 11 },
  tablet: { label: 135, gap: 14, note: 0, bar: 28, labelSize: 11 },
  mobile: { label: 115, gap: 9, note: 0, bar: 22, labelSize: 9 },
};
const rowGap = 14;
// Recharts measures text to wrap it; give it the real site font.
const fontFamily = "var(--font-manrope), Arial, sans-serif";

function subscribe(callback: () => void) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

function useLayout() {
  const key = useSyncExternalStore(
    subscribe,
    () =>
      window.matchMedia("(max-width: 560px)").matches
        ? "mobile"
        : window.matchMedia("(max-width: 820px)").matches
          ? "tablet"
          : "desktop",
    () => "desktop" as const,
  );
  return layouts[key];
}

// The bar grow-in is JavaScript-driven, so the global CSS reduced-motion rule
// does not reach it.
function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (callback) => {
      const query = window.matchMedia("(prefers-reduced-motion: reduce)");
      query.addEventListener("change", callback);
      return () => query.removeEventListener("change", callback);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

type TickProps = {
  y?: number | string;
  payload?: { value: string };
  width?: number;
  fontSize?: number;
};

// Step names, left-aligned in their own column and wrapped like the old HTML.
function LabelTick({ y, payload, width, fontSize }: TickProps) {
  return (
    <Text
      x={0}
      y={Number(y)}
      width={width}
      verticalAnchor="middle"
      lineHeight="1.55em"
      className="pathway-label"
      style={{ fontSize: `${fontSize}px`, fontWeight: 700, fontFamily }}
    >
      {payload?.value}
    </Text>
  );
}

type NoteProps = {
  x?: number | string;
  y?: number | string;
  width?: number | string;
  height?: number | string;
  index?: number;
  gap: number;
  noteWidth: number;
};

// "Starting point" / "Illustrative step", in a fixed column after the bars.
// The bar's own width at its value gives the full plot width (domain 0-100).
function NoteLabel({
  x,
  y,
  width,
  height,
  index = 0,
  gap,
  noteWidth,
}: NoteProps) {
  const step = steps[index];
  const barWidth = Number(width);
  if (!step || !barWidth) return null;
  const plotRight = Number(x) + (barWidth / step.cost) * 100;
  return (
    <Text
      x={plotRight + gap}
      y={Number(y) + Number(height) / 2}
      width={noteWidth}
      verticalAnchor="middle"
      lineHeight="1.55em"
      className="pathway-note"
      style={{
        fontSize: "9px",
        fontWeight: 700,
        fontFamily,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
      }}
    >
      {step.note}
    </Text>
  );
}

export function CostPathwayChart() {
  const layout = useLayout();
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Grow the bars from zero once the chart scrolls into view.
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const data = steps.map((step) => ({
    ...step,
    cost: visible ? step.cost : 0,
  }));
  const height = steps.length * (layout.bar + rowGap) + rowGap;
  const noteColumn = layout.note ? layout.note + layout.gap : 0;

  return (
    <div ref={ref} className="pathway-bars">
      <ChartContainer
        config={chartConfig}
        className="pathway-chart"
        style={{ height }}
        role="img"
        aria-label="Illustrative cost reduction pathway"
      >
        <BarChart
          data={data}
          layout="vertical"
          margin={{
            top: rowGap / 2,
            right: noteColumn,
            bottom: rowGap / 2,
            left: 0,
          }}
          barCategoryGap={rowGap}
          accessibilityLayer
        >
          <defs>
            <linearGradient id="pathway-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--navy)" />
              <stop offset="100%" stopColor="var(--color-cost)" />
            </linearGradient>
          </defs>
          <XAxis type="number" domain={[0, 100]} hide />
          <YAxis
            type="category"
            dataKey="label"
            width={layout.label + layout.gap}
            axisLine={false}
            tickLine={false}
            tick={
              <LabelTick width={layout.label} fontSize={layout.labelSize} />
            }
            interval={0}
          />
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                className="pathway-tooltip"
                hideIndicator
                labelFormatter={(_, payload) =>
                  (payload[0]?.payload as Step | undefined)?.label
                }
                formatter={(_, __, item) => (
                  <span className="pathway-tooltip-note">
                    {(item.payload as Step).note}
                  </span>
                )}
              />
            }
          />
          <Bar
            dataKey="cost"
            fill="url(#pathway-gradient)"
            radius={6}
            barSize={layout.bar}
            isAnimationActive={!reducedMotion}
            animationDuration={900}
            animationEasing="ease-out"
          >
            {noteColumn > 0 && (
              <LabelList
                dataKey="note"
                content={<NoteLabel gap={layout.gap} noteWidth={layout.note} />}
              />
            )}
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  );
}
