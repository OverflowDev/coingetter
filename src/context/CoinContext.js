import { createContext, useReducer, useEffect } from "react";

import coinReducer from './CoinReducer'

const CoinContext = createContext()

export const CoinProvider = ({children}) => {

    const initialState = {
        coins: [],
        global: {},
        trending: {},
        exchanges: {},
        loading: true,
    }

    // const [state, dispatch] = useReducer(coinReducer, initialState)
    const [state, dispatch] = useReducer(coinReducer, initialState)

    // Fetch All coins or limit it 
    useEffect(() => {     
        const fetchCoins = async () => {
            // setLoading()
            const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false')
            const data = await response.json()

            dispatch({
                type: 'GET_COINS',
                payload: data
            })
        }
        // const interval = setInterval(() => {
        //     fetchCoins()
        //   }, 10000);
        
        //   return () => clearInterval(interval);
            fetchCoins()
    }, [])


    // Fetch Crypto Global Data 
    useEffect(() => {
        const fetchGlobalData = async () => {
            // setLoading()
            const response = await fetch('https://api.coingecko.com/api/v3/global')
            const data = await response.json()
            
            dispatch({
                type: 'GET_GLOBAL',
                payload: data
            })
            
        }
        // const interval = setInterval(() => {
        //     fetchGlobalData()
        // }, 10000);
        
        // return () => clearInterval(interval);
            fetchGlobalData()
    }, [])

    // Fetch Trending 
    useEffect(() => {
        const fetchTredndingData = async () => {
            // setLoading()
            const response = await fetch('https://api.coingecko.com/api/v3/search/trending')
            const data = await response.json()
            
            dispatch({
                type: 'GET_TRENDING',
                payload: data
            })
            
        }
        // const interval = setInterval(() => {
        //     fetchTredndingData()
        // }, 10000);
        
        // return () => clearInterval(interval);
        fetchTredndingData()
    }, [])

    // Fetch Exchange
    // useEffect(() => {
    //     const fetchExchanges = async () => {
    //         // setLoading()
    //         const response = await fetch('https://api.coingecko.com/api/v3/exchanges')
    //         const data = await response.json()
            
    //         dispatch({
    //             type: 'GET_EXCHANGES',
    //             payload: data
    //         })
            
    //     }
    //     // const interval = seInterval(() => {
    //     //     fetchExchanges()
    //     // }, 10000);
        
    //     // return () => clearInterval(interval);t
    //     fetchExchanges()
    // }, [])

    // Set loading
    // const setLoading = () => dispatch({
    //     type: 'SET_LOADING'
    // })

    return <CoinContext.Provider value={{ 
        ...state
        // trending: state.trending,
        // coins: state.coins,
        // global: state.global,
        // loading: state.loading,
     }}>
        {children}
    </CoinContext.Provider>
}

export default CoinContext