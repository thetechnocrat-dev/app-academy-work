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


})();
