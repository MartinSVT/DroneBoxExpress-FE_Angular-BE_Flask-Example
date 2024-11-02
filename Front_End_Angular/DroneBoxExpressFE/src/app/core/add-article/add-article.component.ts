import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CoreMainService } from '../core-main.service';
import { Router } from '@angular/router';
import { UserMainService } from 'src/app/user/user-main-service.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent {
  
  constructor(
    private myFormBuilder: FormBuilder, 
    private coreService: CoreMainService, 
    private router: Router, 
    private userServica: UserMainService) {}

  get CurrentUserData():any {
    return this.userServica.userData;
  }

  createArticleForm = this.myFormBuilder.group({
    article_title: ['', [Validators.required, Validators.minLength(2) ]],
    article_content: ['', [Validators.required, Validators.minLength(2) ]],
  });

  CreateNewsArticle(): void {
    if (this.createArticleForm.invalid) {
      return;
    }

    let articleTitle = this.createArticleForm.value.article_title as String;
    let articleContent = this.createArticleForm.value.article_content as String;

    this.coreService.createNewsArticle(this.CurrentUserData.id, articleTitle, articleContent).subscribe(() => {
      this.router.navigate([`/home`]);
    });
  }

}
