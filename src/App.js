import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Caculator extends Component {
constructor() {
  super();
  this.state = {
    displayValue: '0',
    waitingforOperand: false,
    operator:'',
    value: null,
  };
  this.inputdigit = this.inputdigit.bind(this);
}

inputdigit = (digit) => {
  const {displayValue, waitingforOperand} = this.state
  if (waitingforOperand){
    this.setState({
      displayValue: String(digit),
      waitingforOperand: false,
    })
  }else{
    this.setState({
      displayValue:(displayValue === '0')? String(digit):displayValue + digit
    });
  }
}

inputadot = (dot) => {
  const {displayValue, waitingforOperand} = this.state;
  if(waitingforOperand){
    this.setState({
      displayValue: '.',
      waitingforOperand: false,
    })
  }else{
    if (displayValue.indexOf('.') === -1){
      this.setState({
        displayValue: displayValue + '.',
      });
   }

  }
}

 const DidOperation = {
  '+' : (prevＶalue, nextvalue) => prevValue + nextvalue,
  '-' : (prevValue, nextvalue) => prevValue - nextvalue,
  '*' : (prevValue, nextvalue) => prevValue * nextvalue,
  '/' : (prevValue, nextvalue) => prevValue / nextvalue,
  '=' : (prevValue, nextvalue) => nextvalue
}
clearAll = () => {
  const {displayValue} = this.state;
  this.setState ({
    displayValue: '0',
  })
}

signtoggle = () => {
  const {displayValue} = this.state;
  const newValue = parseFloat(displayValue) * -1
  this.setState({
     displayValue: String(newValue)
   })
}
inputOprator = (operatorSign) =>{
  const {operator, waitingforOperand,value} = this.state;
  const inputValue = parseFloat(displayValue);
  if (value == null){
    this.setState({
      value: inputValue,
    })
  }else if(operator){
    const currentvalue = value
    const newValue = DidOperation[operator](currentvalue, inputValue)
    this.setstate({
      value: newValue,
      displayValue: String(newValue)
    })
  }
  this.setState ({
     operator: operatorSign,
     waitingforOperand: true,

  })
}

  render() {

    return (

       <div className = "caculatorPannel">
          <div className="displayplace">{this.state.displayValue}</div>
          <button className="button" onClick = {() => this.inputdigit(0)}>0</button>
          <button className="button" onClick = {() => this.inputdigit(1)}>1</button>
          <button className="button" onClick = {() => this.inputdigit(2)}>2</button>
          <button className="button" onClick = {() => this.inputdigit(3)}>3</button>
          <button className="button" onClick = {() => this.inputdigit(4)}>4</button>
          <button className="button" onClick = {() => this.inputdigit(5)}>5</button>
          <button className="button" onClick = {() => this.inputdigit(6)}>6</button>
          <button className="button" onClick = {() => this.inputdigit(7)}>7</button>
          <button className="button" onClick = {() => this.inputdigit(8)}>8</button>
          <button className="button" onClick = {() => this.inputdigit(9)}>9</button>
          <button className="button" onClick = {() => this.inputadot()}>.</button>
          <button className="button" onClick = {() => this.signtoggle()}>+/-</button>
          <div className="operatorpannel">
            <button className="button" onClick = {() => this.clearAll()}>AC</button>
          <button className="button" onClick = {() => this.inputOprator('+')}>+</button>
          <button className="button" onClick = {() => this.inputOprator('-')}>-</button>
          <button className="button" onClick = {() => this.inputOprator('*')}>x</button>
          <button className="button" onClick = {() => this.inputOprator('/')}>/</button>
          <button className="button" onClick = {() => this.inputOprator('/')}>=</button>

          </div>
       </div>

    );
  }
}

export default Caculator;
