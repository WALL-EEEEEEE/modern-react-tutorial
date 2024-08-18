import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useModal } from './components/useModal';

function App() {
  const { onOpen: openLoginModal } = useModal('LoginModal');
  const { onOpen: openTestModal } = useModal('TestModal');

  return (
    <div className="App">
      <h1>Hello User</h1>
      <h2>Here is our magnificent enterprise level App!</h2>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <button onClick={openLoginModal}>LOGIN</button>
        <button onClick={openTestModal}>TEST</button>
      </div>
    </div>
  );
}

export default App;
