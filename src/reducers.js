import {
    CHANGE_EXPRESSION_FIELD,
    ADD_VARIABLE,
    REMOVE_VARIABLE,
    CHARGE_VARIABLES,
    MODIFY_VARIABLE_FIELD,
    CALCULATE_RESULT,
} from "./constants"

import update from 'immutability-helper';
import _ from 'lodash';


const initialState = {
    expression: '', // needs to be a string cuz mathJax
    variables: [],
    result: { result: 0, uncertainity: 0}
};

export const setExpressionField = ( state = initialState, action = {}) => {
    switch(action.type){
        case CHANGE_EXPRESSION_FIELD:
            return Object.assign({}, state, {expression: action.payload});
        default: 
            return state;
    }
}
export const setVariables = ( state = initialState, action = {}) => {
    switch(action.type){
        case CHARGE_VARIABLES:
            const newVariables = [...state.variables].filter( variable => action.payload.includes(variable[0]));
            const diff = _.difference(action.payload, newVariables.map(variable => variable[0]));
            return Object.assign({},state,{ variables : [...newVariables, ...diff.map(variableName => [variableName,0,0])]});
        default:
            return state;
    }
}

export const setVariablesChanges = (state = initialState, action = {}) => {
    switch(action.type){
        case MODIFY_VARIABLE_FIELD:
            return Object.assign({}, state, { 
                variables : state.variables.map( (variable) => { 
                    if (variable[0] === action.payload[0]){
                        return action.payload;
                    } else {
                        return variable;
                    }
                })
            }) 

        case ADD_VARIABLE:
            return update(state, {
                variables: {
                    $push : action.payload
                }
            });
        case REMOVE_VARIABLE:
            return Object.assign({}, state, {variables: state.variables.filter( variable =>{ return variable[0] !== action.payload; })});
            // return {...state, 
            //     variables: state.variables.filter(
            //         (variable) => {
            //             return variable[0] !== action.payload;
            //         })
            //  }
        default:
            return state;
    }
}
export const modifyResult = (state = initialState, action = {}) => {
    switch(action.type){
        case CALCULATE_RESULT:
            return Object.assign({}, state, {result: action.payload});
        default:
            return state;
    }
}

