import { createContext, useState } from "react";

export const FirebaseContext = createContext(null)

export const AuthContext = createContext(null)

function UserContext(props) {
    const [user, setUser] = useState('pori')
    return (
        <AuthContext.Provider value={{ user ,setUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default UserContext 