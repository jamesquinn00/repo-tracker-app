import React from "react";

import { fetchUser } from '../../actions'

const NameInput = () => {

    const handleSubmit = e => {
        e.preventDefault()
        console.log(e.target.username.value)
        fetchUser(e.target.username.value)
    }

    return(
        <form onSubmit={ e => handleSubmit(e) }>
            <input required type="text" name="username" placeholder="Username"></input>
            <input type="submit"></input>
        </form>
    );
};

export default NameInput;