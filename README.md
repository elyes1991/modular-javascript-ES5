# Modular Javascript with ES5

It is important to build maintainable applications based on reusable components when coding with javascript, and to implement it we should consider some patterns and tools founded with ths community, since native javascript do not contain built-in functionality for doing it.

A module is a bunch of code that encapsulates implementation details of a common functionality and expose a public API that make it reusable.

In ES5 the current version of javascript (implemented on most browsers), there is a few common convensions to implement modularity, using some tools and patterns, as example have:

## Using the Revealing Module Pattern

The module pattern is a design pattern and the most basic way to implement modularity in ES5 using native javascript (no external tools).

##### Example directory structure
    ├── Module Pattern
    │   ├── js                    			# Js files folder
    │       ├── app.js         			# Main application file
    │       ├── module1.js 			# Module 1 Implementation 
    │       └── module2.js 			# Module 2 Implementation 
    └── index.html
 > ##### js/module1.js
```javascript
var module1 = function () {
    function doWork() {
        console.log("Module 1 do work");
    }
    return {
        doWork: doWork
    }
}();
```
> ##### js/module2.js
```javascript
var module2 = function () {
    function doWork() {
        console.log("Module 2 do work");
    }
    return {
        doWork: doWork
    }
}();
```
> ##### js/app.js
```javascript
//defining an immediatly invoked function expression (IIFE) to call module 1 and module2
(function (module1, module2) {
    module1.doWork();
    module2.doWork();
})(module1, module2);
```
> ##### index.html
```html
<html>
<head>
    <meta charset="UTF-8" />
    <title>My App</title>
</head>
<body>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar navbar-header">
                <div class="navbar-brand">App</div>
            </div>
        </div>
    </nav>
    <script type="text/javascript" src="js/module1.js"></script>
    <script type="text/javascript" src="js/module2.js"></script>
    <script type="text/javascript" src="js/app.js"></script>
</body>
</html>
```
> ##### log in the browser console
    // Module 1 do work
    // Module 2 do work

------------






> **Note:** Before getting hands dirty with the other two impletations of the modularity in Javascript ES5, we should define two terms **"module formats"** and **"module loaders"**.
>* **Module formats:** a module format is the syntax we can use to define a module (AMD, CommonJS,..).
>* **Module loaders:** a module loader is responsable for loading modules and interpreting the corresponding implementation of the module format (require.js, system.js, curl.js,...).

------------


## Using Asynchronous Module Definition (AMD)

AMD format is a specification for defining modules and their dependencies, and load them asynchronously if desired.


##### Installing npm packages
    npm install http-server -g 
    cd AMD/ 
    npm install

We can install the http-server package to serve static files.

##### Example directory structure
    ├── AMD
    │   ├── js                    			# Js files folder
    │       ├── app.js         			# Main application file
    │       ├── module1.js 			# Module 1 Implementation 
    │       └── module2.js 			# Module 2 Implementation 
	├── package.json
    └── index.html

The **define** keywork defines the module as a function parameter, the first paramter is an array containing the dependencies of the defined module (if we have no dependency we put an empty array **[]**).  
> ##### js/module1.js
```javascript
define([], function () {
    function doWork() {
        console.log("Module 1 do work");
    }
    return {
        doWork: doWork
    }
});
```
> ##### js/module2.js
```javascript
define([], function () {
    function doWork() {
        console.log("Module 2 do work");
    }
    return {
        doWork: doWork
    }
});
```
> ##### js/app.js
```javascript
define(['./module1', './module2'], function (module1, module2) {
    module1.doWork();
    module2.doWork();
});
```
> ##### index.html
To add the support of the AMD format we should add the **requirejs** module loader as a js dependency on our web page, and specify **data-main** attribute and pass the main app file path which is in our case app.js.
```html
<html>
<head>
    <meta charset="UTF-8" />
    <title>My App</title>
</head>
<body>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar navbar-header">
                <div class="navbar-brand">App</div>
            </div>
        </div>
    </nav>
    <script type="text/javascript" data-main="js/app.js" src="node_modules/requirejs/require.js"></script>
</body>
</html>
```
> ##### log in the browser console
    // Module 1 do work
    // Module 2 do work

------------


## Using CommonJS

The CommonJS module format is the nodejs way for writing module code in javaScript.


##### Installing npm packages
    cd CommonJS/ 
    npm install



##### Example directory structure
    ├── CommonJS
    │   ├── js                    			# Js files folder
    │       ├── app.js         			# Main application file
    │       ├── module1.js 			# Module 1 Implementation 
    │       └── module2.js 			# Module 2 Implementation 
	├── package.json
    └── index.html

The **define ** keywork defines the module as a function parameter, the first paramter is an array containing the dependencies of the defined module (if we have no dependency we put an empty array **[]**).  
> ##### js/module1.js
```javascript
function doWork() {
    console.log("Module 1 do work");
}
module.exports = {
    doWork: doWork
};
```
> ##### js/module2.js
```javascript
function doWork() {
    console.log("Module 2 do work");
}
module.exports = {
    doWork: doWork
};
```
> ##### js/app.js
```javascript
var module1 = require('./module1.js');
var module2 = require('./module2.js');
module1.doWork();
module2.doWork();
```
> ##### index.html
To work with CommonJS module format we can include the module loader  **system.js** as a dependency on our web page, it will enable us to use the **require** keyword that will load dependent modules and also the **module.exports** that will expose public elements.
```html
<html>
<head>
    <meta charset="UTF-8" />
    <title>My App</title>
</head>
<body>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar navbar-header">
                <div class="navbar-brand">App</div>
            </div>
        </div>
    </nav>
  <script type="text/javascript" src="node_modules/systemjs/dist/system.js"></script>
    <script type="text/javascript">
        System.config({
            meta:{
                format : 'cjs'
            }
        });
        System.import('js/app.js');
    </script>
</body>
</html>
```
> ##### log in the browser console
    // Module 1 do work
    // Module 2 do work

------------

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


