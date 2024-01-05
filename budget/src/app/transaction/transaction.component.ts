import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from './transaction.service';
import { TransactionRead } from './interface';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css',
})
export class TransactionComponent {
  private _transactionID?: number;
  public transactionInfo?: TransactionRead;

  constructor(
    private _route: ActivatedRoute,
    private _transactionService: TransactionService
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params) => {
      this._transactionID = params['transactionID'];
      this._transactionService
        .getTransactionInfo(this._transactionID!)
        .subscribe((data) => {
          this.transactionInfo = data;
          console.log(this.transactionInfo);
        });
    });
  }
}
