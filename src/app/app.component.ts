import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';
  navbarOpen = false;
  
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  getYear(){
    let date = new Date();
    return date.getFullYear();
  }
}
