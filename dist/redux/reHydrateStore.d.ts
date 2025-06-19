import { MediaState, RepeatMode } from "./types";
declare const reHydrateStore: () => {
  duration: number;
  mediaState: MediaState;
  currentTrack: number;
  shuffled: boolean;
  playlist: never[];
  volume: number;
  repeatMode: RepeatMode;
};
export default reHydrateStore;
