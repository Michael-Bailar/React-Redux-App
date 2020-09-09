import axios from 'axios'

export const FETCH_MTG_DATA = 'FETCH_MTG_DATA'
export const UPDATE_MTG_DATA = 'UPDATE_MTG_DATA'
export const SET_ERROR = 'SET_ERROR'


export const getMtgData = () => dispatch => {
    dispatch ({type: FETCH_MTG_DATA,})
    axios
        .get("https://api.magicthegathering.io/v1/cards")
        .then(res => {
            dispatch({ type: UPDATE_MTG_DATA, payload: res.data.cards })
        })
        .catch(err => {
            console.log('axios error: ', err)
            dispatch({ type: SET_ERROR, payload: 'error fetching data from api'})
        })
}