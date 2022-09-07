/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { IPost, PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  Posts?:IPost[];
  constructor(private _PostsService:PostsService) { }

  ngOnInit(): void {
    this._PostsService.GetallPosts().subscribe((posts)=>{
      this.Posts = posts;
    })
  }

}
