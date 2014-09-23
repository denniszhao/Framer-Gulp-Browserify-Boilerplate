## Framer Boilerplate with Gulp + Browserify

This repository aims to provide a boilerplate for a Framer prototype using [Gulp](http://gulpjs.com/) and [Browserify](http://browserify.org/) as the build system.

I wasn't aware of a good solution to be able to develop a relatively large prototype with different components with CoffeeScript like what Gulp and Browserify provide for JavaScript. I'm also not a huge fan of CoffeeScript haha.

`gulp watch` will watch for any changes in `app.js` (and dependencies) and properly build the file into `build.js`.

I usually try and define the relatively bulky parts of Layers in the components and then define the interaction between different Layers in `app.js`.

You can parameterize the methods returned by `require`ing certain files to customize the Layers returned like so:

```
module.exports = function generateThumbnail(width, height, imageSrc) {

    var thumbnail = new Layer({
        width: width,
        height: height,
        backgroundUrl: imageSrc
    });

    return thumbnail;
}
```

and now you can parameterize the generation of these thumbnails, maybe in a loop or something, like so:

```
var generateThumbnail = require('./components/thumbnail.js'),
    thumbs = [];

for (var i = 0; i < NUM_THUMBNAILS; i++) {
    thumbs.push(generateThumbnail(i * 50, 0, BG_IMG_SRC));
}
```

