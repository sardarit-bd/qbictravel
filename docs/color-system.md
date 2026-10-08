# QbicTravel Color System Architecture

## QbicTravel Brand Color — PENDING APPROVAL

> [!IMPORTANT]
> **THE BRAND COLOR IS CURRENTLY A PLACEHOLDER AND PENDING CLIENT APPROVAL.**
> The client requested a *modern pinkish* color direction, but has **not** yet provided an approved logo, final HEX codes, or a signed-off brand palette.
>
> All pink values currently configured in `src/app/globals.css` are **development placeholders**. Under no circumstances should any pink hue be hardcoded into components, styles, or marketing layouts. All components must reference semantic tokens (`bg-primary`, `text-primary`, etc.) so that the brand palette can be updated globally in seconds once final client approval is granted.

---

## 1. Why Semantic Tokens Are Used

1. **Decoupling from Brand Iteration**: Changing a brand identity or palette should not require auditing hundreds of component files. By mapping UI intent (`primary`, `surface`, `border`, `destructive`) to CSS custom variables, the entire theme changes with a single definition.
2. **Multi-Mode Scalability**: Dark mode, high-contrast mode, and dynamic theming become effortless because components refer to roles (`card`, `muted`, `foreground`), not raw color values.
3. **Consistency & Maintainability**: Prevents "color drift" where slightly different shades of pink or grey proliferate across teams and features.
4. **Tailwind CSS v4 & shadcn/ui Alignment**: Standardizes across the component library and utilities via `@theme inline`.

---

## 2. How to Replace the Placeholder Brand Color

When the client approves the final pink or brand identity:

1. Open `src/app/globals.css`.
2. Locate the section labeled:
   ```css
   /* BRAND COLOR PALETTE: PINKISH DIRECTION (PLACEHOLDER - PENDING CLIENT APPROVAL) */
   ```
3. Update the 50–950 OKLCH color scale (`--primary-50` through `--primary-950`), or change the hue angle (currently `355`):
   ```css
   :root {
     --primary-50:  oklch(...);
     ...
     --primary-600: oklch(...); /* Base brand CTA */
     ...
     --primary-950: oklch(...);

     /* Map semantic roles */
     --primary: var(--primary-600);
     --primary-foreground: oklch(0.99 0 0);
     --primary-hover: var(--primary-700);
     --primary-active: var(--primary-800);
     --primary-subtle: var(--primary-50);
     --primary-subtle-foreground: var(--primary-800);
   }
   ```
4. Update the `.dark` mapping if needed:
   ```css
   .dark {
     --primary: var(--primary-400); /* Accessible on dark backgrounds */
     --primary-foreground: oklch(0.15 0.03 <hue>);
   }
   ```
5. Run `npm run build` and visit the test page `/dev/color-system` to verify contrast and visual appearance.

---

## 3. Primary Color Usage

| Role | Semantic Token | Utility Class | Description |
| :--- | :--- | :--- | :--- |
| **Main CTA** | `--primary` | `bg-primary`, `text-primary-foreground` | High-priority booking and search triggers |
| **Hover State** | `--primary-hover` | `hover:bg-primary-hover` / `hover:bg-primary/90` | Interactive hover reaction |
| **Active State** | `--primary-active` | `active:bg-primary-active` | Pressed / clicked interaction |
| **Important Links** | `--primary` | `text-primary` | Key hyperlinks and navigational anchors |
| **Selected States** | `--primary` | `bg-primary` / `border-primary` | Active tab, selected date, chosen filter pill |
| **Subtle Badges** | `--primary-subtle` | `bg-primary-subtle`, `text-primary-subtle-foreground` | Category badges, tags, soft highlights |

---

## 4. Secondary & Accent Color Usage

- **Secondary (`--secondary`, `--secondary-foreground`)**: Supporting actions, secondary filter chips, cancel buttons, and secondary panels. Neutral and quiet so it does not compete with the primary brand CTA.
- **Accent (`--accent`, `--accent-foreground`)**: Contextual highlights, selected dropdown items, and subtle micro-interactions.

---

## 5. Text Hierarchy

Always use semantic typography tokens:

| Element | Semantic Token | Utility Class |
| :--- | :--- | :--- |
| **Page Title (h1)** | `--foreground` | `text-foreground font-bold` |
| **Section Header (h2/h3)** | `--foreground` | `text-foreground font-semibold` |
| **Body Text** | `--foreground` | `text-foreground` |
| **Muted / Secondary Text** | `--muted-foreground` | `text-muted-foreground` |
| **Disabled Text** | `--muted-foreground` | `text-muted-foreground opacity-50` |
| **Primary Link** | `--primary` | `text-primary hover:underline` |

---

## 6. Surface Hierarchy

Surfaces follow elevation and visual grouping:

- **Background (`--background`)**: The root page canvas.
- **Card (`--card`, `--card-foreground`)**: Elevated content containers (Tour Cards, Destination Highlights, Itinerary Details).
- **Popover (`--popover`, `--popover-foreground`)**: Floating elements (Date Pickers, Dropdown Menus, Tooltips).
- **Muted Surface (`--muted`)**: Inset containers, grey backgrounds, code blocks, alternating table rows.
- **Secondary Surface (`--secondary`)**: Pill toggles, filter containers, badge backgrounds.

---

## 7. Button Color Rules

Buttons strictly consume semantic variants:

- **Primary Button**: `variant="default"` → `bg-primary text-primary-foreground hover:bg-primary/80`
- **Secondary Button**: `variant="secondary"` → `bg-secondary text-secondary-foreground hover:bg-secondary/80`
- **Outline Button**: `variant="outline"` → `border border-border bg-background hover:bg-muted text-foreground`
- **Ghost Button**: `variant="ghost"` → `bg-transparent hover:bg-muted text-foreground`
- **Destructive Button**: `variant="destructive"` → `bg-destructive text-destructive-foreground hover:bg-destructive/90`
- **Link Button**: `variant="link"` → `text-primary underline-offset-4 hover:underline`

**Rule**: Never add `bg-pink-500` or custom hex values to button classes.

---

## 8. Feedback Colors

- **Destructive (`--destructive`, `--destructive-foreground`)**: Errors, cancellation, booking deletion, validation failures.
- **Success (`--success`, `--success-foreground`)**: Booking confirmed, payment successful, saved to wishlist.
- **Warning (`--warning`, `--warning-foreground`)**: Expiring reservations, low availability warnings, date notices.
- **Info (`--info`, `--info-foreground`)**: Travel advisories, baggage policies, tips.

---

## 9. Accessibility Requirements

1. **Contrast Compliance (WCAG 2.1 AA/AAA)**:
   - Normal text: minimum **4.5:1** contrast against background.
   - Large text (≥18pt or ≥14pt bold) & UI components: minimum **3:1** contrast.
   - Primary button: `--primary-foreground` against `--primary` satisfies WCAG AA.
   - *Note*: Final WCAG certification is **pending** until the client signs off on the final brand pink.
2. **Focus Indicators**: Keyboard focus rings use `--ring` (`var(--primary-500)`) with clear outline visibility.
3. **No Color Alone**: System states (such as form validation errors or booking confirmations) must combine color with icons or descriptive text.

---

## 10. Rules Against Arbitrary Hardcoded Colors

- ❌ **Forbidden**: `text-[#e11d48]`, `bg-[#ff007f]`, `border-[#333333]`, `bg-pink-600`
- ✅ **Required**: `text-primary`, `bg-card`, `border-border`, `text-muted-foreground`
- Pull requests introducing hardcoded color values outside of `globals.css` will be rejected during review.
