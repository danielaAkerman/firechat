import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ChatService } from '../../providers/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  public form: FormGroup;

  constructor(
    private _cs: ChatService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      email: ['', []],
      password: ['', []],
    });
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
