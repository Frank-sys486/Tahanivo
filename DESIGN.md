---
name: TAHANIVO
description: A quiet, tactile storefront for furniture with presence.
colors:
  plaster: "#eeece6"
  plaster-light: "#f8f7f3"
  ink: "#2a2f28"
  cobalt: "#234a83"
  cobalt-deep: "#193b6b"
  focus-on-dark: "#c7d7ef"
  image-placeholder: "#d6d0c5"
  line: "rgb(42 47 40 / 20%)"
typography:
  display:
    fontFamily: "Hanken Grotesk Variable, sans-serif"
    fontSize: "clamp(4.4rem, 5.2vw, 5.4rem)"
    fontWeight: 430
    lineHeight: 0.9
    letterSpacing: "-0.042em"
  headline:
    fontFamily: "Hanken Grotesk Variable, sans-serif"
    fontSize: "clamp(2.7rem, 4.8vw, 5rem)"
    fontWeight: 430
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Hanken Grotesk Variable, sans-serif"
    fontSize: "clamp(1.4rem, 1.8vw, 1.85rem)"
    fontWeight: 480
    lineHeight: 1.2
  body:
    fontFamily: "Hanken Grotesk Variable, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Hanken Grotesk Variable, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "0.06em"
rounded:
  square: "0"
  control: "2px"
spacing:
  xs: "8px"
  sm: "12px"
  control-gap: "14px"
  page-mobile: "20px"
  md: "24px"
  lg: "32px"
  control-height: "54px"
  section-mobile: "80px"
components:
  button-primary:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.plaster-light}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 25px"
    height: "54px"
  button-primary-hover:
    backgroundColor: "{colors.cobalt-deep}"
    textColor: "{colors.plaster-light}"
  field:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "12px 0"
    height: "48px"
---

# Design System: TAHANIVO

## Overview

**Creative North Star: "The Quiet Catalog"**

TAHANIVO treats furniture as an object to be examined, not merchandise to be crowded by interface chrome. A monumental close crop, broad plaster fields, weathered timber, and disciplined whitespace create a calm editorial storefront with enough product substance to support online evaluation.

The system is luxurious through distillation: one sans-serif family, two pale neutrals, fine rules, flat controls, and a single cobalt action voice. The path is deliberately narrow—view the collection, understand the craft, request a quote—and whitespace replaces explanatory copy wherever the images and headings can carry meaning. The current catalog and imagery establish direction rather than final product truth; pricing, payment, fulfillment, and remote quote submission remain intentionally unconnected.

**Key Characteristics:**

- Monumental furniture imagery balanced by open plaster space.
- Flat, square-edged controls and containers divided by hairline rules.
- Charcoal-green typography with cobalt reserved for actions and orientation.
- Modern variable sans typography with quiet scale, terse copy, and compact uppercase labels.
- Controlled motion: quick feedback, slow image settling, and no bounce.
- A three-stroke open-center mark paired with a widely tracked wordmark.

## Colors

The palette is drawn from plaster, timber, upholstery, bronze, and charcoal, with a restrained cobalt used to identify action.

### Primary

- **Restrained Cobalt:** The sole action color for primary buttons, category labels, status text, links, selection, and focus rings; its rarity preserves emphasis.
- **Deep Cobalt:** The primary-button hover state, darkened just enough to signal response without changing the palette's character.

### Secondary

- **Dark-Surface Focus:** A pale blue focus outline reserved for links on charcoal backgrounds.

### Neutral

- **Pale Plaster:** The main page ground and warm neutral canvas.
- **Light Plaster:** The lightest surface, sticky-header veil, and reverse text color.
- **Charcoal-Green Ink:** Primary text, dark sections, outlines, and the ink logo.
- **Image Placeholder:** A warm fallback surface behind collection imagery.
- **Hairline Ink:** A translucent ink rule for dividers and low-contrast boundaries.

**The One Cobalt Voice Rule.** Use cobalt for action, focus, and small orientation cues; do not turn it into a broad decorative field.

**The Material Neutral Rule.** Surfaces should feel like plaster, timber, upholstery, and bronze rather than pure white, pure black, or cool gray.

## Typography

**Display Font:** Hanken Grotesk Variable (with sans-serif fallback)  
**Body Font:** Hanken Grotesk Variable (with sans-serif fallback)

**Character:** One modern grotesk carries the entire experience. Personality comes from scale, variable weight, tight display tracking, and widely tracked uppercase utility text rather than a decorative pairing.

### Hierarchy

- **Display** (430, fluid 4rem–5.6rem, 0.92): Hero statements; controlled line breaks keep the single-family grotesk architectural without forcing it across the photography.
- **Headline** (430, fluid 2.7rem–5rem, 0.98): Major section statements with the same compact rhythm as the hero.
- **Title** (480, fluid 1.4rem–1.85rem, 1.2): Collection item names lead their compact category labels across a shared baseline.
- **Body** (400, 1rem, 1.7): Sparse supporting copy, currently the three-word craft litany and form status messages.
- **Label** (650, 0.78rem, 0.06em, uppercase): Form labels and action text; navigation tightens to 0.75rem with 0.09em tracking.

**The One-Family Rule.** Create hierarchy with Hanken Grotesk's variable weight, scale, case, and tracking; do not introduce a display serif or decorative face.

**The Quiet Scale Rule.** Large headings stay medium-light, tightly tracked, and nearly solid-set; never compensate for scale with heavy weight.

## Layout

Desktop composition uses a restrained 13:7 hero split: the monumental image dissolves before a protected headline field, keeping type clear of the photograph's dark timber beam. The collection is divided into three deliberate viewport stops: its typographic threshold, products one and two, then products three and four. Each product pair retains a twelve-column editorial grid with asymmetric 7/5 and 5/6 spans. The craft and quote sections retain their 5:7 splits.

The sticky header is 72px tall and uses three columns to keep the centered Collection / Craft / Quote navigation independent of the brand and mobile-menu slot. Keyboard up/down arrows move through Hero, Collection title, both product pairs, Craft, and Quote; no visible arrow control or scrollbar competes with the catalog. At 980px, navigation becomes an animated menu below the header, the hero and quote areas become one column, and the hero action stacks. At 720px, the header shortens to 66px, gutters become 20px, and product pairs collapse to one column.

**The Presence Before Density Rule.** Preserve furniture scale and open ground as columns collapse; do not solve mobile by shrinking the product into a thumbnail or compressing section rhythm.

## Elevation & Depth

The interface is flat by default and uses no box shadows. Depth comes from tonal surface changes, full-bleed photography, image cropping, the translucent blurred header, and one-pixel boundaries. The sticky header uses a 94% light-plaster veil with a 14px backdrop blur, but it remains visually planar.

**The No Floating Chrome Rule.** Cards and controls sit directly on the page; use crop, tone, and fine rules instead of shadows or raised containers.

## Shapes

The form language is rectilinear and architectural. Buttons use only a 2px softening; inputs, media, cards, sections, and navigation remain square. One-pixel strokes and clipped image edges define boundaries. The logo is the sole recurring geometric emblem: three balanced trapezoidal strokes rotate around an open center, shown in ink on light surfaces, plaster on dark surfaces, and cobalt when used as a standalone brand mark.

**The Open-Center Mark Rule.** Use the supplied two-dimensional three-stroke asset without redrawing it as a letterform, monogram, filled badge, or ornamental seal.

## Components

### Buttons

Buttons are flat, compact, and confident rather than soft or pill-like.

- **Shape:** Nearly square with a minimal 2px radius, 54px minimum height, one-pixel border, and 25px horizontal padding.
- **Primary:** Restrained cobalt field with light-plaster uppercase label.
- **Hover / Focus:** Hover lifts by 1px; active presses by 1px. Keyboard focus uses a 3px cobalt outline with 4px offset, switching to pale blue on dark surfaces.
- **Disabled:** The quote-saving action retains the component but reduces opacity to 62% and uses a wait cursor.
- **Hero action:** The collection link becomes a 44px-high underlined text action with a short animated rule, preserving a clear target without introducing a heavy block into the plaster field.

### Cards / Containers

Collection items are borderless editorial figures, not framed cards.

- **Corner Style:** Square media and content edges.
- **Background:** Imagery sits on a warm placeholder; copy inherits the page surface.
- **Shadow Strategy:** None.
- **Border:** None; whitespace separates each entry.
- **Internal Padding:** Category and name share a baseline 22px below imagery; the editorial grid supplies the space between entries.
- **Behavior:** Collection images use consistent 4:3 crops and scale to 1.045 over 900ms on hover.

### Inputs / Fields

Fields are quiet underlined controls integrated into the plaster surface.

- **Style:** Transparent background, square corners, no enclosing box, 48px minimum height, and a one-pixel ink underline.
- **Focus:** The shared 3px cobalt outline is used for keyboard focus.
- **Status:** Quote results are announced in a polite live region; saved and error text uses cobalt. Native required and email validation are retained.

### Navigation

The desktop navigation is centered and contains only Collection, Craft, and Quote in compact uppercase labels with generous horizontal spacing. Hover draws a one-pixel cobalt line from left to right over 420ms. Below 980px it becomes a full-width light-plaster panel that fades and moves down into place; the menu button exposes state through `aria-expanded` and `aria-controls`. The brand and menu control keep accessible labels, and decorative logo imagery uses an empty alt because the linked brand name supplies the text alternative.

### Brand Lockup

The lockup pairs the 34px ink mark with TAHANIVO at 1.05rem, weight 620, and 0.22em tracking. On narrow screens the mark becomes 28px and the wordmark tightens proportionally. The footer reverses the mark and wordmark to light plaster on charcoal ink.

### Image System

Use close, tactile photographs of substantial furniture in plaster-toned architectural rooms. Favor matte upholstery, weathered dark timber, joinery, bronze-adjacent details, and calm natural light. Hero imagery should withstand a monumental crop; collection imagery uses consistent 4:3 editorial crops, while craft detail fills a tall split panel. Current generated images describe composition and material direction only and must be replaced or verified before they represent real products.

### Motion

Every fresh page load opens with the same restrained structure as Velora: the TAHANIVO wordmark contracts from ceremonial wide tracking into its normal lockup while a pale cobalt rule draws beneath it. The ink cover then lifts in one smooth movement over a stationary landing screen as its hero, navigation, and typography choreography begins. The sequence uses only TAHANIVO's palette, is dismissible by click or Escape, and bypasses itself when reduced motion is requested.

State feedback uses a 140ms quick duration and structural navigation uses 420ms, all with the exponential cubic-bezier easing. The collection title rises through a typographic mask, then each product is uncovered vertically with its name following one beat later when it crosses the viewport center. Native smooth scrolling connects the six page stops without a runtime animation dependency. One keyboard arrow press advances one stop, held keys do not race, and form fields retain native arrow behavior. Reduced-motion preferences bypass the Joinery Gate and replace smooth movement with immediate jumps.

## Do's and Don'ts

### Do:

- **Do** let one substantial furniture crop command the opening composition.
- **Do** use restrained cobalt for actions, keyboard focus, status, and small orientation cues.
- **Do** preserve the 44px minimum menu target, semantic landmarks, visible focus, descriptive product alt text, and reduced-motion behavior.
- **Do** preserve the distilled path from collection to craft to quote.
- **Do** label provisional catalog content and local-only quote behavior honestly until backend services exist.
- **Do** use the supplied three-stroke mark and maintain its open center.

### Don't:

- **Don't** add rounded card chrome, pills, gradients, heavy shadows, glass panels, or decorative borders.
- **Don't** introduce a serif or ornamental display face; hierarchy belongs to Hanken Grotesk's scale and variable weight.
- **Don't** fabricate products, prices, availability, customer claims, fulfillment promises, article publication, or successful remote quote submission.
- **Don't** imply a physical showroom or invite visitors to see products in person.
- **Don't** restore journal, search, account, bag, product-description, secondary-CTA, or explanatory-copy UI until real content or services justify it.
- **Don't** use uncontrolled bounce, parallax, or continuous decorative motion.
