import actionCreator from "../actionCreators";
var mediaSessionActions = function (api) {
  // check for MediaSession support
  if (navigator.mediaSession !== undefined) {
    navigator.mediaSession.setActionHandler("play", function () {
      return api.dispatch(actionCreator.play());
    });
    navigator.mediaSession.setActionHandler("pause", function () {
      return api.dispatch(actionCreator.pause());
    });
    navigator.mediaSession.setActionHandler("nexttrack", function () {
      return api.dispatch(actionCreator.skipNext());
    });
    navigator.mediaSession.setActionHandler("previoustrack", function () {
      return api.dispatch(actionCreator.skipPrev());
    });
  }
  return function (next) {
    return function (action) {
      return next(action);
    };
  };
};
export default mediaSessionActions;
//# sourceMappingURL=mediaSessionActions.js.map
