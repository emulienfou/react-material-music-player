import ActionCreators from "../actionCreators";
import { ActionTypes } from "../types";
var deleteHelper = function (api) {
  return function (next) {
    return function (action) {
      if (action.type !== ActionTypes.DELETE_TRACK) return next(action);
      var playlist = api.getState().playlist;
      var index = action.payload.index;
      playlist.splice(index, 1);
      api.dispatch(ActionCreators.updatePlaylist(playlist));
      return next(action);
    };
  };
};
export default deleteHelper;
//# sourceMappingURL=deleteHelper.js.map
