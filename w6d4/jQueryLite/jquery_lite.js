( function () {

  if (typeof window.root === "undefined") {
    var root = window.root = {};
  }

  var DOMNodeCollection = function (htmlements) {
    this.htmlements = htmlements;
  };

  root.$l = function (arg) {
    if (arg instanceof HTMLElement) {
      var elementList = document.getElementsByTagName(arg);
      var elementArray = [].slice.call(elementList);
      return new DOMNodeCollection(elementArray);
    } else {
      var elementList = document.querySelectorAll(arg);
      var elementArray = [].slice.call(elementList);
      return new DOMNodeCollection(elementArray);
    }
  };

  DOMNodeCollection.prototype.html = function (str) {
    if (typeof str === "undefined") {
      return this.htmlements[0].innerHTML;
    } else {
      for(var i = 0; i < this.htmlements.length; i++) {
        this.htmlements[i].innerHTML = str;
      }
    }
  };

  DOMNodeCollection.prototype.empty = function () {
    for(var i = 0; i < this.htmlements.length; i++) {
      this.htmlements[i].innerHTML = "";
    }
  };

  DOMNodeCollection.prototype.append = function (items) {
    if (items instanceof DOMNodeCollection) {
      for(var i = 0; i < this.htmlements.length; i++) {
        for (var j = 0; j < items.htmlements.length; j++) {
          this.htmlements[i].appendChild(items.htmlements[j]);
        }
      }
    } else if (items instanceof HTMLElement) {

    } else {

    }
  };

})();
