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
import { DragDropProvider } from "@dnd-kit/react";
import { move } from "@dnd-kit/helpers";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import ActionCreators from "../../redux/actionCreators";
import PlaylistItemTemplate from "./PlaylistItemTemplate";
import Close from "@mui/icons-material/Close";
var Root = styled(Box, {
  name: "MuiMusicPlayer",
  slot: "playlist",
})(function (_a) {
  var theme = _a.theme;
  return {
    margin: theme.spacing(),
    width: "10vw",
    height: "10vh",
  };
});
var Playlist = function (props) {
  var dispatch = useDispatch();
  var _a = useSelector(function (_a) {
      var playlist = _a.playlist,
        currentTrack = _a.currentTrack;
      return {
        playlist: playlist,
        currentTrack: currentTrack,
      };
    }, shallowEqual),
    playlist = _a.playlist,
    currentTrack = _a.currentTrack;
  var onTrackSelect = function (index) {
    // change and play track immediately
    dispatch(ActionCreators.changeTrack(index));
    dispatch(ActionCreators.play());
  };
  var onTrackRemove = function (index) {
    dispatch(ActionCreators.deleteTrack(index));
  };
  var handleClearPlaylist = function () {
    dispatch(ActionCreators.stop());
    dispatch(ActionCreators.changeTrack(0));
    dispatch(ActionCreators.updatePlaylist([]));
  };
  return _jsxs(
    Root,
    __assign(
      { sx: props.sx },
      {
        children: [
          props.onClose &&
            _jsxs(
              Box,
              __assign(
                {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                },
                {
                  children: [
                    _jsx(
                      Typography,
                      __assign({ variant: "h5" }, { children: "Playlist" })
                    ),
                    _jsxs(Box, {
                      children: [
                        _jsx(
                          Button,
                          __assign(
                            { onClick: handleClearPlaylist },
                            { children: "Clear" }
                          )
                        ),
                        _jsx(
                          IconButton,
                          __assign(
                            {
                              onClick: function (e) {
                                return (
                                  props.onClose &&
                                  props.onClose(e, "backdropClick")
                                );
                              },
                            },
                            { children: _jsx(Close, {}) }
                          )
                        ),
                      ],
                    }),
                  ],
                }
              )
            ),
          _jsx(
            DragDropProvider,
            __assign(
              {
                onDragEnd: function (event) {
                  dispatch(
                    ActionCreators.updatePlaylist(move(playlist, event))
                  );
                },
              },
              {
                children: _jsx(
                  Stack,
                  __assign(
                    { spacing: 1 },
                    {
                      children: playlist.map(function (item, index) {
                        var _a;
                        return _jsx(
                          PlaylistItemTemplate,
                          {
                            item: item,
                            index: index,
                            itemSelected: currentTrack,
                            commonProps: {
                              listOfID: playlist.map(function (element) {
                                return element.id;
                              }),
                              currentTrackID:
                                (_a = playlist[currentTrack]) === null ||
                                _a === void 0
                                  ? void 0
                                  : _a.id,
                              onTrackSelect: onTrackSelect,
                              onTrackRemove: onTrackRemove,
                            },
                          },
                          item.id
                        );
                      }),
                    }
                  )
                ),
              }
            )
          ),
        ],
      }
    )
  );
};
export default Playlist;
//# sourceMappingURL=Playlist.js.map
