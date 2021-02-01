import * as actionType from '../actions/actionTypes';

export const initialState = {
  cases: [],
  errors: ''
};

export const catalogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_CASES_SUCCESS:
      return {
        ...state,
        cases: [...action.payload]
      };
    case actionType.GET_CASES_ERROR:
      return {
        ...state,
        errors: action.payload
      }
    default:
      return {
        ...state,
      };
  }
};

export default catalogsReducer;