import React, { useEffect, useState } from "react";

// import { fetchUser } from '../../actions'

const NameInput = ({ fetchUser, setRepo }) => {

    const [ userName, setUsername ] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        console.log(e.target.username.value)
        setUsername(e.target.username.value)
        fetchUser(e.target.username.value)
    }

    useEffect( ()=> {
        setRepo("")
    }, [ userName ])

    return(
        <form onSubmit={ e => handleSubmit(e) }>
            <input required type="text" name="username" placeholder="Username"></input>
            <input type="submit"></input>
        </form>
    );
};

export default NameInput;