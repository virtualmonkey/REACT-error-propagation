import React from 'react';

const Variable = ({ name, value, uncertainity, variableModified}) => {
    return(
        <tr>
            <td className="pv3 pr3 bb b--black-20 navy tc georgia i">
               {name}
            </td>
            <td className="pv3 pr3 bb b--black-20">
                <input id="value" className="input-reset ba b--navy-20 navy pa2 db w-100" 
                type="tel" 
                placeholder={value}
                aria-describedby="value"
                onChange = {(e)=>variableModified([name, e.target.value, uncertainity])}/>
            </td>
            <td className="pv3 pr3 bb b--black-20">
                <input id="uncertainity" className="input-reset ba b--navy-20 navy pa2 db w-100" 
                type="tel" 
                aria-describedby="uncertainity" 
                placeholder={uncertainity}
                onChange = {(e)=>variableModified([name, value, e.target.value])}/>
            </td>
        </tr>
    );
}

export default Variable;