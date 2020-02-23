import React from 'react';
import getResult from '../propagation'

const Result = ({ expressionString, variablesList, prevResultDic, calculateResultFunction}) => {
    return(
        <div className="pa2 flex flex-column justify-start items-center w-100">
            <input 
                onClick={(e) => calculateResultFunction(getResult(expressionString,variablesList,prevResultDic))} 
                className="f6 b br3 b--black ph3 pv2 input-reset ba bg-transparent grow pointer dib" 
                type="submit" 
                value="Calculate Result"/>
            <table className="f6 w-100 mw8 center" cellSpacing="0">
                <tbody className="lh-copy">   
                    <tr>
                        <td className="pv3 pr3 bb b--black-20 tc georgia i">
                            Value: 
                        </td>
                        <td className="pv3 pr3 bb b--black-20 tc">
                            {prevResultDic.total}
                        </td>
                        <td className="pv3 pr3 bb b--black-20 tc georgia i">
                            Uncertainity: 
                        </td>
                        <td className="pv3 pr3 bb b--black-20 tc">
                            {prevResultDic.uncertainity}
                        </td>
                    </tr>                     
                </tbody>
            </table>
            
            
        </div>
    );
}

export default Result;