import {Component, OnInit} from '@angular/core';
import {ArticleService} from 'src/app/services/article.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  currentArticle = null;
  message = '';

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router) {
  }


  ngOnInit() {
    this.message = '';
    this.getArticle(this.route.snapshot.paramMap.get('id'));
  }

  getArticle(id) {
    this.articleService.get(id)
      .subscribe(
        data => {
          this.currentArticle = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateArticle() {
    this.articleService.update(this.currentArticle.id, this.currentArticle)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The article was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteArticle() {
    this.articleService.delete(this.currentArticle.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/articles']);
        },
        error => {
          console.log(error);
        });
  }
}
