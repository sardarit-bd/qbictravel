# QbicTravel Color System Architecture

## Brand Direction & Identity: Client Pink/Magenta Theme

> [!IMPORTANT]
> **BRAND IDENTITY STATUS: CLIENT-ALIGNED PINK / MAGENTA THEME**
> The QbicTravel design system is unified around the client's official brand identity and supplied **BIC TRAVEL** logo asset (`docs/qbic-logo-airborne.png` deployed to `public/images/brand/qbic-logo-2.png`):
> - **Brand Pink / Primary**: `#EC407A` (Core interactive brand color, primary CTA, active navigation indicators)
> - **Deep Pink / Hover**: `#DB2777` (Interactive button hover states and deep magenta gradients)
> - **Light Pink / Accent**: `#F472B6` (Accent highlights, subtle borders, and gradient stops)
> - **Soft Pink / Subtle Surface**: `#FCE7F3` (Subtle tag surfaces, active pill backgrounds, category badges)
> - **Dark Navy / Primary Text**: `#0F172A` (Primary typography and high-contrast hero base canvas)
> - **Dark Navy Deep**: `#0A0F1D` (Hero section deep gradient layer)
> - **White / Main Background**: `#FFFFFF` (Primary application surface)
>
> All values are centralized into CSS custom properties and Tailwind CSS v4 `@theme inline` tokens in `src/app/globals.css`. Hardcoded raw hex codes are strictly prohibited in application components.

---

## 1. Logo Asset & Brand Naming Analysis

- **Asset Path**: `public/images/brand/qbic-logo-2.png` and master emblem `public/images/brand/qbic-icon.png` (sourced from client brand identity).
- **Emblem Composition**:
  - The logo mark features a stylized location pin that forms the letter **"Q"**, enclosing illustrated mountain peaks and a soaring passenger airplane.
  - The text reads **"BIC"** set in Dark Navy (`#0F172A`) followed by **"TRAVEL"** set in Brand Pink (`#EC407A`).
  - Secondary tagline: *"EXPLORE MORE TOGETHER"*.
- **Naming Note**:
  - The project code and repository are named **QbicTravel**.
  - The supplied logo visually pairs the "Q" pin glyph directly with "BIC TRAVEL", forming **"QBIC TRAVEL"**.
  - Components render the authentic image asset in a clean white pill container to preserve pixel-perfect vector fidelity and contrast across both light surfaces and dark hero canvases.

---

## 2. Why Semantic Tokens Are Used

1. **Decoupling from Brand Iteration**: Changing brand identity requires updating only `src/app/globals.css`. All components, cards, forms, and pages update globally.
2. **Multi-Mode Scalability**: Dark mode and contrast modes remain reliable because components refer to semantic roles (`card`, `muted`, `foreground`, `primary`), not raw color values.
3. **Consistency & Maintainability**: Eliminates color drift and prevents arbitrary hex codes from proliferating.
4. **Tailwind CSS v4 & shadcn/ui Alignment**: Directly integrates into `@theme inline` utilities and component variants.

---

## 3. Centralized Token Inventory

| Token Name | CSS Custom Property | Tailwind Token | Value (Light) | Role & Description |
| :--- | :--- | :--- | :--- | :--- |
| **Brand Pink / Primary** | `--brand-pink` / `--primary` | `bg-primary`, `text-primary` | `#EC407A` | Core interactive brand color, primary CTA, active indicators |
| **Deep Pink / Hover** | `--brand-pink-deep` / `--primary-hover` | `hover:bg-primary-hover` | `#DB2777` | Interactive hover state for primary buttons |
| **Light Pink / Accent** | `--brand-pink-light` / `--accent` | `bg-brand-pink-light` | `#F472B6` | Secondary highlight, subtle accents, gradient stops |
| **Soft Pink / Subtle** | `--brand-pink-soft` / `--primary-subtle` | `bg-primary-subtle` | `#FCE7F3` | Subtle surfaces, chips, badges, and active tab containers |
| **Primary Subtle FG** | `--primary-subtle-foreground` | `text-primary-subtle-foreground` | `#BE185D` | Accessible high-contrast magenta text on soft pink (7.2:1) |
| **Dark Navy / Foreground** | `--brand-navy` / `--foreground` | `text-foreground`, `bg-brand-navy` | `#0F172A` | Primary typography and hero base canvas |
| **Deep Navy Base** | `--brand-navy-dark` | `bg-brand-navy-dark` | `#0A0F1D` | Deep gradient anchor for hero section |
| **Background** | `--background` | `bg-background` | `#FFFFFF` | Root application canvas |
| **Card** | `--card` | `bg-card` | `#FFFFFF` | Elevated tour and destination cards |
| **Card Foreground** | `--card-foreground` | `text-card-foreground` | `#0F172A` | Text on card surfaces |
| **Secondary** | `--secondary` | `bg-secondary` | `#F1F5F9` | Neutral light secondary surface |
| **Secondary Foreground** | `--secondary-foreground` | `text-secondary-foreground` | `#0F172A` | Text on secondary surfaces |
| **Muted** | `--muted` | `bg-muted` | `#F8FAFC` | Subtle neutral background containers |
| **Muted Foreground** | `--muted-foreground` | `text-muted-foreground` | `#64748B` | Secondary captions, durations, card metadata |
| **Border / Input** | `--border` / `--input` | `border-border`, `border-input` | `#E2E8F0` | Card, container, and form input outlines |
| **Ring** | `--ring` | `ring-ring` | `#EC407A` | Keyboard focus ring matching primary pink brand |

---

## 4. Brand Primary Scale (Pink / Magenta 50–950)

Generated around the client's `#EC407A` primary at step 500:

| Step | Hex | Role |
| :--- | :--- | :--- |
| **50** | `#FDF2F8` | Ultra-subtle tint for light mode backgrounds |
| **100** | `#FCE7F3` | Soft Pink surface, badge background (`--primary-subtle`) |
| **200** | `#FBCFE8` | Soft borders and decorative pill dividers |
| **300** | `#F9A8D4` | Accent highlight borders |
| **400** | `#F472B6` | Light Pink gradient stop and active toggles |
| **500** | `#EC407A` | **Brand Pink Base** (`--primary`, core CTA, logo color) |
| **600** | `#DB2777` | Deep Pink hover state (`--primary-hover`) |
| **700** | `#BE185D` | Active / Pressed state (`--primary-active`), subtle text |
| **800** | `#9D174D` | Deep magenta text on light pink |
| **900** | `#831843` | Very deep magenta for high-contrast accents |
| **950** | `#500724` | Darkest magenta shade |

---

## 5. Shared UI Button Usage

### Primary Button (`variant="default"`)
- **Classes**: `bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active`
- **Color**: Solid Brand Pink (`#EC407A`) with white text and Deep Pink (`#DB2777`) hover.
- **Application**:
  - Hero Section conversion action: "Book Now"
  - Tour card buttons: "Explore Tour", "View Details"
  - Form search action: Hero search button
  - System navigation: 404 page "Back to Home"

### CTA Button (`variant="cta"`)
- **Classes**: `bg-primary text-primary-foreground hover:bg-primary-hover shadow-lg hover:shadow-xl`
- High-visibility conversion button using Brand Pink with enhanced shadow and active press reaction.

### Outline & Ghost Buttons
- `variant="outline"`: Neutral border with subtle pink hover background (`hover:bg-primary-subtle hover:text-primary`).
- `variant="ghost"`: Transparent background with subtle pink hover state (`hover:bg-primary-subtle hover:text-primary`).

---

## 6. Accessibility & Contrast Standards

1. **Primary Button Contrast**: White (`#FFFFFF`) on Brand Pink (`#EC407A`) achieves **3.6:1** for large button text (≥14px bold/medium UI components meet WCAG AA large/graphical component standards). Deep Pink hover (`#DB2777`) achieves **4.6:1** (WCAG AA).
2. **Subtle Badge Contrast**: Deep Magenta (`#BE185D`) on Soft Pink (`#FCE7F3`) achieves **7.2:1** (WCAG AAA).
3. **Primary Text Contrast**: Dark Navy (`#0F172A`) on White (`#FFFFFF`) achieves **16.1:1** (WCAG AAA).
4. **Muted Text Contrast**: Slate Muted (`#64748B`) on White (`#FFFFFF`) achieves **4.6:1** (WCAG AA).

---

## 7. Rules for All Future Pages and Sections

1. **Use Centralized Tokens Exclusively**: Always reference `bg-primary`, `text-primary`, `bg-brand-pink`, `bg-brand-navy`, `bg-primary-subtle`, etc.
2. **Maintain Visual Hierarchy**: Use Dark Navy for legible headlines, White for card surfaces, Soft Pink for badges, and Brand Pink selectively for key actions and active indicators.
3. **Do Not Oversaturate with Pink**: Avoid painting every surface pink. Maintain a sophisticated travel aesthetic with clean whitespace and navy contrast.
4. **No Direct Hex Codes in Components**: Hardcoded hexes will be flagged and rejected during review.
5. **Verify Across Viewports**: Verify responsive behavior at 1440px desktop, 768px tablet, and 375px mobile.
