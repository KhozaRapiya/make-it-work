import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

/**
 * Make IT Work logo. The supplied artwork sits on solid black, so it is shown
 * on dark surfaces only; `mix-blend-lighten` lets the black melt into the
 * near-black brand background with no visible box.
 * variant "horizontal" = header lockup, "stacked" = full logo with tagline.
 */
export function Logo({
  variant = "horizontal",
  className = "",
}: {
  variant?: "horizontal" | "stacked";
  className?: string;
}) {
  const img = siteConfig.logo[variant];
  return (
    <Link href="/" aria-label="Make IT Work — home" className={`inline-flex items-center ${className}`}>
      <Image
        src={img.src}
        alt="Make IT Work"
        width={img.width}
        height={img.height}
        priority={variant === "horizontal"}
        className={`w-auto mix-blend-lighten ${variant === "horizontal" ? "h-9 sm:h-10" : "h-28"}`}
      />
    </Link>
  );
}
