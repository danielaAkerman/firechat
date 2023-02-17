import { Component } from '@angular/core';
import { ChatService } from '../../providers/chat.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formLogin: FormGroup;
  constructor(public _cs: ChatService, private router: Router) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  onSubmit() {
    this._cs
      .loginEmail(this.formLogin.value)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  logInButton(proveedor: string) {
    if (proveedor == 'google') {
      this._cs
        .logInWithGoogle()
        .then((response) => {
          console.log(response);
          this.router.navigate(['/chat']);
        })
        .catch((error) => console.log(error));
    } else if (proveedor == 'github') {
      this._cs
        .logInWithGitHub()
        .then((response) => {
          console.log(response);
          this.router.navigate(['/chat']);
        })
        .catch((error) => console.log(error));
    }
  }

  newAccount(){
    this.router.navigate(['/signup']);
  }
}
