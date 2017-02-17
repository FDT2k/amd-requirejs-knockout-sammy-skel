define(["knockout","Sammy"], function(ko,Sammy) {
    return function() {

        // Data
        var self = this;
          //syncWith, send and receive variable change between modules.
        self.currentModule = ko.observable('controller1').syncWith('navigation.current');

        // Client-side routes
        Sammy(function () {

          // global router for controller
          this.get('#/:controller',function(){

             self.currentModule(this.params.controller);

          });

           this.get('', function () {
             self.currentModule('controller1');
            });
        }).run();
    };

});
