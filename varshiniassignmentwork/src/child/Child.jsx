import React, { useState } from 'react';

export default function Child({ num1, num2 }) {
  const [result, setResult] = useState(null);

  const handleOperation = (op) => {
    let res;
    if (op === '+') res = num1 + num2;
    else if (op === '-') res = num1 - num2;
    else if (op === '*') res = num1 * num2;
    setResult(res);
  };

  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={() => handleOperation('+')}>+</button>
      <button onClick={() => handleOperation('-')}>-</button>
      <button onClick={() => handleOperation('*')}>*</button>
      <div>Result: {result !== null ? result : 'Click a button'}</div>
    </div>
  );
}
