import React, { useEffect } from 'react';
import './styles.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { collectionListActions } from '../../redux/collectionList/slice';
import CollectionCard from '../CollectionCard';
import { CollectionItem } from '../../redux/api/types';

const CollectionList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { collectionList, isLoading } = useAppSelector((state) => state.collectionList);

  useEffect(() => {
    if (!isLoading && collectionList.length === 0) {
      console.log('collectionList', isLoading, collectionList, !isLoading && collectionList.length === 0);
      dispatch(collectionListActions.loadData());
    }
  }, []);

  const renderCollectionCard = (collection: CollectionItem): JSX.Element => (
    <CollectionCard key={collection.asset_id} collection={collection} />
  )

  return (
    <div className="collectionList">
      {collectionList.map(renderCollectionCard)}
    </div>
  );
};

export default CollectionList;
