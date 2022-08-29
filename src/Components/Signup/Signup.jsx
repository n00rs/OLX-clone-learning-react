import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collections } from '../../constants/Collections'
import { FirebaseContext } from '../../Context/Context'
import Logo from '../../olx-logo.png'
import './Signup.css'




function Signup() {

  //STATE MANAGEMENT

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  const { firebase } = useContext(FirebaseContext)                 //IMPORTING USECONTEXT

  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    
    try { 
      firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
        result.user.updateProfile({ displayName: username }).then(() => {
          firebase.firestore().collection(collections.USERCOLLECTECTION).add({
            id: result.user.uid,
            username: username,
            phone: phone,
          }).then(() =>  navigate('/login') )
        })
      })
    } catch (error) {
      alert(error.message)
    }
  }








  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={submitHandler}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
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
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="phone"
            name="phone"
            defaultValue={phone}
            onChange={(e) => setPhone(e.target.value)}

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
          <button>Signup</button>
        </form>
        <a onClick={()=> navigate('/login')}>Login</a>
      </div>
    </div>
  )
}

export default Signup