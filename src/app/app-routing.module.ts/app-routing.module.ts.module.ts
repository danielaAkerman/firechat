import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { ChatComponent } from '../components/chat/chat.component';
import { SignupComponent } from '../components/signup/signup.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/chat', pathMatch: 'full' },
  {
    path: 'chat',
    component: ChatComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModuleTsModule {}
