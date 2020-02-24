import {
    CHANGE_EXPRESSION_FIELD,
    CHARGE_VARIABLES,
    VARIABLE_MODIFIED,
    CALCULATE_RESULT,
} from "./constants"

export const changeExpressionField = (expressionText) => {
    return {
        type: CHANGE_EXPRESSION_FIELD,
        payload: expressionText
    }
};

// variablesArray has arrays of each variables, [['x', 2, 0.0002],['y', 10, 0.05]] 
export const chargeVariables = (variablesArray) => {
    return {
        type: CHARGE_VARIABLES,
        payload: variablesArray
    }
}

// variables is an array with structure ['name', value, uncertainity]
export const variableModified = (variable) => {
    return {
        type: VARIABLE_MODIFIED,
        payload: variable
    }
}

export const calculateResult = (result) => {
    return {
        type: CALCULATE_RESULT,
        payload: result
    }
}