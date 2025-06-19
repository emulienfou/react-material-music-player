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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Duration } from "luxon";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import actionCreators from "../redux/actionCreators";
import secondsToString from "../utils/secondsToString";
var Root = styled(Box, {
  name: "MuiMusicPlayer",
  slot: "progressBar",
})({
  display: "flex",
  flexDirection: "row",
  wrap: "nowrap",
  alignItems: "center",
});
var ProgressBar = function (props) {
  var _a = props.displayTrackDuration,
    displayTrackDuration = _a === void 0 ? false : _a,
    sx = props.sx;
  var _b = useSelector(function (_a) {
      var timeLeft = _a.timeLeft,
        currentTime = _a.currentTime,
        duration = _a.duration;
      return {
        timeLeft: timeLeft,
        currentTime: currentTime,
        duration: duration,
      };
    }, shallowEqual),
    timeLeft = _b.timeLeft,
    currentTime = _b.currentTime,
    duration = _b.duration;
  // NaN on division by zero
  var progress = (currentTime / (timeLeft + currentTime)) * 100 || 0;
  var dispatch = useDispatch();
  var onSeek = function (progress) {
    return dispatch(actionCreators.seek(progress));
  };
  var handleSliderChange = function (event, newValue) {
    onSeek(newValue);
  };
  return _jsxs(
    Root,
    __assign(
      { sx: sx },
      {
        children: [
          _jsx(
            Typography,
            __assign(
              { sx: { mx: 1 } },
              { children: secondsToString(currentTime) }
            )
          ),
          _jsx(Slider, {
            sx: { mx: 1 },
            "aria-labelledby": "continuous-slider",
            value: progress,
            onChange: handleSliderChange,
          }),
          _jsxs(
            Typography,
            __assign(
              { sx: { mx: 1 } },
              {
                children: [
                  displayTrackDuration &&
                    Duration.fromMillis(
                      !isNaN(duration) ? duration * 1000 : 0
                    ).toFormat("hh:mm:ss"),
                  !displayTrackDuration &&
                    Duration.fromMillis(timeLeft * 1000).toFormat("hh:mm:ss"),
                ],
              }
            )
          ),
        ],
      }
    )
  );
};
export default ProgressBar;
//# sourceMappingURL=ProgressBar.js.map
