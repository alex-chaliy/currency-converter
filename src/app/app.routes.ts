import { Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard/dashboard.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/page-not-found' }
];