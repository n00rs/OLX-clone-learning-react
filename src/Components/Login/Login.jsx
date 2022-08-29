

import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../../Context/Context';
import Logo from '../../olx-logo.png';
import './Login.css';


function Login() {
    
    //STATE MANAGEMENT 

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const { firebase } = useContext(FirebaseContext)
const navigate = useNavigate()

    //HANDLING LOGIN
    const loginHandle = (e) => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
            // alert('loginsuccess')
            navigate('/')
        }).catch((err)=>{
            alert(err.message)
        })
    }
    return (
        <div>
            <div className="loginParentDiv">
                <img width="200px" height="200px" src={Logo}></img>
                <form onSubmit={loginHandle}>
                    <label htmlFor="fname">Email</label>
                    <br />
                    <input
                        className="input"
                        type="email"
                        id="email"
                        name="email"
                        defaultValue={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <label htmlFor="lname">Password</label>
                    <br />
                    <input
                        className="input"
                        type="password"
                        id="password"
                        name="password"
                        defaultValue={password}
                        onChange={(e) => setPassword(e.target.value)}

                    />
                    <br />
                    <br />
                    <button>Login</button>
                </form>
                <a onClick={()=>navigate('/signup')}>Signup</a>
            </div>
        </div>
    )
}

export default Login