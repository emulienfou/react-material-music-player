var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
import ActionCreators from "../actionCreators";
import { ActionTypes, MediaState, RepeatMode } from "../types";
var AudioOutput = /** @class */ (function (_super) {
  __extends(AudioOutput, _super);
  function AudioOutput() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  /**
   * Sets source of audio
   * @param track
   */
  AudioOutput.prototype.setSrc = function (track) {
    if (undefined === track) return;
    if (!this.isCurrent(track)) {
      this.src = track.source;
      this.track = track;
      this.setMediaMetadata(track);
    }
  };
  AudioOutput.prototype.setMediaMetadata = function (track) {
    if ("mediaSession" in navigator) {
      if (!track) navigator.mediaSession.metadata = null;
      else
        navigator.mediaSession.metadata = new window.MediaMetadata({
          title: track.title,
          artist: track.artist,
          artwork: track.coverArt ? [{ src: track.coverArt }] : undefined,
        });
    }
  };
  /**
   * Unsets audio can be used to stop play
   */
  AudioOutput.prototype.clear = function () {
    if ("" === this.src) return;
    this.setSrc(undefined);
    this.setMediaMetadata(null);
  };
  /**
   * Check if same track loaded
   */
  AudioOutput.prototype.isCurrent = function (track) {
    if (undefined === this.track) return;
    return this.track.id === track.id;
  };
  return AudioOutput;
})(Audio);
var audio;
function getAudio(api) {
  if (typeof window === "undefined") return undefined;
  if (!audio) {
    audio = new AudioOutput();
    audio.addEventListener("timeupdate", function () {
      api.dispatch(
        ActionCreators.setCurrentTime(Math.floor(audio.currentTime))
      );
      api.dispatch(ActionCreators.setDuration(audio.duration));
      api.dispatch(
        ActionCreators.setTimeLeft(
          Math.floor(
            isNaN(audio.duration) ? 0 : audio.duration - audio.currentTime
          )
        )
      );
    });
    audio.addEventListener("error", function () {
      api.dispatch(ActionCreators.stop());
    });
    audio.addEventListener("canplay", function () {
      if (api.getState().mediaState === MediaState.PLAYING) {
        audio.play().catch(function () {
          return api.dispatch(ActionCreators.stop());
        });
      }
    });
    audio.addEventListener("ended", function () {
      var state = api.getState();
      var currentTrack = state.currentTrack;
      var isLastTrack = currentTrack === state.playlist.length - 1;
      switch (state.repeatMode) {
        case RepeatMode.REPEAT_ALL:
          api.dispatch(
            ActionCreators.changeTrack(isLastTrack ? 0 : currentTrack + 1)
          );
          break;
        case RepeatMode.REPEAT_ONE:
          audio.play();
          break;
        case RepeatMode.NORMAL:
        default:
          if (isLastTrack) api.dispatch(ActionCreators.stop());
          else api.dispatch(ActionCreators.changeTrack(currentTrack + 1));
      }
    });
    audio.volume = api.getState().volume / 100;
  }
  return audio;
}
var audioOutput = function (api) {
  return function (next) {
    return function (action) {
      var audio = getAudio(api);
      if (!audio) return next(action); // ignore on server
      var state = api.getState();
      switch (action.type) {
        case ActionTypes.CHANGE_TRACK: {
          var nextTrack = state.playlist[action.payload.index];
          audio.setSrc(nextTrack);
          if (state.mediaState === MediaState.PLAYING)
            audio.play().catch(function () {
              return api.dispatch(ActionCreators.stop());
            });
          break;
        }
        case ActionTypes.PLAY:
          api.dispatch(
            ActionCreators.setCurrentTrackId(
              state.playlist[state.currentTrack].id
            )
          );
          audio.setSrc(state.playlist[state.currentTrack]);
          audio.play().catch(function () {
            return api.dispatch(ActionCreators.stop());
          });
          break;
        case ActionTypes.PAUSE:
          audio.pause();
          break;
        case ActionTypes.STOP:
          audio.clear();
          break;
        case ActionTypes.SEEK:
          if (!isNaN(audio.duration) && isFinite(audio.duration)) {
            audio.currentTime =
              (action.payload.progress / 100) * audio.duration;
          }
          break;
        case ActionTypes.CHANGE_VOLUME:
          audio.volume = action.payload.volume / 100;
          break;
        case ActionTypes.SKIP_PREV:
          if (audio.currentTime > 3) {
            api.dispatch(ActionCreators.seek(0));
            return; // drop the action
          }
          break;
        default:
          break;
      }
      return next(action);
    };
  };
};
export default audioOutput;
//# sourceMappingURL=audioOutput.js.map
