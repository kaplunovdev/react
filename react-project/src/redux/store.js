import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

 let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCount: 12},
                {id: 2, message: 'First post', likeCount: 4},
                {id: 3, message: 'Second post', likeCount: 24},
                {id: 4, message: 'Third post', likeCount: 14},
            ],
            newPostText: ''

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
            ],
            newMessageBody: ''
        },
        sidebar:{}


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

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}



