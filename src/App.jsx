import { useState } from 'react';
import './App.css';

function App() {
  const [greeting, setGreeting] = useState('Hello, World');
  setGreeting('Hello, World!');
  return (
    <>
      <h1>{greeting}</h1>
    </>
  );
}

export default App;
