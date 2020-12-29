import React from 'react';


const Header = () => {
    return(
        <nav className="bg-black-90 db dt-l w-100 border-box pa3 ph5-l">
            <div className="db dtc-l v-mid mid-gray dim w-100 w-25-l tc tl-l mb2 mb0-l">
                {/* <img src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="Site Name"/> */}
                <h3 className="light-gray dib mv2">Calculadora de Propagación de Error</h3>
            </div>
            <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                {/* <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Home">Home</a>
                <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="How it Works">How it Works</a>
                <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Blog">Blog</a> */}
                {/* <p className="dim light-gray f6 f5-l dib ma2">Made by:</p> */}
                <a className="link dim light-gray f6 f5-l dib mr3 mr4-l" href="https://github.com/virtualmonkey" title="Developer" target="blank">Alejandro Urbina</a>
                <a className="link dim light-gray f6 f5-l dib" href="https://github.com/suulcoder" title="Developer" target="blank">Saúl Contreras</a>
            </div>
        </nav>
    );
}

export default Header;