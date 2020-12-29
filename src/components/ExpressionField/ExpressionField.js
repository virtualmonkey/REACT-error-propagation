import React from 'react';
import constantGetterFromASCIIMath from '../../parser';

const ExpressionField = ({expressionChangeFunction, variablesChangeFunction}) => {
    return (
        <div className="pa2 mt4">
            <input
                aria-label = 'Write Expression'
                className = 'pa3 ba b--black bg-lightest-blue' 
                type='search' 
                placeholder='Escriba acá la expresión'
                onChange = {function(event){ expressionChangeFunction(event); variablesChangeFunction(constantGetterFromASCIIMath(event.target.value))}}/>
        </div>
        

    );
}

export default ExpressionField; 