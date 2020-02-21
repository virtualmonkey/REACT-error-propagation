import { derivative,evaluate} from 'mathjs'

export const getPropagation = (state = {
    expression: '', // needs to be a string cuz mathJax
    variables: [],
    result: { result: 0, uncertainity: 0}
}) => {
    let scope = {}
    state.variables.map(i => scope={
        ...scope,
        [i[0]] : i[1]
    })
    let uncertainity = 0;
    state.variables.map(currentValue => {
        uncertainity += (parseInt(derivative(state.expression, currentValue[0]).evaluate(scope))*currentValue[2])
        return uncertainity})
    const result = {
        result: evaluate(state.expression,scope),
        uncertainity: uncertainity
    }
    return {...state,result}
}