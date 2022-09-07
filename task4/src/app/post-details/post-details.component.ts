/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost, PostsService } from '../posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  constructor(private _postsService:PostsService ,private _ActivatedRoute:ActivatedRoute) { }
  post?:IPost;

  ngOnInit(): void {
    let PostId = Number(this._ActivatedRoute.snapshot.paramMap.get('id'))
    this._postsService.GetOnePost(PostId).subscribe((post)=>{
      this.post=post;
    });
  }

}
