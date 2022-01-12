import React from "react";

const NameInput = () => {

    return(
        <form>
            <input required type="text" name="username" placeholder="Username"></input>
            <input type="submit"></input>
        </form>
    );
};

export default NameInput;