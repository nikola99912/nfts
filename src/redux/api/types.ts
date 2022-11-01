export type CollectionItem = {
  asset_id: string;
  name: string;
  thumbnail: string;
  rank: null;
  balance: string;
  collection: {
    address: string;
    kind: string;
    name: string;
    certified: boolean;
    avatar: string;
  },
  offer?: {
    offer_id: string;
    kind: string;
    side: string;
    unitary_price_float: number;
  },
  sale?: {
    sale_id: string;
    seller: string;
    unitary_price_float: number;
  }
}
