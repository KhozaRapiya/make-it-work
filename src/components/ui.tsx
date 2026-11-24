import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

function cx(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
export { cx };

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cx("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

type Tone = "light" | "mist" | "dark";

export function Section({
  tone = "light",
  className,
  id,
  children,
  labelledBy,
}: {
  tone?: Tone;
  className?: string;
  id?: string;
  children: ReactNode;
  labelledBy?: string;
}) {
  const tones: Record<Tone, string> = {
    light: "bg-paper text-ink",
    mist: "bg-mist text-ink",
    dark: "bg-ink text-white",
  };
  return (
    <section id={id} aria-labelledby={labelledBy} className={cx("py-20 sm:py-24 lg:py-28", tones[tone], className)}>
      {children}
    </section>
  );
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={cx(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]",
        dark ? "text-brand-bright" : "text-brand-strong",
      )}
    >
      <span aria-hidden className="h-px w-6 bg-brand" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
  dark = false,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
  dark?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cx("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2 id={id} className="mt-4 text-3xl font-semibold sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {intro && (
        <p className={cx("mt-5 text-lg leading-relaxed", dark ? "text-subtle-dark" : "text-subtle")}>{intro}</p>
      )}
    </div>
  );
}

type Variant = "primary" | "outline-light" | "outline-dark" | "ghost-dark" | "ghost-light";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-strong text-white hover:bg-brand-hover shadow-[0_8px_24px_-10px_rgb(237_17_28/0.7)]",
  "outline-light": "border border-white/25 text-white hover:border-white hover:bg-white/5",
  "outline-dark": "border border-ink/20 text-ink hover:border-ink hover:bg-ink/[0.03]",
  "ghost-dark": "text-ink hover:text-brand-strong px-0",
  "ghost-light": "text-white hover:text-brand-bright px-0",
};

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
  arrow = false,
  ...rest
}: ComponentProps<typeof Link> & { variant?: Variant; arrow?: boolean }) {
  return (
    <Link
      href={href}
      className={cx(
        "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-semibold transition-colors duration-200",
        variants[variant],
        className,
      )}
      {...rest}
    >
      {children}
      {arrow && (
        <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </Link>
  );
}

export function IconBadge({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={cx(
        "inline-flex size-12 shrink-0 items-center justify-center rounded-xl",
        dark ? "bg-white/[0.06] text-brand-bright ring-1 ring-white/10" : "bg-brand-soft text-brand-strong",
      )}
    >
      {children}
    </span>
  );
}
