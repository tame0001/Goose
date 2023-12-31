import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private _url = `${environment.apiURL}/transaction`;
  
  constructor(private _http: HttpClient) { }
  
}
