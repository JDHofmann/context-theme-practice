import React, {useContext} from 'react';
import { UserContext } from './userContext';

export default function About(){
    const {user, setUser} = useContext(UserContext);

    return (
        <div>
            <h2>About</h2>
            <p>{user}</p>
            {user ? <button onClick={() => setUser(null)}>logout</button> : null}
        </div>
    )
}