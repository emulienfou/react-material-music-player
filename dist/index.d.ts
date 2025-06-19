import { PlayerProps } from "./components/Player";
import PlayerInterface from "./interface";
import { Track, RepeatMode as RepeatModes, TrackData } from "./redux/types";
declare const AudioPlayer: (
  props: PlayerProps
) => import("react/jsx-runtime").JSX.Element;
export default AudioPlayer;
export type { PlayerProps, TrackData };
export { PlayerInterface, RepeatModes, Track };
