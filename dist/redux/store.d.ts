import { Tuple } from "@reduxjs/toolkit";
import ActionCreators from "./actionCreators";
import reducer from "./reducers";
declare const store: import("@reduxjs/toolkit").EnhancedStore<
  {
    mediaState: import("./types").MediaState;
    playlist: import("./types").TrackData[];
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
  Tuple<
    [
      import("redux").StoreEnhancer<
        {
          dispatch: {};
        },
        {}
      >,
      import("redux").StoreEnhancer<{}, {}>
    ]
  >
>;
export type AppAction =
  | ReturnType<typeof ActionCreators[keyof typeof ActionCreators]>
  | any;
export type RootState = ReturnType<typeof reducer>;
export default store;
