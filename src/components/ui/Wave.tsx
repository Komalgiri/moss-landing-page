import { Reveal } from "@/components/Reveal";

export function Wave({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,30 C300,90 900,0 1200,30 L1200,120 L0,120 Z"
          fill="var(--tw-gradient-to, #f3f4f6)"
        />
      </svg>
    </div>
  );
}
