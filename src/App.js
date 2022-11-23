import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('red')

  const handleColor = () => {
    setColor(prev => prev === 'red' ? 'blue' : 'red')
  }

  return (
    <div className="App">
      <button style={{backgroundColor: color}} onClick={handleColor}>Changes to {`${color === 'red' ? 'blue' : 'red'}`}</button>
    </div>
  );
}

export default App;
