import axios from 'axios';

export const fetchUser = username => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`https://api.github.com/users/${username}/repos`)
            let repos = data.map((name, html_url, languages_url, stargazers_url, forks_url) => 
            ({repoName: name, link: html_url, languages: languages_url, stargazers: stargazers_url, forks: forks_url}));
            dispatch({type: 'LOAD_REPOS', payload: repos})
            }
        catch (err){
            dispatch({type: 'ERROR', payload: err})
        };
    };
};
