({
    appDir: "./src",

    baseUrl: "scripts",

    dir: "./dist",
    paths: {
      "jquery": "libs/jquery/dist/jquery",
      "bootstrap": "libs/bootstrap/dist/js/bootstrap",
      "Sammy": "libs/sammy/lib/sammy",
      "knockout": "libs/knockout/dist/knockout",
      "knockout-amd-helpers": "libs/knockout-amd-helpers/build/knockout-amd-helpers",
      "knockout-postbox": "libs/knockout-postbox/build/knockout-postbox",
      "text":"libs/text/text",
      "executeBinding":"app/bindings/executeBinding"
    },

    modules: [
        {
            name: "app/boot"
        },
        {
            name: "app/main",
            exclude: ['app/boot']
        },
        {
            name: "app/modules/controller1",
            exclude: ['app/main']
        },
        {
            name: "app/modules/controller2",
            exclude: ['app/main']
        }
    ]
})
