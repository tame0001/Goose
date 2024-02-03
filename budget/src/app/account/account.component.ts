import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AccountRead } from './interfaces';
import { AccountService } from './account.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarService } from '../navbar/navbar.service';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {
  public allAccounts = new MatTableDataSource<AccountRead>();
  public columnsToDisplay: string[] = ['name', 'balance'];
  public isLoading = true;

  constructor(
    private _accountService: AccountService,
    private _sidenavService: NavbarService
  ) {}

  ngOnInit() {
    this._accountService.getAllAccount().subscribe((data) => {
      this.allAccounts = new MatTableDataSource<AccountRead>(data);
      this.isLoading = false;
    });
  }

  toggleSidenav() {
    this._sidenavService.toggle();
  }
}
