import {HomeComponent} from './home/home.component';
import {Routes, RouterModule} from '@angular/router';
import {PricingComponent} from './pricing/pricing.component';
import {CreateCompanyComponent} from './create-company/create-company.component';
import {PricingPacketsComponent} from './pricing-packets/pricing-packets.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {DashboardAppsComponent} from './dashboard-apps/dashboard-apps.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'HOME'
    }
  },
  {
    path: 'pricing',
    component: PricingComponent,
    data: {
      title: 'PRICING'
    }
  },
  {
    path: 'create-company',
    component: CreateCompanyComponent,
    data: {
      title: 'CREATE COMPANY'
    }
  },
  {
    path: 'plans/:id',
    component: PricingPacketsComponent,
    data: {
      title: 'PACKAGE'
    }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'DASHBOARD'
    }
  },
  {
    path: 'dashboard/:id',
    component: DashboardAppsComponent,
    data: {
      title: 'DASHBOARD-APPS'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'LOGIN'
    }
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    data:{
      title: 'CONTACTS'
    }
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
