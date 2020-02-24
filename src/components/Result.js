import React from 'react';
import getResult from '../propagation'

const Result = ({ expressionString, variablesList, prevResultDic, calculateResultFunction}) => {
    return(
        <div className="pa4 flex flex-column justify-center items-center">
            <input 
                onClick={(e) => calculateResultFunction(getResult(expressionString,variablesList,prevResultDic))} 
                className="f6 pa4 b br3 b--dark-blue ph3 pv2 input-reset ba bg-transparent navy grow pointer dib" 
                type="submit" 
                value="Calculate Result"/>
            <div className="f6 pa4-l mw8 center" cellSpacing="0">
                <div className="lh-copy">   
                    <div className="flex flex-column flex-row-l flex-wrap ">
                        <div className="flex flex-row">
                            <div className="pv3 pr3 bb-l b--navy-20 navy tc georgia i">
                                Value: 
                            </div>
                            <div className="pv3 pr3 bb-l b--navy-20 dark-blue tc">
                                {prevResultDic.total}
                            </div>        
                        </div>
                        <div className="flex flex-row">
                            <div className="pv3 pr3 bb-l b--navy-20 navy tc georgia i">
                                Uncertainty:
                            </div>
                            <div className="pv3 pr3 bb-l b--navy dark-blue tc">
                                {prevResultDic.uncertainity}
                            </div>
                        </div>
                    </div>                     
                </div>
            </div>
            
            
        </div>
    );
}

export default Result;