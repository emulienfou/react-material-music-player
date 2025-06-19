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
import ActionCreators from "../actionCreators";
import { CustomNativeEventTypes } from "../types";
var eventHandler = function (api) {
  var clearPlaylist = function () {
    api.dispatch(ActionCreators.stop());
    api.dispatch(ActionCreators.changeTrack(0));
    api.dispatch(ActionCreators.updatePlaylist([]));
  };
  window.addEventListener(CustomNativeEventTypes.PLAY, function (e) {
    var playlist = e.detail;
    if (!playlist) {
      api.dispatch(ActionCreators.play());
      return;
    } else if (playlist.length >= 1) {
      clearPlaylist();
      api.dispatch(ActionCreators.updatePlaylist(playlist));
      api.dispatch(ActionCreators.play());
    }
  });
  window.addEventListener(CustomNativeEventTypes.PAUSE, function () {
    api.dispatch(ActionCreators.pause());
  });
  window.addEventListener(CustomNativeEventTypes.STOP, function () {
    api.dispatch(ActionCreators.stop());
  });
  window.addEventListener(CustomNativeEventTypes.SET_VOLUME, function (e) {
    var level = e.detail; //typescript cast Event to CustomEvent
    if (level >= 0 || level <= 100)
      api.dispatch(ActionCreators.setVolume(level));
  });
  window.addEventListener(CustomNativeEventTypes.SKIP_NEXT, function () {
    api.dispatch(ActionCreators.skipNext());
  });
  window.addEventListener(CustomNativeEventTypes.SKIP_PREV, function () {
    api.dispatch(ActionCreators.skipPrev());
  });
  window.addEventListener(CustomNativeEventTypes.SHUFFLE, function (e) {
    var bool = e.detail; //typescript cast Event to CustomEvent
    api.dispatch(ActionCreators.shuffle(bool));
  });
  window.addEventListener(CustomNativeEventTypes.CHANGE_TRACK, function (e) {
    var index = e.detail;
    api.dispatch(ActionCreators.changeTrack(index));
  });
  window.addEventListener(CustomNativeEventTypes.SET_PLAYLIST, function (e) {
    var playlist = e.detail;
    if (playlist < 1) clearPlaylist();
    else api.dispatch(ActionCreators.updatePlaylist(playlist));
  });
  window.addEventListener(CustomNativeEventTypes.CLEAR_PLAYLIST, function () {
    clearPlaylist();
  });
  window.addEventListener(CustomNativeEventTypes.SEEK, function (e) {
    var progress = e.detail;
    if (progress > 100 || progress < 0) return;
    api.dispatch(ActionCreators.seek(progress));
  });
  window.addEventListener(CustomNativeEventTypes.SET_REPEAT_MODE, function (e) {
    api.dispatch(ActionCreators.setRepeatMode(e.detail));
  });
  var playNextOrLaterHandler = function (e) {
    var currentPlaylist = api.getState().playlist;
    var currentTrack = api.getState().currentTrack;
    var newPlaylist = [];
    if (e.type === CustomNativeEventTypes.PLAY_NEXT)
      newPlaylist = currentPlaylist.reduce(function (
        accumulator,
        currentValue,
        index
      ) {
        if (index === currentTrack)
          return __spreadArray(
            __spreadArray(
              __spreadArray([], accumulator, true),
              [currentValue],
              false
            ),
            e.detail,
            true
          );
        else
          return __spreadArray(
            __spreadArray([], accumulator, true),
            [currentValue],
            false
          );
      },
      []);
    else if (e.type === CustomNativeEventTypes.PLAY_LATER) {
      newPlaylist = currentPlaylist.concat(e.detail);
    }
    api.dispatch(ActionCreators.updatePlaylist(newPlaylist));
  };
  window.addEventListener(
    CustomNativeEventTypes.PLAY_NEXT,
    playNextOrLaterHandler
  );
  window.addEventListener(
    CustomNativeEventTypes.PLAY_LATER,
    playNextOrLaterHandler
  );
  return function (next) {
    return function (action) {
      return next(action);
    };
  };
};
export default eventHandler;
//# sourceMappingURL=nativeEventsHandler.js.map
