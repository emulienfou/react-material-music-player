import { TrackData } from "../../redux/types";
import { CommonProps } from "./Playlist";
export interface PlaylistItemTemplateProps {
  index: number;
  item: TrackData;
  commonProps: CommonProps;
  itemSelected: number;
}
declare const PlaylistItemTemplate: (
  props: PlaylistItemTemplateProps
) => import("react/jsx-runtime").JSX.Element;
export default PlaylistItemTemplate;
