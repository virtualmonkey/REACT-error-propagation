import React from 'react';
const ExpressionDisplay = () => {
    return (
        <div className="pa2">
            <article className="center mw5 mw6-ns hidden ba mv4">
                <h1 className="f4 bg-near-black white mv0 pv2 ph3">Expression</h1>
                <div className="pa3 bt">
                    <p className="f6 f5-ns lh-copy measure mv0">
                    `x = (b +- sqrt(b^2-4ac))/(2a) .`
                    </p>
                </div>
            </article>

        </div>
        

    );
}

export default ExpressionDisplay; 