import React,{useState} from 'react';
import "./Grid.css"

class Calculator{
  Operation:string =" ";
  Num1:string =" ";
  Num2:string =" ";

  chooseOperation(operation:string){
    this.Operation = operation;
  }
  append(value:string){
    if(this.Operation ===" "){
      if(value === "."){
        if(this.Num1.indexOf('.') === -1){
          this.Num1 += value;
        }
        return ;
      }
      this.Num1 += value;
      return;
    }

    if(value === "."){
      if(this.Num2.indexOf('.') === -1){
        this.Num2 += value;
      }
      return ;
    }
    this.Num2 += value;
    return;
  }
  Compute():number{
    if(this.Operation === " " || this.Num1 === " " || this.Num2 === " ") return 0;
    let num1 = parseFloat(this.Num1);
    let num2 = parseFloat(this.Num2);
    let answer:number = 0;
    switch(this.Operation){
      case "*":
        answer = num1 * num2;
        break;
      case "+":
        answer = num1 + num2;
        break;
      case "-" :
        answer = num1 - num2;
        break;
      case "/":
        answer = num1 / num2;
        break;
    }
    console.log("Answer: "+answer)
    this.clear()
    return answer;
  }
  clear(){
    this.Operation=" ";
    this.Num1=" ";
    this.Num2=" ";
  }
}

let calulator = new Calculator();

function App() {
  const [currentValue,stateSetValue] = useState(" ");
  const clear = () => {
    calulator.clear()
    stateSetValue(" ");
  }
  const numberOnClick = (e:string) =>{
    calulator.append(e);
    if(calulator.Operation ===" "){
      console.log("Num1: "+calulator.Num1);
      stateSetValue(calulator.Num1);
      return;
    }
    stateSetValue(calulator.Num2);
    console.log("Num2: "+ calulator.Num2);
  }
 
  const operationOnClick =(e:string) => {
    calulator.chooseOperation(e);
    stateSetValue(calulator.Operation)
  }
  return (
   <div className ="calculator">
     <div className="output">
        {currentValue}
      </div>
      <div className="calculator-grid">
        <button calc-operation onClick ={() => clear()}>C</button>
        <button calc-number onClick={() => numberOnClick("1")}>1</button>
        <button calc-number onClick={() => numberOnClick("2")}>2</button>
        <button calc-number onClick={() => numberOnClick("3")}>3</button>
        <button calc-number onClick={() => numberOnClick("4")}>4</button>
        <button calc-number onClick={() => numberOnClick("5")}>5</button>
        <button calc-number onClick={() => numberOnClick("6")}>6</button>
        <button calc-number onClick={() => numberOnClick("7")}>7</button>
        <button calc-number onClick={() => numberOnClick("8")}>8</button>
        <button calc-number onClick={() => numberOnClick("9")}>9</button>
        <button calc-number onClick={() => numberOnClick("0")}>0</button>
        <button calc-number onClick={() => numberOnClick(".")}>.</button>
        <button calc-operation onClick={() => operationOnClick("/")}>/</button>
        <button calc-operation onClick={() => operationOnClick("-")}>-</button>
        <button calc-operation onClick={() => operationOnClick("+")}>+</button>
        <button calc-operation onClick={() => operationOnClick("*")}>*</button>
        <button calc-operation onClick={() => stateSetValue(calulator.Compute().toString())}>=</button>
      </div>
    </div>

  );
}

export default App;
