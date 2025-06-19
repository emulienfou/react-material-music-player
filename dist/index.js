var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from "react-redux";
import PlayerRoot from "./components/Player";
import PlayerInterface from "./interface";
import store from "./redux/store";
import { Track, RepeatMode as RepeatModes } from "./redux/types";
var AudioPlayer = function (props) {
  return _jsx(
    Provider,
    __assign(
      { store: store },
      { children: _jsx(PlayerRoot, __assign({}, props)) }
    )
  );
};
export default AudioPlayer;
export { PlayerInterface, RepeatModes, Track };
//# sourceMappingURL=index.js.map
