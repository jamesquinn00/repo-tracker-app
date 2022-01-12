import React from 'react';
import { NameInput, DisplayRepo } from '../../components';

const MainPage = () => {



    return(
        <>
        <h1>GitHub Repo Tracker</h1>
        <h4>Enter GitHub Username below to display public repositories:</h4>
        <NameInput />
        <DisplayRepo />
        </>
    )
};

export default MainPage;