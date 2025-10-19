# 🎬 Portfolio Animation Features

## Overview
This document describes all the modern animations implemented across the portfolio website.

---

## 🏠 Hero Section Animations

### Background Effects
- **🖼️ Image Slider**: Auto-rotating background images with smooth fade transitions (5-second intervals)
  - 4 stunning tech-themed backgrounds
  - Manual navigation via clickable indicators
  - Smooth opacity transitions (2000ms duration)

- **✨ Floating Particles**: 30 animated particles drifting upward
  - Varying sizes (2-6px)
  - Random positioning and speeds
  - Opacity variations for depth

- **🌟 Geometric Orbs**: 3 large pulsing shapes
  - Staggered animation delays
  - Blur effects for atmosphere
  - 6-second pulse cycle

- **📊 Animated SVG Lines**: Connection patterns with gradient strokes
  - 5 animated lines
  - Pulsing effects
  - Gradient colors

### Content Animations
- **Slide-in from Left**: Text content
- **Slide-in from Right**: Profile image
- **Rotating Ring**: 20-second rotation around profile
- **Gradient Text Animation**: Animated name gradient
- **Button Hover Effects**: Scale and translate on hover

---

## 📖 About Section Animations

### Scroll-triggered Animations
- **Header**: Fade in + slide up (1000ms)
- **Content Card**: Slide in from left (1000ms + 200ms delay)
- **Stats Cards**: Staggered fade-in with slide up
  - Individual delays: 400ms, 500ms, 600ms, 700ms

### Hover Effects
- **Stats Cards**: Lift up on hover (-8px translate)
- **Icon Scaling**: Icons scale up 110% on card hover

---

## 🛠️ Skills Section Animations

### Scroll-triggered Animations
- **Header**: Fade in + slide up (1000ms)
- **Skill Cards**: Staggered grid animation
  - Individual delays: 0ms, 100ms, 200ms, 300ms, 400ms, 500ms
  - Fade in + slide up effect

### Hover Effects
- **Card Lift**: Slight upward movement on hover
- **Icon Scaling**: 110% scale on hover
- **Skill Items**: Individual item translation and color change

---

## 💼 Projects Section Animations

### Scroll-triggered Animations
- **Header**: Fade in + slide up (1000ms)
- **Project Cards**: Staggered grid animation with scale
  - Individual delays: 0ms, 100ms, 200ms, 300ms, 400ms, 500ms
  - Fade in + slide up + scale effect (95% → 100%)

### Hover Effects
- **Image Zoom**: 110% scale on image hover
- **Overlay**: Gradient overlay appears
- **Buttons**: Slide up from below overlay
- **Card Lift**: -8px translate on hover
- **Title Color**: Blue highlight on hover

---

## 📧 Contact Section Animations

### Scroll-triggered Animations
- **Header**: Fade in + slide up (1000ms)
- **Left Card**: Slide in from left (1000ms)
- **Right Card**: Slide in from right (1000ms + 200ms delay)

### Hover Effects
- **Contact Items**: Slide right on hover (8px)
- **Icon Shadows**: Shadow appears on hover
- **Social Icons**: Lift up + scale on hover
- **Form Button**: Lift up + enhanced shadow on hover

---

## 🎨 Animation Utilities

### Custom Keyframes
1. **gradient**: Background position animation (3s)
2. **fadeIn**: Opacity + Y-translation (1s)
3. **float**: Particle upward drift (variable duration)
4. **pulseSlow**: Opacity + scale pulsing (6s)
5. **slideInLeft**: Slide from left with fade (0.8s)
6. **slideInRight**: Slide from right with fade (0.8s)
7. **spin**: 360° rotation (20s)

### Transition Delays
- 75ms, 100ms, 200ms, 300ms, 400ms, 500ms
- Used for staggered animations

---

## 🎯 Implementation Details

### Intersection Observer Hook
- **File**: `src/hooks/useScrollAnimation.ts`
- **Threshold**: 0.1 (10% visibility)
- **Root Margin**: -100px from bottom
- **Behavior**: Animations trigger once when scrolling into view

### Performance Optimizations
- GPU-accelerated transforms (translate, scale)
- Will-change hints for smooth animations
- One-time trigger (no re-animation on scroll)
- Efficient intersection observer cleanup

---

## 🎬 Animation Timeline

### On Page Load
1. Hero section immediately visible
2. Background slider starts cycling
3. Particles begin floating
4. Geometric shapes pulse

### On Scroll
1. Section header fades in + slides up
2. Content cards slide in from sides
3. Grid items appear with stagger effect
4. Hover states become active

### On Interaction
1. Button hover: scale + shadow
2. Card hover: lift + enhanced effects
3. Icon hover: scale transforms
4. Slider dots: manual navigation

---

## 🚀 Browser Support
- Modern browsers with CSS3 support
- Intersection Observer API
- GPU acceleration enabled
- Fallback: Elements appear without animation

---

## 📱 Responsive Behavior
All animations are responsive and work across:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

Animation timing and distances adjust for smaller screens to maintain smooth performance.
