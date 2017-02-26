// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones,
requirejs.config({
    "baseUrl": "scripts",
    "urlArgs": "bust=" + (new Date()).getTime(),
    "paths": {
      "jquery": "libs/jquery/dist/jquery",
      "bootstrap": "libs/bootstrap/dist/js/bootstrap",
      "Sammy": "libs/sammy/lib/sammy",
      "knockout": "libs/knockout/dist/knockout",
      "knockout-amd-helpers": "libs/knockout-amd-helpers/build/knockout-amd-helpers",
      "knockout-postbox": "libs/knockout-postbox/build/knockout-postbox",
      "executeBinding":"app/bindings/executeBinding",
      "text":"libs/text/text",
      "app": "app"
    },
    shim: { // synchonously loaded, for script which not support AMD. Specify the required dependencies in the array.
        "bootstrap": ['jquery']
    }
});


// Boot things up and get the core App bound to knockout
require(["knockout", "app/main", "jquery" ,"knockout-amd-helpers","knockout-postbox", "text"], function(ko, App,$) {
    ko.bindingHandlers.module.baseDir = "app/modules";
    ko.amdTemplateEngine.defaultPath = "../views";
    ko.amdTemplateEngine.defaultSuffix = ".html";
    ko.amdTemplateEngine.defaultRequireTextPluginName = "text";
    ko.bindingHandlers.module.templateProperty = "embeddedTemplate";

    setTimeout(function() {
        ko.applyBindings(App);
    }, 0);


});
