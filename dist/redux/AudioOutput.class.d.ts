import { TrackData } from "./types";
declare class AudioOutput extends Audio {
  private track;
  /**
   * Sets source of audio
   * @param track
   */
  setSrc(track: TrackData | undefined): void;
  setMediaMetadata(track: TrackData | null): void;
  /**
   * Unsets audio can be used to stop play
   */
  clear(): void;
  /**
   * Check if same track loaded
   */
  isCurrent(track: TrackData): boolean | undefined;
}
export default AudioOutput;
