import * as actions from '../actions/types'

const initialState = {
    isDrawerOpen: false,
    hasSession: localStorage.getItem('miru-session'),
    sections: []
}

const general = (state = initialState, action) => {
    switch (action.type) {
    case actions.CHANGE_DRAWER_OPEN_STATUS: {
        return {
            ...state,
            isDrawerOpen: !state.isDrawerOpen
        }
    }

    case actions.CHANGE_HAS_SESSION_STATUS: {
        return {
            ...state,
            ...action.payload
        }
    }

    case actions.GET_ALL_CONTENT_SECTIONS: {
        return {
            ...state,
            ...action.payload
        }
    }

    default:
        return state
    }
}

export default general
