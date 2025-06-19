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
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from "react-redux";
import actionCreators from "../redux/actionCreators";
import withoutPropagation from "../utils/withoutPropagation";
import VolumeUpIcon from "@mui/icons-material/VolumeUpRounded";
import VolumeDownIcon from "@mui/icons-material/VolumeDownRounded";
var Root = styled(Box, {
  name: "MuiMusicPlayer",
  slot: "volumeControl",
})({
  display: "flex",
  flexDirection: "row",
  wrap: "nowrap",
  alignItems: "center",
});
var VolumeControl = function (props) {
  var dispatch = useDispatch();
  var onVolumeChange = function (value) {
    return dispatch(actionCreators.setVolume(value));
  };
  var value = useSelector(function (state) {
    return state.volume;
  });
  var handleSliderChange = function (event, newValue) {
    onVolumeChange(newValue);
  };
  return _jsxs(
    Root,
    __assign(
      { sx: props.sx },
      {
        children: [
          _jsx(
            IconButton,
            __assign(
              {
                sx: { mx: 1 },
                onClick: withoutPropagation(
                  onVolumeChange,
                  value < 10 ? 0 : value - 10
                ),
                size: "large",
              },
              { children: _jsx(VolumeDownIcon, {}) }
            )
          ),
          _jsx(Slider, {
            sx: { mx: 1 },
            value: value,
            "aria-labelledby": "continuous-slider",
            onChange: handleSliderChange,
          }),
          _jsx(
            IconButton,
            __assign(
              {
                sx: { mx: 1 },
                onClick: withoutPropagation(
                  onVolumeChange,
                  value > 90 ? 100 : value + 10
                ),
                size: "large",
              },
              { children: _jsx(VolumeUpIcon, {}) }
            )
          ),
        ],
      }
    )
  );
};
export default VolumeControl;
//# sourceMappingURL=VolumeControl.js.map
