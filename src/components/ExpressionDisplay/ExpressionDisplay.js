import React from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const asciimath2latex = require('asciimath-to-latex')

const convertAsciimath2Latex = (asciimath) =>{
    const latex = asciimath2latex(asciimath)
    return latex;
}

const ExpressionDisplay = ({expressionString}) => {
    const latexExpression = convertAsciimath2Latex(expressionString);
    return (
        <div className="pa2 w-100 mt4">
            <article className="center mw5 mw6-ns hidden ba">
                <h1 className="f4 bg-near-black white mv0 pv2 ph3">Expression</h1>
                <div className="pa3 bt overflow-x-scroll overflow-y-hidden">
                    <BlockMath>{latexExpression}</BlockMath>
                </div>
            </article>

        </div>
        

    );
}

export default ExpressionDisplay; 