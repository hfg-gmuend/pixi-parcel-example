import * as PIXI from "pixi.js";
import stepper from "./stepper.js";
import controller from "./controller.js";

// extend PIXIs animated sprite
export class PixelSprite extends PIXI.AnimatedSprite {
  constructor(app, sheetId, animationId, pixelSize) {

    // Create animation from sprite sheet
    const sheet = app.loader.resources[sheetId].spritesheet;
    sheet.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    super(sheet.animations[animationId]);

    this.app = app;
    this.pixelSize = pixelSize;
    this.scale.set(pixelSize);
    
    this.initPosition();
    this.initMotion();
  }

  // start walking at the bottom left
  initPosition() {
    this.x = this.width/2;
    this.y = this.app.renderer.height;
  }

  // play the animation
  initMotion() {
    this.animationSpeed = 1 / 20;
    this.play();
  }
}

// Use the controller to step through the sprite animation
export class StepperSprite extends PixelSprite {
  initMotion() {
    this.updateAnchor = true;
    stepper(this, controller);
  }
}

// Continuous floating + animation
export class FloatingSprite extends PixelSprite {
  initMotion() {
    this.animationSpeed = 1 / 10;
    let speed = 2;
    let ticker = PIXI.Ticker.shared;
    ticker.add((time) => {
      this.position.x += speed;
    });
    this.play();
  }
}

// Updating anchor + movement at the end of the loop
export class AnchoredSprite extends PixelSprite {
  initMotion() {
    this.animationSpeed = 1 / 5;
    this.updateAnchor = true;
    // move the sprite forward after each loop
    this.onLoop = () => {
      this.position.x += this.pixelSize * 8;
    }
    this.play();
  }
}
