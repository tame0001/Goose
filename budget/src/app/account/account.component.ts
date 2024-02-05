import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

import { AccountCreate, AccountRead } from './interfaces';
import { AccountService } from './account.service';
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
    MatTooltipModule,
    MatDialogModule,
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
    private _snackBar: MatSnackBar,
    public sidenavService: NavbarService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getAccountData();
  }

  getAccountData() {
    this._accountService.getAllAccount().subscribe((data) => {
      this.allAccounts = new MatTableDataSource<AccountRead>(data);
      this.isLoading = false;
    });
  }

  createAccount(accountInfo: AccountCreate) {
    this._accountService.createAccount(accountInfo).subscribe({
      next: (response) => {
        if (response.status == 201) {
          this._snackBar.open(
            `Account ${accountInfo.name} has been created`,
            'OK',
            { duration: 5000 }
          );
          this.getAccountData(); // refresh data
        }
      },
      error: (error: HttpErrorResponse) => {
        let errorMessage: string = error.error?.detail;
        this._snackBar.open(errorMessage, 'Acknowledge');
      },
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentAddAccount);
    dialogRef.afterClosed().subscribe((result) => {
      let accountInfo: AccountCreate = result;
      if (accountInfo.isValid) {
        this.createAccount(accountInfo);
      }
    });
  }
}

@Component({
  selector: 'dialog-content-add-account',
  templateUrl: './dialog-content-add-account.html',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class DialogContentAddAccount {
  public accountInfo: AccountCreate = {
    name: '',
    balance: 0,
    isValid: false,
  };

  constructor(public dialogRef: MatDialogRef<DialogContentAddAccount>) {}

  onNoClick() {
    this.dialogRef.close(this.accountInfo);
  }

  onSubmit() {
    this.accountInfo.isValid = true;
    this.dialogRef.close(this.accountInfo);
  }
}
