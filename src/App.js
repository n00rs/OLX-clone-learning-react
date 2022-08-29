import React from 'react';
import {  Route,Routes } from 'react-router-dom';
import Signup from "./Pages/Signup";
import Home from './Pages/Home';
import Login from "./Pages/Login";

function App() {
  return (
    <div >
      <Routes>
<Route path='/' element={  <Home />} />
<Route path='/signup' element={<Signup />} />
<Route path='/login'  element={<Login />} />
      </Routes>
    
    </div>
  );
}

export default App;
