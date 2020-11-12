import { derivative,evaluate} from 'mathjs'

const getResult = (expression, variables, prevResult) => {
    let scope = {}
    variables.map(i => scope={
        ...scope,
        [i[0]] : i[1]
    })
    let derived = 0;
    let uncertainty_for_RMSE = 0;
    let uncertainty_for_propagation = 0;
    let evaluation = 0;
    try{
        variables.map(currentValue => {
            derived = derivative(expression, currentValue[0])
            try {
                evaluation = derived.evaluate(scope);
                if (evaluation === Infinity || evaluation.im){
                    throw Error;
                } else {
                    uncertainty_for_propagation += parseFloat(evaluation*currentValue[2])
                    uncertainty_for_RMSE += Math.pow(parseFloat(evaluation*currentValue[2]),2)
                }
            } catch(error) {
                //handle a bad evaluation
                console.log(error);
                throw Error;
            }
            return currentValue;
        });
        
        const result = {
            total: evaluate(expression,scope),
            uncertainty: Math.sqrt(uncertainty_for_RMSE),
            rmse: uncertainty_for_propagation
        }
        return result;
    }
    catch(error){
        // handle a no derivable expression
        console.log(error.message);
        return {total: 0, uncertainty: 0};
    }
}


export default getResult;