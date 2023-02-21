import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import {
  canActivate,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: '',
    component: SignupComponent,
    ...canActivate(() => redirectLoggedInTo(['/chat'])),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
