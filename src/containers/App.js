import React, { Component } from 'react';
//import './App.css';
import Header from '../components/Header'
import ExpressionField from '../components/ExpressionField'
import ExpressionDisplay from '../components/ExpressionDisplay'

const loadScript = function(src) {
  var tag = document.createElement('script');
  tag.async = true;
  tag.src = src;
  document.getElementsByTagName('body')[0].appendChild(tag);
}

class App extends Component {
  componentDidMount(){
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/latest.js?config=AM_CHTML');
  }
  render(){
    return (
      <div className="App">
        <Header />
        <div className="flex flex-row flex-wrap">
          <div className="flex flex-column justify-center items-center">
            <p className="dim black dib ma0 f4-ns pa2">Insert Expression</p>
            <ExpressionField />
            <ExpressionDisplay />
          </div>
          <div className="flex- flex-column justify-center">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
