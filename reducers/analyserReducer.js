import * as actionType from '../actions/actionTypes';

export const initialState = {
    analyser: [],
    errors: '',
    needRemoveHighlightItem: {
        text: '',
        id: ''
    }
};

export const analyserReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SET_ANALYSER_REQUEST:
            return {
                ...state,
                analyser: [...state.analyser.filter(item => item.text !== action.payload.text), { ...action.payload }]
            };
        case actionType.REMOVE_CURRENT_ANALYSER:
            return {
                ...state,
                needRemoveHighlightItem: {
                    text: action.payload.text,
                    id: action.payload.id,
                },
                analyser: [...state.analyser.filter(item => item.text !== action.payload.text)]
            }
        case actionType.REMOVE_HIGHLIGHT_ANALYSER:
            return  {
                ...state,
                needRemoveHighlightItem: {
                    text: '',
                    id: '',
                },
            }
        default:
            return {
                ...state,
            };
    }
};

export default analyserReducer;