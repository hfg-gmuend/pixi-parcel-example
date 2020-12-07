import keyboard from "./keyboard.js";

let left = keyboard("ArrowLeft");
let right = keyboard("ArrowRight");
let up = keyboard("ArrowUp");
let down = keyboard("ArrowDown");

/*
left.press = () => {
  console.log("left");
};
right.press = () => {
  console.log("right");
};
up.press = () => {
  console.log("up");
};
down.press = () => {
  console.log("down");
};
*/

export default {
  left,
  right,
  up,
  down,
};
