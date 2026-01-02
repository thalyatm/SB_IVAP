# Independent Visions Art Prize - Landing Pages

## Project Overview
React landing pages for Studio on Brunswick's Independent Visions Art Prize.

**Ticket SKU:** SQ0710743
**Stripe Checkout URL:** https://buy.stripe.com/14AdRb4Hn2FCbn26Jm3wQ00

## Brand Colors
- **Primary Gold**: `#AA9B05` (used for accents, icons, highlights)
- **Primary Gold Dark**: `#8a7e04` (hover states for gold elements)
- **Button/Footer Purple**: `#25102E` (all CTA buttons and footer background)
- **Button Purple Dark**: `#1a0b20` (hover states for purple buttons)

## Design Decisions & Feedback

### Typography
- Headlines use `'Cormorant Garamond', serif`
- Body text uses `'DM Sans', sans-serif`
- Main headline should be prominent: `clamp(2rem, 5.5vw, 3.25rem)`

### Hero Section
- Two-column layout: image on left, content on right (stacks on mobile)
- Eyebrow text shows "Independent Visions Art Prize" (NOT "Studio on Brunswick presents" - this was confusing as it sounded like the headline was the name of what's being presented)
- Subheadline should NOT repeat the prize name if it's already in the eyebrow
- Winners photo displayed in hero

### Buttons
- All CTA buttons use the purple color (`#25102F`), not gold
- Includes: main CTAs, navigation "Submit Entry" button

### Footer
- Background uses purple gradient (`#25102F` to `#1a0b21`)

### Icons
- Use simple Unicode symbols instead of complex CSS-drawn pseudo-element icons
- Benefit icons: ◆ (diamond), ✦ (star), ✧ (star outline), ❖ (diamond with dot)
- Icons should be clean and consistent

### Mobile Optimization
- Trust bar: 2x2 grid layout on mobile
- Benefit cards: 2 per row on mobile
- Prize section: Left-aligned text on mobile (not centered)
- Exhibition dates box: `width: auto` on mobile (not full width)
- FAQs: Expandable accordion style
- All sections should be condensed on mobile with reduced padding

### Sections to Exclude
- **Guest Judge section**: Removed entirely (no photo of Kate Marek available)

### Section-Specific Notes

#### Prize Breakdown
- Subtitle should NOT include "Seven ways to win" or similar counting phrases
- Keep it simple: "Each prize valued at real career investment."
- Condensed layout with smaller padding and font sizes

#### How It Works
- Timeline steps displayed as cards with dashed connectors between them
- Exhibition dates in a highlighted box

#### FAQs
- Expandable accordion style (click to toggle open/close)
- Plus icon that animates to minus when open
- Smooth height transitions

#### Final CTA ("Ready to take the next step")
- Condensed layout with reduced padding (3rem instead of 6rem)
- Smaller box padding and tighter gaps

### CSS Variables (ReadyToBeSeen.css)
```css
--warm-white: #FAF8F5;
--cream: #F5F0E8;
--soft-taupe: #E8E0D5;
--warm-gray: #8B7E74;
--deep-brown: #4A3F35;
--charcoal: #2D2A26;
--brand-gold: #AA9B05;
--brand-gold-dark: #8a7e04;
--brand-purple: #25102F;
--brand-purple-dark: #1a0b21;
--urgency-red: #C44536;
--success-green: #5A7D5A;
```

## File Structure
- `/src/pages/ReadyToBeSeen.jsx` - Page 1 component
- `/src/pages/ReadyToBeSeen.css` - Page 1 styles
- `/src/pages/MoreThanAPrize.jsx` - Page 2 component
- `/src/pages/MoreThanAPrize.css` - Page 2 styles
- `/src/pages/FindYourDirection.jsx` - Page 3 component
- `/src/pages/FindYourDirection.css` - Page 3 styles
- `/src/components/Header.jsx` - Shared header
- `/src/components/Header.css` - Header styles
- `/public/images/` - Image assets (Winners.jpg, Gallery.webp)

## UI/UX Styles

### Spacing
- Section padding (desktop): `3rem 2rem` to `5rem 2rem`
- Section padding (mobile): `2rem 1rem` to `3rem 1rem`
- Card padding (desktop): `1.25rem` to `2rem`
- Card padding (mobile): `0.75rem` to `1rem`
- Grid gaps (desktop): `1rem` to `2rem`
- Grid gaps (mobile): `0.75rem` to `1rem`

### Shadows
- Subtle cards: `box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04)`
- Elevated cards: `box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1)`
- Buttons hover: `box-shadow: 0 8px 20px rgba(37, 16, 47, 0.35)`
- Featured elements: `box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2)`

### Transitions
- Standard: `transition: all 0.3s ease`
- Buttons: `transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- Quick interactions: `transition: all 0.2s ease`

### Hover States
- Cards: `transform: translateY(-4px)` with increased shadow
- Buttons: `transform: translateY(-3px)` with shadow, darker background
- Links: opacity change or underline animation
- Icons: `transform: scale(1.05)` with slightly darker background

### Border Styles
- Card borders: `1px solid var(--soft-taupe)`
- Accent borders: `border-left: 3px solid var(--brand-gold)` or `border-top: 3px solid var(--brand-gold)`
- Dividers: `background: linear-gradient(90deg, transparent, var(--soft-taupe), transparent)`

### Border Radius
- Cards/boxes: `border-radius: 4px` to `6px`
- Buttons: no border-radius (sharp corners)
- Icons/avatars: `border-radius: 50%`

### Backgrounds
- Sections alternate between: `var(--warm-white)`, `var(--cream)`, `var(--soft-taupe)`
- Gradients: `linear-gradient(180deg, var(--cream) 0%, var(--soft-taupe) 100%)`
- Dark sections: `linear-gradient(180deg, var(--charcoal) 0%, #1A1816 100%)` or purple equivalent
- Trust bar: dark with `linear-gradient(180deg, var(--charcoal) 0%, #1F1D1A 100%)`

### Animations
- Fade in/up: `@keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }`
- Shimmer effect on total value bar: `animation: shimmer 3s ease-in-out infinite`
- Subtle background movement: `animation: subtleMove 20s ease-in-out infinite`
- Urgency pulse: `animation: urgencyPulse 2s ease-in-out infinite`

### Font Sizes
- Eyebrow/labels: `0.6rem` to `0.75rem`, uppercase, letter-spacing `0.1em` to `0.2em`
- Body text: `0.85rem` to `1rem`
- Section titles: `clamp(1.5rem, 3vw, 2rem)` to `clamp(1.75rem, 4vw, 2.5rem)`
- Headlines: `clamp(2rem, 5.5vw, 3.25rem)`
- Prize values: `1.35rem` to `1.75rem`

### Responsive Breakpoints
Tested and optimized for widths: 320, 360, 390, 412, 430, 768, 820, 1024, 1280, 1440px

**Mobile (small to large):**
- Extra-small mobile: `max-width: 359px` (320px devices)
- Small mobile: `max-width: 480px` (360-480px devices)
- iPhone sizes: `390px-430px` (iPhone 12-15 range)
- Large phones: `max-width: 500px`

**Tablet:**
- Small tablets: `max-width: 700px`
- Tablet portrait: `max-width: 768px`
- Tablet landscape/transition: `769px-850px` (820px devices)
- Large tablet: `851px-900px`

**Desktop:**
- Small desktop: `min-width: 1024px`
- Large desktop: `min-width: 1280px`
- Extra large: `min-width: 1440px` (max-width: 1600px for content)

**Key responsive behaviors:**
- Hero: 2-column → 1-column at 900px (and at 769-850px for 820px tablets)
- Benefit grid: 4-column → 2-column at 900px
- Prize stack: 3-column → 1-column at 900px
- Timeline: horizontal → vertical at 768px
- FAQ/Specs: 2-column → 1-column at 700px
- Content max-width capped at 1600px on large screens

### Accordion/Expandable Elements
- Default state: content hidden with `max-height: 0; overflow: hidden`
- Open state: `max-height: 200px` (or appropriate value)
- Icon: plus sign that animates to minus using `::before` and `::after` pseudo-elements
- Transition: `transition: max-height 0.3s ease, margin-top 0.3s ease`

### Navigation
- Fixed header at top with `z-index: 1001`
- Sub-navigation (page nav) fixed below header with `z-index: 1000`
- Header background: `#AA9B05` (gold)
- Nav links: white text, hover opacity change

### Cards Layout
- Benefit cards: 4-column grid on desktop, 2-column on mobile
- Prize cards: 3-column grid on desktop, 1-column on mobile
- FAQ: 2-column grid on desktop, 1-column on mobile
- Specs: 2-column grid on desktop, 1-column on mobile

## Key Reminders
1. Always use purple (`#25102F`) for buttons, not gold
2. Footer should be purple, not charcoal/dark gray
3. Keep mobile layouts condensed and left-aligned where appropriate
4. Use simple Unicode icons, not complex CSS pseudo-element icons
5. FAQs should be expandable accordions
6. Avoid repetition in headlines/subheadlines
7. No Guest Judge section (removed)
8. Sharp corners on buttons (no border-radius)
9. Consistent hover states with translateY and shadow changes
10. Alternating section backgrounds for visual rhythm

## Performance Optimizations

### Code Splitting
- **ThankYou page**: Lazy loaded with `React.lazy()` - only fetched after checkout
- **CheckoutModal + Stripe SDK**: Lazy loaded - deferred until user clicks checkout button
- **Result**: Initial bundle reduced from 271KB to 256KB (15KB saved on first load)

### Bundle Analysis (Production Build)
```
Main bundle:      255.97 kB (gzip: 79.91 kB) - loads immediately
CheckoutModal:     16.67 kB (gzip: 6.02 kB) - loads on checkout click
ThankYou:           1.64 kB (gzip: 0.76 kB) - loads on thank-you route
```

### Re-render Prevention
- `Header`: Wrapped in `React.memo()` to prevent re-renders from parent state
- `ReadyToBeSeen`: All callbacks wrapped in `useCallback()`:
  - `toggleFaq`, `toggleMorePrizes`, `openCheckout`, `closeCheckout`
- Event handlers use functional updates (`prev => !prev`) for stable references

### Image Optimization
- **Hero image (`Winners.jpg`)**:
  - `fetchpriority="high"` for LCP optimization
  - `width={600} height={400}` for intrinsic sizing
  - `aspect-ratio: 3/2` CSS for CLS prevention
  - `decoding="async"` for non-blocking decode
- **Gallery image (`Gallery.webp`)**:
  - `loading="lazy"` for below-fold deferred loading
  - `width={450} height={300}` for intrinsic sizing
  - `aspect-ratio: 3/2` CSS for CLS prevention
- **Header logo**:
  - `fetchpriority="high"` (above fold)
  - `width={160} height={40}` explicit dimensions
  - `aspect-ratio: 4/1` CSS for CLS prevention

### CLS Prevention
- All images have explicit `width` and `height` attributes
- CSS `aspect-ratio` property reserves space before image loads
- FAQ accordion uses `max-height` animation (no layout shift)
- More Prizes toggle uses `max-height` animation

### How to Measure Performance

**Bundle Size:**
```bash
npm run build
# Check output for chunk sizes
```

**Lighthouse:**
```bash
# Build and preview production
npm run build && npm run preview
# Open Chrome DevTools > Lighthouse > Run audit
# Target scores: Performance 90+, Best Practices 100
```

**Runtime Performance:**
```bash
# In Chrome DevTools:
# 1. Performance tab > Record page load
# 2. Check for:
#    - LCP < 2.5s
#    - CLS < 0.1
#    - FID < 100ms
```

**React DevTools Profiler:**
```
# Install React DevTools browser extension
# 1. Open Profiler tab
# 2. Record interactions (FAQ clicks, checkout open)
# 3. Check for unnecessary re-renders (gray components = memoized)
```
