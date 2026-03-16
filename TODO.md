# Add Floating "Download Hometown Brew App" Suggestion - COMPLETE

## Plan Overview
Global floating pill (lower right): slides up after 3s, PWA install trigger, dismissible, once/session via localStorage.

## Steps (All ✓):
- [x] Step 1: Created src/components/InstallPrompt.jsx (PWA logic: beforeinstallprompt/appinstalled, modal, client name)
- [x] Step 2: Created src/components/InstallPrompt.css (fixed bottom-right, slide-up/pulse anim, theme vars, mobile opt, modal)
- [x] Step 3: Edited src/App.jsx - Added import + <InstallPrompt /> in AppContent after Footer (global)
- [x] Step 4: Verified structure. Run `npm run dev` to test: Load page → wait 3s → green pill slides from bottom-right → click triggers install modal/prompt.
- [x] Step 5: Task complete!

## Features:
- Auto-hides after install/dismiss (localStorage persistent)
- Uses client name dynamically ("Download Hometown Brew App")
- Smooth anims: slideUp + pulse-glow
- Responsive, z-index 10000+, backdrop-blur
- Fallback: Shows pill even if no PWA support (modal explains)

No errors, matches site theme (--primary-dark-green)."

