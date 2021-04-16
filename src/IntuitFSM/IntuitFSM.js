import React from 'react';
import FSMInfoAndActions from './FSMInfoAndActions/FSMInfoAndActions';
import ActionsGraph from './ActionsGraph/ActionsGraph';
import useMachineHandler from './utilities/hooks/useMachineHandler';
import useActionsGraph from './utilities/hooks/useActionsGraph';

export default function IntuitFSM() {
  const { 
    nodes,
    edges,
    initializeGraph,
    addConnectedNode,
  } = useActionsGraph();

  const {
    isLoading,
    fsmVisualInfo,
    onActionClicked,
  } = useMachineHandler(initializeGraph, addConnectedNode);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <FSMInfoAndActions 
        { ...fsmVisualInfo }
        onActionClicked={onActionClicked}
      />

      <ActionsGraph
        nodes={nodes}
        edges={edges}
      />
    </>
  );
}



