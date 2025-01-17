import types from './github.types';

import { repos } from '../../db';

const initialState = {
    user: '',
    formError: '',
    fetchError: null,
    repos: [],
    // repos,
    fetchLoading: false,
    initalFetchDone: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_USER:
            return {
                ...state,
                user: action.payload.name,
                formError: '',
            };
        case types.SET_FORM_ERROR:
            return {
                ...state,
                formError: action.payload.error,
            };

        case types.SET_KEY_TO_EMPTY_STRING:
            return {
                ...state,
                [action.payload.key]: '',
            };
        case types.FETCH_REPOS_BEGIN:
            return {
                ...state,
                fetchLoading: true,
                fetchError: null,
            };
        case types.FETCH_REPOS_SUCCESS:
            return {
                ...state,
                fetchLoading: false,
                repos: action.payload.repos,
                initalFetchDone: true,
                user: '',
            };
        case types.FETCH_REPOS_FAILURE:
            return {
                ...state,
                fetchLoading: false,
                fetchError: action.payload.error,
                initalFetchDone: true,
                repos: [],
            };
        default:
            return state;
    }
};

export default reducer;
