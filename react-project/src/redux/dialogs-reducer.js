
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

}
const dialogsReducer = (state = initialSate, action) => {
    switch (action.type) {

        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,

                messages: [...state.messages, {id: 10, message: body}]
            }
        default:
            return state
    }

}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE,newMessageBody})


export default dialogsReducer;