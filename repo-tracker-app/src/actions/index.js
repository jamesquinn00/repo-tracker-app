import axios from 'axios';

export const fetchUser = (username)=>{
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`https://api.github.com/users/${username}/repos`)
            let allRepos = []
            for(let x = 0; x < data.length; x++){
                // iterating through all repos, create object for each individual repo
                let repo = {
                    userName: username,
                    repoName: data[x].name,
                    link: data[x].html_url,
                    languages: data[x].languages_url,
                    stargazers: data[x].stargazers_count,
                    forks: data[x].forks_url,
                    updated: data[x].updated_at
                }
                allRepos.push(repo)
            }
            dispatch({type: 'LOAD_REPOS', payload: allRepos})
            }
        catch (err){
            console.warn(err.message);
            dispatch({ type: 'ERROR', payload: err.message })
        };
    };
};
