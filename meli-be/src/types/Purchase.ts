type Cost = {
  total: number;
  currency: string;
};

type Seller = {
  id: number;
  nickname: string;
};

export type Purchase = {
  purchase_id: number;
  title: string;
  cost: Cost;
  amount: number;
  date: string;
  image: string;
  seller: Seller;
  transaction_id: number;
  shipment_id: number;
};
