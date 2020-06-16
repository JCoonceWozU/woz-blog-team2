import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from "./app-routing.module";
import { AppComponent } from './app.component';
import { ArticlesComponent } from './modules/articles/articles.component';
import { CommentsComponent } from './modules/comments/comments.component';
import { UsersComponent } from './modules/users/users.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import {FormsModule} from "@angular/forms";

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    CommentsComponent,
    UsersComponent,
    AddArticleComponent,
    ArticleDetailsComponent,
    ArticlesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NzButtonModule,
    NzPageHeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
