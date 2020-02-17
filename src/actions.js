import {
    CHANGE_EXPRESSION_FIELD,
    ADD_VARIABLE,
    REMOVE_VARIABLE,
    CHARGE_VARIABLES,
    MODIFY_VARIABLE_FIELD,
    CALCULATE_RESULT,
} from "./constants"

export const changeExpressionField = (expressionText) => {
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

// variablesArray has arrays of each variables, [['x', 2, 0.0002],['y', 10, 0.05]] 
export const chargeVariables = (variablesArray) => {
    return {
        type: CHARGE_VARIABLES,
        payload: variablesArray
    }
}

// variables is an array with structure ['name', value, uncertainity]
export const modifyVariableField = (variable) => {
    return {
        type: MODIFY_VARIABLE_FIELD,
        payload: variable
    }
}

export const calculateResult = (result) => {
    return {
        type: CALCULATE_RESULT,
        payload: result
    }
}