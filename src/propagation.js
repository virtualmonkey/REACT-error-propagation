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
    const currResult = {
        result: evaluate(state.expression,scope),
        uncertainity: state.variables.reduce((accumulator, currentValue) => ((derivative(state.expression, currentValue[0]).evaluate(scope)*currentValue[2]) + accumulator))
    }
    return {...state,...currResult}
}