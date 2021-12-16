const ADD_NAME = 'ADD_NAME';

let initialState = {
    namesBase:
        [
            {name: 'Alex'}
        ],
    newName:''
}

let formReducer = (state = initialState, action) => {
    console.log('Current State: ',state)
    switch (action.type) {
        case ADD_NAME:
            state.namesBase.push({
                name:state.newName
            })
            return state;
        default:
            return state
    }

}

export const addNameCreator = (text) => ({
    type: ADD_NAME, text: text
})

export default formReducer;