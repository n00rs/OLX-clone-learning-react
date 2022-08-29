import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import UserContext, { FirebaseContext } from './Context/Context';
import firebase from './firebase/config';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FirebaseContext.Provider value={{ firebase }}>
        <UserContext>
            <Router>
                <App />
            </Router>
        </UserContext>
    </FirebaseContext.Provider>

);


// userContext