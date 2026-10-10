import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Design System Preview (Internal Dev)",
  description:
    "Internal testing and evaluation suite for typography scale, spacing rhythm, containers, radius, and shadows.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DesignSystemPreviewPage() {
  const spacingScale = [
    { name: "xs", rem: "0.25rem", px: "4px", widthClass: "w-1" },
    { name: "sm", rem: "0.5rem", px: "8px", widthClass: "w-2" },
    { name: "md", rem: "1rem", px: "16px", widthClass: "w-4" },
    { name: "lg", rem: "1.5rem", px: "24px", widthClass: "w-6" },
    { name: "xl", rem: "2rem", px: "32px", widthClass: "w-8" },
    { name: "2xl", rem: "3rem", px: "48px", widthClass: "w-12" },
    { name: "3xl", rem: "4rem", px: "64px", widthClass: "w-16" },
    { name: "4xl", rem: "5rem", px: "80px", widthClass: "w-20" },
    { name: "5xl", rem: "8rem", px: "128px", widthClass: "w-32" },
  ];

  const radiusScale = [
    { name: "rounded-sm", value: "6px", class: "rounded-sm" },
    { name: "rounded-md", value: "8px", class: "rounded-md" },
    { name: "rounded-lg", value: "10px", class: "rounded-lg" },
    { name: "rounded-xl", value: "14px", class: "rounded-xl" },
    { name: "rounded-2xl", value: "18px", class: "rounded-2xl" },
    { name: "rounded-3xl", value: "22px", class: "rounded-3xl" },
    { name: "rounded-full", value: "9999px", class: "rounded-full" },
  ];

  const shadowScale = [
    {
      name: "shadow-xs",
      desc: "Subtle boundary / Resting cards",
      class: "shadow-xs",
    },
    {
      name: "shadow-sm",
      desc: "Low elevation / Dropdown menus",
      class: "shadow-sm",
    },
    {
      name: "shadow-md",
      desc: "Medium elevation / Hovered cards",
      class: "shadow-md",
    },
    {
      name: "shadow-lg",
      desc: "High elevation / Floating search bar",
      class: "shadow-lg",
    },
    {
      name: "shadow-xl",
      desc: "Maximum elevation / Modals & sheets",
      class: "shadow-xl",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Banner */}
        <div className="p-4 rounded-xl border border-primary/30 bg-primary-subtle text-foreground space-y-1">
          <div className="flex items-center gap-2 font-semibold text-sm text-primary-subtle-foreground">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary" />
            INTERNAL DEVELOPMENT PREVIEW — DESIGN SYSTEM FOUNDATION &amp; BRAND TOKENS
          </div>
          <p className="text-xs text-muted-foreground">
            This preview validates the responsive typographic hierarchy, 4px-based spacing scale, border radius geometry,
            elevation depths, and synergy with the client&apos;s Pink &amp; Magenta brand tokens.
          </p>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <span className="type-overline text-primary">Foundation Architecture</span>
          <h1 className="type-h1 text-foreground">
            QbicTravel Design System Foundation
          </h1>
          <p className="type-body text-muted-foreground">
            Typography hierarchy, layout rhythm, spacing tokens, and visual density rules.
          </p>
        </div>

        {/* 1. TYPOGRAPHY HIERARCHY */}
        <section className="space-y-6">
          <div className="border-b border-border pb-3">
            <h2 className="type-h2 text-foreground">1. Typography Hierarchy</h2>
            <p className="type-body-sm text-muted-foreground">
              Responsive type scale with fluid clamp scaling for editorial travel headlines and readable body content.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-border bg-card space-y-8 divide-y divide-border">
            {/* Display */}
            <div className="pt-2 space-y-1">
              <span className="text-xs font-mono text-muted-foreground block">
                .type-display (ExtraBold 800 | 36px → 60px)
              </span>
              <p className="type-display text-foreground">
                Discover Extraordinary Journeys
              </p>
            </div>

            {/* H1 */}
            <div className="pt-6 space-y-1">
              <span className="text-xs font-mono text-muted-foreground block">
                .type-h1 (Bold 700 | 30px → 48px)
              </span>
              <h1 className="type-h1 text-foreground">
                Curated Travel Experiences Around the World
              </h1>
            </div>

            {/* H2 */}
            <div className="pt-6 space-y-1">
              <span className="text-xs font-mono text-muted-foreground block">
                .type-h2 (Bold 700 | 24px → 36px)
              </span>
              <h2 className="type-h2 text-foreground">
                Featured Destinations & Seasonal Escapes
              </h2>
            </div>

            {/* H3 */}
            <div className="pt-6 space-y-1">
              <span className="text-xs font-mono text-muted-foreground block">
                .type-h3 (SemiBold 600 | 20px → 24px)
              </span>
              <h3 className="type-h3 text-foreground">
                7-Day Amalfi Coast & Capri Private Yacht Tour
              </h3>
            </div>

            {/* H4 */}
            <div className="pt-6 space-y-1">
              <span className="text-xs font-mono text-muted-foreground block">
                .type-h4 (SemiBold 600 | 18px → 20px)
              </span>
              <h4 className="type-h4 text-foreground">
                Day 1: Arrival & Sunset Welcome Dinner in Sorrento
              </h4>
            </div>

            {/* H5 */}
            <div className="pt-6 space-y-1">
              <span className="text-xs font-mono text-muted-foreground block">
                .type-h5 (SemiBold 600 | 16px)
              </span>
              <h5 className="type-h5 text-foreground">
                Package Inclusions & Hotel Accommodation Specs
              </h5>
            </div>

            {/* Body Large */}
            <div className="pt-6 space-y-1">
              <span className="text-xs font-mono text-muted-foreground block">
                .type-body-lg (Regular 400 | 18px | Leading 1.6)
              </span>
              <p className="type-body-lg text-foreground">
                Immerse yourself in handpicked luxury stays, authentic local culinary expeditions,
                and breathtaking coastal landscapes curated by seasoned expedition leaders.
              </p>
            </div>

            {/* Body */}
            <div className="pt-6 space-y-1">
              <span className="text-xs font-mono text-muted-foreground block">
                .type-body (Regular 400 | 16px | Leading 1.6)
              </span>
              <p className="type-body text-foreground">
                All QbicTravel itineraries include five-star licensed local guides, airport transfers,
                and complimentary travel insurance coverage. Free cancellations are available up to 30 days before departure.
              </p>
            </div>

            {/* Body Small */}
            <div className="pt-6 space-y-1">
              <span className="text-xs font-mono text-muted-foreground block">
                .type-body-sm (Regular 400 | 14px | Leading 1.5)
              </span>
              <p className="type-body-sm text-muted-foreground">
                Departs every Tuesday and Friday from April through October. Maximum group size is strictly limited to 12 guests.
              </p>
            </div>

            {/* Caption & Overline */}
            <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <span className="text-xs font-mono text-muted-foreground block">
                  .type-caption (Regular 400 | 12px)
                </span>
                <p className="type-caption text-muted-foreground">
                  * Prices based on double occupancy. Government taxes and national park permits included.
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono text-muted-foreground block">
                  .type-overline (SemiBold 600 | 12px | Uppercase)
                </span>
                <span className="type-overline text-primary block">
                  Exclusive Signature Tour
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SPACING SCALE */}
        <section className="space-y-6">
          <div className="border-b border-border pb-3">
            <h2 className="type-h2 text-foreground">2. Spacing Scale</h2>
            <p className="type-body-sm text-muted-foreground">
              Predictable 4px-baseline spacing model from micro-gaps to expansive section rhythms.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-border bg-card space-y-4">
            <div className="space-y-3">
              {spacingScale.map((space) => (
                <div key={space.name} className="flex items-center gap-4 text-xs">
                  <span className="w-12 font-mono font-semibold text-foreground">
                    {space.name}
                  </span>
                  <span className="w-16 font-mono text-muted-foreground">
                    {space.rem}
                  </span>
                  <span className="w-12 font-mono text-muted-foreground">
                    {space.px}
                  </span>
                  <div className="flex-1 flex items-center">
                    <div className={`h-4 bg-primary/70 rounded-xs ${space.widthClass}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. BORDER RADIUS SYSTEM */}
        <section className="space-y-6">
          <div className="border-b border-border pb-3">
            <h2 className="type-h2 text-foreground">3. Border Radius Geometry</h2>
            <p className="type-body-sm text-muted-foreground">
              Restrained, modern rounding system avoiding overly playful bubbly corners.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {radiusScale.map((rad) => (
              <div
                key={rad.name}
                className={`p-4 border-2 border-primary/40 bg-card flex flex-col justify-between h-28 shadow-xs ${rad.class}`}
              >
                <div className="font-semibold text-xs text-foreground">{rad.name}</div>
                <div className="text-[11px] font-mono text-muted-foreground">
                  {rad.value}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. ELEVATION & SHADOW SYSTEM */}
        <section className="space-y-6">
          <div className="border-b border-border pb-3">
            <h2 className="type-h2 text-foreground">4. Elevation & Shadow System</h2>
            <p className="type-body-sm text-muted-foreground">
              Consistent depth perception for cards, menus, floating filters, and dialog overlays.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {shadowScale.map((sh) => (
              <div
                key={sh.name}
                className={`p-6 rounded-xl border border-border bg-card space-y-2 transition-shadow ${sh.class}`}
              >
                <div className="font-semibold text-sm text-foreground">{sh.name}</div>
                <p className="text-xs text-muted-foreground">{sh.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. CONTAINER ARCHITECTURE */}
        <section className="space-y-6">
          <div className="border-b border-border pb-3">
            <h2 className="type-h2 text-foreground">5. Container & Layout Strategy</h2>
            <p className="type-body-sm text-muted-foreground">
              Standardized containers that maintain consistent horizontal gutters across device sizes.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-border bg-card space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm text-foreground">.container-narrow</span>
                <span className="text-xs font-mono text-muted-foreground">max-w-4xl (896px)</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Optimized for single-column reading, booking checkouts, and user profile management.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border bg-card space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm text-foreground">.container-page</span>
                <span className="text-xs font-mono text-muted-foreground">max-w-7xl (1280px)</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Standard page container for destination cards, search listings, and review showcases.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-border bg-card space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm text-foreground">.container-wide</span>
                <span className="text-xs font-mono text-muted-foreground">max-w-2xl (1536px)</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Full-bleed hero banners, photo galleries, and edge-to-edge travel carousels.
              </p>
            </div>
          </div>
        </section>

        {/* 6. UI DENSITY & COLOR SYNERGY EVALUATION */}
        <section className="space-y-6">
          <div className="border-b border-border pb-3">
            <h2 className="type-h2 text-foreground">
              6. UI Density & Color Synergy Evaluation
            </h2>
            <p className="type-body-sm text-muted-foreground">
              Validating how typography, spacing, radius, and centralized semantic tokens interact together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sample Card */}
            <div className="p-6 rounded-xl border border-border bg-card shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="subtle">Featured Expedition</Badge>
                <span className="type-caption text-muted-foreground">10 Days / 9 Nights</span>
              </div>

              <div className="space-y-1">
                <h3 className="type-h3 text-foreground">
                  Icelandic Aurora & Glacier Traverse
                </h3>
                <p className="type-body-sm text-muted-foreground">
                  Explore remote ice caves, geothermal lagoons, and pristine volcanic terrain under the Northern Lights.
                </p>
              </div>

              <div className="pt-3 border-t border-border flex items-center justify-between">
                <div>
                  <span className="type-caption text-muted-foreground block">Starting from</span>
                  <span className="type-h3 text-foreground font-bold">$2,850</span>
                </div>
                <Button size="default">View Tour Details</Button>
              </div>
            </div>

            {/* Touch Target & Density Verification */}
            <div className="p-6 rounded-xl border border-border bg-card shadow-sm space-y-4">
              <h4 className="type-h4 text-foreground">
                Accessibility & Touch Target Standards
              </h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success" />
                  Primary touch targets adhere to min 44px × 44px on mobile devices.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success" />
                  Body line-height set to 1.6 for enhanced reading comfort.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success" />
                  Headings use fluid clamp() scaling, preventing text wrapping collisions.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success" />
                  Focus rings visible with 3px width and high-contrast outline.
                </li>
              </ul>
              <div className="pt-2 flex gap-3">
                <Button variant="outline" size="sm">
                  Secondary Action
                </Button>
                <Button variant="ghost" size="sm">
                  Dismiss
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
