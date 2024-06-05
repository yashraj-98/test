import { cn } from "@/lib/utils";

interface SpinnerProps {
  size: string;
}
const Spinner = ({ size }: SpinnerProps) => {
  return (
    <div
      className={cn(
        "border-2 rounded-full border-t-foreground animate-spin",
        size === "large" ? "w-20 h-20" : "w-12 h-12"
      )}
    />
  );
};

export default Spinner;
