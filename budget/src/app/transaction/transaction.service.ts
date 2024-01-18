import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { environment } from '../../environments/environment';
import { TransactionRead, TransactionUpdate } from './interface';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private _url = `${environment.apiURL}/transaction`;

  constructor(private _http: HttpClient) {}

  getTransactionInfo(transactionID: typeof uuidv4) {
    return this._http.get<TransactionRead>(`${this._url}/${transactionID}`);
  }

  UpdateTransactionInfo(
    transactionID: typeof uuidv4,
    updateInfo: TransactionUpdate
  ) {
    let updateParam = {}
    if (updateInfo.amount != null) {
      updateParam = {'amount': updateInfo.amount}
    }
    return this._http.put(`${this._url}/${transactionID}`, updateParam);
  }
}
