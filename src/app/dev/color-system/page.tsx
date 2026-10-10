import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Color System Playground (Internal Dev)",
  description:
    "Internal testing playground for centralized semantic color tokens and client pink/magenta brand identity.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ColorSystemPlaygroundPage() {
  const brandCore = [
    { name: "Brand Pink / Primary", hex: "#EC407A", role: "Primary Brand / Active State / CTA", bg: "bg-brand-pink", text: "text-white" },
    { name: "Deep Pink / Hover", hex: "#DB2777", role: "Hover State / Deep Contrast", bg: "bg-brand-pink-deep", text: "text-white" },
    { name: "Light Pink / Accent", hex: "#F472B6", role: "Accent Highlight / Gradients", bg: "bg-brand-pink-light", text: "text-white" },
    { name: "Soft Pink / Subtle", hex: "#FCE7F3", role: "Subtle Surfaces / Badges", bg: "bg-brand-pink-soft", text: "text-brand-navy" },
    { name: "Dark Navy / Primary Text", hex: "#0F172A", role: "Primary Text / Hero Canvas", bg: "bg-brand-navy", text: "text-white" },
    { name: "White / Main Background", hex: "#FFFFFF", role: "Main Background / Pure Canvas", bg: "bg-white", text: "text-brand-navy", border: "border-border" },
  ];

  const brandScales = [
    { label: "50", hex: "#FDF2F8", bg: "bg-primary-50", text: "text-primary-950" },
    { label: "100", hex: "#FCE7F3", bg: "bg-primary-100", text: "text-primary-950" },
    { label: "200", hex: "#FBCFE8", bg: "bg-primary-200", text: "text-primary-950" },
    { label: "300", hex: "#F9A8D4", bg: "bg-primary-300", text: "text-primary-950" },
    { label: "400", hex: "#F472B6", bg: "bg-primary-400", text: "text-primary-950" },
    { label: "500 (Primary Base)", hex: "#EC407A", bg: "bg-primary-500", text: "text-white" },
    { label: "600", hex: "#DB2777", bg: "bg-primary-600", text: "text-white" },
    { label: "700", hex: "#BE185D", bg: "bg-primary-700", text: "text-white" },
    { label: "800", hex: "#9D174D", bg: "bg-primary-800", text: "text-white" },
    { label: "900", hex: "#831843", bg: "bg-primary-900", text: "text-white" },
    { label: "950", hex: "#500724", bg: "bg-primary-950", text: "text-white" },
  ];

  const semanticSwatches = [
    {
      name: "Primary",
      token: "--primary",
      bgClass: "bg-primary",
      textClass: "text-primary-foreground",
      borderClass: "border-transparent",
    },
    {
      name: "Primary Hover",
      token: "--primary-hover",
      bgClass: "bg-primary-hover",
      textClass: "text-white",
      borderClass: "border-transparent",
    },
    {
      name: "Primary Subtle",
      token: "--primary-subtle",
      bgClass: "bg-primary-subtle",
      textClass: "text-primary-subtle-foreground",
      borderClass: "border-transparent",
    },
    {
      name: "Secondary",
      token: "--secondary",
      bgClass: "bg-secondary",
      textClass: "text-secondary-foreground",
      borderClass: "border-border",
    },
    {
      name: "Accent",
      token: "--accent",
      bgClass: "bg-accent",
      textClass: "text-accent-foreground",
      borderClass: "border-border",
    },
    {
      name: "Background",
      token: "--background",
      bgClass: "bg-background",
      textClass: "text-foreground",
      borderClass: "border-border",
    },
    {
      name: "Card",
      token: "--card",
      bgClass: "bg-card",
      textClass: "text-card-foreground",
      borderClass: "border-border",
    },
    {
      name: "Muted",
      token: "--muted",
      bgClass: "bg-muted",
      textClass: "text-muted-foreground",
      borderClass: "border-border",
    },
    {
      name: "Success",
      token: "--success",
      bgClass: "bg-success",
      textClass: "text-success-foreground",
      borderClass: "border-transparent",
    },
    {
      name: "Warning",
      token: "--warning",
      bgClass: "bg-warning",
      textClass: "text-warning-foreground",
      borderClass: "border-transparent",
    },
    {
      name: "Destructive / Error",
      token: "--destructive",
      bgClass: "bg-destructive",
      textClass: "text-destructive-foreground",
      borderClass: "border-transparent",
    },
    {
      name: "Info",
      token: "--info",
      bgClass: "bg-info",
      textClass: "text-info-foreground",
      borderClass: "border-transparent",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Brand Identity Banner */}
        <div className="p-4 rounded-xl border border-primary/30 bg-primary-subtle text-foreground space-y-1">
          <div className="flex items-center gap-2 font-semibold text-sm text-primary-subtle-foreground">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary" />
            CLIENT BRAND IDENTITY — CENTRALIZED PINK &amp; MAGENTA PALETTE
          </div>
          <p className="text-xs text-muted-foreground">
            This design system is anchored in the client&apos;s BIC TRAVEL logo brand identity, featuring Brand Pink (#EC407A),
            Deep Pink (#DB2777), Light Pink (#F472B6), Soft Pink (#FCE7F3), and Dark Navy (#0F172A). All UI components consume
            centralized semantic tokens configured in <code className="text-foreground font-mono">globals.css</code>.
          </p>
        </div>

        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            QbicTravel Color Token System
          </h1>
          <p className="text-sm text-muted-foreground">
            Visual inspection suite for semantic tokens, interactive button states, surface hierarchy, and contrast validation.
          </p>
        </div>

        {/* Section 1: Core Brand Primitives */}
        <section className="space-y-4">
          <div className="border-b border-border pb-2">
            <h2 className="text-lg font-semibold text-foreground">
              1. Core Brand Primitives
            </h2>
            <p className="text-xs text-muted-foreground">
              Derived directly from the client&apos;s BIC TRAVEL logo asset (<code className="font-mono">docs/qbic-logo-airborne.png</code>).
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {brandCore.map((item) => (
              <div
                key={item.name}
                className={`p-4 rounded-xl border ${item.border || "border-border/40"} ${item.bg} ${item.text} flex flex-col justify-between h-28 shadow-xs`}
              >
                <div>
                  <div className="font-bold text-sm">{item.name}</div>
                  <div className="text-[11px] opacity-80">{item.role}</div>
                </div>
                <div className="font-mono text-xs opacity-90">{item.hex}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Primary Brand Scale (Pink / Magenta 50–950) */}
        <section className="space-y-4">
          <div className="border-b border-border pb-2">
            <h2 className="text-lg font-semibold text-foreground">
              2. Primary Brand Scale (Pink / Magenta 50–950)
            </h2>
            <p className="text-xs text-muted-foreground">
              Harmonious scale centered around Brand Pink #EC407A at step 500.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-2">
            {brandScales.map((scale) => (
              <div
                key={scale.label}
                className={`p-3 rounded-lg border border-border/40 ${scale.bg} ${scale.text} flex flex-col justify-between h-24 text-xs font-medium`}
              >
                <span>{scale.label}</span>
                <span className="font-mono text-[10px] opacity-80">
                  {scale.hex}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Semantic Color Swatches */}
        <section className="space-y-4">
          <div className="border-b border-border pb-2">
            <h2 className="text-lg font-semibold text-foreground">
              3. Semantic Token Swatches
            </h2>
            <p className="text-xs text-muted-foreground">
              Tokens consumed by components. Swatches show foreground text against each surface.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {semanticSwatches.map((item) => (
              <div
                key={item.name}
                className={`p-4 rounded-xl border ${item.borderClass} ${item.bgClass} ${item.textClass} flex flex-col justify-between h-28 shadow-xs`}
              >
                <div className="font-semibold text-sm">{item.name}</div>
                <div className="space-y-0.5">
                  <div className="text-xs opacity-90 font-mono">{item.token}</div>
                  <div className="text-[11px] opacity-75 font-mono">{item.bgClass}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Component Demonstrations */}
        <section className="space-y-6">
          <div className="border-b border-border pb-2">
            <h2 className="text-lg font-semibold text-foreground">
              4. Component Demonstrations
            </h2>
            <p className="text-xs text-muted-foreground">
              Verifies that components consume semantic tokens rather than raw colors.
            </p>
          </div>

          {/* Buttons */}
          <div className="p-6 rounded-xl border border-border bg-card text-card-foreground space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Button Variants (Including New Marketing CTA)
            </h3>
            <div className="flex flex-wrap gap-3 items-center">
              <Button variant="default">Primary Button</Button>
              <Button variant="cta">CTA Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="destructive">Destructive Button</Button>
              <Button variant="link">Link Button</Button>
            </div>
          </div>

          {/* Badges */}
          <div className="p-6 rounded-xl border border-border bg-card text-card-foreground space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Badge Variants
            </h3>
            <div className="flex flex-wrap gap-3 items-center">
              <Badge variant="default">Primary Badge</Badge>
              <Badge variant="subtle">Subtle Pink</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </div>

          {/* Form Input */}
          <div className="p-6 rounded-xl border border-border bg-card text-card-foreground space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Input States
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground">
                  Default Input
                </label>
                <Input placeholder="Enter destination or tour..." />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground">
                  Disabled Input
                </label>
                <Input disabled placeholder="Disabled state..." />
              </div>
            </div>
          </div>

          {/* Typography Hierarchy */}
          <div className="p-6 rounded-xl border border-border bg-card text-card-foreground space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Typography Hierarchy
            </h3>
            <div className="space-y-2 max-w-2xl">
              <h1 className="text-2xl font-bold text-foreground">
                Heading 1 (Foreground)
              </h1>
              <h2 className="text-lg font-semibold text-foreground">
                Heading 2 (Foreground)
              </h2>
              <p className="text-sm text-foreground">
                Body text using <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">text-foreground</code>. Clean, accessible reading contrast against white or dark canvases.
              </p>
              <p className="text-xs text-muted-foreground">
                Muted text using <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">text-muted-foreground</code> for secondary captions, metadata, dates, and badges.
              </p>
              <div>
                <a href="#test" className="text-sm text-primary hover:underline font-medium">
                  Hyperlink using text-primary →
                </a>
              </div>
            </div>
          </div>

          {/* Card Surface Preview */}
          <div className="p-6 rounded-xl border border-border bg-card text-card-foreground space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Card Surface Preview (Future Tour / Booking Card Structure)
            </h3>
            <div className="max-w-md border border-border rounded-xl p-5 space-y-3 bg-card shadow-xs">
              <div className="flex items-center justify-between">
                <Badge variant="subtle">Featured Tour</Badge>
                <span className="text-xs text-muted-foreground">7 Days</span>
              </div>
              <h4 className="text-base font-semibold text-foreground">
                Mediterranean Coastal Exploration
              </h4>
              <p className="text-xs text-muted-foreground">
                Demonstrating card surface token elevation, subtle pink tags, and primary CTA synergy.
              </p>
              <div className="pt-2 flex items-center justify-between border-t border-border">
                <div>
                  <span className="text-xs text-muted-foreground block">From</span>
                  <span className="text-base font-bold text-foreground">$1,299</span>
                </div>
                <Button size="sm">Explore Tour</Button>
              </div>
            </div>
          </div>

          {/* Feedback Banners */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-success/30 bg-success/10 text-foreground space-y-1">
              <div className="font-semibold text-xs flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-success" />
                Success Token Feedback
              </div>
              <p className="text-xs text-muted-foreground">
                Booking confirmed. Confirmation email dispatched.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-destructive/30 bg-destructive/10 text-foreground space-y-1">
              <div className="font-semibold text-xs flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-destructive" />
                Destructive Token Feedback
              </div>
              <p className="text-xs text-muted-foreground">
                Payment gateway declined transaction. Please review card details.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
