//defining an immediatly invoked function to call module 1 and module2
(function (module1, module2) {

    module1.doWork();
    module2.doWork();

})(module1, module2);