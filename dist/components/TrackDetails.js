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
import { styled } from "@mui/material/styles";
import { shallowEqual, useSelector } from "react-redux";
var Root = styled(Box, {
  name: "MuiMusicPlayer",
  slot: "trackDetails",
})();
var TrackDetails = function (props) {
  var _a = useSelector(function (state) {
      var currentTrack = state.playlist[state.currentTrack];
      return {
        title:
          currentTrack === null || currentTrack === void 0
            ? void 0
            : currentTrack.title,
        artist:
          currentTrack === null || currentTrack === void 0
            ? void 0
            : currentTrack.artist,
      };
    }, shallowEqual),
    title = _a.title,
    artist = _a.artist;
  return _jsxs(
    Root,
    __assign(
      { sx: props.sx },
      {
        children: [
          _jsx(
            Box,
            __assign(
              {
                sx: {
                  typography: "subtitl3",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                },
              },
              { children: title }
            )
          ),
          _jsx(
            Box,
            __assign(
              {
                sx: {
                  typography: "subtitle2",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                },
              },
              { children: artist }
            )
          ),
        ],
      }
    )
  );
};
export default TrackDetails;
//# sourceMappingURL=TrackDetails.js.map
