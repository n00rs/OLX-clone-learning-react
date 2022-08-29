import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import { FirebaseContext } from './Context/FirebaseContext';
import firebase from './firebase/config';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FirebaseContext.Provider value={{firebase}}>
        <Router>
            <App />
        </Router>
    </FirebaseContext.Provider>

);


