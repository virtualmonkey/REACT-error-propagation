import { derivative,evaluate} from 'mathjs'

const getResult = (expression, variables, prevResult) => {
    let scope = {}
    variables.map(i => scope={
        ...scope,
        [i[0]] : i[1]
    })
    let uncertainty = 0;
    try{
        variables.map(currentValue => {
            uncertainty += Math.pow((parseInt(derivative(expression, currentValue[0]).evaluate(scope))*currentValue[2]),2) 
            return uncertainty})
        const result = {
            total: evaluate(expression,scope),
            uncertainity: Math.sqrt(uncertainty)
        }
        return result;
    }
    catch(err){
        console.log(err)
        return prevResult;
    }
}


export default getResult;