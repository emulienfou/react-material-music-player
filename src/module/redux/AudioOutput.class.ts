import { TrackData } from "./types";

class AudioOutput extends Audio {
  private track: TrackData | undefined;

  /**
   * Sets source of audio
   * @param track
   */
  setSrc(track: TrackData | undefined): void {
    if (undefined === track) return;
    if (!this.isCurrent(track)) {
      this.src = track.source;
      this.track = track;
      this.setMediaMetadata(track);
    }
  }

  setMediaMetadata(track: TrackData | null): void {
    if ("mediaSession" in navigator) {
      if (!track) navigator.mediaSession.metadata = null;
      else
        navigator.mediaSession.metadata = new window.MediaMetadata({
          title: track.title,
          artist: track.artist,
          artwork: track.coverArt ? [{ src: track.coverArt }] : undefined,
        });
    }
  }

  /**
   * Unsets audio can be used to stop play
   */
  clear(): void {
    if ("" === this.src) return;
    this.setSrc(undefined);
    this.setMediaMetadata(null);
  }

  /**
   * Check if same track loaded
   */
  isCurrent(track: TrackData): boolean | undefined {
    if (undefined === this.track) return;
    return this.track.id === track.id;
  }
}

export default AudioOutput;
