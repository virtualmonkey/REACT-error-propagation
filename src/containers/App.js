import React, { Component } from 'react';

import Header from '../components/Header';
import ExpressionField from '../components/ExpressionField';
import ExpressionDisplay from '../components/ExpressionDisplay';
import VariablesList from '../components/VariablesList'

import { connect } from 'react-redux';
import { changeExpressionField, chargeVariables, variableModified} from '../actions';


// App.js inherits the state object provided by Provider in index.js this is implicit 
// in the call to mapStateProps in the bottom line of this file
const mapStateToProps = (state) => {
  return {
      expression:  state.setExpressionField,
      variables: state.setVariables
  }
}
// App.js inherits the dispatch provided by Provider in index.js due to the redux implementation
// this is implicit in the call to mapDispatchToProps in the bottom line of this file
// in this function we return the functions that contain the actions within them
const mapDispatchToProps = (dispatch) => {
  return {
      onExpressionChange: (event) => dispatch(changeExpressionField(event.target.value)),
      onVariablesChange: (updatedVariablesList) => dispatch(chargeVariables(updatedVariablesList)), 
      onVariableModified: (modifiedVariable) => dispatch(variableModified(modifiedVariable))
  }
}


class App extends Component {
  render(){
    const { 
      onExpressionChange,
      onVariablesChange,
      onVariableModified,
      expression,
      variables
    } = this.props;
    return (
      <div className="App">
        <Header />
        <div className="flex flex-row flex-wrap justify-around items-start">
          <div className="pa2 flex flex-column justify-start items-center">
            <p className="dim black dib ma0 f4-ns pa2">Insert Expression</p>
            <ExpressionField expressionChangeFunction={onExpressionChange} variablesChangeFunction={onVariablesChange}/>
            <ExpressionDisplay expressionString={expression}/>
          </div>
          <div className="pa2 flex flex-column justify-start items-center">
            <p className="dim black dib ma0 f4-ns pa2">Variables</p>
            <VariablesList variablesList={variables} variableModifiedFunction={onVariableModified}/>  
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
