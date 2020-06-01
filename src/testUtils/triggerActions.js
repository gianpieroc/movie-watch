const triggerActions = () => {
  let actions = [];

  function clear() {
    actions = [];
  }

  function getActions() {
    return actions;
  }

  function getAction(actionType) {
    return actions.find((action) => action.type === actionType);
  }

  function addAction(action) {
    actions.push(action);
  }

  function waitForAction(actionType) {
    return Promise.race([
      new Promise((resolve) => {
        const isAction = () =>
          actions.some((action) => action.type === actionType);

        const check = () =>
          setTimeout(() => (isAction() ? resolve() : check()), 1);

        check();
      }),
      new Promise((_, reject) =>
        setTimeout(
          () => reject(new Error(`Timeout looking for Action ${actionType}`)),
          1000
        )
      )
    ]);
  }

  return {
    actions,
    clear,
    getAction,
    getActions,
    addAction,
    waitForAction
  };
};

export default triggerActions;
