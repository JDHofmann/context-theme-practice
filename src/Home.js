import React, {useContext} from 'react';
import { UserContext } from './userContext';

export default function Home(){
    const {user, setUser} = useContext(UserContext);

    return (
        <div>
            <h2>Home</h2>
            <p>{user}</p>
            { user ? <button onClick={() => setUser(null)}>logout</button> : <button onClick={() => setUser("Tom")}>login</button> }
        </div>
    )
}