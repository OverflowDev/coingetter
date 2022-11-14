const coinReducer = (state, action) => {

    if(action.type === 'GET_COINS') {
        return {
            ...state,
            coins: action.payload,
            loading: false
        }
    }

    if(action.type === 'GET_GLOBAL') {
        return {
            ...state,
            global: action.payload,
            loading: false
        }
    }

    if(action.type === 'GET_TRENDING') {
        return {
            ...state,
            trending: action.payload,
            loading: false
        }
    }

    if(action.type === 'GET_EXCHANGES') {
        return {
            ...state,
            exchanges: action.payload,
            loading: false
        }
    }

    if(action.type === 'SET_LOADING') {
        return {
            ...state, 
            loading: true
        }
    }

    return state
}

export default coinReducer