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
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { styled } from "@mui/system";
import * as React from "react";
import { shallowEqual, useSelector } from "react-redux";
import Controls from "./Controls";
import CoverArt from "./CoverArt";
import PlaylistControl from "./Playlist/PlaylistControl";
import ProgressBar from "./ProgressBar";
import TrackDetails from "./TrackDetails";
import VolumeControl from "./VolumeControl";
import debounce from "@mui/utils/debounce";
var PREFIX = "Player";
var RootPaper = styled(Paper, {
  name: "MuiMusicPlayer",
  slot: "root",
})(function (_a) {
  var theme = _a.theme;
  return {
    width: "100vw",
    position: "fixed",
    bottom: 0,
    boxSizing: "border-box",
    borderRadius: 0,
    overflow: "hidden",
    transition: theme.transitions.create(["all"]),
    zIndex: 1500,
  };
});
var SwipeableDrawerRoot = styled(Box)(function (_a) {
  var _b;
  var theme = _a.theme;
  return (
    (_b = {
      height: "80vh",
      marginTop: theme.spacing(6),
      padding: theme.spacing(1),
      overflow: "hidden",
    }),
    // puller to be positioned middle of the parent's border
    (_b["& > .".concat(PREFIX, "-swipeable-puller")] = {
      width: 30,
      height: theme.spacing(1),
      backgroundColor: theme.palette.action.disabled,
      borderRadius: 3,
      // position
      position: "absolute",
      top: theme.spacing(3),
      left: "calc(50% - 15px)", // center horizontally
    }),
    _b
  );
});
var RowBox = styled(Box)(function () {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "nowrap",
  };
});
var ColumnBox = styled(Box)(function () {
  return {
    // fill swipeable drawer root
    width: "100%",
    height: "100%",
    // flexbox
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    alignItems: "stretch",
    flexWrap: "nowrap",
  };
});
// box center child
var CenterChildBox = styled(Box)(function () {
  return {
    // flexbox
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "nowrap",
  };
});
var Player = function (props) {
  var theme = useTheme();
  var _a = React.useState(false),
    maximised = _a[0],
    setMaximised = _a[1];
  var _b = React.useState(globalThis.innerWidth),
    width = _b[0],
    setWidth = _b[1];
  var _c = useSelector(function (_a) {
      var currentTrack = _a.currentTrack,
        playlist = _a.playlist;
      return {
        currentTrack: currentTrack,
        playlist: playlist,
      };
    }, shallowEqual),
    currentTrack = _c.currentTrack,
    playlist = _c.playlist;
  var openSwipeableDrawer = function () {
    // only maximise if docked and not large
    if (!props.disableDrawer && width < theme.breakpoints.values.md) {
      setMaximised(true);
    }
  };
  var closeSwipeableDrawer = function () {
    // only close if its maximised
    if (maximised) {
      setMaximised(false);
    }
  };
  var rowView = function () {
    var _a, _b, _c;
    return _jsxs(
      RowBox,
      __assign(
        { onClick: openSwipeableDrawer },
        {
          children: [
            _jsx(CoverArt, {
              alt:
                (_a = playlist[currentTrack]) === null || _a === void 0
                  ? void 0
                  : _a.title,
              src:
                (_c =
                  (_b = playlist[currentTrack]) === null || _b === void 0
                    ? void 0
                    : _b.coverArt) !== null && _c !== void 0
                  ? _c
                  : props.defaultArt,
            }),
            _jsx(TrackDetails, {
              sx: {
                // fixed size to stop resize on content change
                width: "120px",
                flexGrow: 1,
                textAlign: "left",
                marginLeft: 1,
                marginRight: 1,
                flexShrink: 0,
              },
            }),
            _jsx(Controls, {
              disabled: playlist[currentTrack] === undefined,
              isSmall: width <= theme.breakpoints.values.sm,
            }),
            width > theme.breakpoints.values.md &&
              _jsxs(React.Fragment, {
                children: [
                  _jsx(ProgressBar, {
                    sx: { flexGrow: 6 },
                    displayTrackDuration: props.displayTrackDuration,
                  }),
                  _jsx(VolumeControl, { sx: { flexGrow: 2 } }),
                  _jsx(PlaylistControl, { playlistViewMode: "popover" }),
                ],
              }),
          ],
        }
      )
    );
  };
  var columnView = function () {
    var _a, _b, _c;
    return _jsxs(ColumnBox, {
      children: [
        _jsxs(
          CenterChildBox,
          __assign(
            { sx: { flexGrow: 1 } },
            {
              children: [
                _jsx(CoverArt, {
                  alt:
                    (_a = playlist[currentTrack]) === null || _a === void 0
                      ? void 0
                      : _a.title,
                  src:
                    (_c =
                      (_b = playlist[currentTrack]) === null || _b === void 0
                        ? void 0
                        : _b.coverArt) !== null && _c !== void 0
                      ? _c
                      : props.defaultArt,
                  height: 300,
                  width: 300,
                  sx: { boxShadow: 4 },
                }),
                _jsx(TrackDetails, {
                  sx: {
                    mt: 1,
                    textAlign: "center",
                  },
                }),
              ],
            }
          )
        ),
        _jsx(ProgressBar, { displayTrackDuration: props.displayTrackDuration }),
        _jsx(Controls, { disabled: playlist[currentTrack] === undefined }),
        _jsx(VolumeControl, {}),
        _jsx(PlaylistControl, { playlistViewMode: "collapse" }),
      ],
    });
  };
  // set large depending on player width
  var rootRef = React.useRef(null);
  var widthSetter = debounce(function () {
    var _a;
    var rootElement = rootRef.current;
    setWidth(
      (_a =
        rootElement === null || rootElement === void 0
          ? void 0
          : rootElement.clientWidth) !== null && _a !== void 0
        ? _a
        : width
    );
  }, 250);
  // windows resize listener
  React.useEffect(function () {
    widthSetter();
    window.addEventListener("resize", widthSetter);
    // eslint-disable-next-line
  }, []);
  // after every render
  React.useEffect(function () {
    widthSetter();
  });
  // close maximised drawer when view port gets large
  React.useEffect(
    function () {
      if (width > theme.breakpoints.values.lg) setMaximised(false);
      // eslint-disable-next-line
    },
    [width]
  );
  return (
    // sx from props can be used to override default styles in rowView
    _jsx(
      RootPaper,
      __assign(
        { ref: rootRef, sx: props.sx, elevation: 4 },
        {
          children:
            0 !== playlist.length &&
            _jsxs(
              Box,
              __assign(
                { p: 1 },
                {
                  children: [
                    maximised ? null : rowView(),
                    !props.disableDrawer &&
                      width <= theme.breakpoints.values.md &&
                      _jsx(
                        SwipeableDrawer,
                        __assign(
                          {
                            open: maximised,
                            anchor: "bottom",
                            onClose: closeSwipeableDrawer,
                            onOpen: openSwipeableDrawer,
                          },
                          {
                            children: _jsxs(SwipeableDrawerRoot, {
                              children: [
                                _jsx(Box, {
                                  className: "".concat(
                                    PREFIX,
                                    "-swipeable-puller"
                                  ),
                                  onClick: closeSwipeableDrawer,
                                }),
                                columnView(),
                              ],
                            }),
                          }
                        )
                      ),
                  ],
                }
              )
            ),
        }
      )
    )
  );
};
export default Player;
//# sourceMappingURL=Player.js.map
