const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 12},
        {id: 2, message: 'First post', likeCount: 4},
        {id: 3, message: 'Second post', likeCount: 24},
        {id: 4, message: 'Third post', likeCount: 14},
    ],
    newPostText: ''
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 1,
                message: state.newPostText,
                likeCount: 0
            }
           return  {
                ...state,
                posts: [...state.posts,newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT:
           return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state;
    }


    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;