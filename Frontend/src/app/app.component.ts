import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'TodoApplication';

  isDarkMode: boolean = false;
  filter: string = "all"

  handleDarkMode = () => {
    this.isDarkMode = !this.isDarkMode
  }

  handleFilter = (event: string ) => {
    this.filter = event
    console.log(event)
  }
}
