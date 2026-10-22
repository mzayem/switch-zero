"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function numberValue(value: string) {
  const parsed = Number(value.replace(/,/g, ""));
  return Number.isFinite(parsed) ? parsed : 0;
}

export function SavingsCalculator() {
  const [electricity, setElectricity] = useState("100000");
  const [gas, setGas] = useState("0");
  const [electricityRate, setElectricityRate] = useState("25");
  const [gasRate, setGasRate] = useState("7");
  const [comparisonElectricity, setComparisonElectricity] = useState("23.5");
  const [comparisonGas, setComparisonGas] = useState("6.5");
  const [standing, setStanding] = useState("1200");

  const result = useMemo(() => {
    const current =
      (numberValue(electricity) * numberValue(electricityRate)) / 100 +
      (numberValue(gas) * numberValue(gasRate)) / 100 +
      numberValue(standing);
    const comparison =
      (numberValue(electricity) * numberValue(comparisonElectricity)) / 100 +
      (numberValue(gas) * numberValue(comparisonGas)) / 100 +
      numberValue(standing);
    const difference = current - comparison;
    return {
      current,
      comparison,
      difference,
      monthly: difference / 12,
      percent: current > 0 ? (difference / current) * 100 : 0,
    };
  }, [
    electricity,
    gas,
    electricityRate,
    gasRate,
    comparisonElectricity,
    comparisonGas,
    standing,
  ]);

  const money = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  });

  return (
    <div className="calculator-grid">
      <div className="calculator-fields">
        <p className="calculator-note">
          Editable example inputs. Replace them with your figures.
        </p>
        <div className="form-grid three">
          <label>
            Electricity use (kWh)
            <Input
              inputMode="decimal"
              value={electricity}
              onInput={(e) => setElectricity(e.currentTarget.value)}
            />
          </label>
          <label>
            Current electricity rate (p/kWh)
            <Input
              inputMode="decimal"
              value={electricityRate}
              onInput={(e) => setElectricityRate(e.currentTarget.value)}
            />
          </label>
          <label>
            Comparison rate (p/kWh)
            <Input
              inputMode="decimal"
              value={comparisonElectricity}
              onInput={(e) => setComparisonElectricity(e.currentTarget.value)}
            />
          </label>
          <label>
            Gas use (kWh)
            <Input
              inputMode="decimal"
              value={gas}
              onInput={(e) => setGas(e.currentTarget.value)}
            />
          </label>
          <label>
            Current gas rate (p/kWh)
            <Input
              inputMode="decimal"
              value={gasRate}
              onInput={(e) => setGasRate(e.currentTarget.value)}
            />
          </label>
          <label>
            Comparison rate (p/kWh)
            <Input
              inputMode="decimal"
              value={comparisonGas}
              onInput={(e) => setComparisonGas(e.currentTarget.value)}
            />
          </label>
          <label>
            Annual standing charges (£)
            <Input
              inputMode="decimal"
              value={standing}
              onInput={(e) => setStanding(e.currentTarget.value)}
            />
          </label>
        </div>
      </div>
      <div className="calculator-result" aria-live="polite">
        <p className="eyebrow dark">Illustrative comparison</p>
        <div className="result-line">
          <span>Current estimated annual cost</span>
          <b>{money.format(result.current)}</b>
        </div>
        <div className="result-line">
          <span>Comparison scenario</span>
          <b>{money.format(result.comparison)}</b>
        </div>
        <div className="result-main">
          <span>Possible annual difference</span>
          <strong>{money.format(result.difference)}</strong>
          <small>
            {money.format(result.monthly)} per month ·{" "}
            {result.percent.toFixed(1)}%
          </small>
        </div>
        <Button
          className="w-full"
          nativeButton={false}
          render={<Link href="/contact?service=Full%20market%20review" />}
        >
          Request a full market review
        </Button>
        <p className="disclaimer">
          Figures are estimates for initial comparison only and do not represent
          a guaranteed quotation or saving. Actual pricing depends on market
          conditions, meter information, consumption and contract terms.
        </p>
      </div>
    </div>
  );
}
