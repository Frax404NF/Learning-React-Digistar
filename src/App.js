import { useState } from 'react';
import './App.css';
import Button from './components/Button';

const User = (props) => {
  const { name } = props;
  return (
    <div>
      <h1>My Name is {name}</h1>
    </div>
  );
};

function App() {
  const [name] = useState('Frandi Andika');

  return (
    <div className="App">
      <div>
        <h1 className="title">React Component</h1>
        <User name={name} />
        <Button initialCount={0} />
      </div>
    </div>
  );
}

export default App;
