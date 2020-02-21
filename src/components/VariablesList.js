import React, { Component } from 'react';
import VariablesInfo from './VariablesInfo';
import Variable from './Variable';

class VariablesList extends Component {
    render(){ 
        return(
            <div className="pa2">
                <div className="overflow-auto">
                    <table className="f6 w-100 mw8 center" cellSpacing="0">
                        <thead>
                            <VariablesInfo />
                        </thead>
                        <tbody className="lh-copy">
                            <Variable></Variable>
                            <Variable></Variable>
                            <Variable></Variable>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default VariablesList;