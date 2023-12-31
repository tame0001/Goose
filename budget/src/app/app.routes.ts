import { Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AccountInfoComponent } from './account/account-info.component';

export const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
  },
  { path: 'account/:accountID', component: AccountInfoComponent },
  {
    path: '**',
    redirectTo: '/',
  },
];
