import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'porfolio';

  scrollToSection(elemento:string, block :any) {
    document.getElementById(elemento)?.scrollIntoView(
      {
        behavior: "smooth",
        block: block
      }
    );
  }
}
