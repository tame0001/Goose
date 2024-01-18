import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TransactionService } from './transaction.service';
import { TransactionRead } from './interface';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, MatCardModule],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css',
})
export class TransactionComponent {
  private _transactionID?: typeof uuidv4;
  public transactionInfo$?: Observable<TransactionRead>;

  constructor(
    private _route: ActivatedRoute,
    private _transactionService: TransactionService
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params) => {
      this._transactionID = params['transactionID'];
      this.transactionInfo$ = this._transactionService.getTransactionInfo(
        this._transactionID!
      );
    });
  }
}
