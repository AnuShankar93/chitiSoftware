import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlankLayoutComponent} from './shared/layout/blank-layout/blank-layout.component';
import {FullLayoutComponent} from './shared/layout/full-layout/full-layout.component';

const routes: Routes = [
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./auth/auth.module').then(m => m.AutModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
