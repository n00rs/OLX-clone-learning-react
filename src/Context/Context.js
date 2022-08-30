import { createContext, useState } from "react";


export const FirebaseContext = createContext(null)          // context for firebaseconfig



export const AuthContext = createContext(null)           //CONTEXT FOR CHECKING AUTHENTICATION OF USER


function UserContext(props) {
    const [user, setUser] = useState('pori')
    return (
        <AuthContext.Provider value={{ user ,setUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default UserContext 