
import './stylesheets/styles.css';

import RegularButton from './components/RegularButton'
import ScreenInput from './components/ScreenInput';
import ClearButton from './components/ClearButton';
import ResultButton from './components/ResultButton'

import { useState } from 'react';
import { evaluate } from 'mathjs';

//onClick={props.atClick(props.children)}

function App() {

  const [ input, setInput ] = useState('');

  const addValue = val => {
    setInput(input + val);
  };
  
  const calculateResult = () => {
    
    const valValidation = /\(\+|\(\*|\(\/|\(\%|\(\.|\*\)|\/\/|\(\/\+|\(\/\%|\(\+\+|\(\+\*|\(\+\/|\+\%|\-\-|\-\*|\-\/|\-\+|\-\%|\%\%|\%\./g;

    if (isNaN(input[0]) && input[0] !=='(' && input[0] !=='-') {
      alert('Please, enter the data to be calculated.');
      setInput('');
    } else if ( valValidation.test(input) ) {
      alert('You are trying to perform a mathematical function not supported by this calculator. Please try entering other values ​​to calculate.');
      setInput('');
    } else {
      setInput(evaluate(input));
    }
  }

  return (
    <div className="App">
        <ScreenInput 
          input={input}/>
      <div className='main-container'>
        <div className='line'>
          <RegularButton atClick={addValue}>7</RegularButton>
          <RegularButton atClick={addValue}>8</RegularButton>
          <RegularButton atClick={addValue}>9</RegularButton>
          <RegularButton atClick={addValue}>*</RegularButton>
          <RegularButton atClick={addValue}>/</RegularButton>
        </div>
        <div className='line'>
          <RegularButton atClick={addValue}>5</RegularButton>
          <RegularButton atClick={addValue}>5</RegularButton>
          <RegularButton atClick={addValue}>6</RegularButton>
          <RegularButton atClick={addValue}>+</RegularButton>
          <RegularButton atClick={addValue}>-</RegularButton>
        </div>
        <div className='line'>
          <RegularButton atClick={addValue}>1</RegularButton>
          <RegularButton atClick={addValue}>2</RegularButton>
          <RegularButton atClick={addValue}>3</RegularButton>
          <RegularButton atClick={addValue}>.</RegularButton>
          <RegularButton atClick={addValue}>%</RegularButton>
        </div>
        <div className='line'>
          <RegularButton atClick={addValue}>(</RegularButton>
          <RegularButton atClick={addValue}>0</RegularButton>
          <RegularButton atClick={addValue}>)</RegularButton>
          <ResultButton atClick={calculateResult}>=</ResultButton>
          <ClearButton atClear={() => setInput('')}>AC</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;