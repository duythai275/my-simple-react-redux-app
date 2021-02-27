const INITIAL_STATE = {
    name: "Hello World"
}

const nameReducer = ( state = INITIAL_STATE , action ) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.payload
            }
        default:
            return state;
    }
}

export default nameReducer;