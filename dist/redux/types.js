/**
 * Media states
 * @enum {string}
 */
var MediaState;
(function (MediaState) {
  MediaState["STOPPED"] = "STOPPED";
  MediaState["PLAYING"] = "PLAYING";
  MediaState["PAUSED"] = "PAUSED";
})(MediaState || (MediaState = {}));
/**
 * Repeat modes
 */
var RepeatMode;
(function (RepeatMode) {
  RepeatMode["NORMAL"] = "NORMAL";
  RepeatMode["REPEAT_ALL"] = "REPEAT_ALL";
  RepeatMode["REPEAT_ONE"] = "REPEAT_ONE";
})(RepeatMode || (RepeatMode = {}));
/**
 * Custom native events for module level interface
 * @enum {string}
 */
var CustomNativeEventTypes;
(function (CustomNativeEventTypes) {
  CustomNativeEventTypes["PLAY"] = "PLAY";
  CustomNativeEventTypes["PAUSE"] = "PAUSE";
  CustomNativeEventTypes["STOP"] = "STOP";
  CustomNativeEventTypes["SET_VOLUME"] = "SET_VOLUME";
  CustomNativeEventTypes["SKIP_NEXT"] = "SKIP_NEXT";
  CustomNativeEventTypes["SKIP_PREV"] = "SKIP_PREV";
  CustomNativeEventTypes["SHUFFLE"] = "SHUFFLE";
  CustomNativeEventTypes["SEEK"] = "SEEK";
  CustomNativeEventTypes["SET_REPEAT_MODE"] = "SET_REPEAT_MODE";
  CustomNativeEventTypes["CHANGE_TRACK"] = "CHANGE_TRACK";
  CustomNativeEventTypes["PLAY_LATER"] = "PLAY_LATER";
  CustomNativeEventTypes["PLAY_NEXT"] = "PLAY_NEXT";
  CustomNativeEventTypes["SET_PLAYLIST"] = "SET_PLAYLIST";
  CustomNativeEventTypes["CLEAR_PLAYLIST"] = "CLEAR_PLAYLIST";
})(CustomNativeEventTypes || (CustomNativeEventTypes = {}));
/**
 * Store action types
 * @enum {string}
 */
var ActionTypes;
(function (ActionTypes) {
  ActionTypes["CHANGE_TRACK"] = "CHANGE_TRACK";
  ActionTypes["DELETE_TRACK"] = "DELETE_TRACK";
  ActionTypes["PLAY"] = "PLAY";
  ActionTypes["PAUSE"] = "PAUSE";
  ActionTypes["STOP"] = "STOP";
  ActionTypes["SHUFFLE"] = "SHUFFLE";
  ActionTypes["UPDATE_PLAYLIST"] = "UPDATE_PLAYLIST";
  ActionTypes["CHANGE_VOLUME"] = "CHANGE_VOLUME";
  ActionTypes["SET_START_TIME"] = "SET_START_TIME";
  ActionTypes["SET_STOP_TIME"] = "SET_STOP_TIME";
  ActionTypes["SET_CURRENT_TIME"] = "SET_CURRENT_TIME";
  ActionTypes["SET_DURATION"] = "SET_DURATION";
  ActionTypes["SET_TIME_LEFT"] = "SET_TIME_LEFT";
  ActionTypes["SEEK"] = "SEEK";
  ActionTypes["SET_REPEAT_MODE"] = "SET_REPEAT_MODE";
  ActionTypes["SKIP_NEXT"] = "SKIP_NEXT";
  ActionTypes["SKIP_PREV"] = "SKIP_PREV";
  ActionTypes["SET_CURRENT_TRACK_ID"] = "SET_CURRENT_TRACK_ID";
})(ActionTypes || (ActionTypes = {}));
var Track = /** @class */ (function () {
  function Track(data) {
    this.id = data.id;
    this.coverArt = data.coverArt;
    this.title = data.title;
    this.artist = data.artist;
    this.source = data.source;
  }
  Track.prototype.getSource = function () {
    return this.source;
  };
  return Track;
})();
export { ActionTypes, CustomNativeEventTypes, MediaState, RepeatMode, Track };
//# sourceMappingURL=types.js.map
