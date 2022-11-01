import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { CollectionItem } from '../api/types';

export interface ICounterSlice {
  collectionList: CollectionItem[];
  isLoading: boolean,
  isAlreadyLoad: boolean,
}

const initialState: ICounterSlice = {
  collectionList: [],
  isLoading: false,
  isAlreadyLoad: false,
};

export const collectionListSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    checkStatus: () => {},
    loadData: () => {},
    setIsLoadingData: (state: ICounterSlice) => {
      state.isLoading = true;
    },
    putData: (state: ICounterSlice, action: PayloadAction<{ nfts: CollectionItem[] }>) => {
      state.collectionList = action.payload.nfts;
      state.isLoading = false;
      state.isAlreadyLoad = true;
    },
  },
});

export const { actions: collectionListActions, reducer: collectionListReducer } =
  collectionListSlice;
