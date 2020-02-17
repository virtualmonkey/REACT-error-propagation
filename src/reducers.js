import {
    CHANGE_EXPRESSION_FIELD,
    ADD_VARIABLE,
    REMOVE_VARIABLE,
    CHARGE_VARIABLES,
    MODIFY_VARIABLE_FIELD,
    CALCULATE_RESULT,
} from "./constants"
import update from 'immutability-helper';

const initialState = {
    expression: '', // needs to be a string cuz mathJax
    variables: [
        ['x',0.200,0.00005],
        ['z',0.1145,0.00005]
    ],
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
            return Object.assign({},state,{ variables : action.payload})
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
            Object.assign({}, state, {variables: state.variables.filter( variable =>{ return variable[0] !== action.payload; })});
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

