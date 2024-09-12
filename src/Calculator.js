// import React from 'react'
// import './Calculator.css'
// import { useState } from 'react'


// function Calculator() {
//     const [expression, setExpression] = useState('');
//     const [result, setResult] = useState('');
//     const [display,setName] = useState('');
  
//     const handleChange = (e) => {
//       setExpression(e.target.value);
//     };

//     const handleClick  = (value) => {
//         setName ((previous)=>previous+value);
//     }
//     const handleClear = () => {
//         // setName('')
//     }
  
//     const calculate = () => {
//       try {
//         // Create a new function to evaluate the expression
//         const fn = new Function('return ' + expression);
//         const evalResult = fn();
//         setResult(evalResult);
//       } catch (error) {
//         setResult('Error');
//       }
//     };







  




//   return (
//     <div class="maindiv">
//         <div class="navbar">
//             <h2>Calculator</h2>
//             <label class="switch">
//                 <input type="checkbox"/>
//                 <span class="slider"></span>
//             </label>
//         </div>
//         <p>{display}</p>
//         <input
//         type="text" value={expression}  onChange={handleChange}  placeholder="Enter expression"
//       />
//         <div class="output">
//             <p>{result}</p>
//         </div>
//         <div class="body">
//             <div class="div1">
//                 <button onClick={handleClear}>AC</button>
//                 <button onClick={()=>handleClick('X')}>X</button>
//                 <button onClick={()=>handleClick('%')}>%</button>
//                 <button onClick={()=>handleClick('/')}>/</button>
//             </div>
//             <div class="div1">
//                 <button onClick={()=>handleClick('7')}>7</button>
//                 <button onClick={()=>handleClick('8')}>8</button>
//                 <button onClick={()=>handleClick('9')}>9</button>
//                 <button onClick={()=>handleClick('*')}>X</button>
//             </div>
//             <div class="div1">
//                 <button onClick={()=>handleClick('4')}>4</button>
//                 <button onClick={()=>handleClick('5')}>5</button>
//                 <button onClick={()=>handleClick('6')}>6</button>
//                 <button onClick={()=>handleClick('-')}>-</button>
//             </div>
//             <div class="div1">
//                 <button onClick={()=>handleClick('3')}>3</button>
//                 <button onClick={()=>handleClick('2')}>2</button>
//                 <button onClick={()=>handleClick('1')}>1</button>
//                 <button onClick={()=>handleClick('+')}>+</button>
//             </div>
//             <div class="div1">
//                 <button onClick={()=>handleClick('.')}>.</button>
//                 <button onClick={()=>handleClick('0')}>0</button>
//                 <button onClick={()=>handleClick('.')}>.</button>
//                 <button onClick={calculate}>=</button>
//             </div>
//         </div>
//     </div>
//   )
// }




// export default Calculator






import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  const [mode, setMode] = useState('light');

  const handleChange = (e) => {
    setExpression(e.target.value);
  };

  const handleClick = (value) => {
    setExpression((previous) => previous + value);
  };

  const removeLastCharacter = () => {
    setExpression((previous) => previous.slice(0, -1));
  };

  const handleClear = () => {
    setExpression('');
    setResult('');
  };

  const calculate = () => {
    try {
      const fn = new Function('return ' + expression.replace(/X/g, '*'));
      const evalResult = fn();
      setResult(evalResult);
    } catch (error) {
      setResult('Error');
    }
  };
  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`maindiv ${mode}`}>
      <div className="navbar">
        <h2>Calculator</h2>
        <label className="switch">
          <input type="checkbox" onChange={toggleMode}/>
          <span className="slider"></span>
        </label>
      </div>
      <input
        type="text" value={expression} onChange={handleChange} placeholder="Enter expression"
      />
      <div className="output">
        <p>{result}</p>
      </div>
      <div className="body">
        <div className="div1">
          <button onClick={handleClear}>AC</button>
          <button onClick={removeLastCharacter}>X</button>
          <button onClick={() => handleClick('%')}>%</button>
          <button onClick={() => handleClick('/')}>/</button>
        </div>
        <div className="div1">
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('*')}>*</button>
        </div>
        <div className="div1">
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('-')}>-</button>
        </div>
        <div className="div1">
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('+')}>+</button>
        </div>
        <div className="div1">
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
