import { Component } from '@angular/core';

import { ChatService } from 'src/app/providers/chat.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(public _cs: ChatService) {
    // Recoge darkmode desde localstorage, aguarda milésimas para implementarlo
    // Sino arroja error el nav
    if (localStorage.getItem('theme')) {
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

  temaOscuro() {
    document.querySelector('body')!.setAttribute('data-bs-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    console.log(localStorage);
    document
      .getElementById('switch-mode')!
      .setAttribute('src', 'assets/sun-fill.svg');
  }

  temaClaro() {
    document.querySelector('body')!.setAttribute('data-bs-theme', 'light');
    localStorage.removeItem('theme');
    console.log(localStorage);
    document
      .getElementById('switch-mode')!
      .setAttribute('src', 'assets/moon-fill.svg');
  }

  cambiarTema() {
    document.querySelector('body')!.getAttribute('data-bs-theme') === 'light'
      ? this.temaOscuro()
      : this.temaClaro();
  }
}
