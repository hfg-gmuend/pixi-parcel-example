// dynamically resize the renderer to fit the window
export default function resizeWindow(app, ratio) {

  document.body.appendChild(app.view);

  // add resize handler
  window.onresize = resize;

  // resize once in the beginning
  resize();

  // scale the renderer to match the window size
  function resize() {
    if (window.innerWidth / window.innerHeight >= ratio) {
      var w = window.innerHeight * ratio;
      var h = window.innerHeight;
    } else {
      var w = window.innerWidth;
      var h = window.innerWidth / ratio;
    }
    app.renderer.view.style.width = w + "px";
    app.renderer.view.style.height = h + "px";
  }
}
