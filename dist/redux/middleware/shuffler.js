var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
import shuffle from "../../utils/shuffle";
import actionCreators from "../actionCreators";
import { ActionTypes } from "../types";
var shuffler = function (api) {
  return function (next) {
    return function (action) {
      var state = api.getState();
      if (
        action.type === ActionTypes.SHUFFLE &&
        state.shuffled !== action.payload.shuffle &&
        state.playlist.length > 1
      ) {
        var playlist = state.playlist;
        var currentIndex = state.currentTrack;
        var currentTrack = playlist[state.currentTrack]; // current track
        var upper = playlist.slice(0, currentIndex);
        var lower = playlist.slice(currentIndex + 1, playlist.length);
        var withoutCurrent = upper.concat(lower);
        withoutCurrent = action.payload.shuffle
          ? shuffle(withoutCurrent)
          : withoutCurrent.sort(function (first, second) {
              return first.id < second.id ? -1 : first.id > second.id ? 1 : 0;
            });
        // update playlist with current track on top
        api.dispatch(
          actionCreators.updatePlaylist(
            __spreadArray([currentTrack], withoutCurrent, true)
          )
        );
        api.dispatch(actionCreators.changeTrack(0));
      }
      return next(action);
    };
  };
};
export default shuffler;
//# sourceMappingURL=shuffler.js.map
