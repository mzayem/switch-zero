import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function Choices({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <RadioGroup
      className="choices"
      aria-label={label}
      value={value}
      onValueChange={(option) => onChange(option as string)}
    >
      {options.map((option) => (
        <label
          key={option}
          className={`choice ${value === option ? "selected" : ""}`}
        >
          <span>{option}</span>
          <RadioGroupItem value={option} />
        </label>
      ))}
    </RadioGroup>
  );
}
