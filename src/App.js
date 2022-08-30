import React, { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext, FirebaseContext } from './Context/Context';
import Signup from "./Pages/Signup";
import Home from './Pages/Home';
import Login from "./Pages/Login";
import AddProduct from './Pages/AddProduct';
import ViewPost from './Pages/ViewPost'
import Post from './Context/postContext';

function App() {


  const { setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)
  
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => setUser(user))
  }, [])

  return (
    <div >
      <Post>

      <Routes>   
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/add-product' element={<AddProduct />} />
        <Route path='/view-post' element={<ViewPost />} />
      </Routes>

      </Post>
    </div>
  );
}

export default App;
