import { createContext, useReducer, useEffect } from "react";

import coinReducer from './CoinReducer'

const CoinContext = createContext()

export const CoinProvider = ({children}) => {

    const initialState = {
        coins: [],
    }

    // const [state, dispatch] = useReducer(coinReducer, initialState)
    const [state, dispatch] = useReducer(coinReducer, initialState)

    const fetchCoins = async () => {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false')
        const data = await response.json()

        dispatch({
            type: 'GET_COINS',
            payload: data
        })
    }

    useEffect(() => {
      fetchCoins()
    }, [])

    return <CoinContext.Provider value={{ 
        ...state
     }}>
        {children}
    </CoinContext.Provider>
}

export default CoinContext