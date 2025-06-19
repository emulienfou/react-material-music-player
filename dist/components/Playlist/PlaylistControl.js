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
import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import actionCreators from "../../redux/actionCreators";
import ShuffleRounded from "@mui/icons-material/ShuffleRounded";
import ShuffleOnRounded from "@mui/icons-material/ShuffleOnRounded";
import QueueMusicRounded from "@mui/icons-material/QueueMusicRounded";
import RepeatRounded from "@mui/icons-material/RepeatRounded";
import RepeatOnRounded from "@mui/icons-material/RepeatOnRounded";
import RepeatOneOnRounded from "@mui/icons-material/RepeatOneOnRounded";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Popover from "@mui/material/Popover";
import ToggleButton from "@mui/material/ToggleButton";
import { styled } from "@mui/material/styles";
import Playlist from "./Playlist";
import { RepeatMode } from "../../redux/types";
var classes = {
  button: "PlaylistControl-button",
};
var RootBox = styled(Box)(function () {
  return {
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
  };
});
var ButtonContainer = styled(Box)(function (_a) {
  var _b;
  var theme = _a.theme;
  return (
    (_b = {
      width: "100%",
      display: "flex",
      flexDirection: "row",
    }),
    (_b["& .".concat(classes.button)] = {
      // space buttons horizontally
      margin: "auto ".concat(theme.spacing(1)),
      flexGrow: 1, // buttons should grow
    }),
    _b
  );
});
var RepeatButton = function (props) {
  var value = props.value,
    other = __rest(props, ["value"]);
  return _jsx(
    ToggleButton,
    __assign(
      { value: "repeat", selected: value !== RepeatMode.NORMAL },
      other,
      {
        children:
          value === RepeatMode.NORMAL
            ? _jsx(RepeatRounded, {})
            : value === RepeatMode.REPEAT_ALL
            ? _jsx(RepeatOnRounded, {})
            : _jsx(RepeatOneOnRounded, {}),
      }
    )
  );
};
var ShuffleButton = function (props) {
  var value = props.value,
    other = __rest(props, ["value"]);
  return _jsx(
    ToggleButton,
    __assign({ value: "shuffle", selected: value }, other, {
      children: value ? _jsx(ShuffleOnRounded, {}) : _jsx(ShuffleRounded, {}),
    })
  );
};
export default function PlaylistControl(props) {
  var sx = props.sx;
  var playlistViewMode = props.playlistViewMode;
  var shuffled = useSelector(function (state) {
    return state.shuffled;
  });
  var repeatMode = useSelector(function (state) {
    return state.repeatMode;
  });
  var _a = React.useState(false),
    playlistVisible = _a[0],
    showPlaylist = _a[1];
  var _b = React.useState(null),
    anchorEl = _b[0],
    setAnchor = _b[1];
  var dispatch = useDispatch();
  var onShuffle = function (bool) {
    return dispatch(actionCreators.shuffle(bool));
  };
  var onRepeat = function (mode) {
    return dispatch(actionCreators.setRepeatMode(mode));
  };
  var handlePopoverClose = function () {
    showPlaylist(false);
    setAnchor(null);
  };
  return _jsxs(
    RootBox,
    __assign(
      { sx: __assign({}, sx) },
      {
        children: [
          _jsxs(ButtonContainer, {
            children: [
              _jsx(RepeatButton, {
                value: repeatMode,
                className: classes.button,
                onClick: function () {
                  switch (repeatMode) {
                    case RepeatMode.NORMAL:
                      return onRepeat(RepeatMode.REPEAT_ALL);
                    case RepeatMode.REPEAT_ALL:
                      return onRepeat(RepeatMode.REPEAT_ONE);
                    case RepeatMode.REPEAT_ONE:
                      return onRepeat(RepeatMode.NORMAL);
                    default:
                      return repeatMode;
                  }
                },
              }),
              _jsx(ShuffleButton, {
                value: shuffled,
                className: classes.button,
                onClick: function () {
                  onShuffle(!shuffled);
                },
              }),
              _jsx(
                ToggleButton,
                __assign(
                  {
                    className: classes.button,
                    value: "show playlist",
                    selected: playlistVisible,
                    onChange: function (e) {
                      var _a, _b, _c;
                      setAnchor(
                        ((_c =
                          (_b =
                            (_a = e.target.parentElement) === null ||
                            _a === void 0
                              ? void 0
                              : _a.parentElement) === null || _b === void 0
                            ? void 0
                            : _b.parentElement) === null || _c === void 0
                          ? void 0
                          : _c.parentElement) || null
                      );
                      showPlaylist(!playlistVisible);
                    },
                  },
                  { children: _jsx(QueueMusicRounded, {}) }
                )
              ),
            ],
          }),
          playlistViewMode === "popover"
            ? _jsx(
                Popover,
                __assign(
                  {
                    open: Boolean(anchorEl),
                    anchorEl: anchorEl,
                    onClose: handlePopoverClose,
                    sx: { boxShadow: 8 },
                    anchorOrigin: {
                      vertical: "top",
                      horizontal: "right",
                    },
                    transformOrigin: {
                      vertical: "bottom",
                      horizontal: "right",
                    },
                  },
                  {
                    children: _jsx(Playlist, {
                      sx: {
                        width: "400px",
                        height: "60vh",
                      },
                    }),
                  }
                )
              )
            : _jsx(
                Collapse,
                __assign(
                  { collapsedSize: "0", in: playlistVisible },
                  {
                    children: _jsx(Playlist, {
                      sx: {
                        height: "40vh",
                        width: "90vw",
                        overflow: "scroll",
                      },
                    }),
                  }
                )
              ),
        ],
      }
    )
  );
}
//# sourceMappingURL=PlaylistControl.js.map
