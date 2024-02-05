import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {
  AccountCreate,
  AccountRead,
  AccountWithTransactions,
} from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private _url = `${environment.apiURL}/account`;

  constructor(private _http: HttpClient) {}

  getAllAccount() {
    return this._http.get<AccountRead[]>(this._url);
  }

  getAccountDetail(accountID: number) {
    return this._http.get<AccountWithTransactions>(`${this._url}/${accountID}`);
  }

  createAccount(accountInfo: AccountCreate) {
    return this._http.post(this._url, accountInfo, { observe: 'response' });
  }
}
