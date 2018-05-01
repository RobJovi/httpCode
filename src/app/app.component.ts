import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public name = 'Robert Sanchez';
  public nav = {
    link1: 'Home',
    link2: 'About',
    link3: 'Tech Blogs'
  };
}
