import { RectTileLayer } from "./pixi-tilemap.js";

export default class TiledMap extends RectTileLayer {

  constructor(app, tilesheetId, tiledmapId) {
    // create some tiles
    super(
      0,
      app.loader.resources[tilesheetId + "_image"].texture
    );

    // content of the json file created by Tiled Map Editor
    const tiled = app.loader.resources[tiledmapId].data;

    // get tile index array
    const lookup = tiled.layers[0].data;

    // get tile texture array
    const tiles = Object.keys(app.loader.resources[tilesheetId].textures);

    // fill the stage with tiles
    for (let x = 0; x < tiled.width; x++) {
      for (let y = 0; y < tiled.height; y++) {
        let idx = lookup[y * tiled.width + x];
        if (idx > 0) {
          this.addFrame(
            tiles[idx - 1],
            x * tiled.tilewidth,
            y * tiled.tileheight
          );
        }
      }
    }
  }
}
