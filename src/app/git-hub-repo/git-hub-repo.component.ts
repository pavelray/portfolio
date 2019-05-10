import { GitHubService } from './../services/git-hub.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-git-hub-repo',
  templateUrl: './git-hub-repo.component.html',
  styleUrls: ['./git-hub-repo.component.css']
})
export class GitHubRepoComponent implements OnInit {
  repos: any;
  constructor(private service: GitHubService) { }

  ngOnInit() {
    this.service.getAll().subscribe(repos => this.repos = repos);
    console.log(this.repos);
  }

}
