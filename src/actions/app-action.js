import { AppActions } from '../app-constants'

// Create User starts here
export const createUser = (data) => ({
  type: AppActions.APP.CREATE_USER.SUBMIT,
  data,
})
export const createUserSuccess = (data) => ({
    type: AppActions.APP.CREATE_USER.SUCCESS,
    data,
  })
export const createUserFailure = () => ({
type: AppActions.APP.CREATE_USER.FAILURE,
})


// Fetch User starts here
export const fetchUser = (userId) => ({
    type: AppActions.APP.FETCH_USER.REQUEST,
    userId,
  })
export const fetchUserSuccess = (data) => ({
    type: AppActions.APP.FETCH_USER.SUCCESS,
    data,
})
export const fetchUserFailure = () => ({
type: AppActions.APP.FETCH_USER.FAILURE,
})

  // Fetch UserList starts here
export const fetchUserList = () => ({
    type: AppActions.APP.FETCH_USERLIST.REQUEST,
  })
export const fetchUserListSuccess = (data) => ({
    type: AppActions.APP.FETCH_USERLIST.SUCCESS,
    data,
})
export const fetchUserListFailure = () => ({
type: AppActions.APP.FETCH_USERLIST.FAILURE,
})