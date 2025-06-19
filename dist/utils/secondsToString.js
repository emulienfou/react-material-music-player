var secondsToString = function (seconds) {
  if (seconds < 0 || !Number.isFinite(seconds)) {
    throw new Error(
      "Invalid input: seconds must be a non-negative finite number"
    );
  }
  var minutes = Math.floor(seconds / 60).toString();
  var milliseconds = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return "".concat(minutes, ":").concat(milliseconds);
};
export default secondsToString;
//# sourceMappingURL=secondsToString.js.map
