# Design Guidelines: C.S.I. Wesley Church Landing Page

## Design Approach
**Reference-Based + Modern Web Aesthetics**: Drawing inspiration from contemporary spiritual websites with glassmorphism trends, creating a divine and tranquil digital experience that balances modern interactivity with spiritual warmth.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Peaceful Lavender: 260 45% 85% (light mode backgrounds)
- Divine Gold: 45 85% 75% (accent and highlights)
- Pure White: 0 0% 100% (text and glass surfaces)
- Soft Purple: 270 40% 70% (gradients and overlays)

**Dark Mode:**
- Deep Purple: 260 30% 15% (backgrounds)
- Warm Gold: 45 60% 50% (accents)
- Frosted White: 0 0% 95% (text on dark)

**Glassmorphism Treatment:**
- White glass surfaces with 10-20% opacity
- Backdrop blur of 12-16px
- Subtle borders with 1px white at 20% opacity
- Soft shadow: 0 8px 32px rgba(0, 0, 0, 0.1)

### B. Typography
**Font Families:**
- Primary (Headings): Cinzel (serif, elegant)
- Secondary (Body): Montserrat Regular and Italic
- Church Name: Cinzel Bold in navbar

**Type Scale:**
- Hero Text: 4xl to 6xl (Bible verses)
- Section Headings: 3xl to 4xl (Cinzel)
- Card Titles: xl to 2xl (Montserrat)
- Body Text: base to lg (Montserrat Regular)
- Italicized: Event names, quotes, emphasized text (Montserrat Italic)

**Hierarchy:**
- Cinzel for all major headings and church name
- Montserrat Regular for descriptions and content
- Montserrat Italic for event names, Bible verses, and spiritual quotes

### C. Layout System
**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 to py-24
- Card spacing: p-6 to p-8
- Element gaps: gap-4 to gap-8

**Container Structure:**
- Max width: max-w-7xl for full sections
- Content width: max-w-6xl for text-heavy areas
- Centered layout with mx-auto

### D. Component Library

**Navigation Bar:**
- Fixed top position with glassmorphic background
- Church logo (left) + "C.S.I. Wesley Church" in Cinzel
- Right-aligned links: Home, About, Services, Presbyter, Events, Contact
- Smooth scroll behavior to sections
- Backdrop blur with slight white transparency

**Hero Section:**
- Full viewport height (90-100vh)
- Large hero background image (church exterior or congregation)
- Gradient overlay (lavender to gold, 50% opacity)
- Bible verse in large Cinzel or Montserrat Italic centered
- Frosted glass card with "Join Us This Sunday" CTA button
- Subtle parallax animation on scroll

**About Section:**
- "About Our Church" heading in Cinzel
- Animated photo grid (3 columns on desktop, stacked on mobile)
- Historical images: church_old1.jpg, church_old2.jpg, church_old3.jpg
- Frosted glass panels behind text blocks
- Fade-in animation on scroll
- Story of three churches merging narrative

**Services Section:**
- "Service Timings & Locations" heading
- Service cards in grid (2 columns desktop, stacked mobile)
- Each card: glassmorphic background, gradient (lavender/white)
- Content: Service time, address, embedded map snippet
- Hover effect: lift (translateY -4px) with enhanced shadow and glow

**Presbyter Section:**
- "Our Presbyter" centered heading
- Circular frosted glass frame (200-250px diameter)
- Presbyter portrait with light reflection animation (subtle rotation/shimmer)
- Welcome note below in Montserrat Italic
- Centered layout

**Events Section:**
- "Upcoming Events" heading
- Horizontal scroll container or grid of event cards
- Event cards with glassmorphic backgrounds
- Event names in Montserrat Italic
- Date and description fade in on hover
- "Learn More" button with glow animation
- Placeholder image: event_placeholder.jpg

**Contact/Footer:**
- Glassmorphic contact card with location pin icon
- Address: Poonamallee location
- Contact details and social media icons
- Social icons with smooth color transitions on hover
- Gradient footer bar (lavender to gold) with light opacity
- Fade-in animation on view

### E. Animations & Interactions
**Scroll Animations:**
- Fade-in effects for section content (stagger children)
- Parallax movement on hero background (slow, subtle)
- Reveal animations for cards and images

**Hover Effects:**
- Card lift: translateY(-4px) + enhanced shadow
- Button glow: soft outer glow expanding
- Social icon color transitions (gold accent)
- Image zoom: scale(1.05) on hover

**Transitions:**
- Default timing: 300-400ms ease-in-out
- Smooth scroll behavior for navigation
- Backdrop filter transitions for glassmorphism

## Images

**Required Images:**
1. **hero_banner.jpg** - Hero Section: Church exterior or welcoming congregation scene, full-width background
2. **logo.png** - Navbar: Church logo (top-left corner)
3. **church_old1.jpg, church_old2.jpg, church_old3.jpg** - About Section: Historical images in animated grid
4. **presbyter_portrait.png** - Presbyter Section: Portrait in circular frosted frame
5. **service_photo.jpg** - Services Section: Church interior during worship (optional card background)
6. **event_placeholder.jpg** - Events Section: Event card images

**Hero Image Treatment:**
- Full-width, full-height background
- Gradient overlay (lavender 260 45% 85% to gold 45 85% 75%, 40-50% opacity)
- Blur filter on edges for depth

## Responsive Design
- Mobile (< 768px): Single column, stacked cards, hamburger menu
- Tablet (768-1024px): Two-column grids, adjusted spacing
- Desktop (> 1024px): Full multi-column layouts, enhanced animations

## Accessibility
- High contrast text on glassmorphic surfaces
- Readable font sizes (minimum 16px body)
- Focus states for keyboard navigation
- Alt text for all images
- Semantic HTML structure