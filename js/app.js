let ViewModel = function() {
  this.clickCount = ko.observable(0);
  this.level = ko.observable("Infant");
  this.name = ko.observable("Tabby");
  this.imgSrc = ko.observable("img/22252709_010df3379e_z.jpg");
  this.imgAttribution = ko.observable("whoknows?");

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };

  this.levelMsg = ko.computed(function() {
    let val = this.clickCount();
    let msg = "";
    if (val < 5) {
      msg = "Infant";
    } else if (val < 10) {
      msg = "Kitten";
    } else if (val < 20) {
      msg = "Cat";
    } else {
      msg = "Old cat";
    }
    return msg;
  }, this);
};

ko.applyBindings(new ViewModel());
