import { Routes } from '@angular/router';
import { DividerverticalComponent } from './dividervertical/dividervertical.component';
import { NewPageComponent } from './new-page/new-page.component';

export const routes: Routes = [
  { path: '', component: DividerverticalComponent }, // Default page route
  { path: 'new-page', component: NewPageComponent }, // New page route
];
