import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TransactionService } from './transaction.service';
import { TransactionRead } from './interface';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css',
})
export class TransactionComponent {
  private _transactionID?: number;
  public transactionInfo$?: Observable<TransactionRead>;

  constructor(
    private _route: ActivatedRoute,
    private _transactionService: TransactionService
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params) => {
      this._transactionID = params['transactionID'];
      this.transactionInfo$ = this._transactionService.getTransactionInfo(this._transactionID!);
    });
  }
}
