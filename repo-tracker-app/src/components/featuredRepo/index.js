import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeaturedRepo = ({ repo }) => {

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
            console.log(forksJSON)
            for(let x in forksJSON){
                forkList.push("www.github.com/"+forksJSON[x].url.substring(29))
                console.log(forksJSON[x].url)
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

    let forkLinks = forks[0]

    // const percentageDisplay = getData[0]
    // console.log(percentageDisplay)
    return(
        <div className="flex-container">
            <div id="featured-box">
            <h3>{repo.repoName}</h3>
            <div id="featured-data">
                <ul> 
                    <li> Languages: </li>
                    {percentages.map( x => <li>{x}</li>)}
                </ul>
                <ul> 
                    <li> Stargazers: </li>
                    <li>{stargazers}</li>
                </ul>
                <ul> 
                    <li> Forks: </li>
                    {forks.map( x => <li> { x[0]=="w" ?  <a href={"https://"+ x} target="_blank"> {x.substring(15)} </a> : x } </li>)}
                </ul>
                <ul> 
                    <li> Last Updated: </li>
                    <li>{repo.updated.substring(0,repo.updated.length-10)}</li>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default FeaturedRepo; 