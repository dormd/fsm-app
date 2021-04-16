import { useState, useCallback } from 'react';

const getId = (node) => node.id;
const lastNode = (nodes) => nodes && nodes[nodes.length - 1];
const nextId = (id) => id + 1;

export default function useActionsGraph() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  function addConnectedNode(edgeLabel, nodeLabel) {
    const lastNodeId = getId(lastNode(nodes));
    const newNodeId = nextId(lastNodeId);

    setNodes([
      ...nodes,
      { 
        id: newNodeId,
        label: nodeLabel
      }
     ]);

    setEdges([
      ...edges,
      { 
        from: lastNodeId,
        to: newNodeId,
        label: edgeLabel,
      },
    ]);
  }

  const initializeGraph = useCallback((label) => {
    setNodes([{ id: 1, label }]);
  }, [setNodes]);

  return {
    nodes,
    edges,
    initializeGraph,
    addConnectedNode,
  };
}