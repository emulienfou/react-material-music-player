// stop event from propagating
var withoutPropagation = function (callback) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  return function (e) {
    e.stopPropagation();
    callback.apply(void 0, args);
  };
};
export default withoutPropagation;
//# sourceMappingURL=withoutPropagation.js.map
