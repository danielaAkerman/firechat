import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ChatService } from 'src/app/providers/chat.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(public _cs: ChatService, private router: Router) {
    // Recoge darkmode desde localstorage, aguarda milésimas para implementarlo
    // Sino arroja error el nav
    if (localStorage.getItem('darkmode')) {
      let counter = 1;
      const intervalId = setInterval(() => {
        counter--;
        if (counter < 0) {
          clearInterval(intervalId);
          this.cambiarTema();
        }
      }, 10);
    }
  }

  onClick() {
    this._cs
      .logOut()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  public body = document.querySelector('body')!;

  temaOscuro() {
    this.body.setAttribute('data-bs-theme', 'dark');
    this.body.classList.remove('light-mode');
    localStorage.setItem('darkmode', 'true');
    document
      .getElementById('switch-mode')!
      .setAttribute('src', 'assets/sun-fill.svg');
  }

  temaClaro() {
    this.body.setAttribute('data-bs-theme', 'light');
    this.body.classList.add('light-mode');
    localStorage.removeItem('darkmode');
    document
      .getElementById('switch-mode')!
      .setAttribute('src', 'assets/moon-fill.svg');
  }

  cambiarTema() {
    this.body.getAttribute('data-bs-theme') === 'light'
      ? this.temaOscuro()
      : this.temaClaro();
  }
}
