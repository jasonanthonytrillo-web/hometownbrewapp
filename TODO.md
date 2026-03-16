# Task: Change colors in size select buttons for readability ✓

## Steps:
- [x] Step 1: Create TODO.md (done)
- [x] Step 2: Edit src/pages/Menu.css - Update .size-option-btn normal state for dark text on light green bg (`color: var(--primary-dark-green);`), ensure hover dark green/white with enhanced shadow (done)
- [x] Step 3: Verify changes, update TODO.md (done)
- [x] Step 4: Test in browser, complete task (changes applied successfully)

**Changes summary:**
- Normal state: Added `color: var(--primary-dark-green);` to .size-option-btn for readable dark green text on light bg
- Hover: Added `box-shadow: 0 4px 12px rgba(45, 106, 79, 0.3);` for better effect
- .size-price: `color: inherit;` to match button color
- .size-modal-card: Subtle green tint bg for cohesion

Size selection buttons now have dark green text (readable) on light green bg normally, switch to white text on dark green hover. No functionality changed.
