import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';

import { AccountService } from './account.service';
import { AccountWithTransactions } from './interfaces';
import { TransactionNoAccountID } from '../transaction/interface';

@Component({
  selector: 'app-account-info',
  standalone: true,
  imports: [CommonModule, MatTableModule, RouterModule],
  templateUrl: './account-info.component.html',
  styleUrl: './account-info.component.css',
})
export class AccountInfoComponent {
  private _accountID?: number;
  public accountData?: AccountWithTransactions;
  public transactions = new MatTableDataSource<TransactionNoAccountID>();
  public columnsToDisplay: string[] = ['timestamp', 'amount', 'note'];

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
          this.accountData = data;
          this.transactions = new MatTableDataSource<TransactionNoAccountID>(
            this.accountData.transactions
          );
        });
    });
  }
}
