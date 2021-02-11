import React, {useContext} from 'react';
import { UserContext } from './userContext';

export default function Home(){
    const {value, setValue} = useContext(UserContext);

    return (
        <div>
            <h2>Home</h2>
            <p>{value}</p>
            <button onClick={() => setValue("hey, I'm the home page")}>Change Value</button>
        </div>
    )
}