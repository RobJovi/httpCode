import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public banner = {
    title1: 'Developing for empathy',
    title2: 'Engineering for ease.',
    text: 'I\'m a design-minded front-end developer with a passion for building engaging, pixel-perfect experiences.'
  };
  constructor() { }

  ngOnInit() {
  }

}
