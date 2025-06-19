import { ActionTypes, TrackData } from "./types";
declare const ActionCreators: {
  changeTrack: (index: number) => {
    type: ActionTypes;
    payload: {
      index: number;
    };
  };
  deleteTrack: (index: number) => {
    type: ActionTypes;
    payload: {
      index: number;
    };
  };
  play: () => {
    type: ActionTypes;
  };
  pause: () => {
    type: ActionTypes;
  };
  stop: () => {
    type: ActionTypes;
  };
  updatePlaylist: (playlist: TrackData[]) => {
    type: ActionTypes;
    payload: {
      playlist: TrackData[];
    };
  };
  shuffle: (bool: boolean) => {
    type: ActionTypes;
    payload: {
      shuffle: boolean;
    };
  };
  setCurrentTime: (currentTime: number) => {
    type: ActionTypes;
    payload: {
      currentTime: number;
    };
  };
  setTimeLeft: (timeLeft: number) => {
    payload: {
      timeLeft: number;
    };
    type: ActionTypes;
  };
  seek: (progress: any) => {
    type: ActionTypes;
    payload: {
      progress: any;
    };
  };
  setVolume: (volume: number | number[]) => {
    type: ActionTypes;
    payload: {
      volume: number | number[];
    };
  };
  setRepeatMode: (mode: string) => {
    type: ActionTypes;
    payload: {
      mode: string;
    };
  };
  skipNext: () => {
    type: ActionTypes;
  };
  skipPrev: () => {
    type: ActionTypes;
  };
  setDuration: (duration: number) => {
    type: ActionTypes;
    payload: {
      duration: number;
    };
  };
  setCurrentTrackId: (id: string) => {
    type: ActionTypes;
    payload: {
      id: string;
    };
  };
};
export default ActionCreators;
