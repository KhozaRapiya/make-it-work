import { Cloud, ChartNoAxesCombined, LayoutGrid, Server, ShieldCheck, Laptop, CheckCircle2 } from "lucide-react";

/**
 * Hero illustration: a connected business-systems map rendered in code
 * (crisp at any size, no stock photo). Shows the services working together.
 * Purely decorative; contains no statistics or claims.
 */
const nodes = [
  { icon: Cloud, label: "Cloud", x: "2%", y: "12%" },
  { icon: LayoutGrid, label: "Microsoft 365", x: "60%", y: "5%" },
  { icon: ChartNoAxesCombined, label: "Dynamics GP", x: "60%", y: "84%" },
  { icon: Laptop, label: "Devices", x: "0%", y: "76%" },
];

export function HeroVisual() {
  return (
    <div aria-hidden className="relative mx-auto aspect-square w-full max-w-[520px] select-none">
      {/* connection lines */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 size-full" fill="none">
        <defs>
          <linearGradient id="hv-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ED111C" stopOpacity="0.9" />
            <stop offset="1" stopColor="#ED111C" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="150" stroke="white" strokeOpacity="0.08" />
        <circle cx="200" cy="200" r="100" stroke="white" strokeOpacity="0.08" strokeDasharray="3 6" />
        <path d="M45 60 Q 120 110 200 200" stroke="url(#hv-line)" strokeWidth="1.5" />
        <path d="M290 32 Q 270 120 200 200" stroke="url(#hv-line)" strokeWidth="1.5" />
        <path d="M300 345 Q 280 260 200 200" stroke="url(#hv-line)" strokeWidth="1.5" />
        <path d="M40 315 Q 120 280 200 200" stroke="url(#hv-line)" strokeWidth="1.5" />
        <g className="motion-reduce:hidden">
          <circle r="3" fill="#ED111C">
            <animateMotion dur="4s" repeatCount="indefinite" path="M45 60 Q 120 110 200 200" />
          </circle>
          <circle r="3" fill="#ED111C">
            <animateMotion dur="5s" repeatCount="indefinite" path="M300 345 Q 280 260 200 200" />
          </circle>
        </g>
      </svg>

      {/* core */}
      <div className="absolute left-1/2 top-1/2 w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-charcoal/90 p-4 shadow-2xl backdrop-blur">
        <div className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-brand-strong">
            <Server className="size-4 text-white" />
          </span>
          <div>
            <p className="text-[0.7rem] font-semibold text-white">Your business</p>
            <p className="text-[0.6rem] text-subtle-dark">Connected systems</p>
          </div>
        </div>
        <ul className="mt-3 space-y-1.5">
          {["Infrastructure", "Productivity", "Finance & ERP"].map((t) => (
            <li key={t} className="flex items-center gap-1.5 text-[0.62rem] text-white/80">
              <CheckCircle2 className="size-3 text-brand-bright" />
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-3 flex items-center gap-1.5 border-t border-white/10 pt-2.5">
          <ShieldCheck className="size-3 text-brand-bright" />
          <span className="text-[0.6rem] font-medium text-white/80">Supported end to end</span>
        </div>
      </div>

      {/* satellites */}
      {nodes.map(({ icon: Icon, label, x, y }) => (
        <div
          key={label}
          className="absolute flex items-center gap-2 rounded-xl border border-white/10 bg-ink/80 px-3 py-2 shadow-xl backdrop-blur"
          style={{ left: x, top: y }}
        >
          <Icon className="size-4 text-brand-bright" />
          <span className="whitespace-nowrap text-[0.7rem] font-medium text-white">{label}</span>
        </div>
      ))}

    </div>
  );
}
