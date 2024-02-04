import { TransactionNoAccountID } from '../transaction/interface';

interface AccountBase {
  name: string;
  number?: string;
  balance: number;
}

export interface AccountRead extends AccountBase {
  id: number;
}

export interface AccountWithTransactions extends AccountRead {
  transactions: Array<TransactionNoAccountID>;
}

export interface AccountCreate extends AccountBase{
  isValid: boolean;
}