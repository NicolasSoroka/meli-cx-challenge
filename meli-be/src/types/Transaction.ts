type Transaction = {
  transaction_id: number;
  status: string;
};

export type TransactionMap = {
  [key: number]: Transaction;
};
