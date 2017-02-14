define(["knockout","Sammy"], function(ko,Sammy) {
    return function() {

        // Data
        var self = this;
        //subscribeTo, receive variable change from other modules.
        self.currentModule = ko.observable('controller1').subscribeTo('navigation.current');

        // Client-side routes
          Sammy(function () {



             this.get('', function () {
               self.currentModule('controller1');
              });
          }).run();
    };

});
