import { useState } from 'react';
import WelcomePage from './pages/welcome.jsx';
import './App.css';
import DashBoard from './pages/DashBoard.jsx';



function App() {
  return (
    <div className='App bg-[#1E1E1E] h-screen'>
      {/* <WelcomePage  /> */}
      <DashBoard/>
    </div>
  );
}

export default App;
