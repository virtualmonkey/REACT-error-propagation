import React from 'react';
import VariablesInfo from './VariablesInfo';
import Variable from './Variable';

const VariablesList = ({variablesList, variableModifiedFunction}) => {
    const variablesArray = variablesList.map((variable, i) =>{
        return (
            <Variable
                key ={i}
                name = {variable[0]}
                value = {variable[1]}
                uncertainity = {variable[2]}
                variableModified = {variableModifiedFunction}
            />
        );
    });
    return(
        <div className="pa2">
            <div className="overflow-auto">
                <table className="f6 w-100 mw8 center" cellSpacing="0">
                    <thead>
                        <VariablesInfo />
                    </thead>
                    <tbody className="lh-copy">
                        {variablesArray}                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default VariablesList;