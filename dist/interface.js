import store from "./redux/store";
import { CustomNativeEventTypes } from "./redux/types";
var interfaceObject = {
  /**
   * This sets new playlist and starts playing
   * @param tracks
   */
  play: function (tracks) {
    var event = new CustomEvent(CustomNativeEventTypes.PLAY, {
      detail: tracks,
    });
    window.dispatchEvent(event);
  },
  /**
   * This pauses the current track
   */
  pause: function () {
    var event = new CustomEvent(CustomNativeEventTypes.PAUSE);
    window.dispatchEvent(event);
  },
  /**
   * This stops the audio player element
   */
  stop: function () {
    var event = new CustomEvent(CustomNativeEventTypes.STOP);
    window.dispatchEvent(event);
  },
  /**
   * This changes volume level
   * @param level - Number from 0 to 100
   */
  setVolume: function (level) {
    var event = new CustomEvent(CustomNativeEventTypes.SET_VOLUME, {
      detail: level,
    });
    window.dispatchEvent(event);
  },
  /**
   * This skips to next track in playlist
   */
  skipNext: function () {
    var event = new CustomEvent(CustomNativeEventTypes.SKIP_NEXT);
    window.dispatchEvent(event);
  },
  /**
   * This skips to previous track in playlist
   */
  skipPrev: function () {
    var event = new CustomEvent(CustomNativeEventTypes.SKIP_PREV);
    window.dispatchEvent(event);
  },
  /**
   * This shuffles playlist
   * @param bool - true|false
   */
  shuffle: function (bool) {
    var event = new CustomEvent(CustomNativeEventTypes.SHUFFLE, {
      detail: bool,
    });
    window.dispatchEvent(event);
  },
  /**
   * This seeks through current track
   * @param progress - Number 0 to 100 as percentage of total track time
   */
  seek: function (progress) {
    var event = new CustomEvent(CustomNativeEventTypes.SEEK, {
      detail: progress,
    });
    window.dispatchEvent(event);
  },
  /**
   * This sets repeat mode
   * @param mode - One of three strings "NORMAL"|"REPEAT_ALL"|"REPEAT_ONE".
   */
  setRepeatMode: function (mode) {
    var event = new CustomEvent(CustomNativeEventTypes.SET_REPEAT_MODE, {
      detail: mode,
    });
    window.dispatchEvent(event);
  },
  /**
   * This changes track to specified index
   * @param index - Index of track to jump to.
   */
  changeTrack: function (index) {
    var event = new CustomEvent(CustomNativeEventTypes.CHANGE_TRACK, {
      detail: index,
    });
    window.dispatchEvent(event);
  },
  /**
   * This inserts playlist right after current playing track
   * @param tracks - Array of Tracks to insert
   */
  playNext: function (tracks) {
    var event = new CustomEvent(CustomNativeEventTypes.PLAY_NEXT, {
      detail: tracks,
    });
    window.dispatchEvent(event);
  },
  /**
   * This appends playlist to the end of current playlist
   * @param tracks - Array of TrackData to append
   */
  playLater: function (tracks) {
    var event = new CustomEvent(CustomNativeEventTypes.PLAY_LATER, {
      detail: tracks,
    });
    window.dispatchEvent(event);
  },
  /**
   * This sets new playlist
   * @param playlist - Array of Tracks to set
   */
  setPlaylist: function (playlist) {
    var event = new CustomEvent(CustomNativeEventTypes.SET_PLAYLIST, {
      detail: playlist,
    });
    window.dispatchEvent(event);
  },
  /**
   * This clears all tracks
   */
  clearPlaylist: function () {
    var event = new CustomEvent(CustomNativeEventTypes.CLEAR_PLAYLIST);
    window.dispatchEvent(event);
  },
  /**
   * Returns the full state of player
   * @returns State
   */
  getState: store.getState(),
  /**
   * Listens for changes
   * @param {Function} func - function
   */
  subscribe: function (func) {
    store.subscribe(function () {
      return func(store.getState());
    });
  },
  /**
   * Returns if current track playing
   */
  isCurrentTrack: function (id) {
    return store.getState().playlist.some(function (track) {
      return track.id === id;
    });
  },
};
export default interfaceObject;
//# sourceMappingURL=interface.js.map
