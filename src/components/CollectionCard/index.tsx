import React from 'react';
import './styles.css';
import { CollectionItem } from '../../redux/api/types';
import { collectionListActions } from '../../redux/collectionList/slice';
import { useAppDispatch } from '../../redux/hooks';

function MyRound10(val: number) {
  return val.toFixed(2);
}

const CollectionCard = ({ collection: { thumbnail, name, collection: { kind, avatar }, offer, sale } }: { collection: CollectionItem }): JSX.Element => {
  const dispatch = useAppDispatch();

  const renderSalePrice = (): JSX.Element | null => {
    if (sale?.unitary_price_float) {
      return (
        <div className="collectionCard__bottom__price">
          <div className="collectionCard__bottom__title">Price</div>
          <div className="collectionCard__bottom__price">
            {MyRound10(sale.unitary_price_float)}
          </div>
        </div>
      )
    }

    return null;
  };

  const renderBestOffer = (): JSX.Element | null => {
    if (offer?.unitary_price_float) {
      return (
        <div className="collectionCard__bottom__price">
          <div className="bestOffer">
            <div className="collectionCard__bottom__title">Best Offer</div>
            <div className="collectionCard__bottom__price">
              {MyRound10(offer.unitary_price_float)}
            </div>
          </div>
        </div>
      )
    }

    return null;
  };

  const handleBuyNow = () => {
    dispatch(collectionListActions.checkStatus(sale?.sale_id))
  };

  return (
    <div className="collectionCard">
      <div>
        <img
          className="collectionCard__img"
          src={thumbnail}
          alt=''
        />
        <div className="collectionCard__details">
          <div className="collectionCard__avatar">
            <img
              src={avatar}
              alt='user avatar'
            />
          </div>
          <p className="collectionCard__name">
            {`${name} ${kind.replace('erc', '#')}`}
          </p>
        </div>
      </div>
      <div className="collectionCard__bottom">
        {renderSalePrice()}
        {renderBestOffer()}
        <button
          className="collectionCard__bottom__button"
          onClick={handleBuyNow}
        >
          Buy now
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;
