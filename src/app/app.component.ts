import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [NavbarComponent, JumbotronComponent, HomeComponent, AboutComponent],
  precompile: [HomeComponent, AboutComponent]
})
export class AppComponent {
  


}
