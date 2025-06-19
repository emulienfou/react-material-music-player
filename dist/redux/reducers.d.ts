import { TrackData, MediaState, RepeatMode } from "./types";
declare const _default: import("redux").Reducer<
  {
    mediaState: MediaState;
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
  },
  any,
  Partial<{
    mediaState: MediaState | undefined;
    playlist: TrackData[] | undefined;
    currentTrack: number | undefined;
    shuffled: boolean | undefined;
    currentTime: number | undefined;
    timeLeft: number | undefined;
    volume: number | undefined;
    repeatMode: RepeatMode | undefined;
    duration: number | undefined;
    deleteTrack: number | undefined;
    currentTrackId: string | undefined;
  }>
>;
export default _default;
