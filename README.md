# Modular Javascript with ES5

It is important to build maintainable applications based on reusable components when coding with javascript, and to implement it we should consider some patterns and tools that helps, since native javascript do not contain some built in functionality for doing it.

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
* **Module formats:** a module format is the syntax we can use to define a module (AMD, CommonJS,..).
* **Module loaders:** a module loader is responsable for loading modules and interpreting the corresponding implementation of the module format (require.js, system.js, curl.js,...).

------------


## Using Asynchronous Module Definition (AMD)

The module pattern is a design pattern and the most basic way to implement modularity in ES5 using native javascript (no external tools).






### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you have to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
