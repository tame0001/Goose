import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [],
  template: ` <p>transaction works!</p> `,
  styles: ``,
})
export class TransactionComponent {
  private _accountID?: number;

  constructor(private _route: ActivatedRoute) {}

  onNgInit() {
    this._route.params.subscribe((params) => {
      this._accountID = Number(params['accountID']);
      console.log(this._accountID);
    });
  }
}
