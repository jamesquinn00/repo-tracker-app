import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeaturedRepo = ({ repo }) => {
    // console.log(repo.repoName)
    console.log(repo.languages)

    const [ percentages , setPercentages ] = useState({})
    const [ stargazers, setStargazers ] = useState({})
    const [ forks, setForks ] = useState({})

    useEffect( ()=> {
        console.log("repo changed")
        getData()
    },[ repo ]);

    async function getData(){
        const options = {
            method: 'GET',
            headers: { "Content-Type": "application/json"}
        }
        const languages = await fetch(repo.languages, options);
        const languagesJSON = await languages.json()
        console.log(Object.keys(languagesJSON).length)
        if(Object.keys(languagesJSON).length === 0 ){
            setPercentages('No languages to display')
        }
        else{
            const percentages = languagePercent(languagesJSON)
            setPercentages(percentages)
        }
        

        const stargazers = await fetch(repo.stargazers, options);
        const stargazersJSON = await stargazers.json()
        setStargazers(stargazersJSON)

        const forks = await fetch(repo.forks, options);
        const forksJSON = await forks.json()
        setForks(forksJSON)
    }

    function languagePercent(languages){
        const totalLines = Object.values(languages).reduce((a, b) => a + b);
        const percentages = {}
        for(let x in languages){
            const percentage = languages[x]/totalLines * 100
            percentages[x] = percentage
        }
        return percentages
    }
    
    // const percentageDisplay = getData[0]
    // console.log(percentageDisplay)
    return(
       <div id="featured">
        <h4>Featured Repo!</h4>

        </div>
    );
};

export default FeaturedRepo;