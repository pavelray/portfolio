import { GitHubService } from './services/git-hub.service';
import { DataService } from './services/data.service';
import { HttpClientModule} from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { GitHubRepoComponent } from './git-hub-repo/git-hub-repo.component';


@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    GitHubRepoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService, GitHubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
