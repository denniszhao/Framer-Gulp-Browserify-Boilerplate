/**
 *
 *  Entry point, uses browserify to require different components of the app
 *
**/

var app = new Layer({
  x: 0,
  y: 0,
  width: 128,
  height: 128,
  image: "images/framer-icon.png"
});

// Import a module with Browserify
var block = require("./components/block.js")();

// We can define events on the generated Layers so that we can define interaction
// between Layers of the app
block.on(Events.Click, function () {
  app.states.next();
});

// This is equivalent to the boilerplate provided when you start a new Framer
// Studio project
app.states.add({
  second: {
    y: 100,
    scale: 0.6,
    rotationZ: 100
  },
  third: {
    y: 300,
    scale: 1.3,
    blur: 4
  },
  fourth: {
    y: 200,
    scale: 0.9,
    blur: 2,
    rotationZ: 200
  }
});

app.states.animationOptions = {
  curve: "sprint(500, 12, 0)"
};

app.on(Events.Click, function () {
  app.states.next();
});

