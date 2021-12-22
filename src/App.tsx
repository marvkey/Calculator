import React from 'react';
import "./Grid.css"
function App() {
  return (
    
   <div className ="calculator">
     <div className="output">
        <strong>This text is important!</strong>
      </div>
      <div className="calculator-grid">
        <button calc-operation>C</button>
        <button calc-number>1</button>
        <button calc-number>2</button>
        <button calc-number>3</button>
        <button calc-number>4</button>
        <button calc-number>5</button>
        <button calc-number>6</button>
        <button calc-number>7</button>
        <button calc-number>8</button>
        <button calc-number>9</button>
        <button calc-number>0</button>
        <button calc-operation>/</button>
        <button calc-operation>-</button>
        <button calc-operation>+</button>
        <button calc-operation>*</button>
      </div>
    </div>

  );
}

export default App;
