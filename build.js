(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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


},{"./components/block.js":2}],2:[function(require,module,exports){
/**
 *
 *  Example of an exported layer generator
 *
 *  To use: var block = require("/path/to/block.js")();
 *
 *  Can then set states, events, and interactions between layers in app.js
 *  because the Layer is returned.
 *
**/

module.exports = function createBlock() {
    var block = new Layer({
        x: 0,
        y: 0,
        width: 30,
        height: 30,
        backgroundColor: '#FFF'
    });

    return block;
}
},{}]},{},[1])