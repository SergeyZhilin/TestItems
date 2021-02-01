import * as actionType from '../actions/actionTypes';

export const initialState = {
  user: {},
  userInfo:{},
  signIn: false,
  errors: ''
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_PROFILE_SUCCESS:
      return {
        ...state,
        user: {...action.payload}
      };
    case actionType.GET_USER_SUCCESS:
      return {
        ...state,
        userInfo:{...action.payload}
      }
    case actionType.SIGN_IN_SUCCESS:
      return {
        ...state,
        signIn: true,
        errors: ''
      };
    case actionType.SIGN_IN_ERROR:
    case actionType.GET_USER_ERROR:
    case actionType.ON_LOAD_ERROR:
    case actionType.GET_PROFILE_ERROR:
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

export default profileReducer;