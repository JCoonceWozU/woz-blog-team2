import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  article = {
    title: '',
    author: '',
    description: '',
    body: '',
  };
  submitted = false;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
  }

  saveArticle() {
    const data = {
      title: this.article.title,
      author: this.article.author,
      description: this.article.description,
      body: this.article.body
    };

    this.articleService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newArticle() {
    this.submitted = false;
    this.article = {
      title: '',
      author: '',
      description: '',
      body: '',
    };
  }

}
