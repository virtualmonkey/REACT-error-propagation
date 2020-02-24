import React from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const asciimath2latex = require('asciimath-to-latex')

const convertAsciimath2Latex = (asciimath) =>{
    //console.log(`asciimath: ${asciimath}`)
    const latex = asciimath2latex(asciimath)
    //console.log(`latex: ${latex}`)
    return latex;
}

const ExpressionDisplay = ({expressionString}) => {
    const latexExpression = convertAsciimath2Latex(expressionString);
    //console.log('latexxxx',latexExpression);
    return (
        <div className="pa2 w-100 overflow-x:auto">
            <article className="center mw5 mw6-ns hidden ba mv4">
                <h1 className="f4 bg-navy white mv0 pv2 ph3">Expression</h1>
                <div className="pa3 b--navy bt overflow-y-auto"> 
                    <BlockMath>{latexExpression}</BlockMath>
                </div>
            </article>

        </div>
        

    );
}

export default ExpressionDisplay; 