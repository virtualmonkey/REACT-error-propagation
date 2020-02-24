import React from 'react';


const Header = () => {
    return(
        <header className="bg-navy w-100 ph3 pv3 pv1-ns ph4-m ph5-l overflow-x-auto">
            <nav className="f3 fw1-ns ttu tracked flex  flex-row flex-wrap justify-around">
                {/* justify-around works fine for small screen, perhaps ill use some media queries? */}
                <h2 className="dim white dib mr3">Error Propagation Calculator</h2>
                <div className="flex pa3 flex-row items-center">
                    <p className="dim white dib ma0 f7">Made by:</p>
                    <a className="link dim white dib ma2 f7" href="https://github.com/AlejandroUrbina212" title="AU" target="blank">Alejandro Urbina</a>
                    <p className="dim white dib ma0 f7">&</p>
                    <a className="link dim white dib ma2 f7" href="https://github.com/suulcoder" title="SC" target="blank">Saúl Contreras</a>
                </div>
            </nav>
        </header>
    );
}

export default Header;