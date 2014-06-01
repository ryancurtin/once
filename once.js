var Once = (function() {
  function Once() {
    this.listeners = {};
  }

  Once.prototype._generateUid = function() {  return Math.floor(Math.random()*10e12).toString() };

  Once.prototype._decorator = function (event, element, fn, scope, uid) {
    return function () {
      if (scope.listeners.uid === 0) {
        return void 0;
      } else {
        element.removeEventListener(event, scope.listeners.uid, false);
        scope.listeners.uid = 0;
        return fn.apply(this, arguments);
      }
    }
  };

  Once.prototype.listenOnce = function (event, element, fn) {
    var uid = this._generateUid();
    this.listeners.uid = listener = this._decorator(event, element, fn, this, uid);
    element.addEventListener(event, listener, false);
  };

  return Once;

})();
