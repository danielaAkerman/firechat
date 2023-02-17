import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ChatService } from '../../providers/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  formReg: FormGroup;

  constructor(private _cs: ChatService, private router: Router) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  onSubmit() {
    console.log(this.formReg.value);
    this._cs
      .signup(this.formReg.value)
      .then((response) => {
        console.log(response);
        this.router.navigate(['/login']);
      })
      .catch((error) => console.log(error));
  }
}
