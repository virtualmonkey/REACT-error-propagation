import React, { Component } from 'react';

import Header from '../components/Header';
import ExpressionField from '../components/ExpressionField';
import ExpressionDisplay from '../components/ExpressionDisplay';
import VariablesList from '../components/VariablesList'

import { connect } from 'react-redux';
import { changeExpressionField } from '../actions';


// App.js inherits the state object provided by Provider in index.js this is implicit 
// in the call to mapStateProps in the bottom line of this file
const mapStateToProps = (state) => {
  return {
      expression:  state.setExpressionField.expression,
  }
}
// App.js inherits the dispatch provided by Provider in index.js due to the redux implementation
// this is implicit in the call to mapDispatchToProps in the bottom line of this file
// in this function we return the functions that contain the actions within them
const mapDispatchToProps = (dispatch) => {
  return {
      onExpressionChange: (event) => dispatch(changeExpressionField(event.target.value)),
  }
}


class App extends Component {
  render(){
    const { onExpressionChange, expression } = this.props;   
    return (
      <div className="App">
        <Header />
        <div className="flex flex-row flex-wrap">
          <div className="flex flex-column justify-start items-center">
            <p className="dim black dib ma0 f4-ns pa2">Insert Expression</p>
            <ExpressionField expressionChangeFunction={onExpressionChange}/>
            <ExpressionDisplay expressionString={expression}/>
          </div>
          <div className="flex flex-column justify-start items-center">
            <p className="dim black dib ma0 f4-ns pa2">Variables</p>
            <VariablesList expressionString={expression} />  
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
