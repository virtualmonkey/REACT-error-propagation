import React from 'react';


const Header = () => {
    return(
        <header className="bg-black-90 w-100 ph3 pv3 pv1-ns ph4-m ph5-l">
            <nav className="f6 fw1-ns ttu tracked flex justify-between">
                <h1 className="dim white dib mr3">Error Propagation Calculator</h1>
                <div className="flex flex-row items-center">
                    <p className="dim white dib ma0 f7-ns">Made by:</p>
                    <a className="link dim white dib ma2 f7-ns" href="https://github.com/AlejandroUrbina212" title="AU" target="blank">Alejandro Urbina</a>
                    <p className="dim white dib ma0 f7-ns">&</p>
                    <a className="link dim white dib ma2 f7" href="https://github.com/suulcoder" title="SC" target="blank">Saúl Contreras</a>
                </div>
            </nav>
        </header>
    );
}

export default Header;