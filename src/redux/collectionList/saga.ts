import { takeEvery, put, call, Effect, ForkEffect, select } from 'redux-saga/effects';
import { collectionListActions } from './slice';
import { api } from '../api';
import { CollectionItem } from '../api/types';
import getCollectionCountType from '../../utils/getCollectionCountType';

export function* watchFetchData(): Generator<Effect, void> {
  try {
    const { isLoading } = yield select(state => state.collectionList)
    if (!isLoading) {
      yield put(collectionListActions.setIsLoadingData());
      const { nfts }: { nfts: CollectionItem[] } = yield call(api, 'search');
      yield put(collectionListActions.putData({ nfts }));
      getCollectionCountType();
    }
  } catch (error) {
    console.log('error', error);
  }
}

export function* checkFetchStatus({ payload: saleId }): Generator<Effect, void> {
  console.log('saleId', saleId);
  try {
    if (saleId) {
      const { status } = yield call(api, `sale/status/${saleId}`);
      console.log('status', status);
    }
  } catch (error) {
    console.log('error', error);
  }
}

export function* watchCounterSagas(): Generator<ForkEffect, void> {
  yield takeEvery(collectionListActions.loadData, watchFetchData);
  yield takeEvery(collectionListActions.checkStatus, checkFetchStatus);
}

const counterSagas = watchCounterSagas;

export default counterSagas;
