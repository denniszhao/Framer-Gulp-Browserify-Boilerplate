## Framer Boilerplate with Gulp + Browserify

This repository aims to provide a boilerplate for a Framer prototype using [Gulp](http://gulpjs.com/) and [Browserify](http://browserify.org/) as the build system.

I wasn't aware of a good solution to be able to develop a relatively large prototype with different components with CoffeeScript like what Gulp and Browserify provide for JavaScript. I'm also not a huge fan of CoffeeScript haha.

`gulp watch` will watch for any changes in `app.js` (and dependencies) and properly build the file into `build.js`.

I usually try and define the relatively bulky parts of Layers in the components and then define the interaction between different Layers in `app.js`.