import { Routes} from '@angular/router';
import {BlankLayoutComponent} from './shared/layout/blank-layout/blank-layout.component';
import {FullLayoutComponent} from './shared/layout/full-layout/full-layout.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./feature/feature.module').then(m => m.FeatureModule)
      }
    ]
  },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];
