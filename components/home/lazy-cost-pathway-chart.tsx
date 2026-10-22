"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// Recharts is the heaviest library on the site, and this chart sits far down
// the homepage. Its code is only fetched once the visitor scrolls near it;
// until then a placeholder of the same size holds the space, so nothing
// shifts when it arrives.
function ChartPlaceholder() {
  return (
    <div className="pathway-bars" aria-hidden="true">
      <div className="pathway-chart-placeholder" />
    </div>
  );
}

const CostPathwayChart = dynamic(
  () => import("./cost-pathway-chart").then((m) => m.CostPathwayChart),
  { ssr: false, loading: ChartPlaceholder },
);

export function LazyCostPathwayChart() {
  const ref = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setNear(true);
        observer.disconnect();
      },
      { rootMargin: "600px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  if (near) return <CostPathwayChart />;
  return (
    <div ref={ref}>
      <ChartPlaceholder />
    </div>
  );
}
