import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';

import { AccountRead } from './interfaces';
import { AccountService } from './account.service';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  template: `
    <table mat-table [dataSource]="allAccounts">
      <ng-container matColumnDef="name">
        <th mat-header-cell *matHeaderCellDef>Account</th>
        <td mat-cell *matCellDef="let row">{{ row.name }}</td>
      </ng-container>
      <ng-container matColumnDef="balance">
        <th mat-header-cell *matHeaderCellDef>Balance</th>
        <td mat-cell *matCellDef="let row">
          {{ row.balance | number : '.2-2' }}
        </td>
      </ng-container>
      <tr mat-header-row *matHeaderRowDef="columnsToDisplay"></tr>
      <tr mat-row *matRowDef="let row; columns: columnsToDisplay"></tr>
    </table>
  `,
  styles: `
  .mat-column-balance {
    text-align: center;
  }
  .mat-column-name {
    text-align: center;
  }
  `,
})
export class AccountComponent {
  public allAccounts = new MatTableDataSource<AccountRead>();
  public columnsToDisplay: string[] = ['name', 'balance'];

  constructor(private _DataService: AccountService) {}

  ngOnInit() {
    this._DataService.getAllAccount().subscribe((data) => {
      this.allAccounts = new MatTableDataSource<AccountRead>(data);
    });
  }
}
