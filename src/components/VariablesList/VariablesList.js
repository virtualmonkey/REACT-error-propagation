import React from 'react';
import Variable from '../Variable/Variable';

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
                        <tr>
                            <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Variable Name</th>
                            <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Value</th>
                            <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Uncertainity</th>
                        </tr>
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