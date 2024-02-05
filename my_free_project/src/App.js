import React from 'react';
import './index.css';
import './css/dashboard.css';
import Dashboard from './components/Dashboard';
import Profil from './components/Profil';

function App() {
  return (
    <div className='body'>
      <h1 className='titre'>Mon super site</h1>
      <Dashboard />
      {/* <Profil /> */}
    </div>
  );
}

export default App;
