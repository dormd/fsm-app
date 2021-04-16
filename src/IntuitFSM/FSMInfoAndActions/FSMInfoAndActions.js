import React from 'react';

import './FSMInfoAndActions.scss';

export default function FSMInfoAndActions({
  currentState,
  word,
  reachableStates,
  possibleActions,
  onActionClicked,
}) {
  return (
    <div className='fsm-info-and-actions'>
      <section>
        <span className='section-title'>Current state: </span>
        <span>{ currentState }</span>
      </section>

      { 
        word !== undefined && (
          <section>
            <span className='section-title'>Word: </span>
            <span>{ word || '--[empty]--' }</span>
          </section>
        )
      }

      <section>
        <div className='section-title'>Available target states:</div>
        <ul>
          {
            reachableStates.map(state => <li key={state}>{state}</li>)
          }
        </ul>
      </section>
      
      <section className='actions-section'>
        <div className='section-title'>Available actions:</div>
        <div>
          {
            possibleActions.map(action => 
              <button 
                key={action} 
                onClick={() => onActionClicked(action)}
              >
                {action}
              </button>
            )
          }
        </div>
      </section>
    </div>
  );
}