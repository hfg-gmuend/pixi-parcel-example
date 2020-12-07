// use the controller to step through the frames of a sprite
export default function (sprite, controller) {
  controller.right.press = () => {
    let next = (sprite.currentFrame + 1) % sprite.totalFrames;
    sprite.gotoAndStop(next);
  };
  controller.left.press = () => {
    let next =
      (sprite.currentFrame + sprite.totalFrames - 1) % sprite.totalFrames;
    sprite.gotoAndStop(next);
  };
}
