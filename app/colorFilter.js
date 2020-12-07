import * as PIXI from "pixi.js";

// just replace one color by an other one ...
export default function colorFilter(oldColor, newColor) {

    const fragment = `
    varying vec2 vTextureCoord;
    uniform sampler2D uSampler;
    uniform vec3 oldColor;
    uniform vec3 newColor;
    void main(void)
    {
       gl_FragColor = texture2D(uSampler, vTextureCoord);
       if(  gl_FragColor.rgb == oldColor ) {
        gl_FragColor.rgb = newColor;
       }
    }`;
    
    oldColor = PIXI.utils.hex2rgb(oldColor);
    newColor = PIXI.utils.hex2rgb(newColor);
    return new PIXI.Filter(null, fragment, { oldColor, newColor });

}