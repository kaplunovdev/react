const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialSate = {
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
}
const dialogsReducer = (state = initialSate, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 10, message: body}]
            }
        default:
            return state
    }

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;