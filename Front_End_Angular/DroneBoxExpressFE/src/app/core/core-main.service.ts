import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddNewsURL, ListNewsURL } from '../Environment';
import { News } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CoreMainService {

  constructor(private myHttp: HttpClient) {}

  listNewsArticles() {
    return this.myHttp
      .get<any>(ListNewsURL, {});
  }

  getNewsArticle(id: any) {
    return this.myHttp.get<News>(`${ListNewsURL}/${id}`);
  }

  createNewsArticle(article_user: Number, article_title: String, article_content: String) {
    return this.myHttp.post<News>(
      `${AddNewsURL}`, {
        "article_title": article_title,
        "article_content": article_content,
        "article_user": article_user,
    }
    )
  }

  updateNewsArticle(id: Number, article_user: Number, article_title: String, article_content: String) {
    return this.myHttp.put<News>(
      `${ListNewsURL}/${id}/`, {
        "id": id,
        "article_title": article_title,
        "article_content": article_content,
        "article_user": article_user,
    })}

  deleteNewsArticle(id: Number) {
    return this.myHttp.delete(
      `${ListNewsURL}/${id}/`, {}
    )
  }

}
