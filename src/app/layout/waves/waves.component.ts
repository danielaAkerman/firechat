import { Component } from '@angular/core';

@Component({
  selector: 'app-waves',
  templateUrl: './waves.component.html',
  styleUrls: ['./waves.component.css'],
})
export class WavesComponent {
  constructor() {
    // if (localStorage.getItem('theme') == 'dark') {
    //   const darkwaves = document.querySelector('.hero-waves');
    //   darkwaves?.classList.add('darkwaves');
    //   console.log(darkwaves)
    // }
  }
}
