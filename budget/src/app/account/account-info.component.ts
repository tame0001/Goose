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
  template: `
    <table mat-table [dataSource]="transactions">
      <ng-container matColumnDef="timestamp">
        <th mat-header-cell *matHeaderCellDef>Timestamp</th>
        <td mat-cell *matCellDef="let row">
          {{ row.timestamp | date : 'short' }}
        </td>
      </ng-container>
      <ng-container matColumnDef="amount">
        <th mat-header-cell *matHeaderCellDef>Amount</th>
        <td mat-cell *matCellDef="let row">
          {{ row.amount | number : '.2-2' }}
        </td>
      </ng-container>
      <ng-container matColumnDef="note">
        <th mat-header-cell *matHeaderCellDef>Note</th>
        <td mat-cell *matCellDef="let row">
          {{ row.note }}
        </td>
      </ng-container>
      <tr mat-header-row *matHeaderRowDef="columnsToDisplay"></tr>
      <tr
        mat-row
        *matRowDef="let row; columns: columnsToDisplay"
        [routerLink]="'transaction/' + row.id"
      ></tr>
    </table>
  `,
  styles: `
    .mat-column-timestamp {
    text-align: center;
    }
    .mat-column-amount {
    text-align: center;
    }
    .mat-column-note {
    text-align: center;
    }
 `,
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
