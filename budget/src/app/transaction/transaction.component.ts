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
  private _transactionID?: number;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    this._route.params.subscribe((params) => {
      this._transactionID = params['transactionID'];
      console.log(this._transactionID);
    });
  }
}
