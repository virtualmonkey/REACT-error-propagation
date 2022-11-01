import React from 'react';


const Header = () => {
    return(
        <nav className="bg-green db dt-l w-100 border-box pa3 ph5-l mb-1">
            <div className="db dtc-l v-mid mid-gray dim w-100 w-25-l tc tl-l mb2 mb0-l">
                {/* <img src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="Site Name"/> */}
                <h3 className="light-gray dib mv2">Calculadora de Propagación de Error</h3>
            </div>
        </nav>
    );
}

export default Header;