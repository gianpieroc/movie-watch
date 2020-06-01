import triggerActions from "./triggerActions";

export const triggeredActions = new triggerActions();

const actionWatcherMiddleware = () => (next) => (action) => {
  triggeredActions.addAction(action);
  return next(action);
};

export default actionWatcherMiddleware;
