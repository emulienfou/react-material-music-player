import ActionCreators from "../actionCreators";
import { ActionTypes } from "../types";
var skipHelper = function (api) {
  return function (next) {
    return function (action) {
      // optionally narrow further here:
      if (action.type === ActionTypes.SKIP_NEXT) {
        var currentTrack = api.getState().currentTrack;
        api.dispatch(ActionCreators.changeTrack(currentTrack + 1));
      } else if (action.type === ActionTypes.SKIP_PREV) {
        var currentTrack = api.getState().currentTrack;
        api.dispatch(ActionCreators.changeTrack(currentTrack - 1));
      }
      return next(action);
    };
  };
};
export default skipHelper;
//# sourceMappingURL=skipHelper.js.map
