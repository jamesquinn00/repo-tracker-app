import React from "react";
import { useSelector, useDispatch } from 'react-redux';

const DisplayRepo = ({handleRepo }) => {

    const repos = useSelector(state => state.repos)
    console.log(repos)
    return (
        <div id='repos'>
            {
                repos.map(repo => (
                    <div key={repo.name} onClick={() => handleRepo(repo.name)}>
                        <p>{repo.name}</p>
                        <p>{repo.link}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default DisplayRepo;