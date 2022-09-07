import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import {AppComponent} from './app.component';
import { PostsComponent } from './posts/posts.component';
import { MovieDashboardComponent } from './movie-dashboard/movie-dashboard.component';
import { PostDetailsComponent } from './post-details/post-details.component';
const routes: Routes = [

  { path: "posts", component: PostsComponent },
  { path: "posts/:id", component: PostDetailsComponent },
  {path:"",component:MovieDashboardComponent},
  // { path: "" ,redirectTo: "",pathMatch: "full"},
  { path: "**", component: NotFoundPageComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
