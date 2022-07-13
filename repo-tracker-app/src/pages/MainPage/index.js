import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NameInput, DisplayRepo, FeaturedRepo } from '../../components';
import { fetchUser } from '../../actions'

const MainPage = () => {
    const allRepos = useSelector(state=>state.repos);
    const error = useSelector(state=>state.error);

    const [ repo, setRepo ] = useState('');
    const dispatch = useDispatch();
    const search = searchTerm => dispatch(fetchUser(searchTerm));

    return(
        <>
        <div className="flex-container">
            <a href="index.html">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"></img>
            </a>
            <a href="index.html">
            <h1> GitHub Repo Tracker</h1>
            </a>
        </div>
        <h4>Enter GitHub Username below to display public repositories:</h4>
        <NameInput fetchUser={search} setRepo={setRepo}/>
        { repo && !error ? <FeaturedRepo repo={repo} error={error}/> : <></>}
        <DisplayRepo allRepos={allRepos} error={error} handleRepo={setRepo}/>
        </>
    )
};

export default MainPage;