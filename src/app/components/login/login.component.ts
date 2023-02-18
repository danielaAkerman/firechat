import { Component } from '@angular/core';
import { ChatService } from '../../providers/chat.service';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public form: FormGroup;

  constructor(
    public _cs: ChatService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get Password() {
    return this.form.get('password');
  }
  get Email() {
    return this.form.get('email');
  }

  onEnviar(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      console.log('Enviar al servidor');
    } else {
      this.form.markAllAsTouched();
    }
  }

  onSubmit() {
    this._cs
      .loginEmail(this.form.value)
      .then((response) => {
        console.log(response);
        this.router.navigate(['/chat']);
      })
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

  newAccount() {
    this.router.navigate(['/signup']);
  }
}
