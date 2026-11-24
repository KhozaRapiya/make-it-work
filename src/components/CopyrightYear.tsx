"use client";

import { useEffect, useState } from "react";

/** Current year, set after mount so pages can be fully prerendered. */
export function CopyrightYear() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <span>{year ?? ""}</span>;
}
