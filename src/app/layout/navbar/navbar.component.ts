import { Component } from '@angular/core';

import { ChatService } from 'src/app/providers/chat.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(public _cs: ChatService) {
    // document.querySelector('body')!.classList.add('butter-color');
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
    document.querySelector('body')!.classList.remove('butter-color');
    localStorage.setItem('theme', 'dark');
    document
      .getElementById('switch-mode')!
      .setAttribute('src', 'assets/sun-fill.svg');

    // Fondo color ondas
    const darkwaves = document.querySelector('.hero-waves');
    darkwaves?.classList.add('darkwaves');
  }

  temaClaro() {
    document.querySelector('body')!.setAttribute('data-bs-theme', 'light');
    document.querySelector('body')!.classList.add('butter-color');

    localStorage.removeItem('theme');
    document
      .getElementById('switch-mode')!
      .setAttribute('src', 'assets/moon-fill.svg');

          // Fondo color ondas
    const darkwaves = document.querySelector('.hero-waves');
    darkwaves?.classList.remove('darkwaves');
  }

  cambiarTema() {
    document.querySelector('body')!.getAttribute('data-bs-theme') === 'light'
      ? this.temaOscuro()
      : this.temaClaro();
  }
}
