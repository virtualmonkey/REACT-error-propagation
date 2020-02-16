import {
    CHANGE_EXPRESSION_FIELD,
    ADD_VARIABLE,
    REMOVE_VARIABLE,
    CALCULATE_RESULT,
} from "./constants"

export const setExpressionField = (expressionText) => {
    return {
        type: CHANGE_EXPRESSION_FIELD,
        payload: expressionText
    }
};

// newVariable is an array with structure  [ name, value, uncertainity ]
export const addVariable = (newVariable) => {
    return {
        type: ADD_VARIABLE,
        payload: newVariable
    }
};

export const removeVariable = (variableName) => {
    return {
        type: REMOVE_VARIABLE,
        payload: variableName
    }
};

export const calculateResult = (result) => {
    return {
        type: CALCULATE_RESULT,
        payload: result
    }
}