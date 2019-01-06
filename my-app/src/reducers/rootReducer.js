const initState = {
    posts:[
        { id: 1, title: "Header1", body: "Whats up" },
        { id: 2, title: "Header2", body: "How is it going" },
        { id: 3, title: "Header3", body: "Its time" }
    ]
}


const rootReducer = (state = initState,action) => {
    if (action.type === "DELETE_POST") {
        let newPost = state.posts.filter(post => action.id !== post.id)
        
        return {
            ...state,
            posts: newPost
        };
    }
    return state;
}


export default rootReducer;