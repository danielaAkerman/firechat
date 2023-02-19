import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ChatService } from '../../providers/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  public form: FormGroup;
  dark: boolean = false; // Para saber si estoy en darkmode

  constructor(
    private _cs: ChatService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('(?=.*[a-z])(?=.*[!#$%&/?]).{8,}'),
        ],
      ],
    });

    if (
      document.querySelector('body')!.getAttribute('data-bs-theme') == 'dark'
    ) {
      this.dark = true; // Para cambiar el color de las letras del input
    }
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
    console.log(this.form.value);
    this._cs
      .signup(this.form.value)
      .then((response) => {
        console.log(response);
        this.router.navigate(['/chat']);
      })
      .catch((error) => console.log(error));
  }
}
