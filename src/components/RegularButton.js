import React from 'react';

function RegularButton(props) {

  const isOperator = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };



  return (
    <div 
      className={`btn ${isOperator(props.children) ? 'btn-operator' : ''}`.trimEnd()} 
      onClick={() => props.atClick(props.children)}>
      {props.children}
    </div>
  );
}

export default RegularButton;