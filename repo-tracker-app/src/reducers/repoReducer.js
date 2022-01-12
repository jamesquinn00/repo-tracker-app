const initState = {repos: [{repoName: "Name ", link: "Link ", languages: "Languages ", stargazers: "Stargazers ", forks: "Forks "}]}

const repoReducer = (state=initState, action) => {
    switch(action.type) {
        case "LOAD_REPOS":
            console.log("Here")
            return {...state, repos: action.payload};
        case "ERROR":
            return { ...state, error: action.payload};
        default:
            return state;
    }
};

export default repoReducer;