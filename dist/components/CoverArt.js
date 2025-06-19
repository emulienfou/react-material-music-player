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
import { jsx as _jsx } from "react/jsx-runtime";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
var Root = styled(Box, {
  name: "MuiMusicPlayer",
  slot: "coverArt",
})(function (_a) {
  var theme = _a.theme;
  return {
    border: 1,
    borderColor: theme.palette.divider,
    borderRadius: 2,
    overflow: "hidden",
    position: "relative",
  };
});
var CoverArt = function (props) {
  var _a = props.height,
    height = _a === void 0 ? 48 : _a,
    _b = props.width,
    width = _b === void 0 ? 48 : _b,
    rest = __rest(props, ["height", "width"]);
  return _jsx(
    Root,
    __assign(
      { sx: __assign({ height: height, width: width }, rest.sx) },
      {
        children: _jsx(Avatar, {
          src: rest.src,
          alt: rest.alt,
          sx: { width: width, height: height },
          variant: "rounded",
        }),
      }
    )
  );
};
export default CoverArt;
//# sourceMappingURL=CoverArt.js.map
