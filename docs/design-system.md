# QbicTravel Design System: Typography, Spacing & UI Foundation

## QbicTravel Brand Typography — PENDING APPROVAL

> [!IMPORTANT]
> **BRAND TYPOGRAPHY IS CURRENTLY A PLACEHOLDER AND PENDING CLIENT APPROVAL.**
> The client has **not** selected a final brand typeface or approved custom web font licensing.
>
> **Current Temporary Font Choice:**
> We use Next.js optimized **Geist Sans** (`next/font/google`) as a zero-overhead, high-performance, neutral typographic placeholder. It provides clean proportions, comprehensive unicode coverage, and zero external network request latency.
>
> Under no circumstances should developers hardcode arbitrary font families, custom webfont links, or unapproved typography values in component code. All typography must strictly consume the semantic typography tokens or utility classes documented below.

---

## 1. Typography Hierarchy & Roles

The QbicTravel type scale is restrained and purposeful, tailored specifically for a high-converting consumer travel marketplace:

| Role | Semantic Class | Desktop Size / Line Height | Mobile Size / Line Height | Weight | Typical Application |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display** | `.type-display` | `60px (3.75rem)` / `1.08` | `36px (2.25rem)` / `1.1` | 800 (ExtraBold) | Hero banner headlines, promotional campaigns |
| **H1** | `.type-h1` | `48px (3rem)` / `1.15` | `30px (1.875rem)` / `1.15` | 700 (Bold) | Main destination/tour title, page headers |
| **H2** | `.type-h2` | `36px (2.25rem)` / `1.25` | `24px (1.5rem)` / `1.25` | 700 (Bold) | Major section titles ("Featured Tours", "Top Destinations") |
| **H3** | `.type-h3` | `24px (1.5rem)` / `1.3` | `20px (1.25rem)` / `1.3` | 600 (SemiBold) | Group headers, card collection titles, itinerary day headers |
| **H4** | `.type-h4` | `20px (1.25rem)` / `1.4` | `18px (1.125rem)` / `1.4` | 600 (SemiBold) | Individual tour card titles, modal titles |
| **H5** | `.type-h5` | `16px (1rem)` / `1.4` | `16px (1rem)` / `1.4` | 600 (SemiBold) | Specification headers, filter labels, tab titles |
| **Body Large** | `.type-body-lg` | `18px (1.125rem)` / `1.6` | `18px (1.125rem)` / `1.6` | 400 (Regular) | Editorial lead paragraphs, tour overview summaries |
| **Body** | `.type-body` | `16px (1rem)` / `1.6` | `16px (1rem)` / `1.6` | 400 (Regular) | Default content, reviews, descriptions |
| **Body Small** | `.type-body-sm` | `14px (0.875rem)` / `1.5` | `14px (0.875rem)` / `1.5` | 400 (Regular) | Supporting text, card descriptions, badges, tooltips |
| **Caption** | `.type-caption` | `12px (0.75rem)` / `1.5` | `12px (0.75rem)` / `1.5` | 400 (Regular) | Timestamps, terms & conditions, photo attributions |
| **Overline** | `.type-overline` | `12px (0.75rem)` / `1.5` | `12px (0.75rem)` / `1.5` | 600 (SemiBold) | Eyebrow badges, categories (UPPERCASE, tracked out) |
| **Editorial Script** | `.font-script` | Fluid / Display scale | Fluid / Display scale | 400–700 | Cursive headline accents ("The World", "For Booking") |
| **Primary Button** | `Button variant="default"` | `14px (0.875rem)` / `1.0` | `14px (0.875rem)` / `1.0` | 500 (Medium) | Standard application actions (Brand Pink `#EC407A`) |
| **CTA Button** | `Button variant="cta"` | `14px–16px` / `1.0` | `14px` / `1.0` | 800 (ExtraBold) | High-conversion marketing CTAs (Brand Pink `#EC407A` with deep hover) |

---

## 2. Temporary Font Choice & Editorial Script Typography

### Current Configuration
- **Sans font**: `Geist` imported via `next/font/google` in `src/app/layout.tsx`.
- **Mono font**: `Geist_Mono` imported via `next/font/google` in `src/app/layout.tsx`.
- **Script font utility**: `@utility font-script` defined in `globals.css` using `'Caveat', 'Playfair Display', 'Brush Script MT', 'Baskerville', cursive, serif`.
- **CSS variable binding**: `--font-sans: var(--font-geist-sans);` in `src/app/globals.css`.

### How to Replace the Font When the Client Approves Brand Typography:
1. Open `src/app/layout.tsx`.
2. Replace `Geist` with the approved Google Font or local font (e.g. `Plus_Jakarta_Sans`, `Outfit`, `Inter`, or `next/font/local`):
   ```tsx
   import { Plus_Jakarta_Sans } from "next/font/google";
   const brandSans = Plus_Jakarta_Sans({
     variable: "--font-brand-sans",
     subsets: ["latin"],
   });
   ```
3. In `src/app/globals.css`, update `@theme inline`:
   ```css
   --font-sans: var(--font-brand-sans, sans-serif);
   --font-heading: var(--font-brand-sans, sans-serif);
   ```
4. All components across the application automatically inherit the new typography. Zero component changes required.

---

## 3. Responsive Type Scale Strategy

- Fluid typography is enabled for top-level headers using CSS `clamp()` in `globals.css`:
  - `type-display`: `clamp(2.25rem, 5vw, 3.75rem)`
  - `type-h1`: `clamp(1.875rem, 4vw, 3rem)`
  - `type-h2`: `clamp(1.5rem, 3vw, 2.25rem)`
  - `type-h3`: `clamp(1.25rem, 2.5vw, 1.5rem)`
- This guarantees smooth typographic scaling across mobile, tablet, and desktop without abrupt media query jumps or layout shifts.

---

## 4. Spacing System

Based on the 4px baseline grid (`rem`-based):

| Token | CSS Value | Pixels | Recommended Context |
| :--- | :--- | :--- | :--- |
| `xs` | `0.25rem` | 4px | Micro-spacing, icon-to-label gaps, tight badges |
| `sm` | `0.5rem` | 8px | Button padding-y, form inner padding, tag margins |
| `md` | `1rem` | 16px | Standard card padding (mobile), form field gaps |
| `lg` | `1.5rem` | 24px | Desktop card padding, modal content padding |
| `xl` | `2rem` | 32px | Grid gaps, component block separations |
| `2xl` | `3rem` | 48px | Compact section spacing, header-to-content spacing |
| `3xl` | `4rem` | 64px | Standard section vertical padding on mobile/tablet |
| `4xl` | `5rem` / `6rem` | 80px–96px | Standard desktop section vertical padding (`section-padding`) |
| `5xl` | `8rem` | 128px | Hero banner padding, large promotional breaks |

---

## 5. Container & Layout Strategy

Standardized container utilities are available in `src/app/globals.css`:

1. **`.container-page`** (`max-w-7xl` / 1280px):
   - Use for: Destination listings, Tour catalog grids, Search result pages, Standard content sections.
   - Built-in responsive horizontal padding: `px-4 sm:px-6 lg:px-8`.
2. **`.container-narrow`** (`max-w-4xl` / 896px):
   - Use for: Booking and checkout funnels, User profile forms, Tour detailed itinerary readings, Authentication pages.
   - Built-in responsive padding: `px-4 sm:px-6`.
3. **`.container-wide`** (`max-w-2xl` / 1536px):
   - Use for: Panoramic hero banners, Full-bleed tour photo galleries, Expansive promotional showcases.
4. **`.section-padding`** (`py-12 md:py-16 lg:py-20`):
   - Standard vertical spacing between major homepage and landing page sections.

---

## 6. Border Radius System

Semantic radius tokens configured in `globals.css`:

| Token | Value | Target Elements |
| :--- | :--- | :--- |
| `rounded-sm` | `calc(var(--radius) * 0.6)` (~6px) | Compact badge indicators, inner chips |
| `rounded-md` | `calc(var(--radius) * 0.8)` (~8px) | Dropdown menus, form inputs, tooltips |
| `rounded-lg` | `var(--radius)` (10px) | Buttons, standard cards |
| `rounded-xl` | `calc(var(--radius) * 1.4)` (~14px) | Tour cards, destination feature tiles |
| `rounded-2xl` | `calc(var(--radius) * 1.8)` (~18px) | Modal dialogs, search filter boxes |
| `rounded-3xl` | `calc(var(--radius) * 2.2)` (~22px) | Hero callout containers, promo banners |
| `rounded-full` | `9999px` | Badges, avatar circles, circular icon buttons |

---

## 7. Shadow & Elevation System

Consistent elevation stops providing realistic depth without visual clutter:

| Token | Purpose | Application |
| :--- | :--- | :--- |
| `shadow-xs` | Resting boundary | Subtle card edge, search inputs |
| `shadow-sm` | Low elevation | Dropdown menus, select popovers |
| `shadow-md` | Interactive elevation | Hovered tour cards, elevated tab bars |
| `shadow-lg` | Medium elevation | Sticky search bars, floating filter drawer |
| `shadow-xl` | High elevation | Modal dialogs, lightbox galleries |

---

## 8. UI Density Guidelines

QbicTravel is a **consumer travel marketplace**, not a dense enterprise data grid:
- **Feel**: Modern, premium, spacious, easy to scan.
- **Card Padding**: 16px on mobile, 20px–24px on desktop.
- **Form Controls**: Minimum height 36px–40px on desktop; minimum 44px touch target on mobile.
- **Line Heights**: Generous body line-height (`1.6`) prevents reading fatigue on detailed itineraries.

---

## 9. Accessibility Principles

1. **Touch Targets**: All interactive elements (buttons, date pickers, quantity steppers) must adhere to the 44px × 44px minimum touch area on mobile.
2. **Minimum Font Sizes**: Body content is 16px (`text-base`). Secondary text is 14px (`text-sm`). Metadata never drops below 12px (`text-xs`).
3. **Contrast Alignment**: Text color tokens (`text-foreground`, `text-muted-foreground`) are verified against surface tokens (`bg-background`, `bg-card`).
4. **Focus Rings**: Focus visible rings use `focus-visible:ring-3 focus-visible:ring-ring/50` with proper offset to support keyboard navigation.
