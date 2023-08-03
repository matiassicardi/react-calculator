import React from 'react';

function ResultButton(props) {
    return (
        <div 
        className='btn btn-result'
        onClick={() => props.atClick(props.children)}>
            {props.children}
        </div>
    );
}

export default ResultButton;