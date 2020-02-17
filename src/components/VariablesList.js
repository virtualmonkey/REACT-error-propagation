import React from 'react';
import VariablesInfo from './VariablesInfo'


const VariablesList = ({expressionString}) => {
    return(
        <div class="flex flex-colum justify-start items-center">
            <VariablesInfo />
        </div>
    );
}

export default VariablesList;