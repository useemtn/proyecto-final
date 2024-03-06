import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'gg-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class GithubComponent implements OnInit {
  profile: any[];
  repos: any[];
  username: string;

  constructor(private githubService: GithubService) { }

  findProfile() {
    this.githubService.updateProfile(this.username);
    this.githubService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });

    this.githubService.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })
  }

  ngOnInit() {
  }
}
