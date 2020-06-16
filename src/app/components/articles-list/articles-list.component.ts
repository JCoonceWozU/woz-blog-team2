import { Component, OnInit } from '@angular/core';
import {ArticleService} from 'src/app/services/article.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  articles: any;
  currentArticle = null;
  currentIndex = -1;
  title = '';

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.retrieveArticles();
  }

  retrieveArticles() {
    this.articleService.getAll()
      .subscribe(
        data => {
          this.articles = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveArticles();
    this.currentArticle = null;
    this.currentIndex = -1;
  }

  setActiveArticle(article, index) {
    this.currentArticle = article;
    this.currentIndex = index;
  }

  removeAllArticles() {
    this.articleService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveArticles();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle() {
    this.articleService.findByTitle(this.title)
      .subscribe(
        data => {
          this.articles = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
