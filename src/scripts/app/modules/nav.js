define(["knockout","bootstrap","jquery"], function(ko,bootstrap,$) {
    return function() {

      // Data
      var self = this;
      //define items
      self.navItems = ko.observableArray();
      self.navToggled= false;

      self.firstItemSet = [{item:'controller1'},{item:'controller2'}];
      self.anotherItemsSet=[{item:'anotherController1'},{item:'anotherController2'}];

      //syncWith, send and receive variable change between modules.
      self.currentNavItem= ko.observable('controller1').syncWith('navigation.current');
      self.currentNavItemActive = function(item){

        return self.currentNavItem()==item;
      }

      self.navItems(self.firstItemSet);

      self.changeItems = function(){
        if(! self.navToggled){
          self.navItems(self.anotherItemsSet);
          self.navToggled = true;
        }else{
          self.navItems(self.firstItemSet);
          self.navToggled = false;
        }
      }

      self.afterAdd= function(element, index, data){
        //console.log(element);
        $(element).css('display','none');
        $(element).slideDown();
      }


      /*go to the wanted controller without using url*/
      self.goToMenu = function(navItem){
        self.currentNavItem(navItem.item);
      }
    }
});
