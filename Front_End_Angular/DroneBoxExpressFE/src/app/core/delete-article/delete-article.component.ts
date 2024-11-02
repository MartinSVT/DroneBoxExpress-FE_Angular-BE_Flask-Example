import { Component } from '@angular/core';
import { News } from 'src/app/shared/interfaces';
import { CoreMainService } from '../core-main.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserMainService } from 'src/app/user/user-main-service.service';

@Component({
  selector: 'app-delete-article',
  templateUrl: './delete-article.component.html',
  styleUrls: ['./delete-article.component.css']
})
export class DeleteArticleComponent {
  currentNewsArticle = {} as News

  constructor(
    private coreService: CoreMainService, 
    private activeRoute: ActivatedRoute, 
    private userServica: UserMainService, 
    private router: Router) {}

  get CurrentUserData():any {
    return this.userServica.userData;
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['articleId'];

      this.coreService.getNewsArticle(id).subscribe((news) => {
        this.currentNewsArticle = news;
    });
    });
  }

  deleteCurrentNewsArticle(id: Number) {
    this.coreService.deleteNewsArticle(id).subscribe(() => {
        this.router.navigate([`/home`]);
    });
  }

}
