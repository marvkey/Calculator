import React from 'react';
import "./Grid.css"

class Calculator{
  Operation:string =" ";
  Num1:string =" ";
  Num2:string =" ";
 

  chooseOperation(operation:string){
    this.Operation = operation;
  }
  append(value:string){
    if(this.Operation ==" "){
      this.Num1 += value;
      return;
    }
    this.Num2 += value;
  }
  Compute():number{
    if(this.Operation === " " || this.Num1 === " " || this.Num2 === " ") return 0;
    let num1 =  parseFloat(this.Num1);
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

function App() {
  let calulator = new Calculator();
  let answer:number =0;
  const numberOnClick = (e:string) =>{
    calulator.append(e);
    if(calulator.Operation ===" "){
      console.log("Num1: "+calulator.Num1);
      return;
    }
    console.log("Num2: "+ calulator.Num2);
  }
 
  return (
    
   <div className ="calculator">
     <div className="output">
        {calulator.Num1}
      </div>
      <div className="calculator-grid">
        <button calc-operation onClick ={() => calulator.clear()}>C</button>
        <button calc-number onClick={(e) => numberOnClick("1")}>1</button>
        <button calc-number onClick={(e) => numberOnClick("2")}>2</button>
        <button calc-number onClick={(e) => numberOnClick("3")}>3</button>
        <button calc-number onClick={(e) => numberOnClick("4")}>4</button>
        <button calc-number onClick={(e) => numberOnClick("5")}>5</button>
        <button calc-number onClick={(e) => numberOnClick("6")}>6</button>
        <button calc-number onClick={(e) => numberOnClick("7")}>7</button>
        <button calc-number onClick={(e) => numberOnClick("8")}>8</button>
        <button calc-number onClick={(e) => numberOnClick("9")}>9</button>
        <button calc-number onClick={(e) => numberOnClick("0")}>0</button>
        <button calc-operation onClick={(e) => calulator.chooseOperation("/")}>/</button>
        <button calc-operation onClick={(e) => calulator.chooseOperation("-")}>-</button>
        <button calc-operation onClick={(e) => calulator.chooseOperation("+")}>+</button>
        <button calc-operation onClick={(e) => calulator.chooseOperation("*")}>*</button>
        <button calc-operation onClick={() => answer =calulator.Compute()}>=</button>
      </div>
    </div>

  );
}

export default App;
