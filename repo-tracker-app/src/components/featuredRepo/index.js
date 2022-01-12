import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeaturedRepo = ({ repo }) => {
    // console.log(repo.repoName)
    const [ percentages , setPercentages ] = useState([])
    const [ stargazers, setStargazers ] = useState()
    const [ forks, setForks ] = useState([])

    useEffect( ()=> {
        getData()
    },[ repo ]);

    async function getData(){
        const options = {
            method: 'GET',
            headers: { "Content-Type": "application/json"}
        }
        const languages = await fetch(repo.languages, options);
        const languagesJSON = await languages.json()
        if(Object.keys(languagesJSON).length === 0 ){
            setPercentages(["No languages to display"])
        }
        else{
            const percentages = languagePercent(languagesJSON)
            setPercentages(percentages)
        }

        setStargazers(repo.stargazers)

        const forks = await fetch(repo.forks, options);
        const forksJSON = await forks.json()
        if(Object.keys(forksJSON).length === 0 ){
            setForks(["No forks to display"])
        }
        else{
            const forkList = []
            for(let x in forksJSON){
                forkList.push("www.github.com/"+forksJSON[x].url.substring(29))
            }
            setForks(forkList)
        }
    }
        
    function languagePercent(languages){
        const totalLines = Object.values(languages).reduce((a, b) => a + b);
        const percentages = []
        for(let x in languages){
            const percentage = (languages[x]/totalLines * 100).toFixed(1)
            percentages.push(x + ": " + percentage.toString() + "%")
        }
        return percentages
    }

    return(
        <div className="flex-container">
            <div id="featured-box">
            <h3>{repo.repoName}</h3>
            <div id="featured-data">
                <ul> 
                    <li key="languages"> Languages: </li>
                    {percentages.map( x => <li key={x}>{x}</li>)}
                </ul>
                <ul> 
                    <li key="stargazers"> Stargazers: </li>
                    <li key="stargazer-count">{stargazers}</li>
                </ul>
                <ul> 
                    <li key="forks"> Forks: </li>
                    {forks.map( x => <li key={x}> { x[0]=="w" ?  <a href={"https://"+ x} target="_blank"> {x.substring(15)} </a> : x } </li>)}
                </ul>
                <ul> 
                    <li key="last-updated"> Last Updated: </li>
                    <li key="last-updated-date">{repo.updated.substring(0,repo.updated.length-10)}</li>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default FeaturedRepo; 