import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { News } from 'src/app/shared/interfaces';
import { CoreMainService } from '../core-main.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserMainService } from 'src/app/user/user-main-service.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  currentNewsArticle = {} as News
  
  constructor(
    private myFormBuilder: FormBuilder, 
    private coreService: CoreMainService, 
    private activeRoute: ActivatedRoute, 
    private userServica: UserMainService, 
    private router: Router) {}

  get CurrentUserData():any {
    return this.userServica.userData;
  }

  updateArticleForm = this.myFormBuilder.group({
    article_title: ['', [Validators.required, Validators.minLength(2) ]],
    article_content: ['', [Validators.required, Validators.minLength(2) ]],
  });

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['articleId'];
      this.coreService.getNewsArticle(id).subscribe((news) => {
      this.currentNewsArticle = news;
      this.updateArticleForm.get("article_title")?.setValue(String(this.currentNewsArticle.article_title))
      this.updateArticleForm.get("article_content")?.setValue(String(this.currentNewsArticle.article_content))
      })
    });
  }

  UpdateNewsArticle() {
    if (this.updateArticleForm.invalid) {
      return;
    }
    let articleTitle = this.updateArticleForm.value.article_title as String
    let articleContent = this.updateArticleForm.value.article_content as String

    this.coreService.updateNewsArticle(this.currentNewsArticle.id, this.CurrentUserData.id, articleTitle, articleContent).subscribe(() => {
        this.router.navigate([`/home`]);
      });
  }
}
