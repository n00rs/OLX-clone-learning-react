import React, { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from "./Pages/Signup";
import Home from './Pages/Home';
import Login from "./Pages/Login";
import { AuthContext, FirebaseContext } from './Context/Context';
import AddProduct from './Pages/AddProduct';

function App() {
  const { setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })


  }, [])

  return (
    <div >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/add-product' element={<AddProduct />} />

      </Routes>

    </div>
  );
}

export default App;
