import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/shared/interfaces';
import { UserMainService } from 'src/app/user/user-main-service.service';
import { CoreMainService } from '../core-main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  news: News[] = [];

  constructor(private userService: UserMainService, private coreService: CoreMainService) {}

  get isLoggedIn():boolean {
    return this.userService.isLogged;
  }
  get CurrentUserData():any {
    return this.userService.userData;
  }

  ngOnInit(): void {
    this.coreService.listNewsArticles().subscribe( news => {
      this.news = news
      console.log(this.news)
    })
  }

}
