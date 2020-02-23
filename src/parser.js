const ASCIIMathWords = ['cdot','ast','star',
    'backslash setminus','times','div','ltimes',
    'rtimes','bowtie','circ','oplus','otimes',
    'odot','wedge','bidwedge','vee','bigvee',
    'cap','bigcap','cup','bigcup','frac','partial',
    'nabla','pm','emptyset','infty','therefore',
    'because','|ldots|','angle','triangle','lfloor',
    'rfloor','lceiling','rceiling','text','ne','lt',
    'gt','le','ge','prec','preceq','succ','succeq',
    'notin','subset','supset','subseteq','supseteq',
    'equiv','cong','approx','propto','neg','implies',
    'iff','forall','exists','bot','top','vdash',
    'models','langle','rangle','uparrow','downarrow',
    'rightarrow','to','rightarrowtail','twoheadrightarrow',
    'twoheadrightarrowtail','mapsto','leftarrow',
    'leftrightarrow','Rightarrow','Leftarrow',
    'Leftrightarrow','overline','underline','overset',
    'underbrace','overbrace','bb','bbb','cc','tt','fr',
    'sf','cancel','color','obrace','ubrace','underset',
    'overset','ddot ','dot','vec','ul','bar','hat',
    'hArr','lArr','rArr','harr','larr','>','<','-','|',
    'rarr','darr','uarr','norm','ceil','floor','abs',
    '{','}','=','T','_','not','or','and','"',
    '~','square','diamond','/','frown','quad','ddots',
    'vdots','cdots','aleph','oo','O/','grad','del','oint',
    'int','root','sqrt','^','uuu','uu','nnn','nn','vvv',
    'vv','prod','sum','o.','ox','o+','@','xx','-','0','1',
    '2','3','4','5','6','7','8','9',,'pi','Pi','e'
]

const ASCIIGreekLetters = ['alpha','beta','gamma','Gamma',
    'delta','epsilon','varepsilon','zeta','theta',
    'Theta','vartheta','iota','kappa','lambda','Lambda',
    'mu','nu','xi','Xi','rho','sigma','Sigma',
    'tau','upsilon','phi','Phi','varphi','chi','psi',
    'Psi','omega','Omega'
]

/*Following function will receive an espression 
and return an array with the variables*/
export const ASCIIMathConstantGetter = (expression) => {
    let toReturn = expression;
    ASCIIMathWords.forEach(word => {
        console.log(word)
        toReturn = toReturn.replace(new RegExp(word,'g'),'')
    })
    const variables = []
    ASCIIGreekLetters.forEach(letter => {
        if((toReturn.match(new RegExp(letter,'g')) || []).length){
            variables.push(letter)
            toReturn = toReturn.replace(new RegExp(letter,'g'),'')
        }
    })
    const latinVariables = toReturn.split('')
    const myVariables = latinVariables.filter(variable => {
        return !((variable==='(') || (variable===')') || (variable==='+') || (variable==='*'))
    })
    return [...variables,...myVariables]
};