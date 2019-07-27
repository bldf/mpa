import { call, put } from 'redux-saga/effects'

export function* fetchData() {

   try {
       console.log('999999lvds;lkjfdslk;jafds;lkfdasfdasf;lkxcfj;lsdfzj asdfjwoimdneoiuyigejia mingzij izhong guo ad ') ;
    //   const data = yield call(Api.fetchUser, action.payload.url);
    //   yield put({type: "FETCH_SUCCEEDED", data});
   } catch (error) {
      yield put({type: "FETCH_FAILED", error});
   }
}