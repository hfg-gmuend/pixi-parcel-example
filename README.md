# PIXI - Parcel Example

Example of how to create a Pixel Platformer in PIXI.js using ES6 Modules and the Parcel bundler.  
Note that we are only bundling the javascript code.  
Assets are just copied to the dist folder and loaded at run-time by the PIXI loader.

Example of how to create a Pixel Platformer in PIXI.js using ES6 Modules directly in the browser.

- Loading tilesheets and tilemaps
- Loading spritesheets
- a stepper sprite with keyboard control
- floating sprite and anchored sprite motion

## Installation

- Just run it in your browser

## Modules

- `app.mjs` — the demo app
- `sprite.mjs` — custom sprite classes with asset loading
  - `FloatingSprite` (moving continuously) 
  - `AnchoredSprite` (using anchors for each frame)
  - `StepperSprite` (for debugging of animations)
- `keyboard.mjs` — keyboard events and states
- `controller.mjs` — your own extensible controller (add voice control, gesture control, etc here)
- `resize.mjs` — function to resize the stage dynamically
- `tiledmap.mjs` — load tile maps created by Tiled Map Editor
- `pixi-tilemap.mjs` — efficient implementation of tilemaps. ([pixi-tilemap](https://github.com/pixijs/pixi-tilemap) bundled as ESM for usage in the browser)
- `colorFilter.mjs` — just a quick color filter to change individual sprite colors using a GLSL fragement shader

## Assets

- `bitcraft-littleguy.png` — 8 frames walking animation — created with Piksel App + TexturePacker
- `bitcraft-littleguy.json` — spritesheet data created with TexturePacker. Adjusted anchor points / pivot points to create a convincing animation
- `kenney-pixelpal.png` — free sprite from kenney's [simplified-platformer-pack](https://www.kenney.nl/assets/simplified-platformer-pack)
- `kenney-tilesheet.png` — free tiles from kenney's  [simplified-platformer-pack](https://www.kenney.nl/assets/simplified-platformer-pack)
## Tools

- [Piksel App](https://www.piskelapp.com/) to create animations
- [Texture Packer](https://www.codeandweb.com/texturepacker) to create spritesheets and tilesheets
- [Tiled Map Editor](https://www.mapeditor.org/) to create the level

# License

MIT licensed
