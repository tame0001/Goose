import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';

import { AccountRead } from './interfaces';
import { AccountService } from './account.service';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [MatTableModule, CommonModule, RouterModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {
  public allAccounts = new MatTableDataSource<AccountRead>();
  public columnsToDisplay: string[] = ['name', 'balance'];

  constructor(private _accountService: AccountService) {}

  ngOnInit() {
    this._accountService.getAllAccount().subscribe((data) => {
      this.allAccounts = new MatTableDataSource<AccountRead>(data);
    });
  }
}
