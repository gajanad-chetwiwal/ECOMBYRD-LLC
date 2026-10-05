/**
 * Oversized display type ghosted into a section background — the words are
 * decorative texture, never content, so they're hidden from assistive tech.
 * The parent section must be `relative overflow-hidden`: lines are sized to
 * bleed slightly past the viewport edges and rely on the parent to clip them.
 */

// Space Grotesk bold measures ~0.52em per uppercase glyph. Sizing off the longest
// line keeps every line filling roughly the same width — a short word and a
// long one both bleed by the same amount instead of one floating in the middle.
const GLYPH_RATIO = 0.52;
const TARGET_WIDTH_VW = 108;

export default function GhostType({
  lines,
  align = "center",
  className = "",
}: {
  lines: string[];
  align?: "left" | "center" | "right";
  className?: string;
}) {
  const longest = Math.max(...lines.map((l) => l.length), 1);
  const vw = Math.min(36, TARGET_WIDTH_VW / (longest * GLYPH_RATIO));

  const alignment =
    align === "left" ? "items-start" : align === "right" ? "items-end" : "items-center";

  return (
    <div
      aria-hidden="true"
      className={`ghost-type pointer-events-none absolute inset-0 select-none ${className}`}
    >
      <div className={`flex h-full flex-col justify-center ${alignment}`}>
        {lines.map((line) => (
          <span
            key={line}
            className="ghost-type__line font-display"
            style={{ fontSize: `clamp(3.25rem, ${vw.toFixed(2)}vw, 42rem)` }}
          >
            {line}
          </span>
        ))}
      </div>
    </div>
  );
}
