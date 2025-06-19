import { MediaState, RepeatMode } from "./types";
var reHydrateStore = function () {
  return {
    duration: 0,
    mediaState: MediaState.STOPPED,
    currentTrack: 0,
    shuffled: false,
    playlist: [],
    volume: 25,
    repeatMode: RepeatMode.NORMAL,
  };
};
export default reHydrateStore;
//# sourceMappingURL=reHydrateStore.js.map
