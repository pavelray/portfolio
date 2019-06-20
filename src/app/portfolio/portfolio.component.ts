import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  name = 'Pavel Ray';
  role = 'Passionate';
  email = 'pavelray@gmail.com';
  contact = '8660677881';
  address = 'Bangalore, India';
  aboutMe = 'Hello, I’m Pavel. I have 5+ years of experience, includes core development and support of web applications for Retail'
             +' Industry software and Investment Management software firms across USA and Canada.' 
              +' I have good knowledge in .Net platform and related components (C#, ADO.Net, ASP.Net, Dapper), Frontend framework (Angular, Node.js, TypeScript, JavaScript) and AGILE tools (JIRA, Source Tree, SVN).';
  skills = ['.NET','C#','Angular','JavaScript','HTML','CSS','SQL']

  uiDesign = 'I have experience in designing UI elements using HTML5, CSS, SCSS. Apart from that I also know CSS framework like Bootstrap.'
  webDevelopment = 'I have experince in developing website using .Net technologies and also using frontend framework like Angular and Node.js.'
  appDevelopment = 'I have experience in hybrid mobile app development using Ionic with Angular and Cordova.'
  constructor() { }

  ngOnInit() {
  }

}
