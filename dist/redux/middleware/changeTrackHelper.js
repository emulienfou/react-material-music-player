import { ActionTypes, RepeatMode } from "../types";
var changeTrackHelper = function (api) {
  return function (next) {
    return function (action) {
      var state = api.getState();
      // check index out of bound
      if (
        action.type === ActionTypes.CHANGE_TRACK &&
        (action.payload.index >= state.playlist.length ||
          action.payload.index < 0)
      ) {
        // set to 0 if repeat all
        if (state.repeatMode === RepeatMode.REPEAT_ALL)
          action.payload.index = 0;
        else return; // else stop the action
      }
      return next(action);
    };
  };
};
export default changeTrackHelper;
//# sourceMappingURL=changeTrackHelper.js.map
