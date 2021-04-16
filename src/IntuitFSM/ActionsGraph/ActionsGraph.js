import React from 'react';
import Graph from 'react-graph-vis';

import './ActionsGraph.scss';

const options = {
  layout: {
    hierarchical: {
      direction: 'LR',
    }
  },
  edges: {
    width: 2,
  },
  nodes: {
    color: '#364f81',
    font: {
      color: 'white',
    }
  },
  height: '650px'
};

export default function IntuitFSM({ nodes, edges }) {
  return (
    <Graph
      graph={{ nodes, edges }}
      options={options}
    />
  );
}

