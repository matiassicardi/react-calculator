import React from 'react';

import calculatorImg from '../img/matias-sicardi-calc.png'

function ScreenInput({ input }) {
  return (
    <div className='screen'>
      <div className='input'>
        {input}
      </div>
      <div className={ `intro-text ${input ? 'no-show' : ''}`.trimEnd() }>
        <img
        src={calculatorImg}
        className='shake-img'
        alt=''></img>
        <p className='start-message'>Please, enter values to calculate.</p>
        <p className='start-message indicator'>This calculator was made by Matias Sicardi <a href='https://github.com/matiassicardi'>github.com/matiassicardi</a> using ReactJS (and MathJS) during the <a href='https://www.youtube.com/watch?v=6Jfk8ic3KVk'>FreeCodeCamp ReactJS Course</a> taught by <a href='https://twitter.com/EstefaniaCassN'>Estefania Cassingena Navone</a>. To a better CSS code, SASS(SCSS) pre-processor was used. Find the calculator repo at <a href='https://github.com/matiassicardi/react-calculator'>github.com/matiassicardi/react-calculator</a></p>
      </div>
    </div>
  );
}

export default ScreenInput;