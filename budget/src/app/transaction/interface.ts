import { v4 as uuidv4 } from 'uuid';

interface TransactionBase {
  amount: number;
  note?: string;
  account_id: number;
}

export interface TransactionRead extends TransactionBase {
  id: typeof uuidv4;
  timestamp: Date;
}

export interface TransactionNoAccountID
  extends Omit<TransactionRead, 'account_id'> {}
