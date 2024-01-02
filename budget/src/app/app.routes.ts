import { Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AccountInfoComponent } from './account/account-info.component';
import { TransactionComponent } from './transaction/transaction.component';

export const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
  },
  { path: 'account/:accountID', component: AccountInfoComponent },
  { path: 'transaction/:transactionID', component: TransactionComponent },
  {
    path: '**',
    redirectTo: '/',
  },
];
