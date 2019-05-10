import { GitHubService } from './../services/git-hub.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-git-hub-repo',
  templateUrl: './git-hub-repo.component.html',
  styleUrls: ['./git-hub-repo.component.css']
})
export class GitHubRepoComponent implements OnInit {

  repos: any;
  selectedIndex = 1;
  constructor(private service: GitHubService) {
  }

  ngOnInit() {
    this.service.getAll().subscribe(repos => {
      this.repos = repos;
      this.setSelected(1, 'all');
    });
  }


  setSelected(id: number, c: string) {
    this.selectedIndex = id;
    let  x, i;
    x = document.getElementsByClassName('column');
      if (c === 'all') {
        c = ' ';
      }
      for (i = 0; i < x.length; i++) {
        this.w3AddClass (x[i], 'hide');
        if (x[i].className.indexOf(c) > -1) {
          this.w3RemoveClass(x[i], 'hide');
        }
      }
  }

  w3AddClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(' ');
    arr2 = name.split(' ');
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) === -1) {
        element.className += ' ' + arr2[i];
      }
    }
  }

  w3RemoveClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(' ');
    arr2 = name.split(' ');
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(' ');
  }


}
