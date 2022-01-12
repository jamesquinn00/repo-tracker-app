const initState = {repos: [{repoName: "", isPrivate: "", link: "", languages: "", stargazers: "", forks: ""}]}

const repoReducer = (state=initState, action) => {
    switch(action.type) {
        case "LOAD_REPOS":
            return {...state,
                    repos: [...state.repos, action.payload]};
        case "ERROR":
            state = action.payload
            return {state};
        default:
            return state;
    }
};

export default repoReducer;