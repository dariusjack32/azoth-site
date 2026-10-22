/**
 * /arch/record.csv — the full company record behind /arch/, one row per company, with its sources.
 * Built at compile time from src/data/arch.ts, so the page and the file can never disagree.
 */
import type { APIRoute } from "astro";
import { AS_OF, areas, hubOf, record, sources, statusLabel } from "../../data/arch";

const areaName = Object.fromEntries(areas.map((a) => [a.id, a.name]));
const url = Object.fromEntries(sources.map((s) => [s.id, s.url]));

const cell = (v: string | boolean | undefined) => {
  const s = v === undefined ? "" : String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

export const GET: APIRoute = () => {
  const header = [
    "company",
    "area",
    "primary_city",
    "location",
    "description",
    "status",
    "listing_or_exit",
    "on_published_list",
    "record_change",
    "change_date",
    "sources",
    "as_of",
  ];
  const lines = record.map((c) =>
    [
      c.name,
      areaName[c.area],
      c.city,
      hubOf(c.city),
      c.what,
      statusLabel[c.status],
      c.ticker ?? c.exit ?? "",
      c.listed ? "yes" : "no",
      c.change ? `${c.change.was} → ${c.change.now}` : "",
      c.change?.date ?? "",
      c.src.map((id) => url[id]).join(" | "),
      AS_OF,
    ]
      .map(cell)
      .join(","),
  );
  // Byte-order mark so Excel opens the UTF-8 (arrows, curly quotes) correctly.
  const body = "﻿" + [header.join(","), ...lines].join("\r\n") + "\r\n";
  return new Response(body, { headers: { "Content-Type": "text/csv; charset=utf-8" } });
};
