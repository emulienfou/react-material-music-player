import { combineReducers } from "redux";
import { ActionTypes, MediaState, RepeatMode } from "./types";
export default combineReducers({
  mediaState: function (state, action) {
    if (state === void 0) {
      state = MediaState.STOPPED;
    }
    switch (action.type) {
      case ActionTypes.PLAY:
        return MediaState.PLAYING;
      case ActionTypes.PAUSE:
        return MediaState.PAUSED;
      case ActionTypes.STOP:
        return MediaState.STOPPED;
      default:
        return state;
    }
  },
  playlist: function (state, action) {
    if (state === void 0) {
      state = [];
    }
    if (action.type === ActionTypes.UPDATE_PLAYLIST)
      return action.payload.playlist;
    else return state;
  },
  currentTrack: function (state, action) {
    if (state === void 0) {
      state = 0;
    }
    if (action.type === ActionTypes.CHANGE_TRACK) return action.payload.index;
    else return state;
  },
  shuffled: function (state, action) {
    if (state === void 0) {
      state = false;
    }
    if (action.type === ActionTypes.SHUFFLE) return action.payload.shuffle;
    else return state;
  },
  currentTime: function (state, action) {
    if (state === void 0) {
      state = 0;
    }
    if (action.type === ActionTypes.SET_CURRENT_TIME)
      return action.payload.currentTime;
    else return state;
  },
  timeLeft: function (state, action) {
    if (state === void 0) {
      state = 0;
    }
    if (action.type === ActionTypes.SET_TIME_LEFT)
      return action.payload.timeLeft;
    else return state;
  },
  volume: function (state, action) {
    if (state === void 0) {
      state = 0;
    }
    if (action.type === ActionTypes.CHANGE_VOLUME) return action.payload.volume;
    else return state;
  },
  repeatMode: function (state, action) {
    if (state === void 0) {
      state = RepeatMode.NORMAL;
    }
    if (action.type === ActionTypes.SET_REPEAT_MODE) return action.payload.mode;
    else return state;
  },
  duration: function (state, action) {
    if (state === void 0) {
      state = 0;
    }
    if (action.type === ActionTypes.SET_DURATION)
      return action.payload.duration;
    else return state;
  },
  deleteTrack: function (state, action) {
    if (state === void 0) {
      state = 0;
    }
    if (action.type === ActionTypes.DELETE_TRACK) return action.payload.index;
    else return state;
  },
  currentTrackId: function (state, action) {
    if (state === void 0) {
      state = "";
    }
    if (action.type === ActionTypes.SET_CURRENT_TRACK_ID)
      return action.payload.id;
    else return state;
  },
});
//# sourceMappingURL=reducers.js.map
