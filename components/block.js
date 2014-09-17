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