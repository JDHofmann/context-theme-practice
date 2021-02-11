import React, {useContext} from 'react';
import { UserContext } from './userContext';

export default function About(){
    const {value, setValue} = useContext(UserContext);

    return (
        <div>
            <h2>About</h2>
            <p>{value}</p>
            <button onClick={() => setValue("hey, I'm the about page")}>Change Value</button>
        </div>
    )
}