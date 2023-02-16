import { Component } from '@angular/core';

import { ChatService } from 'src/app/providers/chat.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
constructor(public _cs: ChatService){}

// public body=document.querySelector("body")!

 temaOscuro (){
  document.querySelector("body")!.setAttribute("data-bs-theme", "dark");
  document.querySelector("#switch-mode")!.setAttribute("src", "assets/sun-fill.svg");
};

 temaClaro (){
  document.querySelector("body")!.setAttribute("data-bs-theme", "light");
  document.querySelector("#switch-mode")!.setAttribute("src", "assets/moon-fill.svg");
};

 cambiarTema (){
  document.querySelector("body")!.getAttribute("data-bs-theme") === "light"
    ? this.temaOscuro()
    : this.temaClaro();
};

}
