import {
    EXPRESSION_FIELD_CHANGED,
    VARIABLES_CHARGED,
    VARIABLE_MODIFIED,
    RESULT_CALCULATED,
} from "./types"

export const changeExpressionField = (expressionText) => {
    return {
        type: EXPRESSION_FIELD_CHANGED,
        payload: expressionText
    }
};

// variablesArray has arrays of each variables, [['x', 2, 0.0002],['y', 10, 0.05]] 
export const chargeVariables = (variablesArray) => {
    return {
        type: VARIABLES_CHARGED,
        payload: variablesArray
    }
}

// variables is an array with structure ['name', value, uncertainty]
export const modifyVariable = (variable) => {
    return {
        type: VARIABLE_MODIFIED,
        payload: variable
    }
}

export const calculateResult = (result) => {
    return {
        type: RESULT_CALCULATED,
        payload: result
    }
}