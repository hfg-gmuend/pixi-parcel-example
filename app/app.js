// Import all
import * as PIXI from "pixi.js"
import resize from "./resize.js";
import { FloatingSprite, AnchoredSprite, StepperSprite } from "./sprite.js";
import colorFilter from "./colorFilter.js";
import TiledMap from './tiledmap.js';

// options for pixi app
const options = {
  antialias: false,
  autoDensity: true,
  backgroundColor: "0xaaaaaa",
  width: 512,
  height: 512
};

// Create application
const app = new PIXI.Application(options);

let pixelSize = 1;
let aspectRatio = options.width / options.height;

// Load sprite atlas
app.loader
  .add("littleguy", "assets/bitcraft-littleguy.json")
  .add("pixelpal", "assets/kenney-pixelpal.json")
  .add("tilesheet", "assets/kenney-tilesheet.json")
  .add("tiledmap", "assets/tiled-tilemap-8x8.json")
  .load(startup);

// dynamically resize the app to fixed aspect ratio
resize(app, aspectRatio);

// start animation
function startup() {

  let layer = new TiledMap(app, "tilesheet", "tiledmap"); 
  app.stage.addChild(layer);

  // create a sprite the animates while moving
  let pixelpal = new FloatingSprite(app, "pixelpal", "walk", 1);
  app.stage.addChild(pixelpal);

  // create a sprite that uses anchors for animation
  let littleguy = new AnchoredSprite(app, "littleguy", "walk", 5);
  app.stage.addChild(littleguy);

  // create a sprite that lets us step through individual frames using arrow keys
  let stepperguy = new StepperSprite(app, "littleguy", "walk", 5);

  // add a custom color filter, because we can ...
  stepperguy.filters = [
    colorFilter(0xff3333, 0x3333ff),
    colorFilter(0xcc0000, 0x0000cc),
  ];

  app.stage.addChild(stepperguy);
  
}
