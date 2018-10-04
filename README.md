#GRB Boilerplate

##What is it?
This boilerplate is a collection of files to help kickstart front-end web
development. It incorporates tools, web frameworks, and libraries, including:

- [**G**runt][1] for automated task and build running
- [**R**equireJS][2] for JavaScript module loading
- [**B**ootstrap][3] for scaffolding, style, and front-end components
- [html5boilerplate][4] for a base front-end template
- [Normalize.css][5] for cross-browser rendering consistency
- [jQuery][6] for quick development of JavaScript features
- [Modernizr][7] for feature detection
- [Jasmine][8] for unit testing

##How to use it
###Quick start
If you just want to get started and/or don't need build features, just copy
the contents of the `src` directory to a new directory and begin modifying
`index.html`, `stylesheets/style.css`, and `javascripts/main.js`.

###Building
For the full boilerplate with build features, [you will need to have Node.js
installed][9] (which comes with NPM). In addition, you will need the
[grunt-cli][10] installed globally. If you don't already have it, run
`npm install -g grunt-cli` from the command line.

With the environment set up, modify `package.json` to include the name of your
project. Then, run `npm install` from the command line to install dependencies.

Begin development by modifying `src/index.html`, `src/stylesheets/style.css`,
and `src/javascripts/main.js`. When you want to build, run `grunt` from the
command line. The built project will appear in the `build` directory.

###Testing
Unit tests are ran using [Jasmine][8]. Everything is contained in the `test`
directory. Describe tests in `test/javascripts/spec.js`. If you want to break
specs into multiple files, just modify `test/javascripts/main.js` to include
all your spec files.

Run tests by opening `test/SpecRunner.html` in a browser.

[1]: http://gruntjs.com
[2]: http://requirejs.org/
[3]: http://twitter.github.com/bootstrap/
[4]: http://html5boilerplate.com/
[5]: http://necolas.github.com/normalize.css/
[6]: http://jquery.com/
[7]: http://modernizr.com/
[8]: https://jasmine.github.io/
[9]: http://nodejs.org/download/
[10]: https://github.com/gruntjs/grunt-cli
