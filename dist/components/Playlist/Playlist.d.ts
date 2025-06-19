import { SxProps } from "@mui/material/styles";
import { ModalProps } from "@mui/material/Modal";
export interface CommonProps {
  listOfID: string[];
  currentTrackID: string;
  onTrackSelect: (index: number) => void;
  onTrackRemove: (index: number) => void;
}
interface PlaylistProps {
  sx: SxProps;
  onClose?: ModalProps["onClose"];
}
declare const Playlist: (
  props: PlaylistProps
) => import("react/jsx-runtime").JSX.Element;
export default Playlist;
