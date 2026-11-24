"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { mainNav } from "@/lib/site";
import { services, navServiceSlugs } from "@/lib/services";
import { Logo } from "./Logo";
import { cx } from "./ui";

const menuServices = navServiceSlugs.map((slug) => services.find((s) => s.slug === slug)!);

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLLIElement>(null);

  // Close menus on navigation
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setServicesOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={cx(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled ? "border-white/10 bg-ink/95 backdrop-blur-md" : "border-transparent bg-ink",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) =>
              "hasMenu" in item && item.hasMenu ? (
                <li
                  key={item.href}
                  ref={menuRef}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      className={cx(
                        "whitespace-nowrap rounded-full py-2 pl-3 pr-1 text-sm font-medium transition-colors",
                        isActive(item.href) ? "text-white" : "text-white/75 hover:text-white",
                      )}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-expanded={servicesOpen}
                      aria-controls="services-menu"
                      aria-label="Show services"
                      onClick={() => setServicesOpen((v) => !v)}
                      className="flex size-8 cursor-pointer items-center justify-center rounded-full text-white/75 hover:text-white"
                    >
                      <ChevronDown
                        aria-hidden
                        className={cx("size-4 transition-transform duration-200", servicesOpen && "rotate-180")}
                      />
                    </button>
                  </div>
                  <div
                    id="services-menu"
                    className={cx(
                      "absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-3 transition-all duration-200",
                      servicesOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0",
                    )}
                  >
                    <div className="grid grid-cols-2 gap-1 rounded-2xl border border-white/10 bg-charcoal p-3 shadow-2xl">
                      {menuServices.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-white/[0.05]"
                        >
                          <s.icon aria-hidden className="mt-0.5 size-5 shrink-0 text-brand-bright" />
                          <span>
                            <span className="block text-sm font-semibold text-white">{s.name}</span>
                            <span className="mt-0.5 line-clamp-1 block text-xs text-subtle-dark">
                              {s.hero.title}
                            </span>
                          </span>
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        className="col-span-2 mt-1 flex items-center justify-between rounded-xl bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white hover:bg-white/[0.08]"
                      >
                        View all services
                        <ArrowRight aria-hidden className="size-4 text-brand-bright" />
                      </Link>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cx(
                      "whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors",
                      isActive(item.href) ? "text-white" : "text-white/75 hover:text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/quote"
            className="hidden min-h-11 items-center rounded-full bg-brand-strong px-5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-hover sm:inline-flex"
          >
            Get a Quote
          </Link>
          <button
            type="button"
            className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-white hover:bg-white/10 xl:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cx(
          "fixed inset-x-0 bottom-0 top-18 overflow-y-auto bg-ink transition-all duration-300 xl:hidden",
          mobileOpen ? "visible opacity-100" : "invisible -translate-y-2 opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="px-4 pb-10 pt-4 sm:px-6">
          <ul className="divide-y divide-white/10">
            {mainNav.map((item) =>
              "hasMenu" in item && item.hasMenu ? (
                <li key={item.href} className="py-1">
                  <div className="flex items-center justify-between">
                    <Link href={item.href} className="block py-3 text-lg font-medium text-white">
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-expanded={mobileServicesOpen}
                      aria-label="Toggle services list"
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      className="flex size-11 cursor-pointer items-center justify-center text-white"
                    >
                      <ChevronDown
                        aria-hidden
                        className={cx("size-5 transition-transform", mobileServicesOpen && "rotate-180")}
                      />
                    </button>
                  </div>
                  <div
                    className={cx(
                      "grid transition-[grid-template-rows] duration-300",
                      mobileServicesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <ul className="overflow-hidden">
                      {menuServices.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            className="flex items-center gap-3 py-2.5 pl-2 text-[0.95rem] text-white/80 hover:text-white"
                          >
                            <s.icon aria-hidden className="size-4 text-brand-bright" />
                            {s.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className="block py-4 text-lg font-medium text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
          <Link
            href="/quote"
            className="mt-6 flex min-h-12 items-center justify-center rounded-full bg-brand-strong text-sm font-semibold uppercase tracking-wide text-white"
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
