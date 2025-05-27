import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState<number | null>(null);

  

  const addition = (a: number, b: number): number => {
    return a + b;
  };

  const handleAddition = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (!isNaN(numA) && !isNaN(numB)) {
      const sum = addition(numA, numB);
      setResult(sum);
    } else {
      setResult(null);
      alert('Veuillez entrer deux nombres valides');
    }
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div>
          <label>
            Nombre A :{' '}
            <input
              type="text"
              value={a}
              onChange={(e) => setA(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Nombre B :{' '}
            <input
              type="text"
              value={b}
              onChange={(e) => setB(e.target.value)}
            />
          </label>
        </div>
        <button onClick={handleAddition}>Additionner</button>
        {result !== null && <p>Résultat : {result}</p>}
       
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
