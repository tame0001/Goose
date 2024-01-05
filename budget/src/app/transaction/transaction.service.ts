import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { TransactionRead } from './interface';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private _url = `${environment.apiURL}/transaction`;
  
  constructor(private _http: HttpClient) { }
  
  getTransactionInfo(transactionID: number) {
    return this._http.get<TransactionRead>(`${this._url}/${transactionID}`)
  }
}
