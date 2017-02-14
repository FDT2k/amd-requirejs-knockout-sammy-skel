define(["knockout","bootstrap"], function(ko,bootstrap) {
    return function() {

      // Data
      var self = this;
      self.navItems = ko.observableArray([{item:'controller1'},{item:'controller2'}]);
      self.currentNavItem= ko.observable('controller1').publishOn('navigation.current');
      self.goToMenu = function(navItem){
        console.log(navItem.item);
        self.currentNavItem(navItem.item);
      }
    }
});
