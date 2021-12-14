const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCount: 12},
                {id: 2, message: 'First post', likeCount: 4},
                {id: 3, message: 'Second post', likeCount: 24},
                {id: 4, message: 'Third post', likeCount: 14},
            ],

        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Andrey'},
                {id: 2, name: 'Kate'},
                {id: 3, name: 'Misha'},
                {id: 4, name: 'Richard'},
            ],
            messages: [
                {id: 1, message: 'messages'},
                {id: 2, message: 'Yo'},
                {id: 3, message: 'My name is Alexandr'},
                {id: 4, message: 'Hi boy'},
            ]
        },
        // sideBar:{
        //
        // }


    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State changed')
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 1,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            console.log(this._state.profilePage.newPostText)
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})


export default store;