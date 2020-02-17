import React from 'react';

const ExpressionField = ({expressionChangeFunction}) => {
    return (
        <div className="pa2">
            <input
                aria-label = 'Write Expression'
                className = 'pa3 ba b--black bg-lightest-blue' 
                type='search' 
                placeholder='Expression'
                onChange = {expressionChangeFunction}/>
        </div>
        

    );
}

export default ExpressionField; 