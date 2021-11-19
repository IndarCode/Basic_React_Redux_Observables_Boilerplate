import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import ApiConfig from '../api.json'
import { AppActions } from '../app-constants';
import  {
    fetchUserSuccess,
    fetchUserFailure,
    fetchUserListSuccess,
    fetchUserListFailure,
    createUserSuccess,
    createUserFailure
} from '../actions/app-action'

export const fetchUserListEpic = action$ => action$.pipe(
    ofType(AppActions.APP.FETCH_USERLIST.REQUEST),
    mergeMap(action =>
      ajax.getJSON(`${ApiConfig.fetchUsers}?page=0&size=10`).pipe(
        map(response => fetchUserListSuccess(response.data))
      )
    )
  );


  export const createUserEpic = action$ => action$.pipe(
    ofType(AppActions.APP.CREATE_USER.SUBMIT),
    mergeMap(action => {
      console.log(action, "***************************************8")
      return ajax.getJSON(ApiConfig.createUser).pipe(
        map(response => createUserSuccess(response.data))
      )
    }
    )
  );

  export const fetchUserEpic = action$ => action$.pipe(
    ofType(AppActions.APP.FETCH_USER.REQUEST),
    mergeMap(action => {
      console.log(action, "***************************************8")
      return ajax.getJSON(`${ApiConfig.createUser}/${action.userId}`).pipe(
        map(response => fetchUserSuccess(response))
      )
    }
    )
  );
