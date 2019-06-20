import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions';

const initialState = {
    error: '',
    friends: [],
    loggingIn: false,
    fetchingData: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                error: '',
                loggingIn: true
            }
    }
}

export default reducer;