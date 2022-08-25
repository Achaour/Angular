import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconDeleteComponent } from './icons/components/icon-delete/icon-delete.component';
import { PageForgotPasswordComponent } from './login/pages/page-forgot-password/page-forgot-password.component';
import { PageResetPasswordComponent } from './login/pages/page-reset-password/page-reset-password.component';
import { PageSignInComponent } from './login/pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './login/pages/page-sign-up/page-sign-up.component';
import { PageListOrdersComponent } from './orders/pages/page-list-orders/page-list-orders.component';

const routes: Routes = [
  {path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  {path: 'sign-in', component: PageSignInComponent},
  {path: 'sign-up', component: PageSignUpComponent},
  {path: 'reset', component: PageResetPasswordComponent},
  {path: 'forgot', component: PageForgotPasswordComponent},
// lazy loading
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
  },
  {
    path: 'clients',
    loadChildren: () =>
      import('./clients/clients.module').then((m) => m.ClientsModule),
  },

  //ROUTES SIGN UP
  //RESET
  //FORGOT

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
