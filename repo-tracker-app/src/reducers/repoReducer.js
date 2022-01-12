const initState = {repos: [{repoName: "Name ", link: "Link ", languages: "Languages ", stargazers: "Stargazers ", forks: "Forks ", updated: "Last Updated"}], error: ""}

const repoReducer = (state=initState, action) => {
    switch(action.type) {
        case "LOAD_REPOS":
            return {...state, repos: action.payload, error: ""};
        case "ERROR":
            return { ...state, error: action.payload};
        default:
            return state;
    }
};

export default repoReducer;