import {
    EXPRESSION_FIELD_CHANGED,
    VARIABLES_CHARGED,
    VARIABLE_MODIFIED,
    RESULT_CALCULATED,
} from "./types"

import _ from 'lodash';

export const setExpressionField = ( state = '', action = {}) => {
    switch(action.type){
        case EXPRESSION_FIELD_CHANGED:
            return action.payload;
        default: 
            return state;
    }
}
export const setVariables = ( state = [], action = {}) => {
    switch(action.type){
        case VARIABLES_CHARGED:
            const newVariables = [...state].filter( variable => action.payload.includes(variable[0]));
            const diff = _.difference(action.payload, newVariables.map(variable => variable[0]));
            return  [...newVariables, ...diff.map(variableName => [variableName,0,0])];
        case VARIABLE_MODIFIED:
            return state.map(variable => {
                if (variable[0] === action.payload[0]){
                    return action.payload;
                } else {
                    return variable;
                }
            })    
        default:
            return state;
    }
}
export const modifyResult = (state = {}, action = {}) => {
    switch(action.type){
        case RESULT_CALCULATED:
            return {...state, ...action.payload};
        default:
            return state;
    }
}

