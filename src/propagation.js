import { derivative,evaluate} from 'mathjs'

const getResult = (expression, variables, prevResult) => {
    let scope = {}
    variables.map(i => scope={
        ...scope,
        [i[0]] : i[1]
    })
    let uncertainity = 0;
    try{
        variables.map(currentValue => {
            uncertainity += (parseInt(derivative(expression, currentValue[0]).evaluate(scope))*currentValue[2])
            return uncertainity})
        const result = {
            total: evaluate(expression,scope),
            uncertainity: uncertainity
        }
        return result;
    }
    catch{
        return prevResult;
    }
}


export default getResult;