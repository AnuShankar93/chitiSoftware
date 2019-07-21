import { Routes} from '@angular/router';
import { AuthenticationGuard } from '../core/authentication/authentication.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

export const FeatureRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: {
          title: 'Dashboard'
        }
      }
    ]
  }
];
