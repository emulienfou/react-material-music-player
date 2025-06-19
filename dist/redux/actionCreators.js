import { ActionTypes } from "./types";
var ActionCreators = {
  changeTrack: function (index) {
    return {
      type: ActionTypes.CHANGE_TRACK,
      payload: { index: index },
    };
  },
  deleteTrack: function (index) {
    return {
      type: ActionTypes.DELETE_TRACK,
      payload: { index: index },
    };
  },
  play: function () {
    return {
      type: ActionTypes.PLAY,
    };
  },
  pause: function () {
    return {
      type: ActionTypes.PAUSE,
    };
  },
  stop: function () {
    return {
      type: ActionTypes.STOP,
    };
  },
  updatePlaylist: function (playlist) {
    return {
      type: ActionTypes.UPDATE_PLAYLIST,
      payload: { playlist: playlist },
    };
  },
  shuffle: function (bool) {
    return {
      type: ActionTypes.SHUFFLE,
      payload: { shuffle: bool },
    };
  },
  setCurrentTime: function (currentTime) {
    return {
      type: ActionTypes.SET_CURRENT_TIME,
      payload: { currentTime: currentTime },
    };
  },
  setTimeLeft: function (timeLeft) {
    return {
      payload: { timeLeft: timeLeft },
      type: ActionTypes.SET_TIME_LEFT,
    };
  },
  seek: function (progress) {
    return {
      type: ActionTypes.SEEK,
      payload: { progress: progress },
    };
  },
  setVolume: function (volume) {
    return {
      type: ActionTypes.CHANGE_VOLUME,
      payload: { volume: volume },
    };
  },
  setRepeatMode: function (mode) {
    return {
      type: ActionTypes.SET_REPEAT_MODE,
      payload: { mode: mode },
    };
  },
  skipNext: function () {
    return {
      type: ActionTypes.SKIP_NEXT,
    };
  },
  skipPrev: function () {
    return {
      type: ActionTypes.SKIP_PREV,
    };
  },
  setDuration: function (duration) {
    return {
      type: ActionTypes.SET_DURATION,
      payload: { duration: duration },
    };
  },
  setCurrentTrackId: function (id) {
    return {
      type: ActionTypes.SET_CURRENT_TRACK_ID,
      payload: { id: id },
    };
  },
};
export default ActionCreators;
//# sourceMappingURL=actionCreators.js.map
