import { Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AccountInfoComponent } from './account/account-info.component';
import { TransactionComponent } from './transaction/transaction.component';

export const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    title: 'Budget App',
  },
  {
    path: 'account/:accountID',
    component: AccountInfoComponent,
    title: 'Account',
  },
  {
    path: 'transaction/:transactionID',
    component: TransactionComponent,
    title: 'Transaction',
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
