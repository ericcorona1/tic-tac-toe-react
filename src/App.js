import React from 'react'
export default function Square() {
  return (
    <div className='board'>
      <div className='board-row'>
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
      </div>
      <div className='board-row'>
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
      </div>
      <div className='board-row'>
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
      </div>
    </div>
  );
}
