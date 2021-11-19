import { AppActions } from '../app-constants'

const initialState = () => ({
  userList : [],
  user: {},
  isLoadingUser: false,
  isLoadingUserList: false,
  isCreatingUser: false,
  errors: []
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState(), action) => {
  switch (action.type) {
    case AppActions.APP.CREATE_USER.SUBMIT:
      return {
        ...state,
        isCreatingUser: true,
      }
    case AppActions.APP.CREATE_USER.SUCCESS:
      return {
        ...state,
        isCreatingUser: false,
      }
    case AppActions.APP.CREATE_USER.FAILURE:
      return {
        ...state,
        errors: action.errors,
        isCreatingUser: false,
      }


    case AppActions.APP.FETCH_USER.REQUEST:
        return {
        ...state,
        isLoadingUser: true,
    }
    case AppActions.APP.FETCH_USER.SUCCESS:
      return {
        ...state,
        isLoadingUser: false,
        user: {...action.data}
      }
    case AppActions.APP.FETCH_USER.FAILURE:
      return {
        ...state,
        errors: action.errors,
        isLoadingUser: false,
      }

    case AppActions.APP.FETCH_USERLIST.REQUEST:
        return {
        ...state,
        isLoadingUserList: true,
    }
    case AppActions.APP.FETCH_USERLIST.SUCCESS:
      return {
        ...state,
        isLoadingUserList: false,
        userList: [...action.data]
      }
    case AppActions.APP.FETCH_USERLIST.FAILURE:
      return {
        ...state,
        errors: action.errors,
        isLoadingUserList: false,
      }
    default:
      return state
  }
}
