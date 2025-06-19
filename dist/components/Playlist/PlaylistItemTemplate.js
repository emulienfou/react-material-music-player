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
import { useSortable } from "@dnd-kit/react/sortable";
import PlayIcon from "@mui/icons-material/PlayArrowRounded";
import ReorderIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import CoverArt from "../CoverArt";
import withoutPropagation from "../../utils/withoutPropagation";
var PlaylistItemTemplate = function (props) {
  var ref = useSortable({ id: props.item.id, index: props.index }).ref;
  var handleSelect = function () {
    props.commonProps.onTrackSelect(
      props.commonProps.listOfID.indexOf(props.item.id)
    );
  };
  return _jsxs(
    Box,
    __assign(
      {
        ref: ref,
        sx: {
          maxHeight: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "nowrap",
          border: 1,
          borderColor: "divider",
          borderRadius: 1,
          boxSizing: "border-box",
          padding: 0.5,
          boxShadow: props.itemSelected > 0 ? 16 : 0,
        },
      },
      {
        children: [
          _jsxs(
            Box,
            __assign(
              {
                sx: { display: "flex", flexGrow: 1, alignItems: "center" },
                onClick: withoutPropagation(handleSelect),
              },
              {
                children: [
                  props.commonProps.currentTrackID === props.item.id
                    ? _jsx(PlayIcon, {})
                    : _jsx(Box, { sx: { width: "24px", height: "24px" } }),
                  _jsx(CoverArt, {
                    alt: props.item.title,
                    src: props.item.coverArt,
                    sx: {
                      height: "48px",
                      width: "48px",
                    },
                  }),
                  _jsxs(
                    Box,
                    __assign(
                      {
                        sx: {
                          width: "50px",
                          flexGrow: 1,
                          flexShrink: 1,
                          mx: 1,
                        },
                      },
                      {
                        children: [
                          _jsx(
                            Box,
                            __assign(
                              {
                                sx: {
                                  width: "100%",
                                  typography: "subtitl3",
                                  whiteSpace: "nowrap",
                                  overflow: "hidden",
                                },
                              },
                              { children: props.item.title }
                            )
                          ),
                          _jsx(
                            Box,
                            __assign(
                              {
                                sx: {
                                  width: "100%",
                                  typography: "subtitle2",
                                  whiteSpace: "nowrap",
                                  overflow: "hidden",
                                },
                              },
                              { children: props.item.artist }
                            )
                          ),
                        ],
                      }
                    )
                  ),
                ],
              }
            )
          ),
          _jsx(ReorderIcon, { sx: { mx: 1 } }),
        ],
      }
    )
  );
};
export default PlaylistItemTemplate;
//# sourceMappingURL=PlaylistItemTemplate.js.map
