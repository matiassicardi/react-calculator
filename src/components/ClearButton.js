import React from 'react';

function ClearButton(props) {
  return (
    <div className='btn btn-clear' 
      onClick={props.atClear}>
      {props.children}  
    </div>
  );
}

export default ClearButton;