import { SxProps } from "@mui/system";
interface CoverArtProps {
  src: string | undefined;
  alt: string;
  sx?: SxProps;
  height?: number;
  width?: number;
}
declare const CoverArt: (
  props: CoverArtProps
) => import("react/jsx-runtime").JSX.Element;
export default CoverArt;
