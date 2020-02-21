import React from 'react';

const extractVariables = (expressionString) => {
    // falta la lógica para quitar strings como sqrt etc.
    return (expressionString.replace(/[^A-Za-z]/g, '')).split('').filter((item, pos, self) => {
        return self.indexOf(item) === pos;
      });
}
const ExpressionField = ({expressionChangeFunction, variablesChangeFunction}) => {
    return (
        <div className="pa2">
            <input
                aria-label = 'Write Expression'
                className = 'pa3 ba b--black bg-lightest-blue' 
                type='search' 
                placeholder='Expression'
                onChange = {function(event){ expressionChangeFunction(event); variablesChangeFunction(extractVariables(event.target.value))}}/>
        </div>
        

    );
}

export default ExpressionField; 