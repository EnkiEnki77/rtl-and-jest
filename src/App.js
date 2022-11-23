import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('red')
  const [isChecked, setIsChecked] = useState(false)


  const handleColor = () => {
    setColor(prev => prev === 'red' ? 'blue' : 'red')
  }

  const handleCheckbox = () => {
    setIsChecked(prev => !prev)
  }

  return (
    <div className="App">
      <button style={{backgroundColor: color}} onClick={handleColor} disabled={isChecked}>Changes to {`${color === 'red' ? 'blue' : 'red'}`}</button>
      <input type="checkbox" checked={isChecked} onClick={handleCheckbox}/>
    </div>
  );
}

export default App;
