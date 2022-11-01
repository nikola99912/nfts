import { all, fork, AllEffect, ForkEffect } from 'redux-saga/effects';
import collectionList from './collectionList/saga';

export default function* rootSaga(): Generator<
  AllEffect<ForkEffect<void>>,
  void,
  unknown
> {
  yield all([fork(collectionList)]);
}
