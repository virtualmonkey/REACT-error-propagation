const mathWordsASCII = ['twoheadrightarrowtail','twoheadrightarrow','backslashsetminus',
'rightarrowtail','leftrightarrow','Leftrightarrow','underbrace','rightarrow','Rightarrow',
'underline','therefore','overbrace','leftarrow','downarrow','Leftarrow','underset','triangle',
'supseteq','subseteq','rceiling','overline','lceiling','emptyset','bidwedge','|ldots|',
'uparrow','partial','overset','overset','implies','diamond','because','ubrace','supset',
'succeq','subset','square','rtimes','rfloor','rangle','propto','preceq','otimes','obrace',
'models','mod','gcd','lcm','lub','mapsto','ltimes','lfloor','langle','forall','exists','cancel','bowtie','bigvee',
'bigcup','glb','min','max','bigcap','approx','wedge','vdots','vdash','times','oplus','notin','nabla','infty',
'frown','floor','equiv','ddots','ddot ','color','cdots','angle','aleph','uarr','text','succ',
'sinh','cosh','tanh','sech','csch','star','sqrt','root','rarr','rArr','quad','prod','prec','oint','odot','norm','larr','lArr',
'harr','hArr','grad','frac','darr','coth','exp','log','det','dim','cong','circ','ceil','cdot','vvv','vee','vec','uuu','top',
'sin','cos','tan','cot','sec','sum','not','nnn','neg','int','iff','hat','dot','div','del','cup','cap','bot','bb','bar','ast',
'csc','and','abs','CC','RR','NN','QQ','ZZ','xx','vv','uu','ul','tt','to','sf','pm','pi','ox','or','oo','o.','o+','nn','ne',
'arcsin','arccos','arctan','in','ln','lt','le','gt','ge','fr','cc','bbb','al','Pi','O/','~','}','|','{','_','^','T','@','>','=','<',
'9','8','7','6','5','4','3','2','1','0','/','-','-','"','e'
];

const greekLettersASCII = ['alpha','beta','gamma','Gamma',
    'delta','epsilon','varepsilon','zeta','theta',
    'Theta','vartheta','iota','kappa','lambda','Lambda',
    'mu','nu','xi','Xi','rho','sigma','Sigma',
    'tau','upsilon','phi','Phi','varphi','chi','psi',
    'Psi','omega','Omega'
]

/*Following function will receive an espression 
and return an array with the variables*/
const constantGetterFromASCIIMath = (expression) => {
    let toReturn = expression;
    mathWordsASCII.forEach(word => toReturn = toReturn.replace(new RegExp(word,'g'),''));
    const greekVariables = [];
    greekLettersASCII.forEach(letter => {
        if((toReturn.match(new RegExp(letter,'g')) || []).length){
            greekVariables.push(letter);
            toReturn = toReturn.replace(new RegExp(letter,'g'),'');
        }
    });
    const latinVariables = toReturn.replace(/[^A-Za-z]/g, '').split('').filter((item, pos, self) => {return self.indexOf(item) === pos;})
    return [...greekVariables,...latinVariables]
};

export default constantGetterFromASCIIMath;