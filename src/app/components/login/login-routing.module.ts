import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';
import { canActivate, redirectLoggedInTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    ...canActivate(() => redirectLoggedInTo(['/chat'])),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
