define(["knockout","Sammy","knockout-postbox"], function(ko,Sammy) {
    return new function() {

        // Data
        var self = this;
        //syncWith, send and receive variable change between modules.
        self.currentModule = ko.observable('controller1').syncWith('navigation.current');
      //  self.currentModule('controller1');
        // Client-side routes
        Sammy(function () {

          // global router for controllers
          this.get('#/:controller',function(){
          //  console.log(this.params.controller);
             self.currentModule(this.params.controller);

          });

           this.get('', function () {
             console.log("main changed module controller1");
             self.currentModule('controller1');
            });
        }).run();
    };

});
