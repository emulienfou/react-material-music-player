import actionCreators from "../actionCreators";
import { ActionTypes } from "../types";
var updatePlaylistHelper = function (api) {
  return function (next) {
    return function (action) {
      var _a, _b, _c, _d;
      if (action.type !== ActionTypes.UPDATE_PLAYLIST) return next(action);
      // store prev playlist and new playlist
      var _e = api.getState(),
        playlist = _e.playlist,
        currentTrack = _e.currentTrack;
      var newPlaylist = action.payload.playlist;
      // update state with new playlist
      var result = next(action);
      // check if playlist changed
      var playlistChanged = false;
      if (newPlaylist.length !== playlist.length) playlistChanged = true;
      else
        for (var i = 0; i < playlist.length; i++) {
          if (
            ((_a = newPlaylist[i]) === null || _a === void 0
              ? void 0
              : _a.id) !==
            ((_b = playlist[i]) === null || _b === void 0 ? void 0 : _b.id)
          ) {
            playlistChanged = true;
            break;
          }
        }
      // if playlist changed look for current track
      if (playlistChanged) {
        var newCurrentTrack = -1;
        for (var i = 0; i < newPlaylist.length; i++) {
          if (
            ((_c = newPlaylist[i]) === null || _c === void 0
              ? void 0
              : _c.id) ===
            ((_d = playlist[currentTrack]) === null || _d === void 0
              ? void 0
              : _d.id)
          ) {
            newCurrentTrack = i;
            break;
          }
        }
        // if not found then its completely playlist, update current track to 0
        if (newCurrentTrack === -1) api.dispatch(actionCreators.changeTrack(0));
        else api.dispatch(actionCreators.changeTrack(newCurrentTrack)); // else update current track
      }
      return result;
    };
  };
};
export default updatePlaylistHelper;
//# sourceMappingURL=updatePlaylistHelper.js.map
