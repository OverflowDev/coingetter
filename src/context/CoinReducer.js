const coinReducer = (state, action) => {

    if(action.type === 'GET_COINS') {
        return {
            ...state,
            coins: action.payload
        }
    }

    return state
}

export default coinReducer