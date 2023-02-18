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
  // public formReg: FormGroup;
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
    console.log('VALORES OBTENIDOS', this.form.value);
    // this.formReg = new FormGroup({
    //   email: new FormControl('', [], []),
    //   password: new FormControl('', [], []),
    // });
  }

  onSubmit() {
    console.log(this.form.value);
    this._cs
      // .signup({email:'dani@gmail.com', password:'123456'})
      .signup(this.form.value)
      .then((response) => {
        console.log(response);
        this.router.navigate(['/login']);
      })
      .catch((error) => console.log(error));
  }
}
