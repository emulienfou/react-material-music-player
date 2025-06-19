import { TrackData, RepeatMode } from "./redux/types";
declare const interfaceObject: {
  /**
   * This sets new playlist and starts playing
   * @param tracks
   */
  play: (tracks?: TrackData[]) => void;
  /**
   * This pauses the current track
   */
  pause: () => void;
  /**
   * This stops the audio player element
   */
  stop: () => void;
  /**
   * This changes volume level
   * @param level - Number from 0 to 100
   */
  setVolume: (level: number) => void;
  /**
   * This skips to next track in playlist
   */
  skipNext: () => void;
  /**
   * This skips to previous track in playlist
   */
  skipPrev: () => void;
  /**
   * This shuffles playlist
   * @param bool - true|false
   */
  shuffle: (bool: boolean) => void;
  /**
   * This seeks through current track
   * @param progress - Number 0 to 100 as percentage of total track time
   */
  seek: (progress: number) => void;
  /**
   * This sets repeat mode
   * @param mode - One of three strings "NORMAL"|"REPEAT_ALL"|"REPEAT_ONE".
   */
  setRepeatMode: (mode: typeof RepeatMode) => void;
  /**
   * This changes track to specified index
   * @param index - Index of track to jump to.
   */
  changeTrack: (index: number) => void;
  /**
   * This inserts playlist right after current playing track
   * @param tracks - Array of Tracks to insert
   */
  playNext: (tracks: TrackData[]) => void;
  /**
   * This appends playlist to the end of current playlist
   * @param tracks - Array of TrackData to append
   */
  playLater: (tracks: TrackData[]) => void;
  /**
   * This sets new playlist
   * @param playlist - Array of Tracks to set
   */
  setPlaylist: (playlist: TrackData[]) => void;
  /**
   * This clears all tracks
   */
  clearPlaylist: () => void;
  /**
   * Returns the full state of player
   * @returns State
   */
  getState: {
    mediaState: import("./redux/types").MediaState;
    playlist: TrackData[];
    currentTrack: number;
    shuffled: boolean;
    currentTime: any;
    timeLeft: any;
    volume: any;
    repeatMode: any;
    duration: any;
    deleteTrack: any;
    currentTrackId: string;
  };
  /**
   * Listens for changes
   * @param {Function} func - function
   */
  subscribe: (func: Function) => void;
  /**
   * Returns if current track playing
   */
  isCurrentTrack: (id: string) => boolean;
};
export default interfaceObject;
