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
export default AudioOutput;
//# sourceMappingURL=AudioOutput.class.js.map
