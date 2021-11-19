import { combineEpics } from 'redux-observable';
import { fetchUserListEpic, fetchUserEpic, createUserEpic } from  './epics/app-epic'

export default combineEpics(
    fetchUserListEpic,
    fetchUserEpic, 
    createUserEpic 
    )