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
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import ActionCreators from "../redux/actionCreators";
import { MediaState } from "../redux/types";
import withoutPropagation from "../utils/withoutPropagation";
import SkipNextIcon from "@mui/icons-material/SkipNextRounded";
import SkipPreviousIcon from "@mui/icons-material/SkipPreviousRounded";
import PlayIcon from "@mui/icons-material/PlayArrowRounded";
import PauseIcon from "@mui/icons-material/PauseRounded";
var Root = styled(Box, {
  name: "MuiMusicPlayer",
  slot: "controls",
})({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "nowrap",
});
var Controls = function (props) {
  var _a = props.disabled,
    disabled = _a === void 0 ? false : _a,
    rest = __rest(props, ["disabled"]);
  var mediaState = useSelector(function (state) {
    return state.mediaState;
  });
  var dispatch = useDispatch();
  var onSkipNext = function () {
    return dispatch(ActionCreators.skipNext());
  };
  var onSkipPrev = function () {
    return dispatch(ActionCreators.skipPrev());
  };
  var onPlay = function () {
    return dispatch(ActionCreators.play());
  };
  var onPause = function () {
    return dispatch(ActionCreators.pause());
  };
  var playing = mediaState === MediaState.PLAYING;
  return _jsxs(
    Root,
    __assign(
      { sx: rest.sx },
      {
        children: [
          !rest.isSmall &&
            _jsx(
              IconButton,
              __assign(
                {
                  onClick: withoutPropagation(onSkipPrev),
                  size: "large",
                  disabled: disabled,
                },
                { children: _jsx(SkipPreviousIcon, { fontSize: "large" }) }
              )
            ),
          _jsx(
            IconButton,
            __assign(
              {
                onClick: withoutPropagation(playing ? onPause : onPlay),
                size: "large",
                disabled: disabled,
              },
              {
                children: playing
                  ? _jsx(PauseIcon, { fontSize: "large" })
                  : _jsx(PlayIcon, { fontSize: "large" }),
              }
            )
          ),
          !rest.isSmall &&
            _jsx(
              IconButton,
              __assign(
                {
                  onClick: withoutPropagation(onSkipNext),
                  size: "large",
                  disabled: disabled,
                },
                { children: _jsx(SkipNextIcon, { fontSize: "large" }) }
              )
            ),
        ],
      }
    )
  );
};
export default Controls;
//# sourceMappingURL=Controls.js.map
