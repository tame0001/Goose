import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AccountService } from './account.service';

@Component({
  selector: 'app-account-info',
  standalone: true,
  imports: [],
  template: ` <p>account-info works! test</p> `,
  styles: ``,
})
export class AccountInfoComponent {
  private _accountID?: number;

  constructor(
    private _route: ActivatedRoute,
    private _accountService: AccountService
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params) => {
      this._accountID = Number(params['accountID']);
      this._accountService
        .getAccountDetail(this._accountID)
        .subscribe((data) => {
          console.log(data);
        });
    });
  }
}
