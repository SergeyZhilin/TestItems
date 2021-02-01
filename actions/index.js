import * as actionType from './actionTypes';

export const onLoad = () => ({
  type: actionType.ON_LOAD
});

export const signIn = (data) => ({
  type: actionType.SIGN_IN_REQUEST,
  payload: data
});

export const confirmSignUp = (data) => ({
  type: actionType.CONFIRM_SIGN_UP_REQUEST,
  payload: data
});

export const signUp = (data) => ({
  type: actionType.SIGN_UP_REQUEST,
  payload: data
});

export const signOut = () => ({
  type: actionType.SIGN_OUT
});

export const getCases = () => ({
  type: actionType.GET_CASES_REQUEST
});

export const getOneCase = (id) => ({
  type: actionType.GET_ONE_CASE_REQUEST,
  payload: id
});

export const getProfile = () => ({
  type: actionType.GET_PROFILE_REQUEST
})

export const getUserInfo = () => ({
  type: actionType.GET_USER_REQUEST
})

export const openNewTab = (data) => ({
  type: actionType.CHANGE_TAB_REQUEST,
  payload: data
})

export const switchTab = (data) => ({
  type: actionType.SWITCH_TAB,
  payload: data
})

export const unBlockRightTopBlock = () => ({
  type: actionType.UNBLOCK_RIGHT_TAB_TOP,
})

export const switchRightTopBlock = (data) => ({
  type: actionType.SWITCH_RIGHT_TAB_TOP,
  payload: data
})

export const unBlockRightBottomBlock = () => ({
  type: actionType.UNBLOCK_RIGHT_TAB_BOTTOM,
})

export const showModal = () => ({
  type: actionType.SHOW_MODAL,
});

export const closeModal = () => ({
  type: actionType.CLOSE_MODAL,
});

export const setPatientChat = (data) => ({
  type: actionType.SET_CHAT_REQUEST,
  payload: data
});

export const updateChat = (data) => ({
  type: actionType.UPDATE_CHAT_REQUEST,
  payload: data
});

export const addAnalyser = (data) => ({
  type: actionType.SET_ANALYSER_REQUEST,
  payload: data
});

export const removeCurrentAnalyser = (data) => ({
  type: actionType.REMOVE_CURRENT_ANALYSER,
  payload: data
});

export const removeHighlightAnalyser = () => ({
  type: actionType.REMOVE_HIGHLIGHT_ANALYSER,
});