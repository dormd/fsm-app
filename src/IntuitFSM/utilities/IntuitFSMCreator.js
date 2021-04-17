import createFSM from '@dormd/fsm';

function wordActionHandler(action) {
  // action is a char
  this.word += action;
}

const addFSMActionHandlers = (config) => ({
  ...config,
  // add same action handler for all actions
  states: {
    ...Object.keys(config.states).reduce((statesAgg, stateKey) => {
      const stateConfig = config.states[stateKey];

      return {
        ...statesAgg,
        [stateKey]: {
          ...stateConfig,
          actions: {
            ...Object.keys(stateConfig.actions).reduce((actionsAgg, actionKey) => ({
              ...actionsAgg,
              [actionKey]: {
                ...stateConfig.actions[actionKey],
                action: wordActionHandler,
              },
            }), {}),
          }
        }
      }
    }, {}),
  },
  initialize: () => console.log('FSM initialized'),
  // global hooks
  onActionEnter: function (action, currentState, targetState) {
    console.log(`onActionEnter (global): ${currentState} -> ${targetState} by [${action}] action`);
  },
  onActionExit: function (action, currentState, targetState) {
    console.log(`onActionExit (global): ${currentState} -> ${targetState} by [${action}] action`);
  }
});

export default function createIntuitFSM(config) {
  return createFSM(addFSMActionHandlers(config));
}