import { SxProps } from "@mui/system";
import { ProgressBarProps } from "./ProgressBar";
export interface PlayerProps
  extends Pick<ProgressBarProps, "displayTrackDuration"> {
  sx?: SxProps;
  disableDrawer?: boolean;
  defaultArt?: string;
}
declare const Player: (
  props: PlayerProps
) => import("react/jsx-runtime").JSX.Element;
export default Player;
