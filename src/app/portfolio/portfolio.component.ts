import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  name = 'Pavel Ray';
  role = 'Software Engineer';
  email = 'pavelray@gmail.com';
  contact = '8660677881';
  address = 'Bangalore, India';
  aboutMe = 'Hello, I’m Pavel, web-developer based on Bangalore.' 
              +'I have rich experience in web site design & building and customization';
  skills = ['.NET','C#','Angular','JavaScript','HTML','CSS','SQL']

  constructor() { }

  ngOnInit() {
  }

}
