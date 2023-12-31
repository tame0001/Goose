import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AccountRead } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private _url = `${environment.apiURL}/account`;

  constructor(private _http: HttpClient) {}

  getAllAccount() {
    return this._http.get<AccountRead[]>(this._url);
  }
}
