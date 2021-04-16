import { useEffect, useState, useRef } from 'react';
import createIntuitFSM from '../IntuitFSMCreator';

export default function useMachineHandler(initializeGraph, addConnectedNode) {
  const fsmRef = useRef();

  const [isLoading, setIsLoading] = useState(true);
  const [fsmVisualInfo, setFSMVisualInfo] = useState({});

  useEffect(() => {
    async function fetchConfig() {
      try {
        const res = await fetch('/fsm/config');
        const config = await res.json();

        const fsm = createIntuitFSM(config);
        const currentState = fsm.getCurrentState();

        fsmRef.current = fsm;
        setFSMVisualInfo({
          currentState,
          word: fsm.word,
          reachableStates: fsm.getReachableStates(),
          possibleActions: fsm.getPossibleActions(),
        });

        initializeGraph(currentState);

        setIsLoading(false);
      }
      catch {}
    }

    fetchConfig();
  }, [initializeGraph]);

  function onActionClicked(action) {
    const currentState = fsmRef.current.getCurrentState();
    const targetState = fsmRef.current.doAction(action);

    if (targetState === currentState) {
      setFSMVisualInfo(info => ({ 
        ...info, 
        word: fsmRef.current.word,
      }));

      return;
    }

    setFSMVisualInfo({
      currentState,
      word: fsmRef.current.word,
      reachableStates: fsmRef.current.getReachableStates(),
      possibleActions: fsmRef.current.getPossibleActions(),
    });

    addConnectedNode(action, targetState);
  }

  return {
    isLoading,
    fsmVisualInfo,
    onActionClicked,
  };
}