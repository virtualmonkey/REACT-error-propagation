import React, { Component } from 'react';

import Header from '../components/Header/Header';
import ExpressionField from '../components/ExpressionField/ExpressionField';
import ExpressionDisplay from '../components/ExpressionDisplay/ExpressionDisplay';
import VariablesList from '../components/VariablesList/VariablesList';
import Result from '../components/Result/Result';

import { connect } from 'react-redux';
import { changeExpressionField, chargeVariables, modifyVariable, calculateResult} from '../actions';


// App.js inherits the state object provided by Provider in index.js this is implicit 
// in the call to mapStateProps in the bottom line of this file
const mapStateToProps = (state) => {
  console.log('state bayyy', state);
  
  return {
      expression:  state.setExpressionField,
      variables: state.setVariables,
      result: state.modifyResult
  }
}
// App.js inherits the dispatch provided by Provider in index.js due to the redux implementation
// this is implicit in the call to mapDispatchToProps in the bottom line of this file
// in this function we return the functions that contain the actions within them
const mapDispatchToProps = (dispatch) => {
  return {
      onExpressionChange: (event) => dispatch(changeExpressionField(event.target.value)),
      onVariablesChange: (updatedVariablesList) => dispatch(chargeVariables(updatedVariablesList)), 
      onVariableModified: (modifiedVariable) => dispatch(modifyVariable(modifiedVariable)),
      onCalculateResult: (result) => dispatch(calculateResult(result))
  }
}


class App extends Component {
  render(){
    const { 
      onExpressionChange,
      onVariablesChange,
      onVariableModified,
      onCalculateResult,
      expression,
      variables,
      result
    } = this.props;
    return (
      <div className="App">
        <Header />
        <div className="flex flex-row flex-wrap justify-around items-start">
          <div className="pa2 flex flex-column justify-start items-center">
            <p className="dim black dib ma0 f4-ns pa2"></p>
            <ExpressionField expressionChangeFunction={onExpressionChange} variablesChangeFunction={onVariablesChange}/>
            <ExpressionDisplay expressionString={expression}/>
          </div>
          <div className="pa2 flex flex-column justify-start items-center">
            <p className="dim black dib ma0 f4-ns pa2">Variables</p>
            <VariablesList variablesList={variables} variableModifiedFunction={onVariableModified}/>  
          </div>
        </div>
        <div className="flex flex-row justify-center items-center">
        <Result expressionString={expression} variablesList={variables} prevResultDic={result} calculateResultFunction={onCalculateResult} ></Result>
        </div>
        
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
