import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { MovieDashboardComponent } from './movie-dashboard/movie-dashboard.component';
import { MovieTableComponent } from './movie-table/movie-table.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';


@NgModule({
  declarations: [
    AppComponent,

    NotFoundPageComponent,
     MovieDashboardComponent,
     MovieTableComponent,
     PostsComponent,
     PostDetailsComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
