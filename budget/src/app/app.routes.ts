import { Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { TransactionComponent } from './transaction/transaction.component';

export const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
  },
  { path: 'account/:accountID', component: TransactionComponent },
  {
    path: '**',
    redirectTo: '/',
  },
];
