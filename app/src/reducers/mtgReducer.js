import { FETCH_MTG_DATA, UPDATE_MTG_DATA, SET_ERROR } from '../actions/actions'

const initialState = {
    cards: [],
    isFetchingData: false,
    error: ''
}

export const mtgReducer = ( state = initialState, action) => {
    switch(action.type) {
        case FETCH_MTG_DATA:
            return {
                ...state,
                isFetchingData: true,
                cards: [...state.cards]
            }
        case UPDATE_MTG_DATA:
            return {
                ...state,
                cards: action.payload,
                isFetchingData: false
            }
        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            }
        default:
            return state
    }
}