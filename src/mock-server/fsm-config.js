function generateActionExcludingOf(targetState, excludingOf) {
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .reduce((actions, c) => {
      if (excludingOf === c) return actions;

      return {
        ...actions,
        [c]: {
          targetState,
        },
      };
    }, {});
}

export default function getFSMConfig() {
  return {
    initialState: 'Start',
    word: '',
    states: {
      Start: {
        actions: {
          i: {
            targetState: 'Got_i',
          },
          ...generateActionExcludingOf('Start', 'i')
        }
      },
      Got_i: {
        actions: {
          n: {
            targetState: 'Got_in',
          },
          ...generateActionExcludingOf('Got_i', 'n')
        }
      },
      Got_in: {
        actions: {
          t: {
            targetState: 'Got_int',
          },
          ...generateActionExcludingOf('Got_in', 't')
        }
      },
      Got_int: {
        actions: {
          u: {
            targetState: 'Got_intu',
          },
          ...generateActionExcludingOf('Got_int', 'u')
        }
      },
      Got_intu: {
        actions: {
          i: {
            targetState: 'Got_intui',
          },
          ...generateActionExcludingOf('Got_intu', 'i')
        }
      },
      Got_intui: {
        actions: {
          t: {
            targetState: 'Got_intuit',
          },
          ...generateActionExcludingOf('Got_intui', 't')
        }
      }, 
      Got_intuit: {
        actions: {
          ...generateActionExcludingOf('Got_intuit'),
        }
      }, 
    }
  };
}